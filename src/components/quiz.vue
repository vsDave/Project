<template>
  <div class="m-5">
    <div class="text-5xl font-bold text-center text-white bg-purple-500">
      <h1 class="py-3">Quiz Test</h1>
    </div>
    <div v-if="!submitted" class="m-5 text-xl">
      <p
        v-for="(question, qindex) in questions"
        class="font-bold"
        :key="qindex"
      >
        {{ qindex + 1 }} . {{ question.question }}

        <label
          :for="option"
          v-for="(option, index) in question.options"
          :key="index"
          class="block m-4 font-medium cursor-pointer"
        >
          <input
            :id="option"
            type="radio"
            v-model="question.selectedAnswer"
            :value="option"
            :name="question.name"
          />
          {{ option }}
        </label>
      </p>
      <button
        @click="submit"
        class="p-3 m-5 text-xl text-white bg-black rounded-md"
        type="submit"
      >
        Submit
      </button>
    </div>
    <div v-else>
      <h1 class="text-4xl font-semibold text-white bg-purple-600 p-7">
        Obtained Marks: {{ result }}
      </h1>
      <h1 class="text-4xl font-semibold text-white bg-purple-600 p-7">
        Score : {{ (result * 100) / 10 }} %
      </h1>
      <h1
        class="text-4xl font-semibold text-red-500 bg-black p-7"
        v-if="result <= 4"
      >
        Sorry! You have <b>Failed</b> this quiz
      </h1>
      <h1
        class="text-4xl font-semibold text-red-500 bg-black p-7"
        v-else-if="result >= 5 || result <= 7"
      >
        Performance: <b> Average </b>
      </h1>
      <h1
        v-else-if="result >= 8"
        class="text-4xl font-semibold text-red-500 bg-black p-7"
      >
        Out Standing Performance!!
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: 0,
      submitted: false,
      questions: [
        {
          selectedAnswer: '',

          name: 'firstarray',
          question: 'who is the prime minister?',
          options: ['Narendra Modi', 'Gandhi ji', 'Amit Shah', 'no one'],
          answer: 'Narendra Modi',
        },
        {
          selectedAnswer: '',

          name: 'secondarray',
          question: 'Who is Olympic 2021 Goldman medalist winner ? ',
          options: ['Ravi jadeja', 'Neeraj Chopra', 'No one', 'all'],
          answer: 'Neeraj Chopra',
        },
        {
          selectedAnswer: '',

          name: 'thirdarray',
          question: 'Who is founder of Infosys? ',
          options: [
            'Raghu ram rajan',
            'viral Chopra',
            'N.r. Narayan Murty',
            'none of this',
          ],
          answer: 'N.r. Narayan Murty',
        },
        {
          selectedAnswer: '',
          name: 'fortharray',
          question: 'Who invented the Light Bulb?',
          options: [
            'Thomas Alva Edison',
            'alexander the forth',
            'mery kelar',
            'Charles ',
          ],
          answer: 'Thomas Alva Edison',
        },
        {
          selectedAnswer: '',
          name: 'fiftharray',
          question: 'Who invented the computer?',
          options: [
            'Thomas Alva Edison the great',
            'alexander',
            'hellan kelar ',
            'Charles Babbage ',
          ],
          answer: 'Charles Babbage ',
        },
        {
          selectedAnswer: '',
          name: 'sixtharray',
          question: 'Which state produces maximum soybean?',
          options: ['Madhya Pradesh', 'Uttar Pradesh', ' Bihar', ' Rajasthan'],
          answer: 'Madhya Pradesh',
        },
        {
          selectedAnswer: '',
          name: 'seventharray',
          question:
            ' Which country operationalized world’s largest radio telescope?',
          options: [' USA', 'China', ' Russia', 'India'],
          answer: 'China',
        },
        {
          selectedAnswer: '',
          name: 'eigtharray',
          question:
            'Which of the following is the capital of Arunachal Pradesh?',
          options: ['Itanagar', ' Dispur', 'Imphal', 'Panaji'],
          answer: 'Itanagar',
        },
        {
          selectedAnswer: '',
          name: 'ninetharray',
          question: 'In which state is the main language Khasi?',
          options: ['Mizoram', 'Nagaland', 'Meghalaya', ' Tripura'],
          answer: 'Meghalaya',
        },
        {
          selectedAnswer: '',
          name: 'tentharray',
          question:
            ' “TB Harega Desh Jeetega” campaign aims to end Tuberculosis by the year',
          options: ['2040', '2035', ' 2030', '2025'],
          answer: '2025',
        },
      ],
    }
  },
  methods: {
    submit() {
      for (let i = 0; i < this.questions.length; i++) {
        if (this.questions[i].selectedAnswer === this.questions[i].answer) {
          this.result++
          if (this.result < 5) {
            console.log('marks are < 5')
          }
        }
      }
      this.submitted = true
      console.log('in submit function')
    },
  },
}
</script>
