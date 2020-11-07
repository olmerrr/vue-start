const app = Vue.createApp({
  data(){
    return {
      courseGoal: 'Finish the course and lern Vue!',
      vueLink: 'https:google.com',
      errorMsg: 'Warning!'
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
      myName: 'Yaroslav',
      myAge: 29,
      myLink: 'http://facebook.com'
    }
  },
  methods: {
    outputUser(){
      const randomNumber = Math.floor(Math.random() * 10);
      if(randomNumber > 5) return 'Vue?'
      else return 'Great!'
    }
  }
}).mount('.user')