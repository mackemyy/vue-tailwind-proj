<template>
    <div>
        <button :class="`bg-${props.btnColor} text-${props.textColor} py-${props.yvalue} px-${props.xvalue} rounded-md font-semibold font-inter text-[14px]`" >{{ props.buttonText }}</button>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        buttonText: String,
        textColor: String,
        yvalue: Number,
        xvalue: Number,
        btnColor: String,
    })
    console.log(props.textColor)
</script>

