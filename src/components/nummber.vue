<template>
  <div>

    <!-- 选择0 -->
 
    <div  >
       <div v-show="numbers==0">
      <el-button size="medium"  @click="change('one')"  value=0  ref="one"  style="width:65px" type="success">Low</el-button>  
      <el-button size="medium"  @click="change('two')"  value=50  ref="two"  style="width:65px;padding-right:20px" type="info" >Med</el-button>
      <el-button size="medium"  @click="change('three')" value=58  ref="three" style="width:65px;text-align:center" type="info" >High</el-button>
    </div>  
 

      <!-- 选择50 -->
   <div v-show="numbers==50">
       <el-button size="medium"  @click="change('one')" value=0   ref="one"  type="warning" style="width:65px;">Low</el-button>  
       <el-button size="medium"  @click="change('two')" value=50   ref="two" type="warning" style="width:65px;"  >Med</el-button>
       <el-button size="medium"   @click="change('three')" value=58  ref="three" style="width:65px" type="info" >High</el-button>
   </div> 
 

      <!-- 选择100 -->
   <div v-show="numbers==58 ||  numbers==100 ">
       <el-button size="medium" type="danger" style="width:65px;" @click="change('one')" ref="one" value=0>Low</el-button>  
       <el-button size="medium" @click="change('two')"   value=50 ref="two" style="width:65px" type="danger"  >Med</el-button>
       <el-button size="medium" @click="change('three')" value=58  ref="three" style="width:65px" type="danger"  >High</el-button>     
   </div> 

    </div>


  </div>
</template>

<script>
   export default{
        props: ['numbers','rows','value'],
        created(){
          console.log(this.numbers)
        },
        
        watch: {
         numbers(a,b){
          console.log(a)
         }
       },

        
        methods:{
           change(num){
               this.rowchild = this.rows
               this.rowchild.number=Number(this.$refs[num].$attrs.value)
            
              // this.value = this.$refs[num].$attrs.value
               console.log(this.rowchild)
              this.$emit('setNumber', this.rowchild);

                // this.$emit('setNumber', this.$refs[num].$attrs.value);
           }
        }
  
   }
</script>
<style scoped>


</style>