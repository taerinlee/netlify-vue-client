<template>
 <div>
   <h1>Posts</h1>
    <div >
     <div ></div>
     <div >
      <router-link :to="{ name: 'create' }" >Create Post</router-link>
     </div>
    </div><br />

    <table >
      <thead>
      <tr>
       <th>Title</th>
       <th>Body</th>
       <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
         <td>{{ post.title }}</td>
         <td>{{ post.body }}</td>
         <td><router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link></td>
         <td><button @click.prevent="deletePost(post._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
import axios from 'axios'

 export default {
   data() {
    return {
     posts: []
    }
   },
   created() {
   this.$store.dispatch('posts').then(response => {
     console.log('response', response);
     this.posts = response;
   });
  },
  methods: {
   deletePost(id)
   {
    let uri = `//localhost:4000/posts/delete/${id}`;
    axios.delete(uri).then(response => {
      console.log(response);
      this.posts.splice(this.posts.indexOf(id), 1);
    });
   }
  }
 }
</script>