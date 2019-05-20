<template>
  <div style="width:100%;height:100%;backgound-color: #333" >
    	<div class="line"></div>
			<div v-if="value==false" class="hide1"></div>
			<div v-if="value==false" class="hide2"></div>
			<div v-if="value==false" class="hide3"></div>

			<!-- <div v-show="value==true" class="service">Service Haul</div> -->

			<transition name="fade">
           <p v-if="value==true" style="animation-duration: 1.0s" class="service">Service Haul</p>
      </transition>
			
      <!-- 齿轮 -->
			<img v-show="mec1V2X==1" src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun1">
			<img v-show="mec2V2X==1"  src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun2">
			<img v-show="mec3V2X==1" src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun3">

			<img v-show="mec1VR==1" src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun4">
			<img v-show="mec2VR==1" src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun5">
			<img v-show="mec3VR==1" src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun6">

    <div class="header">
		<span style="margin-top:5px" @click="fullscreen"><svg width="123" height="34" padding="10,0,0,10"><image xlink:href="../../static/img/huawei1.png" width="123" height="34"></image></svg></span>  
		<span style="margin-top:8px;margin-left:140px"  @click="detectZoom "><svg width="123" height="34" padding="10,0,0,10"><image xlink:href="../../static/img/中移动logo4.png" width="123" height="34"></image></svg></span> 
        <div style="position: absolute;left: 50%;top:-2px;transform: translateX(-50%);line-height: 50px;font-size:24px;color: white;font-weight:400;" class="title text-ellips ng-binding">Compute First Networking Dashboard</div>
		<div style="margin-top:15px">
            <el-switch
				v-model="value"
				 @change="changeAll(value)"
			  	width=50
					:disabled= wjj
			    active-text="CFN Enable"
				inactive-text="CFN Disable"
				active-color="#13ce66"
				inactive-color="#ff4949">
			</el-switch>  
		</div>
		        
	</div>

	<div class="content-up">
		<div class="content-up-left">
            <div>
								<transition
								   name="fade"
  enter-active-class="fade"
  leave-active-class="fade"					
								>
                  <img v-show="value==true"  src="../../static/img/拓扑图new15-3.png" alt="" style="margin-top:18px;width:58%;margin-left:330px">
              </transition>

								<!-- <transition name="fade">
                  <img v-show="value==false"  src="../../static/img/拓扑图new15_noCFN_new.png" alt="" style="margin-top:18px;width:58%;margin-left:330px">
              </transition> -->
				 <!-- <img v-show="value==true"  src="../../static/img/拓扑图new15-3.png" alt="" style="margin-top:18px;width:58%;margin-left:330px">	 -->
				 <img v-show="value==false" src="../../static/img/拓扑图new15_noCFN_new.png" alt="" style="margin-top:18px;width:58%;margin-left:330px">
				 <!-- <img src="../../static/img/拓扑图new4.png" alt="" style="margin-top:40px;width:50%;margin-left:380px"> -->
			</div>          	
    		
		</div>	

		<div class="content-up-right">
			
            <div>
				 <!-- <img src="../../static/img/Cross Turn Assistance9.png" alt="" style="width:70%;margin-top:40px;margin-left:60px">	 -->
			</div>   
			      	
		</div>
	
		<!-- <div id="myChart" :style="{width: '300px', height: '300px'}"></div> -->
	</div>
	<div class="content-down">

		<div class="content-down-left" style="margin-top:40px; ">
			        <div v-show="value==true"  style="margin-left:47%">
								   <el-menu 
								default-active="1" 
								class="el-menu-demo" mode="horizontal"
								 @select="SelectNet" background-color="rgba(255,255,255,0)"
								  text-color="#fff"
                 active-text-color="#ffd04b">
									<el-menu-item index="1">CFN Router 1</el-menu-item>
									<el-menu-item index="2">CFN Router 2</el-menu-item>
									<el-menu-item index="3">CFN Router 3</el-menu-item>
	            	</el-menu>	

							</div>

							<div v-show="value==false" style="width:100%;height:60px">

							</div>
			       

							 <!-- <el-tabs type="border-card"> -->
							<!-- <el-tab-pane label="用户管理">用户管理</el-tab-pane>
							<el-tab-pane label="配置管理">配置管理</el-tab-pane>
							<el-tab-pane label="角色管理">角色管理</el-tab-pane>
							<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
						</el-tabs>		         -->
                <Table  v-if="CFN1==1" :value="value"   @setSwitch = "setSwitch" @setVideoSrc = " setSrc"  style="margin-top:8px;" v-cloak> </Table>
								<Table2 v-if="CFN2==1" :value="value"   @setSwitch = "setSwitch"  @setVideoSrc = " setSrc" style="margin-top:8px;" v-cloak> </Table2>
								<Table3 v-if="CFN3==1" :value="value"   @setSwitch = "setSwitch"  @setVideoSrc = " setSrc" style="margin-top:8px;" v-cloak> </Table3>
			
				
		</div>
		<!-- <div class="content-down-right">
		
		      
		</div> -->
	</div>


  </div>
