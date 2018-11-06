<template>
  <div>
    <ul>
      <li v-text="msg">{{msg}}</li>
      <li v-for="item in tiems" :key="item.id">{{item.name}}<li/>
    </ul>
  </div>
</template>

<script>
export default {
  data:{
    msg:"this is my todolist",
    tiems:[{id:1,name:"coding"},{id:2,name:"paobu"},{id:3,name:"paobu"}]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
