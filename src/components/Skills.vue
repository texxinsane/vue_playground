/*jshint esversion: 6 */

<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <!-- <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button> -->
    <p>My skills</p>
    <!-- {{ btnState ? 'Disabled': 'Enabled' }} -->
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input type="text" class="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="New skill" v-model="skill" v-validate="'min:3'" name="skill">
        <transition name="alert-in" >
         
         <div class="alert bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert" v-if="errors.has('skill')">
          <strong class="font-bold">Error: </strong>
          <span class="block sm:inline">{{ errors.first('skill') }}</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
        </transition>
        <!-- <input type="checkbox" id="checkbox"  v-model="checked"> -->

      </form>

      <ul>
        <transition-group name="list">
          <li v-for="(data, index) in skills" :key='`key-${index}`'>
            {{ index }}. {{ data.skill }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>

        </transition-group>
      </ul>
      <!-- <p v-if="skills.length > 1"> We have more than 1 course</p>
      <p v-else>We have one course</p>
      <div v-bind:class="{ 'alert' : showAlert, 'border-1' : showBorder }"></div>
      <div v-bind:class="alertObject"></div>
      <div v-bind:style="{ backgroundColor: bgColor, with: bgWidth, height: bgHeight }"></div> -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      checked:false,
      name: "Skills",
      btnState: true,
      skill: '',
      skills: [
        { skill: "VueJs" },
         { skill: "PHP" }
        ],
      showAlert: true,
      showBorder: true,
      alertObject: {
        'alert':true,
        'border-1':true
        
      },
      bgColor: 'yellow',
      bgWidth: '100%',
      bgHeight: '30px'

    };
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
          if(result){
              this.skills.push({skill: this.skill});
              this.skill = '';
          }else{
            console.log('not valid');
          }

      });
      
      console.log('Check value is: '+this.checked);
    },
     remove(id) {
        this.skills.splice(id, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/Skills.css" scoped>
  
</style>
