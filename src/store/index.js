import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {
        username : "salut",
        password : "",
        token : ""
    },
    currentTodo : {
      "id":"645678",
      "name":"MyTodo",
      "description":"My description",
      "created_on": Date.now()
    },
    todoLists : [],
    currentTodoList : {}
},
  mutations: {
    setToken(state, token) {
      state.user.token = token;
    },
    setUser(state,user) {
      state.user = user;
    },
    setCurrentTodo(state,todo) {
      state.currentTodo = todo;
    },
    setTodoLists(state, todoLists) {
      state.todoLists = todoLists;
    },
    setCurrentTodoList(state, currentTodoList) {
      state.currentTodoList = currentTodoList;
    }
  },
  actions: {
    async setTodoLists(state) {
      const headers = { "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlleWUiLCJwYXNzd29yZCI6IiQ1JHJvdW5kcz01MzUwMDAkZkN3OUowQUdkVXlhZzlwcyRWTzRhbnh4SVhQbXZFVlovYUZiSkpPa0lQaXNETk5BckRwcnlXT3ZDRkI3In0.v0XnMZkle3OV94KthhVA81kO43oMLAe6Bs_HCrZx_8E"}
      const res = await axios.get('http://localhost:5000/lists', { headers })
      state.commit('setTodoLists',res.data.data)
    },
    async getTodoList(state, {id}) {
      const headers = { "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlleWUiLCJwYXNzd29yZCI6IiQ1JHJvdW5kcz01MzUwMDAkZkN3OUowQUdkVXlhZzlwcyRWTzRhbnh4SVhQbXZFVlovYUZiSkpPa0lQaXNETk5BckRwcnlXT3ZDRkI3In0.v0XnMZkle3OV94KthhVA81kO43oMLAe6Bs_HCrZx_8E"}
      const res = await axios.get('http://localhost:5000/lists/'+id, { headers })
      state.commit('setCurrentTodoList',res.data.data.todo_list)
    },
    async updateTodoList(state, todoList) {
      const headers = { "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlleWUiLCJwYXNzd29yZCI6IiQ1JHJvdW5kcz01MzUwMDAkZkN3OUowQUdkVXlhZzlwcyRWTzRhbnh4SVhQbXZFVlovYUZiSkpPa0lQaXNETk5BckRwcnlXT3ZDRkI3In0.v0XnMZkle3OV94KthhVA81kO43oMLAe6Bs_HCrZx_8E"}
      
      const url = 'http://localhost:5000/lists/'+todoList.id
      const res = await axios.patch(url, todoList , { headers })
      if (res.status !== 200) {
        console.log("ERROR updateTodoList")
      }
    }
  },
  modules: {
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.user.token,
    getCurrentTodo: state => state.currentTodo,
    getTodoLists: state => state.todoLists,
    getTodoList: state => state.currentTodoList,
  }
})
