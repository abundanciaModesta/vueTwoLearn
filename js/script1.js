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