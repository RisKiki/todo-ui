<template>
    <router-link :to="{name : 'list', params: {id: todoList.id}}" tag="div">
      <div class="card">
        <div class="name">{{ todoList.name }}</div>
      </div>
    </router-link>

</template>


<script>

export default {
  name: 'todoList',
  props: {
    todoList : Object
  }
}
</script>

<style scoped>
.card {
  display: flex;
  height: 100px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-align: center;
  border: 1px solid black;
  background-color: rgba(111,29,27,1);
  font-size: 20px;
}

a {
  color: black;

}
.card:hover {
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  cursor: pointer;
}

</style>