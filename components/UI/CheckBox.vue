<template>
    <div id="CheckBoxInput" class="left" @click="changeValue">
        <input
            id="CheckBoxInput__input"
            class="hide absolute"
            type="checkbox"
            :checked="(data.value) ? 'checked' : ''"
            @input="changeValue"
        >
        <label id="CheckBoxInput__label" class="center">{{ data.label }}</label>
    </div>
</template>

<script>
export default {
    name: 'CheckBox',
    props: {
        value: { type: Boolean, default: false},
        label: {type: String, default: ""}
    },
    data(){
        return{
        data: {
            value: this.value,
            label: this.label
        }
        }
    },
    methods:{
        changeValue(){
            this.data.value = !this.data.value;
            this.$emit('change', this.data.value);
        }
    }
}
</script>

<style scoped>
  #CheckBoxInput{
    width: 100%;
  }

  #CheckBoxInput__label::before{
    content: '';
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #556995;
    background: rgba(0,0,0,0.6);
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  #CheckBoxInput__input:checked + #CheckBoxInput__label::before{
    background-image: url("@/static/icons/svg/ico-check.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size:70%;
  }
</style>
