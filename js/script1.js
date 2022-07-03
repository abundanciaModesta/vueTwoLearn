var app = new Vue ({
    el: '#app',
    data: {
        message: 'hello, vue!',
        title: 'it is me',
        status: true,
        isActive:false,
        isBtn: true,
        width: 100,
    },
})

var app2 = new Vue({
    el: '#app2',
    data: {
        list: ['один', 'два', 'три'],
        users: [
            {id:1,name:'John'},
            {id:2,name:'Pete'},
        ],
    }
})
var app3 = new Vue({
    el: '#app3',
    data: {
        list: ['один', 'два', 'три'],
        users: [
            {id:1,name:'John'},
            {id:2,name:'Pete'},
        ],
    },
    methods:{ //два способа объявить функцию
        func1(){
            alert(1)
        },
        func2: function(){
            alert(2)
        }
    },
})
var app4 = new Vue({
    el: '#app4',
    data: {
        counter: 1,
    },
    created: function(){ /* жизненный цикл(создание) */
        // this.counter = 3
        this.high();
    },
    methods:{
        high(){
            this.counter++
        }
        
    },
})
var app4 = new Vue({
    el: '#app5',
    data: {
        hashtags:[],
        cities:[],
        textSearch: '',
        url: {
            hashtags: 'https://dka-develop.ru/api?type=hashtag',
            cities: 'https://dka-develop.ru/api?type=city'
        },
    },
    created: function(){

    },
    watch: { /* наблюдатель */
        textSearch: function(){
            if (this.textSearch.length > 3) {
                this.textSearch = 'меняем содержимое поля'
            }
        }
    }, 
    methods:{
        getHashtags(){
            axios.get(this.url.hashtags).then((response)=>{
                this.hashtags = response.data
            })
        },
        getCities(){
            axios.get(this.url.cities).then((response)=>{
                this.cities = response.data
            })
        },
    },
})