<template>
    <div class="container">
      <router-link :to="{name : 'todoLists'}" tag="div">
        <div class="title">Todo</div>
      </router-link>
      <router-link class="username" :to="{name : 'login'}" tag="div">
        <div class="username" v-if="isLogged">
          {{ user.username }}
        </div>
      </router-link>

    </div>
</template>

<script>
export default {
  name: 'menu',
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    isLogged() {
      return this.$store.getters.isLogged;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.container {
  display: grid;
  grid-template-columns: 10fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "title username";
  height: 100%;
  background-color: #432818;
  color: #FFE6A7;
  text-align: center;
}

.title {
  font-size: 50px;
}

.title:hover {
  cursor: pointer;
  color: #ffe6a78a;
}

.username {
  margin: auto;
  font-size: 20px;
  cursor: pointer;
}

.username:hover {
  cursor: pointer;
  color: #ffe6a78a;
}
</style>
