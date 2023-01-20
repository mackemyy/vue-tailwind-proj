<script lang="ts">
import Buttons from './Buttons.vue';

    export default {
    name: "Footer2Vue",
    components: { Buttons }
}
</script>

<template>
    <div class="flex justify-center bg-[#F9FAFC]">
        <img src="src\assets\logo_ver2.svg" class="w-[230px] h-[280px] " alt="">
        <div class="grid grid-rows-0 pt-[5rem] pl-[10rem] pr-[10rem]">
            <p class="text-[#7886A3] font-inter font-semibold text-base">QUICK LINKS</p>
            <p class="text-blueGray font-inter font-medium text-base">Solution</p>
            <p class="text-blueGray font-inter font-medium text-base">Product</p>
            <p class="text-blueGray font-inter font-medium text-base">About</p>
        </div>
        <div class="grid grid-rows-0 pt-[5rem] pr-[10rem]">
            <p class="text-[#7886A3] font-inter font-semibold text-base">LEGAL</p>
            <p class="text-blueGray font-inter font-medium text-base">Claim</p>
            <p class="text-blueGray font-inter font-medium text-base">Privacy</p>
            <p class="text-blueGray font-inter font-medium text-base">Terms</p>
        </div>
        <div class="grid grid-rows-0 pt-[5rem] pr-[5rem] pb-11">
            <p class="text-[#7886A3] font-inter font-semibold text-base">SUBSCRIBE TO OUR NEWSLETTER</p>
            <p class="text-blueGray font-inter font-medium text-base pt-10">The latest news, articles, and resources, sent<br/> to your inbox</p>
            <div class="flex items-center gap-8 pt-10">
                <input type="text" class=" bg-white border border-[#B3CBE1] text-normal font-inter rounded-lg  block w-full p-2.5 dark:text-gray-800" placeholder="" required>
                <Buttons :buttonText="'GetStarted'" :textColor="'white'" :btnColor="'darkBlue'" :yvalue="3" :xvalue="11"/>
            </div>
        </div>
        
    </div>
   <hr class="h-px my-1 bg-[#E4EAF5] border-0">
   <div class="bg-[#F9FAFC]">
       <p class="font-inter font-normal text-base text-[#8094A7] pl-[15rem] py-[2rem]">@2021 Axis, Inc. All rights reserved</p>
   </div>
    
</template>