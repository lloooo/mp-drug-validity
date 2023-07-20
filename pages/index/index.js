var util = require("../../utils/util")
Page({

        /**
         * 页面的初始数据
         */
        data: {
            now_time: "",
            SY: "",
            SM: "",
            SD: "",
            decday: "",
            SY2: "",
            SM2: "",
            SD2: "",
            SY3: "",
            SM3: "",
            SD3: "",
            result1: "",
            result1Hidden: true,
            result2: "",
            result2Hidden: true,
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad(options) {
            var page = this;

            setInterval(() => {
                var DATE = util.formatTime(new Date());
                this.setData({
                    now_time: DATE
                })
            }, 1000);

        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady() {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow() {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide() {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload() {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh() {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom() {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage() {

        },

        cala() {
            let y = this.data.SY;
            let m = this.data.SM;
            let d = this.data.SD;
            let ddd = this.data.decday;

            if (y && m && d && ddd) {
                if (m > 12 || d > 31) {
                    wx.showModal({
                        title: "提示",
                        content: "请输入正确的日期",
                        showCancel: false
                    })
                    return
                }

                let ttt = new Date(y, m - 1, d - 1).getTime() + ddd * 24000 * 3600;

                let theday = new Date();
                theday.setTime(ttt);

                let result1 = theday.getFullYear() + "-" + (1 + theday.getMonth()) + "-" + theday.getDate();
                this.setData({
                    result1: result1,
                    result1Hidden: false
                })
            } else {
                wx.showModal({
                    title: "提示",
                    content: "请输入正确的日期",
                    showCancel: false
                })
            }

        },

        calb() {
            let y2 = this.data.SY2;
            let m2 = this.data.SM2;
            let d2 = this.data.SD2;

            let y3 = this.data.SY3;
            let m3 = this.data.SM3;
            let d3 = this.data.SD3;

            if (y2 && m2 && d2 && y3 && m3 && d3) {
                let day2 = new Date(y2, m2 - 1, d2);
                let day3 = new Date(y3, m3 - 1, d3);
                if (m2 > 12 || d2 > 31 || m3 > 12 || d3 > 31) {
                    wx.showModal({
                        title: "提示",
                        content: "请输入正确的日期",
                        showCancel: false
                    })
                    return
                }


                let result2 = (day3 - day2) / 86400000;
                this.setData({
                    result2: result2,
                    result2Hidden: false
                })
            } else {
                wx.showModal({
                    title: "提示",
                    content: "请输入正确的日期",
                    showCancel: false
                })
            }
        },
    }
)