</template>

<script>


import Table from './table'
import Table2 from './table2'
import Table3 from './table3'
import control from '@/api/control'
export default {
 
 components:{
			Table,
			Table2,
			Table3,
        },   


  data(){
    return {
		   status:0,
       value:false,
				change:0,
				CFN1:1,
				CFN2:0,
				CFN3:0,
				wjj:false,
				mec1V2X:0,
				mec1VR:0,
		  	mec2V2X:0,
				mec2VR:0,
				mec3V2X:0,
				mec3VR:0,
	   
    }
  },
  watch:{

  },
  computed:{

  },
  methods:{
    detectZoom (){ 

  var ratio = 0,

    screen = window.screen,

    ua = navigator.userAgent.toLowerCase();

 

   if (window.devicePixelRatio !== undefined) {

      ratio = window.devicePixelRatio;

  }

  else if (~ua.indexOf('msie')) {  

    if (screen.deviceXDPI && screen.logicalXDPI) {

      ratio = screen.deviceXDPI / screen.logicalXDPI;

    }

  }

  else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {

    ratio = window.outerWidth / window.innerWidth;

  }

   

   if (ratio){

    ratio = Math.round(ratio * 100);

  }

   

   return ratio;

},



		 isFullscreen() {
      return (
        document.fullscreenElement ||
        document.msFullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        false
      );
    },
    fullscreen() {
      let element = document.getElementById("app");
      if (!this.isFullscreen()) {
        let requestMethod =
          element.requestFullScreen ||
          element.webkitRequestFullScreen ||
          element.mozRequestFullScreen ||
          element.msRequestFullScreen;
          requestMethod.call(element);
      }else{
				 document.exitFullscreen?document.exitFullscreen():
         document.mozCancelFullScreen?document.mozCancelFullScreen():
         document.webkitExitFullscreen?document.webkitExitFullscreen():'';
			}
    },
		 getCurrent(){
          control.getCurrent().then(Response=>{  
          //  console.log(	this.mec1V2X,this.mec1VR)
            // 获取running server状态
            // this.tableData[0].running=""
            // this.tableData[1].running=""
            // this.tableData[2].running=""
            //如果都关闭
            Response.data.server.forEach((data,index)=>{
               if (data.id ==0) {
                 if (data.running==0) {
									this.mec1V2X=0
									this.mec1VR = 0
                 }else if (data.running==1) {
                  this.mec1V2X=1
									this.mec1VR = 0
                 }else if (data.running==2) {
                  this.mec1V2X=0
									this.mec1VR = 1
                 }else if (data.running==3) {
                  this.mec1V2X=1
									this.mec1VR = 1
                 }
               }else if (data.id ==1) {
                 if (data.running==0) {
                	this.mec2V2X=0
									this.mec2VR = 0
                 }else if (data.running==1) {
                  this.mec2V2X=1
									this.mec2VR = 0
                 }else if (data.running==2) {
                  this.mec2V2X=0
									this.mec2VR = 1
                 }else if (data.running==3) {
                  this.mec2V2X=1
									this.mec2VR = 1
                 }
                 
               }else if (data.id ==2) {
                  if (data.running==0) {
                   	this.mec3V2X=0
									this.mec3VR = 0
                 }else if (data.running==1) {
                   	this.mec3V2X=1
									this.mec3VR = 0
                 }else if (data.running==2) {
                    	this.mec3V2X=0
									this.mec3VR = 1
                 }else if (data.running==3) {
                  this.mec3V2X=1
									this.mec3VR = 1
                 }
                 
               }
            })
             
      })
	
			   
        //  console.log(	this.mec1V2X,this.mec1VR,this.mec2V2X,this.mec2VR,this.mec3V2X,this.mec3VR)
     
         
      },

		 SelectNet(key){
          //  console.log(key);
           if (key=="1") {
							this.CFN1=1
							this.CFN2=0
							this.CFN3=0							
           }else if (key=="2") {
						  this.CFN1=0
							this.CFN2=1
							this.CFN3=0
					 }else if (key=="3") {
						  this.CFN1=0
							this.CFN2=0
							this.CFN3=1
					 }

					//  console.log(this.CFN1,this.CFN2,this.CFN3)
           
     },
	  setSrc(status){
		  this.status = status;

		},
		setSwitch(value){
		  if ((value[0].value1==false || value[0].value2==false) &&  this.value==true  ) {
				this.wjj = true
			}else {
				this.wjj = false
			}

	  },
	  changeAll(value){
		  // console.log(value)
		  if (value==true) {
			 this.change=1 
		  }else{
			  this.change=0
		  }
		  control.changeAll(this.change).then(response=>{
		   	  
		  })
		  
	  },

      
  },
  created(){
      this.getCurrent()
      this.timeid = window.setInterval(()=>{
          this.getCurrent()
      },800);
	},
	
  mounted(){
	// 默认关闭
     control.changeAll(0).then(response=>{
		   	  
	 })
	},
	
}
</script>
<style scoped>
.service{
	position: absolute;
	top:230px;
	left: 78%;
	z-index: 100;
	width:300px;
	color:#fff;
	font-size: 24px;
	

}

