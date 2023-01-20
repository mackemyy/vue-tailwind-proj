<template>
  <div>
    <HeaderVue/>
    <BodyVue/>
    <SchoolContent/>
    <FeatureContent/>
    <FeatureTextContent/>
  </div>
  
</template>

<script>
import BodyVue from './components/Body.vue';
import FeatureContent from './components/FeatureContent.vue';
import FeatureTextContent from './components/FeatureTextContent.vue';
import HeaderVue from "./components/Header.vue";
import SchoolContent from './components/SchoolContent.vue';



export default {
  name: 'App',
  components: {
    HeaderVue,
    BodyVue,
    SchoolContent,
    FeatureContent,
    FeatureTextContent,
  }
}


</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
