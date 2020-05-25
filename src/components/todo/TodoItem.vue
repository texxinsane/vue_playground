<template>
  <div
    class="todo-item"
    :class="{'is-complete':todo.completed}"
  >
    <input
      type="checkbox"
      @change="markComplete"
    >
    <p>{{ todo.title }}</p>
    <button
      class="del"
      @click="$emit('del-todo', todo.id)"
    >
      x
    </button>
  </div>
</template>

<script>
export default {
    name : "TodoItem",
    props : {
        todo: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete {
        text-decoration: line-through;
    }
</style>