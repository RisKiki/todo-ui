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
    },
    addTodo(state,payload) {
      const todo = payload.todo;
      const todoList = payload.todoList;

      state.currentTodo = todo
      state.currentTodoList = todoList

    }
  },
  actions: {
    async getTodoLists(state) {
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
    },
    async addTodo(state, payload) {
      const headers = { "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlleWUiLCJwYXNzd29yZCI6IiQ1JHJvdW5kcz01MzUwMDAkZkN3OUowQUdkVXlhZzlwcyRWTzRhbnh4SVhQbXZFVlovYUZiSkpPa0lQaXNETk5BckRwcnlXT3ZDRkI3In0.v0XnMZkle3OV94KthhVA81kO43oMLAe6Bs_HCrZx_8E"}
      
      const url = 'http://localhost:5000/lists/todos/'+payload.todoList.id
      const body = {
        name : payload.todo.name,
        description : payload.todo.description
      } 
      const res = await axios.put(url, body , { headers })
      console.log(res.data.data)
      if (res.data.status === 200) {
        state.commit("addTodo", {todo : res.data.data.todo, todoList : res.data.data.updated_todo_list})
      } else {
        console.log("error", res.data)
      }

    },
    async createTodoList(state, {name}) {
      const headers = { "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlleWUiLCJwYXNzd29yZCI6IiQ1JHJvdW5kcz01MzUwMDAkZkN3OUowQUdkVXlhZzlwcyRWTzRhbnh4SVhQbXZFVlovYUZiSkpPa0lQaXNETk5BckRwcnlXT3ZDRkI3In0.v0XnMZkle3OV94KthhVA81kO43oMLAe6Bs_HCrZx_8E"}
      
      const url = 'http://localhost:5000/lists'
      const body = {
        name
      } 
      const res = await axios.put(url, body , { headers })
      if (res.data.status === 200) {
        state.dispatch('getTodoLists')
      } else {
        console.log("error", res.data)
      }
    },
    async delTodoList(state, {todoList}) {
      const headers = { "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlleWUiLCJwYXNzd29yZCI6IiQ1JHJvdW5kcz01MzUwMDAkZkN3OUowQUdkVXlhZzlwcyRWTzRhbnh4SVhQbXZFVlovYUZiSkpPa0lQaXNETk5BckRwcnlXT3ZDRkI3In0.v0XnMZkle3OV94KthhVA81kO43oMLAe6Bs_HCrZx_8E"}
      
      const url = 'http://localhost:5000/lists/'+todoList.id

      const res = await axios.delete(url, { headers })
      if (res.data.status === 200) {
        state.dispatch('getTodoLists')
      } else {
        console.log("error", res.data)
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