.chilun1{
	position: absolute;
	top:648px;
	left: 236px;
	z-index: 100;
	width:30px;

}
.chilun2{
	position: absolute;
	top:738px;
	left: 236px;
	z-index: 100;
	width:30px;

}
.chilun3{
	position: absolute;
	top:828px;
	left: 236px;
	z-index: 100;
	width:30px;

}


.chilun4{
	position: absolute;
	top:648px;
	left: 362px;
	z-index: 100;
	width:30px;

}
.chilun5{
	position: absolute;
	top:738px;
	left: 362px;
	z-index: 100;
	width:30px;

}
.chilun6{
	position: absolute;
	top:828px;
	left: 362px;
	z-index: 100;
	width:30px;

}

/* .line{
	width: 1px;
	height: 470px;
	position: absolute;
	top:460px;
	left: 735px;
	z-index: 100;
	border:1px dashed  #fff

} */

.line{
	width: 1px;
	height: 380px;
	position: absolute;
	top:520px;
	left: 735px;
	z-index: 100;
	border:1px dashed  #fff

}

.hide1{
	width:150px;
	height: 70px;
  background-color:#333;
	position: absolute;
	top:610px;
	left: 1335px;
	z-index: 100;


}
.hide2{
	width:150px;
	height: 70px;
  background-color:#333;
	position: absolute;
	top:700px;
	left: 1335px;
	z-index: 100;

}
.hide3{
	width:150px;
	height: 70px;
  background-color:#333;
	position: absolute;
	top:790px;
	left: 1335px;
	z-index: 100;

}

.el-menu-item {
	    font-size: 22px;
}

[v-cloak]{
			display: none;
		}

div{
	box-sizing: border-box;
}
.header{
    height: 7%;
	width: 100%;	
	background-color:	rgb(72,72,72);
    /* line-height: 50px; */
    font-size: 24px;
    color: white;
    font-weight: 700;
}
.header span{
  position: absolute;
  left: 10px;
  top: 10px;

}

.header div{
 margin-top: 10px;
 margin-right: 10px;
  float: right;

}
.content-up{
	height: 35%;
	width: 100%;
	border-bottom: 1px solid black;
	overflow: hidden;
	background-color:#333
}
.content-down{
	height: 58%;
	width: 100%;
	overflow: hidden;
	background-color:#333
}
/* .last{
		height: 3%;
	width: 100%;
	overflow: hidden;
	background-color:#333
} */
.content-down{
	/* background: grey; */
	/* background-color: black */
	/* background: url(/static/img/car-bg.jpg)center no-repeat; */
}
.content-up-left{
	width: 100%;
	height: 100%;
     float: left;
}
.content-up-left>div>img{
  margin-top: -26px;
  margin-left: 30px
}

.content-up-right{
	width: 0%;
	height: 100%;
    float: left;
 }


.content-down-left{
	width: 100%;
	height: 100%;
	float: left;
	padding-right: 10px;
	position: relative;
	margin-left: 3%
	/* background: url(/static/img/car.jpg) center no-repeat; */
}
/* .content-down-left>video{
	width: 100%;
	height: 100%;
	float: left;
} */
/* .content-down-right{
	width: 45%;
	height: 100%;
	float: left;

} */


.content-up-right > div{
	height: 100px;
	width: 100%;
	vertical-align: middle;
	/* padding:10% 5%; */
	line-height: 100px;
	/* border: 1px solid red; 	 */
}
.content-up-right > div >span{
	vertical-align: middle;
}
.open-icon{
	display: inline-block;
	width: 30px;
	height: 30px;
	/* background: url(/static/img/open.png) center no-repeat; */
	background-repeat: no-repeat;
	background-position: center; 
	background-size: cover;
	cursor: pointer;
	margin-left: 20px;
	margin-right: 20px;
}

.pic_1,.pic_2,.pic_3,.pic_4{
	width: 10%;
	position: absolute;
	left: 44.3%;
	top:42%
}
#canvas{
	z-index: 10;
}

/* .pic_2{
	position: absolute;
	left: 41.5%;
	top:42%
}
.pic_3{
	position: absolute;
	left: 41.5%;
	top:42%
}
.pic_4{
	position: absolute;
	left: 41.5%;
	top:42%
} */

.el-menu-item.is-active {
   background-color: rgb(231, 235, 240,0) !important;
}

</style>


