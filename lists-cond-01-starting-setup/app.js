const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
      user: {
        name: 'Yaroslav',
        age: 29
      }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1)
    }
  }
});
app.mount('#user-goals');

