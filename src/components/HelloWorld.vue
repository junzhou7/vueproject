<template>
  <div>
    <ul>
      <li v-text="msg">{{msg}}</li>
      <input v-model="newitem"  v-on:keyup.enter="additem">
      <li v-for="item in tiems" :key="item.id" v-bind:class="{finished:item.istrue}" v-on:click="ontuer(item)">{{item.name}}<li/>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"this is my todolist",
      tiems:[],
      newitem:''
    }
  },
  methods:{ 
    additem:function()
    {
      this.tiems.push({name:this.newitem,istrue:false});
      this.newitem='';
    },
    ontuer:function(item)
    {
        item.istrue=!item.istrue;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finished{
  text-decoration: underline;
}
</style>
