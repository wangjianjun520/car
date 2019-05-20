<template>
<div>
   <div style="width:95%;height:100%;"  v-if="value==true"> 
     <el-table          
					:data="tableData"
          :header-cell-style="tableHeaderColor"
          :row-style="tableRowStyle"
					style="width: 100%;">
					<el-table-column       
						prop="date"
						label="Server"
            min-width="7%">
					</el-table-column>

          		<el-table-column	          			
						label="V2X"
            min-width="7%">
              <template slot-scope="scope">
                <pic
                v-show='scope.row.value1Active == false'
                 :pic_1 ="scope.row.value1" 
                 :pic_1_active="scope.row.value1Active"
                 :running="scope.row.running"
                 @setValue ="setValue(value1,scope.$index,scope.row)"
                >
                </pic>


                 <span
                v-show='scope.row.value1Active == true'
               > <img src="../../static/img/V2X (2).png" alt="" style="width:50%;hight:80%;margin-top:6px"> </span>   

               
              </template>
	    	</el-table-column>
          

      	<el-table-column	          			
						label="VR"
            
            min-width="7%">
              <template slot-scope="scope">
                <pic
                 v-show='scope.row.value2Active == false'
                 :pic_2 ="scope.row.value2" 
                 :pic_2_active="scope.row.value2Active"
                 :running="scope.row.running"
                 @setValue ="setValue1(value,scope.$index,scope.row)"

                >
                </pic>

               <span
                v-show='scope.row.value2Active == true'
               > <img src="../../static/img/VR (2).png" alt="" style="width:50%;hight:80%;margin-top:6px"></span>   

              </template>
			</el-table-column>


       <el-table-column
				   header-align="center"
          
						label="Test load setting"
            min-width="14%">
             <template slot-scope="scope">
                  <nummber
                    @setNumber ="handleChanget"
                    :numbers =  "scope.row.fuzai"  
                    :rows= "scope.row"  
              
                  >


                  </nummber>
              
              </template>
			</el-table-column>



         <el-table-column
				   header-align="center"
          
				
            min-width="5%">
          
			</el-table-column>


      	<el-table-column       
						prop="date"
						label="Server"
            min-width="7%">
					</el-table-column>

         
        <el-table-column
           header-align="center"
           align="center"
            prop="net"
            label="Network delay"
            min-width="12%">
                 <template slot-scope="scope">
                   <net
                   v-show="scope.row.net !=='---'"
                    v-model="scope.row.net"     
                    :index ="scope.row.net"                            
                   >
                   </net>

                   <span v-show="scope.row.net=='---'">---</span>
    
              </template>
        </el-table-column>
            

        <el-table-column  
            header-align="center"
            align="center"
            prop="add"
            label="MEC load"
            min-width="12%">
            <template slot-scope="scope">
                       <net
                      v-show="scope.row.add !=='---'"  
                    v-model="scope.row.add"     
                    :indexadd ="scope.row.add"     
                     
                   >
                   </net>  
                   <span v-show="scope.row.add=='---'">---</span>
                </template>   
        </el-table-column>

           

          <el-table-column  
          
            header-align="center"
            align="center"
            prop="running"
            label="Target MEC"
            min-width="9%">
            <template slot-scope="scope">
                <span
                v-show='scope.row.running =="V2X"'
                :indexadd ="scope.row.add"
               ><img src="../../static/img/V2X (2).png" alt="" style="width:36%;hight:80%;margin-top:8px  "> </span>   

                   <span
                    v-show='scope.row.running =="VR"'
                :indexadd ="scope.row.add" ><img src="../../static/img/VR (2).png" alt="" style="width:36%;hight:80%; margin-top:8px "></span> 

                     <span
                    v-show='scope.row.running =="V2X & VR"'
                :indexadd ="scope.row.add" ><img src="../../static/img/v2x VR.png" alt="" style="width:72%;hight:80%;margin-top:9px  "> </span> 
            </template>   
            </el-table-column>


	   </el-table>

    






  </div>

      <div style="width:95%;height:100%;"  v-if="value==false"> 
        <el-table          
					:data="tableData"
          :header-cell-style="tableHeaderColor"
          :row-style="tableRowStyle"
					style="width: 100%;">
					<el-table-column       
						prop="date"
						label="Server"
            min-width="7%">
					</el-table-column>

          		<el-table-column	          			
						label="V2X"
            min-width="7%">
              <template slot-scope="scope">
                <pic
                v-show='scope.row.value1Active == false'
                 :pic_1 ="scope.row.value1" 
                 :pic_1_active="scope.row.value1Active"
                 :running="scope.row.running"
                 @setValue ="setValue(value1,scope.$index,scope.row)"
                >
                </pic>


                 <span
                v-show='scope.row.value1Active == true'
               > <img src="../../static/img/V2X (2).png" alt="" style="width:45%;hight:80%;margin-top:3px"> </span>   

               
              </template>
	    	</el-table-column>
          

      	<el-table-column	          			
						label="VR"
            
            min-width="7%">
              <template slot-scope="scope">
                <pic
                 v-show='scope.row.value2Active == false'
                 :pic_2 ="scope.row.value2" 
                 :pic_2_active="scope.row.value2Active"
                 :running="scope.row.running"
                 @setValue ="setValue1(value,scope.$index,scope.row)"

                >
                </pic>

               <span
                v-show='scope.row.value2Active == true'
               > <img src="../../static/img/VR (2).png" alt="" style="width:45%;hight:80%;margin-top:3px"></span>   

              </template>
			</el-table-column>


       <el-table-column
				   header-align="center"
          
						label="Test load setting"
            min-width="14%">
             <template slot-scope="scope">
                  <nummber
                    @setNumber ="handleChanget"
                    :numbers =  "scope.row.fuzai"  
                    :rows= "scope.row"  
              
                  >


                  </nummber>
              
              </template>
			</el-table-column>



         <el-table-column
				   header-align="center"
          
				
            min-width="5%">
          
			</el-table-column>


      	<el-table-column       
						prop="date"
						label="Server"
            min-width="7%">
					</el-table-column>

         
        <el-table-column
           header-align="center"
           align="center"
            prop="net"
            label="Network delay"
            min-width="12%">
                 <template slot-scope="scope">
                   <net
                   v-show="scope.row.net !=='---'"
                    v-model="scope.row.net"     
                    :index ="scope.row.net"                            
                   >
                   </net>

                   <span v-show="scope.row.net=='---'">---</span>
    
              </template>
        </el-table-column>
            

        <el-table-column  
            header-align="center"
            align="center"
            prop="add"
            label="MEC load"
            min-width="12%">
            <template slot-scope="scope">
                       <net
                      v-show="scope.row.add !=='---'"  
                    v-model="scope.row.add"     
                    :indexadd ="scope.row.add"     
                     
                   >
                   </net>  
                   <span v-show="scope.row.add=='---'">---</span>
                </template>   
        </el-table-column>

           

            <el-table-column  
          
            header-align="center"
            align="center"
             label=""
            min-width="9%">
                <template slot-scope="scope">
                <span
                v-show='scope.row.running =="V2X"'
                :indexadd ="scope.row.add"
               ><img src="" alt="" style="width:24%;hight:80%;margin-top:5px  "> </span>   


        
            </template> 
     
            </el-table-column>



	   </el-table>








  </div>




