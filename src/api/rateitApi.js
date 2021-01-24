import store from '../store/index'

export default{
    install(Vue, options){
        Vue.prototype.$api = {

            $http: Vue.prototype.$http,

            // Degustation session

            async readyToStart(degustation_id){
                return await this.$http.get(`/degustations/${degustation_id}/redyToStart?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            async sessionStart(){
                return await this.$http.get(`/session/start?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            async sessionIsStarted(){
                return await this.$http.get(`/session/isStarted?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            async sessionCurrentProduct(){
                return await this.$http.get(`/session/currentProduct?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            async sessionRateProduct(feature_id, rate){
                return await this.$http.get(`/session/currentProduct/${feature_id}/rate/${rate}?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            async sessionProgressProduct(){
                return await this.$http.get(`/session/progressProduct?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            async sessionNextProduct(){
                return await this.$http.get(`/session/nextProduct?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            // User

            async socialLogin(provider, authResponse){
                    
                return await this.$http.post('/login/' + provider + '/callback', authResponse)
                    .then((response) =>{
                        return this.extract(response)}
                    )
                    .catch((error) => { return this.error(error)});
            },
            async getUserDetails(token){
                
                return await this.$http.get('/user?api_token=' + token)
                .then(response => this.extract(response))
                .catch(error => this.error(error));

            },

            // Degustations

            async getDegustations(){
                return await this.$http.get('/degustations?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            async getDegustation(id){
                return await this.$http.get('/degustations/' + id + '/?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
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

            async deleteDegustation(id){
                return await this.$http.delete(`/degustations/${id}?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            /* features */

            async getFeatures(degustationId){
                return await this.$http.get('/degustations/' + degustationId + '/features?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            async getFeatureDetails(degustationId, featureId){
                return await this.$http.get('/degustations/' + degustationId + `/features${featureId}?api_token=` + this.getToken())
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },
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

            async deleteFeature(degustationId, featureId)
            {
                return await this.$http.delete(`/degustations/${degustationId}/features/${featureId}?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            // Products

            async addProduct(degustationId, productName){
                var request = {
                    name: productName,
                    api_token:this.getToken()
                };

                return await this.$http.post('/degustations/' + degustationId +'/products', request)
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            async getProducts(degustationId)
            {
                return await this.$http.get('/degustations/' + degustationId + '/products?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
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

            async deleteProduct(degustationId, productId)
            {
                return await this.$http.delete(`/degustations/${degustationId}/products/${productId}?api_token=${this.getToken()}`)
                    .then(response => this.extract(response))
                    .catch(error => this.error(error));
            },

            // Other

            async useInvitationCode(code)
            {
                return await this.$http.get('/invitations/' + code + '?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },

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
            error(error){
                
                return {data:null, error:error}
            },
            getToken(){
                return store.getters.token
            },
            addTokenToRequest(request){
                request['api_token'] = this.getToken()
            }
           
        }
    }
}