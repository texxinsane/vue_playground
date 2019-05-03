// import Vue from 'vue'
//import App from './App'
//import router from './router'
//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        myMessage: 'this is my other message'
    }
});

var app2 = new Vue({
    el:'#app-2',
    data:{
        message: 'My new message: '+new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el:"#app-3",
    data:{
        seen:true
    }
});

var app3 = new Vue({
    el:"#app-4",
    data:{
        todos: [
            {title:"todo1"},
            {title:"todo2"},
            {title:"todo3"},
            {title:"todo4"}
        ]
    }
});
