<template>
    <div class="evaluate-view">
    <page-header title="立即评价"></page-header>
        <div class="evaluate-top">
            <p class="select-evaluate">选择评分</p>
            <div class="evaluate-star"> 
               <i class="iconfont icon-star i-star"></i>
               <i class="iconfont icon-star i-star"></i>
               <i class="iconfont icon-star i-star"></i>
               <i class="iconfont icon-star i-star"></i>
               <i class="iconfont icon-star i-star"></i>
            </div>
            <p class="evaluate-font">非常满意，无可挑剔</p>
        </div>
        <div class="evaluate-center">
            <p class="add-label">添加标签</p>
            <div class="all-lable">
                <span class="lable-style">
                    <span>速度快效率高</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                </span>
                 <span class="lable-style">
                    <span>态度很好服务超棒</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                </span>
                <span class="lable-style">
                    <span>技术高</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                </span>
                 <span class="lable-style">
                    <span>技术好</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                 </span>
                 <span class="lable-style">
                    <span>技术高</span>
                    <i class="iconfont icon-dianzan i-dianzan"></i>
                </span>
            </div>
        </div>
        <div class="evaluate-bottom">
            <p class="write-evaluate">编辑评价</p>
            <textarea class="write-content" placeholder="写下你的保养体验和感受来帮助其他小伙伴~"></textarea>
            <span class="write-number"> 500</span>
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
    .evaluat-view{
        font-size: 0.6rem;
        width: 100%;
        height: 100%;
        background-color:#ffffff;
     /*   color:#4b4b4b;*/
        font-family: 微软雅黑;
    }
    .evaluate-title{
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
    .evaluate-title .i-left{
        font-size: 23px;
    }
    .evaluate-title .title-font{
        display: inline-block;
        width: 80%;
    }
    .evaluate-top{
       /*  border:solid;*/
         height: 130px;
         padding-top: 3%;
    }
    .evaluate-top .select-evaluate{
       /* border:solid;*/
        padding-left: 3%;
        color: #999999;
        font-size: 18px;
    }
    .evaluate-top .evaluate-star{
        height: 50px;
      /*  border:solid;*/
        text-align: center;
        padding-top: 2%;
    }
    .evaluate-top .i-star{
      font-size: 40px;
      color: #ff853f;
    }
    .evaluate-top .evaluate-font{
        font-size: 18px;
        color: #4a4a4a;
        text-align: center;
        padding-top: 1%;
        font-weight: 600;
    }
    .evaluate-center{
        height: 130px;
    }
    .evaluate-center .add-label{
        padding-left: 3%;
        color: #999999;
        font-size: 18px;
        margin-bottom: 3%;
   }
    .all-lable{
     padding-left: 5%;
    }
    .evaluate-center .lable-style{
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
    .evaluate-bottom{
       height: 150px;
     /*  border:solid;*/
       padding-top: 3%;
        padding-left:3%;
        position: relative;
        color: #999999;
    }
    .writeE-ealuate{
       color: #999999;
       font-size: 18px;
        margin-bottom: 2%;
    }
    .write-content{
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
    .write-number{
        position: absolute;
        right: 30px;
        bottom: -10px;
    }
</style>