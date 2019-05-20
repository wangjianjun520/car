<template>
  <div>

        <!-- 方案1 -->
      
      <!-- <div class="wfive"
      v-show="index>16 && index<=20 || indexadd>80 && indexadd<=100">
           <span class="red"></span>
           <span class="red"></span>        
           <span class="red"></span>
           <span class="red"></span>
           <span class="red"></span>
      </div>

        <div class="wfour"
        v-show="index>12 && index<=16 || indexadd>60 && indexadd<=80">
           <span class="yellow"></span>
           <span class="yellow"></span>        
           <span class="yellow"></span>
           <span class="yellow"></span>
           <span class="none"></span>
      </div>

        <div class="wthree"
        v-show="index>8 && index<=12|| indexadd>40 && indexadd<=60">
           <span class="yellow"></span>
           <span class="yellow"></span>        
           <span class="yellow"></span>
           <span class="none"></span>
           <span class="none"></span>
      </div>

        <div class="wtwo"
        v-show="index>4 && index<=8 || indexadd>20 && indexadd<=40">
           <span class="green"></span>
           <span class="green"></span>        
           <span class="none"></span>
           <span class="none"></span>
           <span class="none"></span>
      </div>

        <div class="wone"
        v-show="index>=0 && index<=4 || indexadd>=0 && indexadd<=20">
           <span class="green"></span>
           <span class="none"></span>        
           <span class="none"></span>
           <span class="none"></span>
           <span class="none"></span>
      </div> -->

      
     <!-- 10格 -->

          <div class="wfive"
      v-show="index>18 && index<=20 || indexadd>90 && indexadd<=100">
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>

      </div>

           <div class="wfive"
      v-show="index>16 && index<=18 || indexadd>80 && indexadd<=90">
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="red1"></span>
           <span class="none1"></span>

      </div>


               <div class="wfive"
      v-show="index>14 && index<=16 || indexadd>70 && indexadd<=80">
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="none1"></span>
           <span class="none1"></span>

      </div>

                   <div class="wfive"
      v-show="index>12 && index<=14 || indexadd>60 && indexadd<=70">
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>

      </div>

                     <div class="wfive"
      v-show="index>10 && index<=12 || indexadd>50 && indexadd<=60">
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>

      </div>

                         <div class="wfive"
      v-show="index>8 && index<=10 || indexadd>40 && indexadd<=50">
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="yellow1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>

      </div>

                            <div class="wfive"
      v-show="index>6 && index<=8 || indexadd>30 && indexadd<=40">
           <span class="green1"></span>
           <span class="green1"></span>
           <span class="green1"></span>
           <span class="green1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>

      </div>

                           <div class="wfive"
      v-show="index>4 && index<=6 || indexadd>20 && indexadd<=30">
           <span class="green1"></span>
           <span class="green1"></span>
           <span class="green1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>

      </div>

                              <div class="wfive"
      v-show="index>2 && index<=4 || indexadd>10 && indexadd<=20">
           <span class="green1"></span>
           <span class="green1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>

      </div>

                               <div class="wfive"
      v-show="index>=0 && index<=2 || indexadd>=0 && indexadd<=10">
           <span class="green1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>
           <span class="none1"></span>

      </div>

        



        <!-- 方案2 -->
<!--       
      <div class="wfive"
      v-show="index>16 && index<=20 || indexadd>80 && indexadd<=100">
           <span class="red rigth"></span><span class="red left right "></span><span class="red left right"></span><span class="red left right"></span><span class="red left"></span> 
                
           
           
           
      </div>

        <div class="wfour"
        v-show="index>12 && index<=16 || indexadd>60 && indexadd<=80">
           <span class="yellow rigth"></span><span class="yellow left right"></span><span class="yellow left right"></span><span class="yellow left right"></span><span class="none left"></span>
                   
           
           
           
      </div>

        <div class="wthree"
        v-show="index>8 && index<=12|| indexadd>40 && indexadd<=60">
           <span class="yellow rigth"></span><span class="yellow left right"></span><span class="yellow left right"></span><span class="none left right"></span><span class="none left"></span> 
                  
           
           
           
      </div>

        <div class="wtwo"
        v-show="index>4 && index<=8 || indexadd>20 && indexadd<=40">
           <span class="green rigth"></span><span class="green left right"></span><span class="none1 left right"></span><span class="none1 left right"></span><span class="none1  left"></span>
                   
           
           
           
      </div>

        <div class="wone"
        v-show="index>=0 && index<=4 || indexadd>=0 && indexadd<=20">
          <span class="green rigth"></span><span class="none1 left right"></span><span class="none1 left right"></span><span class="none1 left right"></span><span class="none1 left"></span>
                   
           
                
      </div> -->

 
