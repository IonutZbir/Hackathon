
<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const props = defineProps({
        text: {
            type: String,
            required: true,
            default: "BOTTONE"
        },
        to : {
            type: String,
            required: false
        }
        });

    const goto = () => {
        if(props.to){
            router.push(props.to);
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    };

</script>

<template>    
    <div @click="goto" class="button-box"><a class="inner-button-text"> {{props.text}} </a></div>
</template>

<style>
    .button-box {
        margin-top: 40px;
    }
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