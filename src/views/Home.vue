/*jshint esversion: 6 */

<template>
  <div>
    <AddTodo v-on:add-todo="AddTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    <router-view />
  </div>
</template>

<script>
import Todos from '../components/todo/Todos';
import AddTodo from '../components/todo/AddTodo';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  data() {
      return {
        todos: [
          {
            id : 1,
            title : "Todo one",
            completed: false
          },
          {
            id : 2,
            title : "Todo two",
            completed: false
          },
          {
            id : 3,
            title : "Todo three",
            completed: true
          }
        ]
      }
  },
  methods: {
    deleteTodo(id) {
      
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
       .then(res => 
        {  
            if(res.status == 200) {
              this.todos = this.todos.filter(todo => todo.id !== id);
              this.todos = this.todos.filter(todo => todo.id);
            }    
        })
       .catch(err => console.log(err));

      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    AddTodo(newTodo) {
      const {title, completed } = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
      .then(res => this.todos = [...this.todos, res.data])
      .catch(err => console.log(err));
      this.todos = [...this.todos, newTodo];
    }
  },
  created() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