<!-- <el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="100" color="red" v-show="index>16 && index<=20 || indexadd>80 && indexadd<=100"></el-progress>
<el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="80" color="yellow" v-show="index>12 && index<=16 || indexadd>60 && indexadd<=80"></el-progress>
<el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="60" color="yellow"  v-show="index>8 && index<=12|| indexadd>40 && indexadd<=60"></el-progress>
<el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="40" color="green" v-show="index>4 && index<=8 || indexadd>20 && indexadd<=40"></el-progress>
<el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="20" color="green" v-show="index>=0 && index<=4 || indexadd>=0 && indexadd<=20"></el-progress> -->

 

 <!-- <el-progress :text-inside="true" :show-text="false" :stroke-width="10" :percentage="percentage" :color="color" ></el-progress> -->



  </div>
</template>

<script>
   import {mapGetters} from 'vuex'
   export default{
        props: ['index','indexadd'],
        data(){
          return{
        //    percentage:0,
        //    color:""
          }
        },

        watch:{
            // index(newName, oldName){
            //    this.change(this.index,this.indexadd) 
            // },
            //   indexadd(newName, oldName){
            //    this.change(this.index,this.indexadd) 
            // }
        },

        // methods:{
        //     change(index,indexadd){
        //       if (index>=0 && index<=4 || indexadd>=0 && indexadd<=20) {
        //           this.percentage=20
        //           this.color="green"
        //       }else if (index>4 && index<=8 || indexadd>20 && indexadd<=40) {
        //           this.percentage=40
        //           this.color="green"
        //       }else if (index>8 && index<=12|| indexadd>40 && indexadd<=60) {
        //           this.percentage=60
        //           this.color="yellow"
        //       }else if (index>12 && index<=16 || indexadd>60 && indexadd<=80) {
        //           this.percentage=80
        //           this.color="yellow"
        //       }else if (index>16 && index<=20 || indexadd>80 && indexadd<=100) {
        //           this.percentage=100
        //           this.color="red"
        //       }
        //     }
        // },

        // created(){
        //     console.log(this.index)
        //     console.log(this.indexadd)
        //   this.change(this.index,this.indexadd)
        // },
        // beforeUpdate(){
        //    this.change(this.index,this.indexadd) 
        // }
  
   }
</script>
<style scoped>
    .five span{
        display:inline-block;
        width: 20px;
        height: 8px;
        background-color: red
    }

       .three span{
        display:inline-block;
        width: 20px;
        height: 8px;
        background-color: yellow
    }

       .two span{
        display:inline-block;
        width: 20px;
        height: 8px;
        background-color: green
    }

    .red{
        display:inline-block;
        width: 20px;
        height: 8px;
        background-color: red  
    }
        .red1{
        display:inline-block;
        width: 12px;
        height: 10px;
        background-color: red  
    }
     .yellow{
        display:inline-block;
        width: 20px;
        height: 8px;
        background-color: yellow  
    }
      .yellow1{
        display:inline-block;
        width: 12px;
        height: 10px;
        background-color: yellow  
    }
    .green{
        display:inline-block;
        width: 20px;
        height: 8px;
        background-color: green;
    }
     .green1{
        display:inline-block;
        width: 12px;
        height: 10px;
        background-color: green;
    }
    .none{
        display:inline-block;
        width: 18px;
        height: 6px;        
        border: 1px solid white
        /* background-color: red     */
    }
      .none1{
        display:inline-block;
        width: 10px;
        height: 8px;        
        border: 1px solid white
        /* background-color: red     */
    }

    .left{
       border-left: none 
    }
    .right{
       border-right: none 
    }


    .c1>span {
        display:inline-block;
        width: 90px;
        height: 6px;        
        border: 1px solid red
    }
       .c2>span {
        display:inline-block;
       width: 90px;
        height: 6px;        
        border: 1px solid red
    }
    
       .c3>span {
        display:inline-block;
         width: 90px;
        height: 6px;        
        border: 1px solid red
    }
    
       .c4>span {
        display:inline-block;
         width: 90px;
        height: 6px;        
        border: 1px solid red
    }
    
       .c5>span {
        display:inline-block;
         width: 90px;
        height: 6px;        
        border: 1px solid red
    }
    
    


</style>