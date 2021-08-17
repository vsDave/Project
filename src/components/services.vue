<template>
  <div>
    <div class="flex flex-col mx-20 my-10 bg-blue-400">
      <h1
        style="font-family: 'Style Script', cursive"
        class="m-5 text-6xl text-center text-white"
      >
        Services
      </h1>

      <div
        v-for="(item, index) in items"
        :key="index"
        :class="`flex flex-row justify-around p-6 mx-10 my-5 text-3xl text-center text-white  cursor-pointer ${
          item.isActive ? ' bg-purple-700 ' : ' bg-pink-500'
        }`"
        @click="add(item)"
      >
        <h1>{{ item.title }}</h1>
        <p>${{ item.amount }}.00</p>
      </div>
      <hr />
      <div
        class="flex flex-row justify-around p-6 mx-10 my-5 mb-10 text-3xl font-bold text-center text-white bg-green-600 "
      >
        <h1>Total</h1>

        <p>${{ total }}.00</p>
      </div>
    </div>
    <!-- <div
        id="1"
        @click="webdevelopment"
        class="flex flex-row justify-around p-6 mx-10 my-5 text-3xl text-center bg-green-600 "
        :class="{ isActive1 }"
      >
        <h1>Web development</h1>
        <p>$300.00</p>
      </div>
      <div
        id="2"
        @click="design"
        :class="{ isActive2 }"
        class="flex flex-row justify-around p-6 mx-10 my-5 text-3xl text-center bg-green-600 "
      >
        <h1>Design</h1>
        <p>$400.00</p>
      </div>
      <div
        id="3"
        @click="integration"
        :class="{ isActive3 }"
        class="flex flex-row justify-around p-6 mx-10 my-5 text-3xl text-center bg-green-600 "
      >
        <h1>Integration</h1>
        <p>$250.00</p>
      </div>
      <div
        id="4"
        @click="training"
        :class="{ isActive4 }"
        class="flex flex-row justify-around p-6 mx-10 my-5 text-3xl text-center bg-green-600 "
      >
        <h1>Training</h1>
        <p>$220.00</p>
      </div>
      <hr /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,

      items: [
        {
          id: 1,
          title: 'Web development',
          amount: 300,
          isActive: false,
        },
        {
          id: 2,
          title: 'Design',
          amount: 400,
          isActive: false,
        },
        {
          id: 3,
          title: 'Integration',
          amount: 250,
          isActive: false,
        },
        {
          id: 4,
          title: 'Training',
          amount: 220,
          isActive: false,
        },
      ],
    }
  },

  methods: {
    add(item) {
      item.isActive = !item.isActive
      console.log(this.total)
      console.log(item.isActive)
      if (item.isActive == true) {
        this.total += item.amount
        console.log(item.isActive, 'inside if')
      } else {
        this.total -= item.amount
        console.log(item.isActive, 'inside else')
      }
    },
  },
  // webdevelopment() {
  //   this.isActive1 = !this.isActive1
  //   console.log(this.isActive1, 'out side the condition')
  //   if (this.isActive1 == true) {
  //     this.total += 300
  //     document.getElementById('1').style.backgroundColor = 'purple'
  //     console.log(this.isActive1, 'inside if')
  //   } else {
  //     this.total -= 300
  //     document.getElementById('1').style.backgroundColor = '#059669'
  //     console.log(this.isActive1, 'inside else')
  //   }
  // },
  // design() {
  //   this.isActive2 = !this.isActive2
  //   console.log(this.isActive2, 'out side the condition')
  //   if (this.isActive2 == true) {
  //     this.total += 400
  //     document.getElementById('2').style.backgroundColor = 'purple'
  //   } else {
  //     this.total -= 400
  //     document.getElementById('2').style.backgroundColor = '#059669'
  //   }
  //   console.log(this.isActive2)
  // },
  // integration() {
  //   this.isActive3 = !this.isActive3
  //   if (this.isActive3 == true) {
  //     this.total += 250
  //     document.getElementById('3').style.backgroundColor = 'purple'
  //   } else {
  //     this.total -= 250
  //     document.getElementById('3').style.backgroundColor = '#059669'
  //   }
  // },
  // training() {
  //   this.isActive4 = !this.isActive4
  //   console.log(this.isActive4, 'out side the condition')
  //   if (this.isActive4 == true) {
  //     this.total += 220
  //     document.getElementById('4').style.backgroundColor = 'purple'
  //   } else {
  //     this.total -= 220
  //     document.getElementById('4').style.backgroundColor = '#059669'
  //   }
  //   console.log(this.isActive4)
  // },
}
</script>
<style scoped></style>
