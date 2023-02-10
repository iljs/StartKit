<template>
    <div id="Button" 
         :style="{background: data.background, 'border-color': data.border}" 
         :class="{light: data.isLight, dark: data.isDark, outline: data.isOutline, medium: data.isMedium, small: data.isSmall,mini: data.isMini, big: data.isBig}"
         @click="$emit('click');" class="default center" >
      {{ text }}
    </div>
</template>

<script>
export default {
  name: 'Button',
  props:{
    type: {type: String, default: "light"},
    text: {type: String, default: "Send"},
    size: {type: String, default: "mini"},
    background:{type: String,default: "None"},
    border:{type: String,default: "None"}
  },
  data(){
    return{
        data:{
            isLight: (this.type == "light") ? true : false,
            isDark: (this.type == "dark") ? true : false,
            isOutline: (this.type == "outline") ? true : false,
            isMedium: (this.size == "medium") ? true : false,
            isSmall: (this.size == "small") ? true : false,
            isMini: (this.size == "mini") ? true : false,
            isBig: (this.size == "big") ? true : false,
            background: this.background == "None" ? "" : this.background,
            border: this.border == "None" ? "" : this.border,
        }
    }
  },
}
</script>

<style scoped>
  #Button.default{
    width: 100%;
    font-family: 'Montserrat';
    border-radius: 10px;
    border: 0;
    cursor: pointer;
  }

  #Button.mini{
    height: 28px;
    font-size: 0.6em;
    border-radius: 5px;
    border-width: 2px;
  }

  #Button.small{
    padding: 12px 0;
    font-size: 0.7em;
  }

  #Button.medium{
    padding: 20px 0;
    font-size: 0.88em;
  }

  #Button.big{
    padding: 25px 0;
    font-size: 1em;
  }


  #Button.light{
    background: #6887CB;
    color: white;
    border: 2px solid #6887CB;
    width: calc(100% - 4px);
  }

  #Button.light:hover{
    background: #5570AC;
  }

  #Button.dark{
    background: #363C48;
    color: white;
    border: 2px solid #484A51;
  }

  #Button.dark:hover{
    background: #282C30;
  }

  #Button.outline{
    background: none;
    border: 2px solid #484A51;
  }

  #Button.outline:hover{
    border-color: #6887CB;
  }
</style>
