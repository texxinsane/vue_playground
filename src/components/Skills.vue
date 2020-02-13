/*jshint esversion: 6 */

<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <!-- <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button> -->
    <p>My skills</p>
    <!-- {{ btnState ? 'Disabled': 'Enabled' }} -->
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="New skill" v-model="skill" v-validate="'min:3'" name="skill">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
         <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
        <!-- <input type="checkbox" id="checkbox"  v-model="checked"> -->

      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in skills" :key='index'>
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
