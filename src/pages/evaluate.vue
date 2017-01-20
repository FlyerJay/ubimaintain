<template>
    <div class="evaluateView">
    <page-header title="立即评价"></page-header>
       <!--  <div class="evaluateTitle">
           <i class="iconfont icon-left i-left"></i>
           <span class="titleFont">立即评价</span>
        </div> -->
        <div class="evaluateTop">
            <p class="selectEvaluate">选择评分</p>
            <div class="evaluateStar"> 
               <i class="iconfont icon-star i-star"></i>
               <i class="iconfont icon-star i-star"></i>
               <i class="iconfont icon-star i-star"></i>
               <i class="iconfont icon-star i-star"></i>
               <i class="iconfont icon-star i-star"></i>
            </div>
            <p class="evaluateFont">非常满意，无可挑剔</p>
        </div>
        <div class="evaluateCenter">
            <p class="addLabel">添加标签</p>
            <div class="AllLable">
                <span class="lableStyle">
                    <span>速度快效率高</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                </span>
                 <span class="lableStyle">
                    <span>态度很好服务超棒</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                </span>
                <span class=" lableStyle">
                    <span>技术高</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                </span>
                 <span class=" lableStyle">
                    <span>技术好</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                 </span>
                 <span class=" lableStyle">
                    <span>技术高</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                </span>
            </div>
        </div>
        <div class="evaluateBottom">
            <p class="writeEvaluate">编辑评价</p>
            <textarea class="writeContent" placeholder="写下你的保养体验和感受来帮助其他小伙伴~"></textarea>
            <span class="writeNumber"> 500</span>
        </div>
    </div>
</template>
<script>
    import components from "../components"
    export default{
        components:{
            ...components,
        },
    }
</script> 
<style>
    *{
        padding: 0px;
        margin: 0px;
    }
    .evaluateView{
        font-size: 0.6rem;
        width: 100%;
        height: 100%;
        background-color:#ffffff;
     /*   color:#4b4b4b;*/
        font-family: 微软雅黑;
    }
    .evaluateTitle{
        width: 100%;
        height: 1.932rem;
        line-height: 1.932rem;
        background-color: #f7f7f8;
        text-align: center;
        font-size: 0.757rem;
        color: #eee;
    /*    position: relative;*/
        background-color: #2c2a2d;
    }
    .evaluateTitle .i-left{
        font-size: 23px;
    }
    .evaluateTitle .titleFont{
        display: inline-block;
        width: 80%;
    }
    .evaluateTop{
       /*  border:solid;*/
         height: 130px;
         padding-top: 3%;
    }
    .evaluateTop .selectEvaluate{
       /* border:solid;*/
        padding-left: 3%;
        color: #999999;
        font-size: 18px;
    }
    .evaluateTop .evaluateStar{
        height: 50px;
      /*  border:solid;*/
        text-align: center;
        padding-top: 2%;
    }
    .evaluateTop .i-star{
      font-size: 40px;
      color: #ff853f;
    }
    .evaluateTop .evaluateFont{
        font-size: 18px;
        color: #4a4a4a;
        text-align: center;
        padding-top: 1%;
        font-weight: 600;
    }
    .evaluateCenter{
        height: 130px;
    }
    .evaluateCenter .addLabel{
        padding-left: 3%;
        color: #999999;
        font-size: 18px;
        margin-bottom: 3%;
   }
    .AllLable{
     padding-left: 5%;
    }
    .evaluateCenter .lableStyle{
        display: inline-block;
        border: solid;
        border-radius: 20px;
        border-color: #c8c8c8;
        height: 35px;
        text-align: center;
        line-height: 35px;
        color: #4c4c4c;
        font-size: 16px;
        border-width: 1px;
        padding-left: 5%;
        padding-right: 5%;
        margin: 0.2rem 0rem;
    }
    .evaluateBottom{
       height: 150px;
     /*  border:solid;*/
       padding-top: 3%;
        padding-left:3%;
        position: relative;
        color: #999999;
    }
    .writeEvaluate{
       color: #999999;
       font-size: 18px;
        margin-bottom: 2%;
    }
    .writeContent{
        height:130px;
        width: 96%;
        background-color: #f0eff5;
        border-radius:12px;
        border-style: none;
        padding-top: 10px;
        padding-left: 10px;
        font-size: 15px;
        resize: none;
        outline: none;
    }
    .writeNumber{
        position: absolute;
        right: 30px;
        bottom: -10px;
    }
</style>