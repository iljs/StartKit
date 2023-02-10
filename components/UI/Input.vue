<template>
    <div id="DefaultInput">
    <label v-if="data.label != ''" id="DefaultInput__label">{{ data.label }}</label>
    <input id="DefaultInput__input"
        :type=" data.type"
        :value=" data.value"
        :placeholder=" data.placeholder"
        :class="[this.data.class]"
        @input="changeValue"
    >
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
      value: { type: String, default: null},
      type: {type: String, default: "text"},
      placeholder: {type: String, default: ""},
      label: {type: String, default: ''},
      class: {type: String, default: "default"}
    },
    data(){
      return{
        data: {
          value: this.value,
          type: this.type,
          placeholder: this.placeholder,
          label: this.label,
          class: this.class
        }
      }
    },
    methods:{
      changeValue(value){
        this.data.value = value.target.value;
        this.$emit('change', this.data.value);
      }
    },
}
</script>

<style scoped>
  #DefaultInput{
    width: 100%;
  }

  #DefaultInput__input{
    font-family: 'Montserrat';
  	background-color: #484A51;
  	text-align: left;
  	border-radius: 5px;
  	width: 100%;
  	box-sizing: border-box;
  	outline: none;
    color: white;
  }

  #DefaultInput__input{
    height: 32px;
    font-size: 0.6em;
    padding: 0 10px;
    border: 2px solid #6887CB;
    
  }
</style>
