<template>
    <div class="shop-info-main">
        <div class="shop-info-head">
            <img :src="shopInfo.shopLogo">
            <span>{{shopInfo.name}}</span>
        </div>
        <div class="shop-middle">
            <div class="shop-middle-item shop-middle-left">
                <div class="info-sells">
                    <div class="sells-count">{{shopInfo.cSells | numFilter }}</div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="info-goods">
                     <div class="goods-count">{{shopInfo.cGoods | numFilter}}</div>
                     <div class="goods-text">全部宝贝</div>
                </div>
            </div>
            <div class="shop-middle-item shop-middle-right">
                <table>
                    <tr v-for="(item,index) in shopInfo.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
                    </tr>
                </table>
            </div>
         </div>
         <div class="enter-shop">进店逛逛</div>
    </div>
</template>

<script>
    export default {
        name:"ShopBox",
        props:{
            shopInfo:Object
        },
        filters: {
            numFilter: function(value) {
                let num=~~value;
                if(num>10000){
                    num=(value/10000).toFixed(1)+'万'
                }
                return num;
            }
        },
        mounted () {
            console.log(this.shopInfo)
            
        }
    }
</script>

<style scoped>
.info-sells,.info-goods{
    text-align: center;
}
.goods-text,.sells-text{
    margin-top: 10px;
}
.shop-middle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}
.shop-middle-left::after{
    content: '';
    display: block;
    position:absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #eeeeee;
}
.shop-middle-left{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 20px;
    position: relative;
}
.shop-middle-right .score{
    color: #5ea732;
}
.shop-middle-right .better span{
    background-color: #5ea732;
    color: #fff;
    text-align: center;
    font-size: 12px;
    width: 18px;
    line-height: 18px;
    display: block;
    height: 18px;
    border-radius: 2px;
}
.shop-middle-right .better-more span{
    background-color: #f13e3a;
}
.shop-middle-right .score-better{
    color: #f13e3a;
}
.shop-middle-right{
    padding-left: 20px;
}
.shop-middle-right table{
    width: 136px;
}
.shop-middle-right table td{
    height: 24px;
    line-height: 24px;
}
.shop-middle-item{
    flex: 1;
}

.sells-count,.goods-count{
    font-size: 20px;
}

    .shop-info-main{
        padding: 15px; 
        background: #ffffff;
    }
    .shop-info-head{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .shop-info-head img{
        width: 40px;
        height: 40px;
        nav-right: 10px;
        background: #ffffff;
        border-radius: 100%;
        border: 1px solid #dddddd;
        object-fit:cover;
        margin-right: 10px;
    }
    .shop-info-head span{
        font-size: 16px;
    }
    .enter-shop{
        display: block;
        margin: 15px auto 0;
        font-size: 14px;
        background-color: #f2f5f8;
        width: 108px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
    }
</style>