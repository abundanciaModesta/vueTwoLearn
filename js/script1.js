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
        nameFunction(){
            alert(nameFunction);
        }, //первый способ
        nameFunction2: function(){
            alert(nameFunction2);
        }, //второй
    },
})