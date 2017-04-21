/**
 * Created by kk on 2017/4/20.
 */
new Vue({
    el:".container",
    data:{
        limitNum:3,
        addressList:[],
        currentIndex:0,
        shippingMethod:1
},
mounted:function () {
    this.$nextTick(function(){
       // alter();

        this.getAddressList();
    });
},
    computed:{
        filterAddress:function () {
            return this.addressList.slice(0,this.limitNum);
        //    方法和属性需要加this，不然会找不到
        }
    },
    methods:{
getAddressList:function(){
    var _this=this;
    this.$http.get("data/address.json").then(function(response){
        var res=response.data;
        if(res.status=="0"){
            _this.addressList=res.result;
        }
    });
}
        ,
    loadMore:function () {
        this.limitNum=this.addressList.length;
    },
        setDefault:function (addressId) {
            this.addressList.forEach(function (address,index) {
                if(address.addressId==addressId)
                {
                    address.isDefault=true;
                }
                else{
                    address.isDefault=false;
                }
            })

        }

}
});