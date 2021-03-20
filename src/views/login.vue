<template>

<div>

  <div class="container" v-if="!isLogged">
    <div class="login">
      <div class="title">Se connecter</div>
      <form class="flex" @submit.prevent="login()">
        <div>
          <p class="item-label">Nom de compte</p>
          <input class="item-input" type="text" v-model="user.username">
        </div>

        <div>
          <p class="item-label">Mot de passe</p>
          <input class="item-input" type="password" v-model="user.password">
        </div>

        <div class="error" v-if="errorLogin.code !== 200">
          <p>{{ errorLogin.message }}</p>
        </div>

        <div>
          <button class="item-button" type="submit">Se connecter</button>
        </div>
      </form>
    </div>

    <div class="register">
      <div class="title">Crée un compte</div>
      <form class="flex" @submit.prevent="account()">
        <div>
          <p class="item-label">Nom de compte</p>
          <input class="item-input" type="text" v-model="userCreation.username">
        </div>

        <div>
          <p class="item-label">Mot de passe</p>
          <input class="item-input" type="password" v-model="userCreation.password">
        </div>

        <div class="error" v-if="errorRegister.code !== 200">
          <p>{{ errorRegister.message }}</p>
        </div>

        <div>
          <button class="item-button" type="submit">S'enregistrer</button>
        </div>
      </form>
    </div>

  </div>


  <div class="disconnect" v-if="isLogged">
    <button class="btn-disconnect" @click="disconnect()">Se déconnecter</button>
  </div>

</div>

</template>


<script>

export default {
  name: 'login',
  data: () => ({
    user : {
      username: '',
      password :''
    },
    userCreation : {
      username: '',
      password :''
    },
    errorLogin : {
      code : 200,
      message : ""
    },
    errorRegister : {
      code : 200,
      message : ""
    }
  }),
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        user : {
          username : this.user.username,
          password : this.user.password
        }
      }).then((result) => {
        if (result)
          this.errorLogin = {
            code : result.status,
            message : result.message
          }
        else 
          this.$router.push({name:"todoLists"})
      })
    },
    account() {

    },
    disconnect() {
      this.$store.commit('setUser', {})
      this.$store.commit('setToken', "")
    }
  }
}
</script>

<style scoped>

.container {
  margin-top: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "login register";
}

.login {
  grid-area: login;
}

.register {
  grid-area: register;
}

.flex {
  display: flex;
  margin-right: 35%;
  margin-left: 35%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.disconnect {
  margin-top: 10%;
  text-align: center;
}

.btn-disconnect{
    border: solid black 1px;
    font-size: 20px;
    padding: 1%;
    cursor: pointer;
    border-radius: 10px;
    background-color: #bb9557a9;
}

.btn-disconnect:hover {
    background-color: #BB9457;
    box-shadow: 0px 0px 1px 1px black;
}

.item-label {
  margin: 1%;
  font-size: 20px;
}
.item-input {
  margin-top: 3%;
  margin-bottom: 6%;
}
.item-button {
  margin: 3%;
  border-radius: 6px;
  background-color: #BB9457;
  font-size: 20px;
  border: none;

  border: 2px solid black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}

.item-button:hover {
  background-color:#FFE6A7;
}

.error {
  color: rgb(143, 0, 0);
}

.title {
  margin-bottom: 2%;
  margin-top: 4%;
  font-size: 40px;
  text-align: center;
}
</style>