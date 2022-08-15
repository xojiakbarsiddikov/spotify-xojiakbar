<template>
  <div className="home">
    <NavBar/>
    <VHeader/>
  </div>
  <div>
    <v-music-card/>
    <VPosts/>
    <vCatalog/>
  </div>
    <vFooter />
</template>

<script>
import NavBar from "@/components/vNavBar";
import VHeader from "@/components/vHeader";
import VMusicCard from "@/components/main_page/vMusic";
import VPosts from "@/components/main_page/vPosts";
import vCatalog from "@/components/main_page/vCatalog";
import vFooter from "@/components/main_page/vFooter";


export default {
  name: 'HomeView',
  components: {
    VPosts,
    VMusicCard,
    VHeader,
    NavBar,
    vCatalog,
    vFooter
  }
}
</script>
<style scoped>
.home {
  display: flex;
}
</style>
