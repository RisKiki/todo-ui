<template>
    <div class="header">
    <router-link :to="{name : 'todoLists'}" tag="div">
      <div class="title">Todo</div>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'menu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.header {
  height: 100%;
  text-align: center;
  background-color: #432818;
  color: #FFE6A7;
}

.title {
  font-size: 50px;
}

.title:hover {
  cursor: pointer;
  color: #ffe6a78a;

}
</style>
