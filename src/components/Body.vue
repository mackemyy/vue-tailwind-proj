<script>
import ButtonsVue from './Buttons.vue';

    export default {
        name: 'BodyVue',
        components: {
            ButtonsVue
        }

    }

</script>

<template>
    <div class="bg-gradient-to-r from-blue-600 to-cyan-300 w-600 h-[27.5rem]">
        <div class=" flex items-center ">
            <div class="p-16 pl-[21rem]">
                <p class="text-white font-inter font-semibold text-5xl leading-6 tracking-wide">The Only <b><i>FREE</i></b><br/>Martial Arts Software<br/>in the World</p>
                <p class="text-white font-inter font-medium text-base leading-6 mt-3 mb-5">Make management easy and friendly with Axis. Track your<br/> school’s performance, student’s progress and a lot more in<br/> just few clicks <b>without paying per month!</b></p>
                <div>
                    <ButtonsVue :buttonText="'Join Now'" :btnColor="'white'" :textColor="'darkerBlue'" :yvalue="3" :xvalue="11"/>
                    <!-- <button class="bg-white text-blue-900 px-11 py-3 rounded-[0.6rem] font-inter font-bold">Join Now!</button> -->
                </div>
            </div>
            <img class="pt-[3.2rem] max-w-[35rem] mx-auto" src="src\assets\karategirl.svg" />
        </div>
        <div>
            
        </div>
    </div>
    
</template>

<style>

</style>