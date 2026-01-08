<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
const app = Vue.createApp({
    data() {
      return {
        userName: '',
        userComment: '',
        isYes: false,
        responses: [] // This replaces the shopping list
      }
    },
    methods: {
      addEntry(){
        let entry = {
          name: this.userName,
          comment: this.userComment,
          recommended: this.isYes
        }
        this.responses.push(entry)
        
        // Reset the form
        this.userName = ''
        this.userComment = ''
        this.isYes = false
      }
    }
  })
  app.mount('#app')
