<template>
    <div>
        
        <div style="width: 230px">
            <Input label="Input" @change="(event) => inputs.input.value = event"/>
        </div>
        <div style="width: 230px; margin-top: 8px;" >
            <Select :options="inputs.select.options" :selected="inputs.select.selected" @change="(event) => inputs.select.selected = event"/>
        </div>
        <div style="width: 230px; margin-top: 8px;">
            <FileUpload label="File Upload" @change="(event) => inputs.file.value = event" />
        </div>
        <div style="margin-top: 8px;">
            <CheckBox label="Check Box" @change="(event) => inputs.checkBox.value = event" />
        </div>
        <div style="width: 230px; margin-top: 8px;">
            <Button />
        </div>
        
    </div>
</template>

<script>
import Button from '../components/UI/Button.vue';
import CheckBox from '../components/UI/CheckBox.vue'
import FileUpload from '../components/UI/FileUpload.vue';
import Input from '../components/UI/Input.vue'
import Select from '../components/UI/Select.vue';
export default {
  components: { Input, Button, CheckBox, Select, FileUpload },
  name: 'UI',
  layout: 'empty',
  data(){
    return {
        inputs:{
            input: {
                value: ""
            },
            select: {
                options: ["First", "Second"],
                selected: "Choose"
            },
            checkBox: {
                value: false
            },
            file: {
                value: false
            }
        }
    }
  }
}
</script>

<style scoped>
body{
    background: rgba(0, 0, 0, 1);
}
</style>
    
