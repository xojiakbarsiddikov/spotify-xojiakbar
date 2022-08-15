<template>
 <div class="text-wrapper">
   <div class="text text_2">
     <h1 class="h1">{{similar}}</h1>
   </div>
   <div class="posts">
     <router-link :to="'/v-page/' + post.id" v-for="post in posts" :key="post.id" class="container-posts">
       <div>
         <div class="content">
           <div class="img">
             <img :src="require(`/src/assets/img/${post.img}`)">
           </div>
           <div class="text">
             <h1>{{post.title}}</h1>
             <p>{{post.description}}</p>
           </div>
         </div>
       </div>
     </router-link>
   </div>
 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "vPosts",
  data() {
    return {
      similar: "Похожие на MiyaGi&Эндшпиль",
      posts: []
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/posts-card')
        .then(response => (this.posts = response.data))
  }
}
</script>

<style scoped>
 .text-wrapper{
   width: 100%;
   background: #101010;
 }
 .text h1 {
   color: #ffff;
 }
 .text {
   padding: 25px 0;
 }
 .content {
   width: 245px;
   background: #181818;
   padding: 27px;
 }
 .content:hover{
   transition: .3s ease-in-out;
   background: #5d5a5a;
   border-radius: 5px;
 }
 .posts {
   display: flex;
   max-width: 67%;
   margin: 0 auto;
 }
 .text_2 {
   max-width: 58%;
 }
 .img img {
   width: 190px;
   height: 199px;
   border-radius: 5px;
 }
 .h1 {
   text-align: center;
   font-size: 30px!important;
   margin: 32px 0;
 }
 .text {
   color: #ffffff;
 }
 .container-posts {
   display: flex;
   justify-content: center;
   max-width: 49%;
   margin: 0 18px;
   text-decoration: none;
 }
 h1 {
   font-size: 18px;
   padding: 22px 0;
 }
 p {
   font-size: 15px;
   opacity: .5;
 }
 p:hover {
   text-decoration: underline;
   transition: .2s ease-in-out;
   cursor: pointer;
 }
</style>