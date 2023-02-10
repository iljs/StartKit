<template>
  <div id="FileUpload">
      <small>{{ label }}</small>
      <div id="FileUpload__Content">
          <input type="file" @change="onFileSelected" class="input" :id="'FileUpload__Input_' + id">
          <label :for="'FileUpload__Input_' + id" id="FileUpload__Input__Button" v-if="file == ''">
              <span id="FileUpload__Input__Button__Icon">
                  <img src="~/static/icons/png/upload.png" alt="Выбрать файл" width="16">
              </span>
              <span id="FileUpload__Input__Button__Text">Выберите файл</span>
          </label>
          <label for="FileUpload__Input" id="FileUpload__Input__Button" v-if="file.name">
              <span id="FileUpload__Input__Button__Text">{{ file.name.substr(0, 20) }}</span>
          </label>
      </div>
      <Modal  type="error" 
              title="File error"
              text="An error occurred while uploading the file"
              :show="modals.error.show" 
              @update="modals.error.show = false"/>
  </div>
</template>

<script>

import { uploadFile } from '../../utils/systemic.api';
import Modal from '../modal/Modal.vue';

export default {
  components: { Modal },
  name: 'FileUpload',
  props:{
        label: {type: String, default: "File Object"},
        token: {type: String},
        id: {type: String}
    },
    data(){
        return {
            file: "",
            modals:{
              error: {
                show: false
              }
            }
        }
    },
    methods:{
        async onFileSelected(event){
          this.file = event.target.files[0]
          let result = await uploadFile(this.file);

          
          console.log(result);
          if(result.status == "Success"){
            
            this.$emit("change", result.data)
          }

          if(result.status == "Error"){
            this.modals.error.show = true;
          }
        }
    }
}
</script>

<style>
    #FileUpload__Content {
        width: 100%;
        position: relative;
    }

    #FileUpload small{
        font-weight: 700 !important;
    }
    
    .input {
        opacity: 0;
        visibility: hidden;
        position: absolute;
    }
    
    #FileUpload__Input__Button__Icon {
        height: 40px;
        width: 40px;
        padding: 0 5px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        border-right: 2px solid rgba(0,0,0,0.2);
    }
    
    #FileUpload__Input__Button__Text {
        line-height: 1;
        margin-top: 1px;
        font-weight: 500;
        font-size: 12px;
        width: 100%;
        font-family: 'Montserrat' !important;
        text-align: center;
    }
    
    #FileUpload__Input__Button {
        width: 100%;
        height: 40px;
        background: #6887CB;
        border: 2px solid #6887CB;
        color: #fff;
        font-size: 1.125rem;
        font-weight: 700;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: start;
            -ms-flex-pack: start;
                justify-content: flex-start;
        border-radius: 7px;
        cursor: pointer;
        margin-top: 3px;
    }

    #FileUpload__Input__Button:hover{
        background: #5570AC;
    }
</style>
