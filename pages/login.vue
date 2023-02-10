<template>
    <div id="Login">
        <div id="Login__Container">
            <div id="Login__Title">
                <h6>Login in system</h6>
            </div>
            <div id="Login__Content">
                <div class="login-input">
                     <Input type="text" size="big" label="Mail" placeholder="mail@gmail.com" @change="(event) => inputs.mail.value = event" />
                </div>
                <div class="login-input">
                     <Input type="password" size="big" label="Password" placeholder="••••••••" @change="(event) => inputs.password.value = event" />
                </div>
                <div class="login-button">
                    <Button text="Login" size="medium" @click="login" />
                </div>
            </div>
        </div>

        <Modal  type="error" 
                :title="modals.error.title"
                :text="modals.error.text"
                :show="modals.error.show" 
                @update="modals.error.show = false"/>

                
    </div>
</template>

<script>
import Modal from '../components/modal/Modal.vue';
import Button from '../components/UI/Button.vue'
import Input from '../components/UI/Input.vue'

import { auth } from '../utils/user.api.js';
import { Config } from '../utils/config';

export default {
  components: { Input, Button, Modal },
  name: 'LoginPage',
  layout: 'empty',
  data(){
    return {
        inputs: {
            mail: {
                value: ""
            },
            password: {
                value: ""
            }
        },
        modals: {
            error: {
                show: false,
                title: "",
                text: ""
            }
        }
    }
  },
  mounted(){
    let tokenCookie = this.$cookies.get("token");
    let tokenStore  = this.user.token;

    if(tokenCookie || (tokenStore != "")) this.$router.push(Config.cpLink);
  },
  methods:{
    async login(){
        let answer = await auth(this.inputs.mail.value, this.inputs.password.value);

        if(answer.status == "Success"){
            this.$store.commit('user/setToken', answer.data);
            this.$cookies.set( 'token', answer.data, {path: '/', maxAge: 60 * 60 * 24 * 7 })

            this.$router.push(Config.cpLink);
        }

        console.log(answer);
        if(answer.status == "Error"){
            if(answer.data = 1){
                this.modals.error.show = true;
                this.modals.error.title="Authorization error";
                this.modals.error.text="Login or password not corrected";
            }else{
                this.modals.error.show = true;
                this.modals.error.title="Error 500";
                this.modals.error.text="Unknown error";
            }
        }
    }
  },
  computed:{
      user () {
        return this.$store.state.user
      }
    },
}
</script>

<style scoped>
#Login{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

#Login__Title{
    margin: 10px 0 20px 0;
}

#Login__Container {
    width: calc(90% - 40px);
    max-width: 360px;
    padding: 20px 30px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
}

.login-input{
    margin-top: 5px;
}

.login-button{
    margin-top: 16px;
}
</style>