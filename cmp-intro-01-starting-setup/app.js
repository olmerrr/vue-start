const app = Vue.createApp({
  data() {
    return {
      friends: [{
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
  }
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: 'Wayne Mark Rooney',
        phone: '124 22 02 02',
        email: 'wayne_rooney@gmail.com'
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});
app.mount('#app');