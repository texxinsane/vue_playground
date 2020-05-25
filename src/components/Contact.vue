<template>
  <div class="container mx-auto">
    <div>
      <h1>contact</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      their_name: this.$route.params.name
    };
  }
};
</script>
