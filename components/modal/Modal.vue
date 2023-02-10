<template>
    <div id="Modal" v-if="show" @click.stop="hideDialog">
      <div id="Modal__content" class="center"  @click.stop>

        <div id="Modal__empty" v-if="type == 'empty'" :style="{background: data.background}">
          <div id="Modal__close" class="icon ico-close" @click="hideDialog" v-if="!blocked"></div>
          <slot></slot>
        </div>
  
        <div id="Modal__success" v-if="type == 'success'" class="full-width full-height">
          <div id="Modal__success__header" class="center">
            <div id="Modal__success__circle" class="modal__circle center">
              <div id="Modal__success__ico" class="modal__ico icon ico-check"></div>
            </div>
          </div>
          <div id="Modal__success__content" class="modal__content column center">
            <h5>{{ title }}</h5>
            <small>{{ text }}</small>
            <div id="Modal__success__button" class="modal__button">
              <Button size="small" class="light" text="Ok" @click="hideDialog"/>
            </div>
          </div>
        </div>
  
        <div id="Modal__error" v-if="type == 'error'" class="full-width full-height">
          <div id="Modal__error__header" class="center">
            <div id="Modal__error__circle" class="modal__circle center">
              <div id="Modal__error__ico" class="modal__ico icon ico-close"></div>
            </div>
          </div>
          <div id="Modal__error__content" class="modal__content column center">
            <h5>{{ title }}</h5>
            <small>{{ text }}</small>
            <div id="Modal__error__button" class="modal__button">
              <Button size="small" class="light" text="Ok" @click="hideDialog" />
            </div>
          </div>
        </div>
  
        <div id="Modal__dev" v-if="type == 'dev'" class="full-width full-height">
          <div id="Modal__dev__header" class="center">
            <div id="Modal__dev__circle" class="modal__circle center">
              <div id="Modal__dev__ico" class="modal__ico icon ico-warn"></div>
            </div>
          </div>
          <div id="Modal__dev__content" class="modal__content column center">
            <h5>{{ title }}</h5>
            <small>{{ text }}</small>
            <div id="Modal__dev__button" class="modal__button">
              <Button size="small" class="light" text="Ok" @click="hideDialog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Button from "@/components/UI/Button";
  
  export default{
    components: {Button},
    props:{
      show: {type: Boolean, default: false},
      type: {type: String, default: 'empty'},
      title: {type: String, default: 'Error'},
      text: {type: String, default: 'Unknown error'},
      blocked: {type: String, default: ""},
      background:{type: String,default: "None"}
    },
    methods:{
      hideDialog(){
        if(!this.blocked){
          this.$emit('update', false)
        }
      }
    },
    data(){
      return{
        data:{
          background: this.background == "None" ? "" : this.background
        }
      }
    }
  }
  </script>
  
  <style media="screen">
    #Modal{
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      position: fixed;
      display: flex;
      background: rgba(0,0,0,0.5);
      z-index: 2;
    }
  
    #Modal__content{
      margin: auto;
      border-radius: 10px;
      min-height: 50px;
      min-width: 400px;
      position: relative;
    }
  
    #Modal__close{
      position: absolute;
      right: 18px;
      top: 15px;
      cursor: pointer;
    }
  
    #Modal__empty{
      background: #415071;
      padding: 20px;
      min-height: 50px;
      min-width: 400px;
      border-radius: 10px;
    }
  
  


    .modal__circle{
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }

    .modal__ico{
        width: 30px;
        height: 30px;
    }

    .modal__content{
        background: #415071;
        padding: 40px 0 10px 0;
        border-radius: 10px;
        margin-top: -50px;
    }

    .modal__content h5{
      margin: 30px 0 0 0;
    }
  
    .modal__content small{
      margin: 5px 0;
    }
  
    .modal__button{
      width: 70%;
      margin-top: 15px;
    }

  
    #Modal__success__circle{
      background: #41716E;
      
    }
  


    #Modal__error__circle{
      background: #FF4D00;
    }
  
  
  
    #Modal__dev__circle{
      background: #ff9568;
    }
  
  </style>
  