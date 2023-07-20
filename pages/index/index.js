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
            tableContents : `
<section class="section">
        <h3>附1：院感相关要求</h3>
        <table class="table">
            <thead>
            <tr>
                <td colspan="4">医院消毒物品与无菌物品管理要求</td>
            </tr>
            </thead>
            <thead>
            <tr>
                <th>物品或名称</th>
                <th>规 格</th>
                <th>使用时限</th>
                <th>开瓶举例</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>抽出的药液和配制好的静脉输注用无菌液体</td>
                <td></td>
                <td>≤2h</td>
                <td></td>
            </tr>
            <tr>
                <td>启封抽吸的各种溶媒</td>
                <td></td>
                <td>≤24h</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>无菌棉球、纱布的灭菌包装一经打开</td>
                <td></td>
                <td>≤24h</td>
                <td></td>
            </tr>
            <tr>
                <td>干罐储存无菌持物钳</td>
                <td></td>
                <td>≤4h</td>
                <td></td>
            </tr>
            <tr>
                <td>四环牌碘伏消毒液</td>
                <td>0.5%60ml/瓶</td>
                <td>≤7天</td>
                <td>2017</td>
            </tr>
            <tr>
                <td>过氧化氢溶液</td>
                <td>3%100ml/瓶</td>
                <td>≤7天</td>
                <td>2/7-8/7</td>
            </tr>
            <tr>
                <td>酒精</td>
                <td>75%100ml/瓶</td>
                <td>≤7天</td>
                <td></td>
            </tr>
            <tr>
                <td>安尔碘皮肤消毒剂</td>
                <td>40ml/瓶</td>
                <td>≤7天</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>四环牌碘伏消毒液</td>
                <td>0.5% 500ml/瓶</td>
                <td>≤30天</td>
                <td>2017</td>
            </tr>
            <tr>
                <td>酒精</td>
                <td>75% 500ml/瓶</td>
                <td>≤30天</td>
                <td>1/7-30/7</td>
            </tr>
            <tr>
                <td>碘酊</td>
                <td>2% 500ml/瓶</td>
                <td>≤30天</td>
                <td></td>
            </tr>
            <tr>
                <td>葡泰牌2%葡萄糖酸氯己定醇消毒液</td>
                <td>500ml/瓶</td>
                <td>≤30天</td>
                <td></td>
            </tr>
            <tr>
                <td>健之素消毒泡腾片</td>
                <td>应现用现配，并在每次配制后进行浓度监测，符合要求后方可使用</td>
                <td>≤24h（配制后）</td>
                <td></td>
            </tr>
            </tbody>
            <thead>
            <tr>
                <td colspan="4">手消毒剂开瓶后使用有效期</td>
            </tr>
            </thead>
            <thead>
            <tr>
                <th>名称</th>
                <th>规格</th>
                <th>开瓶后有效期限</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>普瑞来净手消毒液</td>
                <td>354ml/瓶</td>
                <td>≤30天</td>
                <td>2017</td>
            </tr>
            <tr>
                <td>洁芙柔免洗手消毒凝胶</td>
                <td>500ml/瓶</td>
                <td>≤30天</td>
                <td>1/7-30/7</td>
            </tr>
            <tr>
                <td>爱护佳免洗泡沫型手消毒液</td>
                <td>300ml/瓶</td>
                <td>≤30天</td>
                <td></td>
            </tr>
            <tr>
                <td>爱护佳免洗泡沫型手消毒液</td>
                <td>750ml/瓶</td>
                <td>≤30天</td>
                <td></td>
            </tr>
            <tr>
                <td>爱护佳免洗外科手消毒液</td>
                <td>1000ml/瓶</td>
                <td>≤30天</td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </section>
    <section class="section">
        <h3>附2：胰岛素效期表</h3>
        <table class="table">
            <thead>
            <tr>
                <th>胰岛素名称</th>
                <th>规格</th>
                <th>开启后效期</th>
                <th>备注</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>普通胰岛素注射液</td>
                <td>10ml/400U</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>诺和灵R笔芯</td>
                <td>3ml/300u</td>
                <td>6周</td>
                <td>★</td>
            </tr>
            <tr>
                <td>诺和灵R注射液</td>
                <td>10ml/400U</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>诺和灵30R笔芯</td>
                <td>3ml/300u</td>
                <td>6周</td>
                <td>★</td>
            </tr>
            <tr>
                <td>诺和灵30R注射液</td>
                <td>10ml/400U</td>
                <td>6周</td>
                <td>★</td>
            </tr>
            <tr>
                <td>诺和灵N笔芯</td>
                <td>3ml/300u</td>
                <td>6周</td>
                <td>★</td>
            </tr>
            <tr>
                <td>诺和灵N注射液</td>
                <td>10ml/400U</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>诺和灵50R笔芯</td>
                <td>3ml/300u</td>
                <td>6周</td>
                <td>★</td>
            </tr>
            <tr>
                <td>优泌林笔芯（常规型）</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>优泌林R笔芯</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>优泌林N笔芯</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>优泌林70/30笔芯</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>诺和锐笔芯（门冬）</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>诺和锐30（门冬30）笔芯</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>甘精胰岛素</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>地特胰岛素</td>
                <td>3ml/300u</td>
                <td>6周</td>
                <td>★</td>
            </tr>
            <tr>
                <td>优泌乐笔芯</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>优泌乐25R笔芯</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            <tr>
                <td>优泌乐50R笔芯</td>
                <td>3ml/300u</td>
                <td>4周</td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </section>
    <div>
        滦平县医院-骨二科-唐艳娇
    </div>
`
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