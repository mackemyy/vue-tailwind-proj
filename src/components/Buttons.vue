<!-- <script lang="ts">
    export default {
        name: 'ButtonsVue',
    }
</script>
<script setup lang="ts">
    
   const props = defineProps({
    text: String,
    color: String,
    yaxis: Number,
    xaxis: Number,
    colorNum: Number,
    btnColor: String,
    })
    console.log(props.color)
    console.log(props.btnColor) 

</script>

<template>
    <div>
        <button :class="`bg-${props.btnColor}-500 rounded-md font-semibold font-inter text-base py-${props.yaxis} px-${props.xaxis} rounded text-${props.color}-${props.colorNum}`"> {{ props.text }} </button>
        <button :class="`py-${props.yaxis} px-${props.xaxis} rounded text-${props.color}-${props.colorNum}`"> {{ props.text }} </button>
    </div>
    
</template>



<style>

</style> -->

<!-- <script setup lang = "ts">
    const props = defineProps({
        buttonText: String,
        textColor: String,
        yvalue: String,
        xvalue: String,
        btnColor: String,
    })
    console.log(props.textColor)

</script> -->

<template>
    <div>
        <!-- <button :class="`bg-${this.btnColor} py-${this.yvalue} px-${this.xvalue} text-${this.textColor} rounded-md font-semibold font-inter text-base `">{{ this.buttonText }}</button> -->
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

