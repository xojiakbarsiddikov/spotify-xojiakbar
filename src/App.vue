<template>
  <div>
    <nav-bar />
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
 }
</style>
<script>
import NavBar from "@/components/vNavBar";
export default {
  components: {NavBar}
}
</script>