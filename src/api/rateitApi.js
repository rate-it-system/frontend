import axios from 'axios'


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
            extract(response){

                if(response != null && response.data != null)
                {
                    return {data: response.data, err: null};
                }
                else
                    return this.error("Null");
            },
            error(error){
                
                return {data:null, error:error}
            },
            getToken(){
                return this.$store.getters.tokenHeader
            },
            addTokenToRequest(request){
                request['api_token'] = this.getToken()
            }
           
        }
    }
}