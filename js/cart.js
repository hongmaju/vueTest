/**
 * Created by kk on 2017/4/16.
 */
var vm =new Vue({
    el:"#app",
    data:{
        // title:"hello vue"
        totalMoney:0,
        productList:[]
    },
    filters:{

    },
    mounted:function () {
        //类似于jquery中的ready方法
        this.cartView();
    },
    methods:{
        cartView:function () {
    // this.title="Vue hello"
            var _this=this;
            this.$http.get("data/cart.json",{"id":123}).then(function (res) {
                _this.productList=res.body.result. productList;
                _this.totalMoney=res.body.result.totalMoney;
            });
}
    }

});