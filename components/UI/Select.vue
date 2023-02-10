<template>
    <div id="SelectInput" 
        :class="{ medium: data.isMedium, small: data.isSmall}" 
        @blur="data.open = false">

        <div id="SelectInput__Selected" 
        :class="[ {open: data.open}, data.type]"
        @click="data.open = !data.open" 
        :style="{background: data.background}">
            {{ this.selected }}
        </div>
        <div id="SelectInput__Items" :class="{ selectHide: !data.open }">
            <div  v-for="(option, i) of options"
                    :key="i"
                    @click="changeValue(option)"
                >
                {{ option }}
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Select',
    props: {
        options: {type: Array, required: true},
        selected: {type: String, default: null},
        size: {type: String, default: 'default'},
        type:{type: String, default: 'solid'},
        background:{type: String, default: "None"}
    },
    data() {
        return {
        data:{
            open: false,
            type: [this.type],
            background: this.background == "None" ? "" : this.background,
            isMedium: this.size == 'big' ? true : false,
            isSmall: this.size == 'default' ? true : false,
        },
        };
    },
    methods:{
        changeValue(option){
        this.data.open = false;
        this.$emit('change', option);
        }
    }
};
</script>

<style scoped>
    #SelectInput {
        position: relative;
        width: 100%;
        text-align: left;
        outline: none;
        font-family: 'Montserrat';
    }

    #SelectInput__Selected {
        border-radius: 6px;
        color: #fff;
        padding-left: 1em;
        cursor: pointer;
        user-select: none;
    }

    #SelectInput__Selected.open {
        border-radius: 6px 6px 0px 0px;
    }

    #SelectInput__Selected:after {
        position: absolute;
        content: "";
        right: 1em;
        width: 0;
        height: 0;
    }

    #SelectInput__Items{
        color: #fff;
        border-radius: 0px 0px 6px 6px;
        overflow: hidden;
        position: absolute;
        background-color: #363C48;
        left: 0;
        right: 0;
        z-index: 1;
        max-height: 250px;
        overflow-y: scroll;
    }

    #SelectInput__Items::-webkit-scrollbar { width: 0; }

    #SelectInput__Items div {
        color: #fff;
        padding-left: 1em;
        cursor: pointer;
        user-select: none;
    }

    #SelectInput__Items div:hover {
        background-color: #282C30;
    }




    .solid{
        border: 2px solid #5570AC;
        background-color: #6887CB;
    }

    .outline{
        border: 2px solid #5570AC;
    }

    .noline{
        background-color: #6887CB;
    }


    .medium{
        height: 50px;
        font-size: 0.9em;
        line-height: 50px;
    }

    .small{
        height: 30px;
        font-size: 0.6em;
        line-height: 30px;
    }

    .mediumSelect #SelectInput__Selected:after{
        top: 22px;
        border: 5px solid transparent;
        border-color: #fff transparent transparent transparent;
    }

    .smallSelect #SelectInput__Selected:after{
        top: 15px;
        border: 3px solid transparent;
        border-color: #fff transparent transparent transparent;
    }




    .selectHide {
        display: none;
    }
</style>
