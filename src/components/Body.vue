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
    <div class="bg-gradient-to-r from-blue-600 to-cyan-300">
        <div class="flex items-center justify-center gap-0">
            <div class="p-12 pl-[21rem]">
                <p class="text-white font-inter font-semibold text-5xl leading-6 tracking-wide">The Only <b><i>FREE</i></b><br/>Martial Arts Software<br/>in the World</p>
                <p class="text-white font-inter font-medium text-base leading-6 mt-3 mb-5">Make management easy and friendly with Axis. Track your<br/> school’s performance, student’s progress and a lot more in<br/> just few clicks <b>without paying per month!</b></p>
                <div>
                    <button class="bg-dirtyWhite text-darkBlue rounded-xl font-bold font-inter text-[16px] py-3 px-11 inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                        <span>Join Now</span>
                        <img src="src\assets\arrow.svg" class="w-4 h-4 ml-3" alt="">
                    </button>
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