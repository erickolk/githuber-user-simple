
const app = Vue.createApp({
    data(){
        return{
            name: 'One Bit Code',
            login: 'obc',
            bio: 'Essa é uma obra prima',
            company: 'OBC company',
            avatar_url: 'https://source.unsplash.com/random/256x256',
            searchInput: ''
        }
    },
    methods: {
        async fetchGithubUser(){
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const { login, name, bio, company, avatar_url } = await res.json()

            this.login = login;
            this.name = name;
            this.bio = bio;
            this.company = company;
            this.avatar_url = avatar_url;
        }
    }
});

app.mount('#app')