</div>
  
  
</template>

<script>
 import control from '@/api/control'
 import net from './net'
  import pic from './img'
  import nummber from './nummber'
  import nummber1 from './nummber1'
 export default {
  components:{
      net,
      pic,
      nummber,
      nummber1
        },  
  props: ['value'],
  data(){
    return {
    add0:0,
    add1:0,
    add2:0,
    age:10,
    index:0,
    indexadd:0,
    rows:0,
    pic_1:false,
    pic_2:false,
    pic_1_active:false,
    pic_2_active:false,
    numbers:0,
    message: 'Hello',
    objV2X:{},
    objVR:{},
    // tableData1:[],
	  tableData: [{
            date: 'MEC1',
            value1:false,
            value1Active:false,
            value2:false,
            value2Active:false,
            fuzai:0  ,
            type:""      ,
            calc:0,
            net:0,
            add:0 , 
            running:""
         
          }, {
            date: 'MEC2',
            value1:false,
            value1Active:false,
            value2:false,
            value2Active:false,
            fuzai:0,
            type:""  ,
            calc:0,
            net:0,
            add:0 ,
            running:""
          }, {
            date: 'MEC3',
            value1:false,
            value1Active:false,
            value2:false,
            value2Active:false,
            fuzai:0,
            type:""      ,
            calc:0,
            net:0,
            add:0 ,
            running:""
          }],

    }
  },

// computed: {
//       number: function () {
//         return this.tableData[this.index]
//     },

//   },
  watch: {
    // add0(newName, oldName){
    //   if (newName >oldName) {
    //    control.controlFuzai(0,5).then(response=>{
    //     })
    //   }else{
    //     control.controlFuzai(0,-5).then(response=>{
    //     })
    //   }   
    // },

    //  add1(newName, oldName){
    //   if (newName >oldName) {
    //    control.controlFuzai(1,5).then(response=>{
    //     })
    //   }else{
    //     control.controlFuzai(1,-5).then(response=>{
    //     })
    //   }   
    // },

    //  add2(newName, oldName){
    //   if (newName >oldName) {
    //    control.controlFuzai(2,5).then(response=>{
    //     })
    //   }else{
    //     control.controlFuzai(2,-5).then(response=>{
    //     })
    //   }   
    // },

   
  },

  methods:{

  
  
     setValue(value,index,row){
      this.tableData[index].value1 = !this.tableData[index].value1
      // console.log(this.tableData)
      // console.log(index)
      this.handleChange1(index,row)
    },
    
     setValue1(value,index,row){
      this.tableData[index].value2 = !this.tableData[index].value2
      // console.log(value)
      // console.log(index)
      this.handleChange2(index,row)

	  },

        // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
            return 'background-color:  #333;color: #fff;font-weight: 500;line-height:50px;'
         }
        },
     
      // 修改table tr行的背景色
    tableRowStyle({ row, rowIndex }) {
      return 'background-color: #333;color:#fff'
    },


     changeType(type){
            // 此处做了语言选择记录
            localStorage.setItem('locale',type)
            // 修改显示语言
            this.$i18n.locale = type;
        },


    // V2X开关
     handleChange1(index, row) {             
       this.checkOnlyOne("value1","value1Active")
       this.checkTrueOrFalse(row,"value1")
       control.controlMec(index,1,this.nun1).then(response=>{
       })
      },

    // VR开关
    handleChange2(index, row) {
       this.checkOnlyOne("value2","value2Active")
       this.checkTrueOrFalse(row,"value2")
       control.controlMec(index,2,this.nun1).then(response=>{
       })
      },



    //负载加减
    handleChanget(value) {
        // console.log(value);

        if (value.date=="MEC1") {
         this.tableData[0].fuzai =value.number
           control.controlFuzai(0, Number(value.number)).then(response=>{
           })
        }
        if (value.date=="MEC2") {
         this.tableData[1].fuzai =value.number
            control.controlFuzai(1, Number(value.number)).then(response=>{
           })
        }
        if (value.date=="MEC3") {
         this.tableData[2].fuzai =value.number
            control.controlFuzai(2, Number(value.number)).then(response=>{
           })
        }
      
      }, 


       //负载加减
    handleEditt(index, row) {
        // console.log(index, row);

        if (index==0) {
          this.add0 =this.tableData[index].fuzai
           control.controlFuzai(0, this.add0).then(response=>{
           })
        }
        if (index==1) {
          this.add1 =this.tableData[index].fuzai
            control.controlFuzai(1,this.add1).then(response=>{
           })
        }
        if (index==2) {
          this.add2 =this.tableData[index].fuzai
            control.controlFuzai(2, this.add2).then(response=>{
           })
        }
      
      }, 
      


     
    //  必须一个开关开启
      checkOnlyOne(value,valueActive){
        //  console.log("wjj")
        //  debugger
          this.num =0;  
          this.tableData.forEach((data,index)=>{
            if(data[value]==false){
              this.num = this.num+1;
            }
            if(this.num ==2 ){
             this.tableData.forEach((data,index)=>{
               if (data[value]==true) {
                 data[valueActive]=true;
               }
             })
            }else{
               data[valueActive]=false;
            }         
        })
      },
    
    // 将开关true和false转换成1和0
      checkTrueOrFalse(row,value){
        this.nun1=0;
        if (row[value]==true) {
          this.nun1=1
        }else{
          this.nun1=0
        }
      },
    
    //判断server的type类型
      // checkServer(server,type){
      //   // console.log(server,type)
      //   if (type==0) {
      //     this.tableData[server].running =""
      //   }else if (type==1) {
      //     this.tableData[server].running ="V2X"
      //   }else if (type==2) {
      //     this.tableData[server].running ="VR"
      //   }else if (type==3) {
      //     this.tableData[server].running ="V2X & VR"
      //   }
      //  },


       //判断server的type类型
      checkServer(v2x,vr){
        // console.log(server,type)
        if (v2x==vr) {
          this.tableData[v2x-1].running ="V2X & VR"
        }else  {
           this.tableData[v2x-1].running ="V2X"
           this.tableData[vr-1].running ="VR"
        }
       },

      // 找对象最小数值
     sortObj(obj) {
        var arr = [];
        for (var i in obj) {
            arr.push([obj[i],i]);
        };
          arr.sort(function (a,b) {
        return a[0] - b[0];
         });
       return arr[0][1]
      },
      getCurrent(){
          control.getCurrent().then(Response=>{  
            //  alert("++++++++++++++++++++++++");
            this.wjj = Response.data.latency
            Response.data.latency.forEach((data,index)=>{
              if (data.server==0) {
                this.tableData[0].calc=data.calc
                this.tableData[2].net=data.net               
                this.tableData[0].add=data.add
              }
              if (data.server==1) {
                this.tableData[1].calc=data.calc
                this.tableData[1].net=data.net
                
                this.tableData[1].add=data.add
              }
              if (data.server==2) {
                this.tableData[2].calc=data.calc                
                this.tableData[2].add=data.add
                this.tableData[0].net=data.net
              }


              // 判断V2X
          
              if (data.type==1 || data.type==3) {
                   
                if (data.server==0) {
                   this.objV2X[1] = this.tableData[0].net
                }
                 if (data.server==1) {
                  this.objV2X[2] = this.tableData[1].net
                }
                 if (data.server==2) {
                  this.objV2X[3] =  this.tableData[2].net
                }
             
               
              }
              //  console.log(this.objV2X)
              // 判断VR
              // if (data.type==2 || data.type==3) {
              //   if (data.server==0) {
              //      this.objVR[1] = this.tableData[0].add
              //    }

              //    if (data.server==1) {
              //      this.objVR[2] = this.tableData[1].add
              //   }

              //    if (data.server==2) {
              //      this.objVR[3] = this.tableData[2].add
              //   }
          
              // }

               if (data.type==2 || data.type==3) {
                if (data.server==0) {
                   this.objVR[1] = this.tableData[0].add+this.tableData[0].net
                 }

                 if (data.server==1) {
                   this.objVR[2] = this.tableData[1].add+this.tableData[1].net
                }

                 if (data.server==2) {
                   this.objVR[3] = this.tableData[2].add+this.tableData[2].net
                }
          
              }
              //  console.log(this.objVR)
             

            })
           
            // console.log(this.objV2X)
      
           

            // 获取running server状态
            // this.tableData[0].running=""
            // this.tableData[1].running=""
            // this.tableData[2].running=""
            //如果都关闭
            Response.data.server.forEach((data,index)=>{
               if (data.status==0) {
                  var number = data.id
                  // this.tableData[number].calc="---"
                  this.tableData[number].net="---"
                  this.tableData[number].add="---"
               }
                
              //objVR 如果是选择状态-20

               if (data.running==2 || data.running==3 ) {
                //  this.objVR[data.id+1]= this.objVR[data.id+1]-20
               }
      
            })

           console.log(this.sortObj(this.objV2X))                            
           console.log(this.sortObj(this.objVR)) 
          //  清空running
             this.tableData[0].running=""
             this.tableData[1].running=""
             this.tableData[2].running=""
             this.checkServer(Number(this.sortObj(this.objV2X)),Number(this.sortObj(this.objVR)))
             this.objV2X={}
             this.objVR={}          
              
            })
	
          //  this.$emit('setVideoSrc',Response.data.status);
            this.$emit('setSwitch',this.tableData);

     
         
      },

    //  watcData(){
    //    this.$watch(()=>{
    //      return this.tableData[0].fuzai
    //    },(newVal,oldVal)=>{
    //      console.log(newVal,oldVal);
    //    })

    //  }



  },
  beforeCreate(){
       

        //  获取MEC信息
        control.getCurrent().then(Response=>{ 
            Response.data.latency.forEach((data,index)=>{
                // console.log(data)
                if (data.server==0) {
                   if (data.type==1) {
                        this.tableData[0].value1=true
                        this.tableData[0].value2=false
                   }else if (data.type==2) {
                        this.tableData[0].value1=false
                        this.tableData[0].value2=true
                   }else{
                       this.tableData[0].value1=true
                       this.tableData[0].value2=true
                   }
                  
                }
                 if (data.server==1) {
                     if (data.type==1) {
                        this.tableData[1].value1=true
                        this.tableData[1].value2=false
                   }else if (data.type==2) {
                        this.tableData[1].value1=false
                        this.tableData[1].value2=true
                   }else{
                       this.tableData[1].value1=true
                       this.tableData[1].value2=true
                   }
                  
                }
                 if (data.server==2) {
                   if (data.type==1) {
                        this.tableData[2].value1=true
                        this.tableData[2].value2=false
                   }else if (data.type==2) {
                        this.tableData[2].value1=false
                        this.tableData[2].value2=true
                   }else{
                       this.tableData[2].value1=true
                       this.tableData[2].value2=true
                   }
                  
                }

                 
            })
            // Response.data.server.forEach((data,index)=>{
            //   this.checknum =0; 
              
            //   if (data.status==0) {
            //     this.checknum = this.checknum+1;
            //   } 
            //   if (this.checknum ==2) {
            //     Response.data.server.forEach((data,index)=>{
            //       if (data.status !==0) {
            //           this.tableData[index].value1Active=true
            //           this.tableData[index].value2Active=true
            //       }
            //     })
            //   }  
            // })
        })


        // 获取负载
        control.getFuzai().then(response=>{
          // console.log(response.data.server)
          this.tableData[0].fuzai=response.data.server[0].latency;
          this.tableData[1].fuzai=response.data.server[1].latency;
          this.tableData[2].fuzai=response.data.server[2].latency;
         })
         // 存储负载数值用于比较
        // this.add0=this.tableData[0].fuzai;
        // this.add1=this.tableData[1].fuzai;
        // this.add2=this.tableData[2].fuzai;
        
   
        
  
     


   
  },

  created(){
    //  console.log(this.tableData)
      this.checkOnlyOne("value1","value1Active")
      this.checkOnlyOne("value2","value2Active")
      this.getCurrent()
      this.timeid = window.setInterval(()=>{
          this.getCurrent()
      },800);
  },
   destroyed(){
     clearInterval(this.timeid);
    }
}

