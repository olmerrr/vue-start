const app = Vue.createApp({
  data(){
    return {
      courseGoal: 'Finish the course and lern Vue!',
      vueLink: 'https:google.com',
      errorMsg: '<h3>Warning!</h3>'
    };
  },
  methods: {
    outputGoal(){
      const randomNumber = Math.floor(Math.random() * 10);
      return this.errorMsg;
    }
  } 
});
app.mount('#user-goal');

Vue.createApp({
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    add(){
      this.counter++
    },
    del(){
        this.counter--
    },
    
  }
}).mount('#events')