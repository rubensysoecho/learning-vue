const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Witcher',
            author: 'Andrzej Sapkowski',
            edad: 3
        }
    },
    methods: {
        toggleShowBooks()   {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')
