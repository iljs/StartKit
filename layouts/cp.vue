<template>
  
</template>

<script>
import { authToken } from '../utils/user.api';
import { Config } from '../utils/config';

export default {
    name: 'CPLayout',

    async mounted(){
        let tokenCookie = this.$cookies.get("token");
        let tokenStore  = this.user.token;

        let token = ((tokenCookie) ? tokenCookie : tokenStore)

        if(token != ""){
            let answer = await authToken(token);

            if(answer.status == "Success"){
                this.$store.commit('user/setToken', answer.data);
                this.$cookies.set( 'token', answer.data, {path: '/', maxAge: 60 * 60 * 24 * 7 })
            }

            if(answer.status == "Error"){
                this.$store.commit('user/setToken', "");
                this.$cookies.remove( 'token', {path: '/'})

                this.$router.push(Config.cpLink);
            }
        }else{
            this.$router.push(Config.loginLink);
        }


    },
    computed:{
      user () {
        return this.$store.state.user
      }
    }
}
</script>

