const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',

    };
  },
  watch: {
     counter(value){
       if (value > 20){
         return this.counter = 0
       }
     } 
  },
  computed: {
    fullname() {
      console.log('running..')
        if( this.name === ''){
          return '';
        };
        return `${this.name}  ${this.lastName}`
      }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');