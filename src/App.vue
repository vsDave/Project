<template>
  <div id="app" class="flex flex-col text-3xl">
    <h1 class="text-3xl font-bold text-center">Calculator</h1>
    <div>
      <div class="flex flex-col items-center mx-10">
        <input
          class="w-1/2 h-16 my-3 text-xl bg-gray-500 border border-black"
          type="text"
          v-model="enteredNumber"
        />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 h-96 lg:mx-96 md:mx-10">
      <button
        @click="key(0)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="0"
      >
        0
      </button>
      <button
        @click="key(1)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="1"
      >
        1
      </button>
      <button
        @click="key(2)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="2"
      >
        2
      </button>
      <button
        @click="key('.')"
        class="text-xl font-semibold bg-yellow-400 border border-none rounded-md "
        value="."
      >
        .
      </button>
      <button
        @click="key(3)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="3"
      >
        3
      </button>
      <button
        @click="key(4)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="4"
      >
        4
      </button>
      <button
        @click="key(5)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="5"
      >
        5
      </button>
      <button
        @click="key('+')"
        class="text-xl font-semibold bg-yellow-400 border rounded-md"
        value="+"
      >
        +
      </button>
      <button
        @click="key(6)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="6"
      >
        6
      </button>
      <button
        @click="key(7)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="7"
      >
        7
      </button>
      <button
        @click="key(8)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="8"
      >
        8
      </button>
      <button
        @click="key(`-`)"
        class="text-xl font-semibold bg-yellow-400 border rounded-md"
        value="-"
      >
        -
      </button>
      <button
        @click="key(9)"
        class="text-xl font-semibold text-white bg-black border border-black rounded-md "
        value="9"
      >
        9
      </button>

      <button
        @click="key(`*`)"
        class="text-xl font-semibold bg-yellow-400 rounded-md"
        value="*"
      >
        *
      </button>
      <button
        @click="key(`/`)"
        class="text-xl font-semibold bg-yellow-400 rounded-md"
        value="/"
      >
        /
      </button>
      <button
        @click="result"
        class="text-xl font-semibold bg-green-900 rounded-md"
        value="="
      >
        =
      </button>
      <button
        @click="Clear"
        class="col-span-2 text-xl font-semibold bg-red-700 rounded-md"
      >
        Clear All
      </button>
      <button
        @click="deleteValue"
        class="col-span-2 text-xl font-semibold bg-red-700 rounded-md"
      >
        delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredNumber: '',
    }
  },
  methods: {
    Clear() {
      this.enteredNumber = ''
    },
    deleteValue() {
      this.enteredNumber = this.enteredNumber.toString().slice(0, -2)
    },
    key(newNumber) {
      this.enteredNumber += newNumber.toString()
    },
    result() {
      return (this.enteredNumber = eval(this.enteredNumber))
    },
  },
}
</script>

<style></style>
