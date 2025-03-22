
<script setup>

    import { defineProps } from "vue";
    const props = defineProps({
        text: {
            type: String,
            required: true,
            default: "BOTTONE"
        }
        });
</script>

<template>    
    <div class="button-box"><a class="inner-button-text"> {{props.text}} </a></div>
</template>

<style>

    .inner-button-text {
        cursor: pointer;
        user-select: none;
        padding: 12px 27px;
        font-size: 1.2em;
        background-color: #3F8FDA;
        color: #ffffff;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        font-weight: bold;
        border-radius: 4px;
        -webkit-box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.2); 
        box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.2);
    }

    .inner-button-text:hover {
        background-color: #3479ba;
        color: #EEEEEE;
        -webkit-box-shadow: 0px 10px 11px 0px rgba(0,0,0,0.1); 
        box-shadow: 0px 10px 11px 0px rgba(0,0,0,0.1);
    }
</style>