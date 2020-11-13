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
    }
  }
});
app.mount('#user-goals');

