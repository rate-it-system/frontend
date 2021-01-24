import store from '../store/index'

export default{
    install(Vue, options){
        Vue.prototype.$api = {

            $http: Vue.prototype.$http,
            
            //ApiRespone = { data: <odpowiedź>, err: <błąd>}

            //Przekazanie tokenu z vue-social-auth do backendu
            //Zwraca { token: api_token_użytkownika }
            async socialLogin(provider, authResponse){
                    
                return await this.$http.post('/login/' + provider + '/callback', authResponse)
                    .then((response) =>{
                        console.log(response);
                        return this.extract(response)}
                    )
                    .catch((error) => { return this.error(error)});
            },
            //Pobranie danych użytkownika na podstawie jego api_token
            async getUserDetails(token){
                
                return await this.$http.get('/user?api_token=' + token)
                .then(response => this.extract(response))
                .catch(error => this.error(error));

            },

            // Degustations
            //Pobiera wszystkie degustacje użytkownika
            async getDegustations(){
                return await this.$http.get('/degustations?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            //Pobiera wybraną degustację, o ile użytkownik ma do niej dostęp
            async getDegustation(id){
                return await this.$http.get('/degustations/' + id + '/?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            //Tworzy nową degustację, cechy i produkty trzeba dodać osobno
            //Zwraca dane utworzonej degustacji
            async createDegustation(name, description){

                var request = {
                    name: name,
                    description,
                    api_token:this.getToken()
                };

                return await this.$http.post('/degustations', request)
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            
            //Aktualizuje istniejącą degustację, o ile użytkownik jest jej właścicielem
            async updateDegustation(id, name, description){

                var request = {
                    name,
                    description,
                    api_token: this.getToken()
                };

                return await this.$http.put(`/degustations/${id}`, request)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            //Usuwa degustację o ile użytkownik jest jej właścicielem
            async deleteDegustation(id){
                return await this.$http.delete(`/degustations/${id}?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            
            //Pobiera cechy przypisane do danej degustacji
            async getFeatures(degustationId){
                return await this.$http.get('/degustations/' + degustationId + '/features?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            //Pobiera dane jednej cechy przypisanej do wybranej degustacji
            async getFeatureDetails(degustationId, featureId){
                return await this.$http.get('/degustations/' + degustationId + `/features${featureId}?api_token=` + this.getToken())
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },
            //Dodaje cechę do degustacji
            async addFeature(degustationId, featureName)
            {
                var request = {
                    name: featureName,
                    api_token:this.getToken()
                };

                return await this.$http.post('/degustations/' + degustationId +'/features', request)
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            //Zmienia nazwę cechy
            async updateFeature(degustationId, featureId, featureName)
            {
                let request = {
                    name: featureName,
                    api_token:this.getToken()
                };

                return await this.$http.put('/degustations/' + degustationId +'/features/' + featureId, request)
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },

            //Usuwa cechę
            async deleteFeature(degustationId, featureId)
            {
                return await this.$http.delete(`/degustations/${degustationId}/features/${featureId}?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            // Products
            //Dodaje produkt do degustacji
            async addProduct(degustationId, productName){
                var request = {
                    name: productName,
                    api_token:this.getToken()
                };

                return await this.$http.post('/degustations/' + degustationId +'/products', request)
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            //Pobiera produkty przypisane do danej degustacji
            async getProducts(degustationId)
            {
                return await this.$http.get('/degustations/' + degustationId + '/products?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },

            
            //Aktualizuje produkt
            async updateProduct(degustationId, productId, productName, productDescription)
            {
                let request = {
                    name: productName,
                    description: productDescription,
                    api_token: this.getToken()
                };

                return await this.$http.put(`/degustations/${degustationId}/products/${productId}`, request)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            //Usuwa produkt
            async deleteProduct(degustationId, productId)
            {
                return await this.$http.delete(`/degustations/${degustationId}/products/${productId}?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            // Other

            //Dodaje degustację do aktualnie zalogowanego użytkownika za pomocą kodu zaproszenia
            async useInvitationCode(code)
            {
                return await this.$http.get('/invitations/' + code + '?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },

            //Metoda pomocnicza do obsługi poprawnej odpowiedz - wypakowuje obiekt data z response.data i zwraca odpowiedź { data: data,err: null}
            extract(response){
                        console.log(response);
                if(response != null && response.data != null)
                {
                    console.log('response data');
                    return {data: response.data, err: null};
                }
                else
                    return this.error("Null");
            },
            //Metoda pomocnicza do obsługi poprawnej odpowiedz - wypakowuje obiekt data z response.data i zwraca odpowiedź { data: null,err: treść błędu }
            error(error){
                
                return {data:null, error:error}
            },
            //Pobiera api_token użytkownika z Vuex store
            getToken(){
                return store.getters.token
            },
            //Dodaje token z Vuex store do przekazanego obiektu - jako pole 'api_token'.
            addTokenToRequest(request){
                request['api_token'] = this.getToken()
            }
           
        }
    }
}