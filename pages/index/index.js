//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    wx.request({
      url: 'http://www.movie.1808a.com/home/Movie/index',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        // console.log(res.data.data)
        this.setData({
          movie:res.data.data
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
  
})
