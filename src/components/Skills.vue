<template>
  <div class="hello">
    {{ name }}
    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>
    {{ btnState ? 'Disabled': 'Enabled' }}
    <div class="holder">
      <ul>
        <li v-for="(data, index) in courses" :key='index'>{{ index }}. {{ data.name }}</li>
      </ul>
      <p v-if="courses.length > 1"> We have more than 1 course</p>
      <p v-else>We have one course</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      name: "Courses",
      btnState: true,
      courses: [
        { name: "VueJs" },
         { name: "PHP" }
        ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
