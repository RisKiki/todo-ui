<template>
  <div class="card">
    <div class="name">{{ todo.name }}</div>
    <div class="description">{{ todo.description }}</div>
  </div>
</template>


<script>


export default {
  name: 'todo',
  props: {
    todo : Object
  }
}
</script>

<style scoped>
.card {
  align-items: center;
  text-align: center;
  border: 1px solid black;
  background-color: rgba(111,29,27,1);
  font-size: 20px;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
  margin: 5%;
}

.description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}

.name {
  text-align: left;
  margin-left: 5%;
  font-weight: bold;
}

.card:hover {

  cursor: pointer;
}

</style>