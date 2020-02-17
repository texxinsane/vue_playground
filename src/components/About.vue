<template>
<div class="container mx-auto">
  <div class="flex mb-4">
    <div class="w-1/2 bg-gray-400 h-12">
            <h1>Hello {{ their_name }}, this is an about page</h1>    
    </div>
    <div class="w-1/2 bg-gray-500 h-12">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button  
        </button>
    </div>
    
  </div>
</div>
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