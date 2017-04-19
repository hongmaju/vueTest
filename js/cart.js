/**
 * Created by kk on 2017/4/16.
 */
new Vue({
    el:"#app",
    data:{
        // title:"hello vue"
        totalMoney:0,
        productList:[],
        checkAllFlag:false,
        totalCheckMoney:0
    },
    filters:{
formatMoney:function (value) {
    return "￥"+value.toFixed(2)
}
    },
    mounted:function () {
        //类似于jquery中的ready方法
        this.$nextTick(function () {
            this.cartView();
        })

    },
    methods:{
        cartView:function () {
    // this.title="Vue hello"
            //var _this=this;
            // this.$http.get("data/cart.json",{"id":123}).then(function (res) {
            //     _this.productList=res.body.result. productList;
            //     _this.totalMoney=res.body.result.totalMoney;
            // });
//            ES6语法
            let _this=this;
            this.$http.get("data/cart.json",{"id":123}).then(res=> {
                this.productList=res.body.result. productList;
            this.totalMoney=res.body.result.totalMoney;
            });
},
        changeMoney:function (product,way) {
            if(way>0)
            {
                product.productQuentity++;
            }
            else{
                product.productQuentity--;
                if(product.productQuentity<1){
                    product.productQuentity=1;
                }
            }
            this.calcTotalPrice();
        },
        selectedProduct:function (item) {
            //alert("1");
            if(typeof item.checked=="undefined"){
                //Vue.set(item,"checked",true);//全局注册checked
                this.$set(item,"checked",true);//局部注册checked
            }
            else {
                item.checked=!item.checked;
            }
            this.calcTotalPrice();
        },
        checkAll:function (flag) {
            this.checkAllFlag=flag;
            var _this=this;
            this.productList.forEach(function (item,index) {
                if(typeof item.checked=="undefined"){
                    _this.$set(item,"checked",_this.checkAllFlag);
                }else {
                    item.checked=_this.checkAllFlag;
                }
            });
            this.calcTotalPrice();
        },
        calcTotalPrice:function () {
            var _this=this;
            this.totalCheckMoney=0;
            this.productList.forEach(function (item, index) {
                if(item.checked){
                    _this.totalCheckMoney+=item.productPrice*item.productQuentity;
                }
            })
        }
    }

});
Vue.filter("money",function (value,type) {
    return "￥"+value.toFixed(2)+type;
});