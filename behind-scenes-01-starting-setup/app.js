const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
      isButtonDisabled: false,
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    changeButtonDisabled() {
      this.isButtonDisabled = true;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log('start..')
  },
  created() {
    console.log('create..')
  },
  beforeUpdate() {
    console.log('beforeUpdate..')
  },
  updated() {
    console.log('after updated..')
  },
});
app.mount('#app');
