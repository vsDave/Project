<template>
  <div id="app">
    <div class="flex flex-col justify-center">
      <div class="flex flex-col justify-center mx-48">
        <h1 class="m-4 text-3xl font-bold text-center underline">To Do list</h1>
        <input
          class="flex-1 p-3 my-5 text-xl border border-black rounded-lg"
          v-model="enteredValue"
          type="text"
          placeholder="Add items here "
        />
      </div>
      <div class="lg:w-full">
        <ul class="flex flex-col mx-48 text-xl bg-yellow-400">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="flex flex-row items-center justify-between p-3 mx-4 font-semibold border-b-2 border-white "
          >
            <label class="mr-44" :id="index" @click="completedTask(index)">
              {{ index }}. {{ item }}</label
            >

            <button
              @click="deleteEvent(item)"
              class="px-1 text-xl font-semibold text-white bg-black rounded-md"
              type="checkbox"
              name="checkbox"
            >
              delete
            </button>
          </li>
        </ul>
      </div>
      <div class="flex justify-center">
        <button
          @click="addEvent"
          class="p-2 m-4 text-xl font-semibold text-white bg-black rounded-md"
        >
          Add Event
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredValue: '',
      items: [],
    }
  },
  methods: {
    addEvent() {
      if (this.enteredValue === '') {
        alert('Type something firts!')
      } else {
        this.items.push(this.enteredValue)
      }
      this.enteredValue = ''
    },
    deleteEvent(item) {
      var index = this.items.indexOf(item)
      this.items.splice(index, 1)
      //splice (start, deletecount) here 1 is for how many items we want to delete
    },
    completedTask(index) {
      console.log(this.select)
      console.log(index, 'value of list')
      document.getElementById(index).style.textDecorationLine = 'line-through'

      //:id="`complete-${index}`"
    },
  },
}
</script>
