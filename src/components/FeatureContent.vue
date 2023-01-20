<script lang="ts">
import Buttons from './Buttons.vue';

    export default {
        name:'FeatureContentVue',
        components: {
            Buttons
        }
    }
</script>

<template>
    <div class="flex justify-center">
        <img src="src\assets\bg.svg" class="pt-[64rem]" alt=""/>
        <div class="absolute">
            <div class="flex items-center justify-center gap-[5rem]">
                <div>
                    <p class="font-inter font-medium text-[38px] text-blueGray tracking-[0.01em] pb-7"><b>User-friendly</b> and <br/> <b>Detailed</b> Dashboard</p>
                    <p class="font-inter font-normal text-base text-blueGray tracking-[0.03em] pb-6">Pleasing Dashboard with complete necessary<br/> information for your school. Get Up to Date with the<br/> status weekly, monthly or yearly.</p>
                    <Buttons :buttonText="'Learn More'" :textColor="'white'" :btnColor="'darkBlue'" :yvalue="3" :xvalue="11"/>
                </div>
                <div>
                    <img src="src\assets\feature1.svg" class="w-[698px] h-[956px]" alt="">
                </div>
            </div>
        </div>
        <div class="absolute">
            <div class="flex items-center justify-center gap-[5rem] pt-[50rem]">
                <div>
                    <img src="src\assets\feature2.svg" class="w-[598px] h-[656px]" alt="">
                </div>
                <div>
                    <p class="font-inter font-medium text-[38px] text-blueGray tracking-[0.01em] pb-7"><b>Mobile</b> Friendly</p>
                    <p class="font-inter font-normal text-base text-blueGray tracking-[0.03em] pb-6">We make sure you can manage everything even on your<br/> phone. Axis provides Mobile responsiveness for easy<br/> accessibility. </p>
                    <Buttons :buttonText="'Learn More'" :textColor="'white'" :btnColor="'darkBlue'" :yvalue="3" :xvalue="11"/>
                </div>
            </div>
        </div>
    </div>
</template>