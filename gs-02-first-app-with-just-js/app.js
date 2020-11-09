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
      counter: 0,
      name: ''
    }
  },
  methods: {
    setName (event,lastName){
      this.name = event.target.value
    },
    add(num){
      this.counter += num 
    },
    del(num){
      this.counter -= num
    },
    
  }
}).mount('#events')