// pages/info/info.js
Page({
  data: {
    mid:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    wx.request({
      url: 'http://www.movie.1808a.com/home/Movie/info',
      data: {id:options.id},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        console.log(res.data.data)
        this.setData({
          info:res.data.data.data,
          comment:res.data.data.commont,
          count:res.data.data.count
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  formSubmit(e) {
    console.log(e)
    let mid = e.detail.target.dataset.id
    let text = e.detail.value.text
    let count = 0
    wx.request({
      url: 'http://www.movie.1808a.com/home/Movie/addData',
      data: {mid:mid,uid:1,comment:text},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        console.log(res);
        this.setData({
          comment:res.data.data.comment,
          count:res.data.data.count
        })
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
   /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})