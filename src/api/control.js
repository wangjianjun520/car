import request from '@/axios/request'
const ip = '192.168.1.200'
const port = '12345'
const api ="/api/"
// const api = "/"

export default {
// http://ip:port/view/server/status?id=1&type=1&status=0 
  controlMec(id,type,status) {
    return request({
      url: `http://${ip}:${port}/view/server/status?id=${id}&type=${type}&status=${status}`,
      method: 'get'
    })
  },

// http://127.0.0.1:22019/view/server/latency?id=0&add=5    // 增加5 
// http://127.0.0.1:22019/view/server/latency?id=0&add=-5   
controlFuzai(id,add) {
    return request({
      url: `http://${ip}:${port}/view/server/latency?id=${id}&add=${add}`,
      method: 'get'
    })
  },

// http://ip:port/view/server/info
getFuzai() {
    return request({
      url: `${api}view/server/info`,
      method: 'get'
    })
  },

// http://192.168.47.221:22019/view/current
getCurrent(){
    return request({
        url: `${api}view/current`,
        method: 'get'
      })
},

  // getCurrent(){
  //   return request({
  //       url: `http://${ip}:${port}/view/current`,
  //       method: 'get'
  //     })
  // },


  // http://127.0.0.1:22019/view/cfn?status=1   
  changeAll(status){
    return request({
      url: `http://${ip}:${port}/view/cfn?status=${status}`,
      method: 'get'
    })
  }



}

