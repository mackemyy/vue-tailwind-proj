<template>
     <div>
        <nav class="bg-white px-2 sm:px-4 py-2.5 rounded">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a class="flex items-center">
                <img src="src\assets\logo.svg" class="h-18 mr-3 sm:h-15 pl-20" alt="Axis Logo" />
                </a>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default" >
                <ul class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 justify-center">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-blueGray font-medium font-inter">Solution</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-blueGray font-medium font-inter">Product</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-blueGray font-medium font-inter">About</a>
                    </li>
                </ul>
                </div>
                <div class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 justify-center"> 
                    <div class="ml-20 mt-3">
                        <a href="#" class=" tetx-blue-500
                        md:hover:bg-transparent md:border-0
                        md:hover:text-blue-700 md:p-0 dark:text-blue-900 font-semibold font-inter text-base">Sign In</a>
                    </div>
                    <ButtonsVue :buttonText="'Join Now'" :btnColor="'darkBlue'" :textColor="'darkBlue'" :yvalue="3" :xvalue="5"/>
                </div>
                 
            </div>
        </nav>
    </div>
    
</template>

<script>
import ButtonsVue from './Buttons.vue'

    export default {
    name: 'HeaderVue',
    components: {
        ButtonsVue
    }
    }

</script>

<style>

</style>