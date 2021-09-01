 var gold = 0;
    var vm = new Vue({
        el: '#app',
        data:{
            message : gold
        },
        methods:{
            add:function(){
                gold +=1;
                vm.message = gold;
            }
        }
    })