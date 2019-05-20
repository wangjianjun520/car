<template>
  <div>
      <!-- <div v-show="pic_1==true && running=='' " @click="change">
        <img src="../../static/img/V2X (2).png" alt="" style="width:45%;hight:80%;margin-top:3px">
      </div>

      <div v-show="pic_1==true && running== 'V2X'" @click="change">
        <img src="../../static/img/V2X (2).png" alt="" style="width:45%;hight:80%;margin-top:3px">
        <img src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun">
      </div>

      <div v-show="pic_1==true && running== 'V2X & VR'" @click="change">
        <img src="../../static/img/V2X (2).png" alt="" style="width:45%;hight:80%;margin-top:3px">
        <img src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun">
      </div>
         


      <div v-show="pic_1==false"  @click="change">
        <img src="../../static/img/V2X-dark.png" alt="" style="width:45%;hight:80%;margin-top:3px"> 
      </div> -->




<!-- 
      <div v-show="pic_2==true && running==''" @click="change">
        <img src="../../static/img/VR (2).png" alt="" style="width:45%;hight:80%;margin-top:3px">
        <img src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun">
      </div>

          <div v-show="pic_2==true && running== 'VR'" @click="change">
        <img src="../../static/img/VR (2).png" alt="" style="width:45%;hight:80%;margin-top:3px">
        <img src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun">
      </div>

      <div v-show="pic_2==true && running== 'V2X & VR'" @click="change">
        <img src="../../static/img/VR (2).png" alt="" style="width:45%;hight:80%;margin-top:3px">
        <img src="../../static/img/齿轮_blue.gif" alt="" style="" class="chilun">
      </div>
         
         
      
      <div v-show="pic_2==false"  @click="change">
        <img src="../../static/img/VR-dark.png" alt="" style="width:45%;hight:80%;margin-top:3px"> 
      </div> -->
      
     
     
     
       <div v-show="pic_1==true " @click="change">
        <img src="../../static/img/V2X (2).png" alt="" style="width:50%;hight:80%;margin-top:6px">
      </div>


      <div v-show="pic_1==false"  @click="change">
        <img src="../../static/img/V2X-dark.png" alt="" style="width:50%;hight:80%;margin-top:6px"> 
      </div>

          <div v-show="pic_2==true " @click="change">
        <img src="../../static/img/VR (2).png" alt="" style="width:50%;hight:80%;margin-top:6px">
        
      </div>

       <div v-show="pic_2==false"  @click="change">
        <img src="../../static/img/VR-dark.png" alt="" style="width:50%;hight:80%;margin-top:6px"> 
      </div>
  </div>
</template>

<script>
   export default{
        props: ['pic_1','pic_2','pic_1_active','pic_2_active','running'],
        created(){
            console.log(this.running)
        },
        
        watch: {
            // pic_1(newName, oldName){
            //   console.log(this.pic_1_active) 

            //   if (this.pic_1_active==true) {
               
            //   }
            // },
    
       },

        
        methods:{
           change(){
          
               this.value=!this.pic_1
              this.$emit('setValue',this.value);
           }
        }
  
   }
</script>
<style scoped>
   .chilun{
   position: relative;
   width:25%;
   left: -8px
     
   }

</style>