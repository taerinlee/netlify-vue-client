<template>
 <div>
  <h1>Edit Post</h1>
  <form @submit.prevent="updatePost">
   <div >
    <div >
     <div >
      <label>Post Title:</label>
      <input type=text v-model="post.title">
     </div>
    </div>
    </div>
    <div >
     <div >
      <div >
       <label>Post Body:</label>
       <textarea v-model="post.body" rows="5"></textarea>
      </div>
     </div>
    </div><br />
    <div >
     <button >Update</button>
    </div>
  </form>
 </div>
</template>

<script>
  export default {

   data() {
    return {
     post: {}
    }
   },
   created() {
    this.$store.dispatch('getPost', this.$route.params.id).then(response => {
      this.post = response;
    });
   },
   methods: {
    updatePost() {
     this.$store.dispatch('updatePost', { id: this.$route.params.id, params: this.post}).then(() => {
      this.$router.push({name: 'posts'});
     });
    }
   }
  }
</script>