import store from '../store/index'


export default{
    install(Vue, options){
        Vue.prototype.$api = {

            $http: Vue.prototype.$http,
            
            
            async socialLogin(provider,authResponse){
                    
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
            async getDegustations(){
                return await this.$http.get('/degustations?api_token=' + this.getToken())
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
            async getDegustation(id){
                return await this.$http.get('/degustation/' + id + '/?api_token=' + this.getToken())
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

            /* features */

            async getFeatures(degustationId){
                return await this.$http.get('/degustations/' + degustationId + '/features?api_token=' + this.getToken())
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
                var request = {
                    name: featureName,
                    api_token:this.getToken()
                };

                return await this.$http.post('/degustations/' + degustationId +'/features/' + featureId, request)
                .then(response => this.extract(response))
                .catch(error => this.error(error));
            },
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