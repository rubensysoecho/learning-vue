const app = Vue.createApp({
    data() {
        return {
            title: 'The Witcher',
            author: 'Andrzej Sapkowski',
            edad: 3
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount('#app')
