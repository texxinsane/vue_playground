<template>
    <h1>Hello {{ their_name }}, this is an about page</h1>    
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>