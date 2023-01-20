<script lang="ts">
    export default {
        name:'Footer1Vue'
    }
</script>

<template>
    <div class="bg-gradient-to-r from-blue-600 to-cyan-300">
        <div class="flex items-center justify-center gap-[20rem] py-12">
            <p class="font-inter text-white font-semibold text-[32px]">Ready to get started?<br/>Get in touch and Join Us!</p>
            <div>
                <button class="bg-dirtyWhite text-darkBlue rounded-[16px] font-bold font-inter text-[24px] py-4 px-14 inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                    <span>Join Now</span>
                    <img src="src\assets\arrow.svg" class="w-6 h-6 ml-3" alt="">
                </button>
            </div>
        </div>
    </div>

</template>