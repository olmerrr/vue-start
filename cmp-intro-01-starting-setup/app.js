const app  = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends : [
      {
        id: 1,
        name: 'Wayne Mark Rooney',
        phone: '124 22 02 02',
        email: 'wayne_rooney@gmail.com'
      },
      {
        id: 2,
        name: 'Paul Aaron Scholes',
        phone: '134 12 92 02',
        email: 'striker001@gmail.com'
      },
    ]
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});
app.mount('#app');