</script>
<style >
  .el-table--enable-row-hover .el-table__body tr:hover>td{
      background-color:#333 !important;  
   }

  .el-table__empty-block{
   background-color: #333 !important; 
  }

.el-input__inner {
 
        border-radius: 0px;
        /* border-right: 1px solid red */
}

.cell{
  height: 65px !important;
  line-height: 65px !important;
  /* overflow: auto !important; */
  overflow:hidden
  } 

  .el-table {
       font-size: 24px  !important;

  }

  .el-slider__runway{
    height: 16px  !important;
    border-radius: 8px
  }
  .el-slider__bar{
     height: 16px  !important;
     border-radius: 8px
  }

  .el-slider__button-wrapper{
    top: -10px  !important;
    /* height: 38px;
    width: 38px; */
  }

  .el-slider__button {
     
     width: 20px !important;
    height: 20px !important;
  }
  /* .el-slider__stop{
    height: 12px !important;
    width: 12px !important;
  } */

  /* .el-input-number__decrease, .el-input-number__increase {

    background:  #333 !important; 
    color:#fff !important; 

}
.el-input__inner {
    background-color: #333 !important;
       color: #fff !important; 
        border-radius: 0px;

} */

/* .el-icon-minus:before {
    content: "\E621";
    color: #409EFF !important;
}
.el-icon-plus:before {
    content: "\E62B";
     color: #409EFF !important;
} */


.el-menu.el-menu--horizontal{
	border-bottom:none
}

</style>


