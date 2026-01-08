const app = Vue.createApp({
    data() {
      return {
        userName: '',
        userComment: '',
        isYes: false,
        responses:       }
    },
    methods: {
      addEntry(){
        let entry = {
          name: this.userName,
          comment: this.userComment,
          recommended: this.isYes
        }
        this.responses.push(entry)
        
        this.userName = ''
        this.userComment = ''
        this.isYes = false
      }
    }
  })
  app.mount('#app')
