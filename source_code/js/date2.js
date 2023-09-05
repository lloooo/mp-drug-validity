var hzWeek= new Array("日","一","二","三","四","五","六","日");

//获取星期
function cweekday(wday)
{return hzWeek[wday];}


function cala()
{
y=document.getElementById("SY").value;
m=document.getElementById("SM").value;
d=document.getElementById("SD").value;
ddd=document.getElementById("decday").value;

if( y && m && d && ddd ) {
    if( m >12 || d > 31) {
        alert('请输入正确的日期')
        return
    }
    
    ttt=new Date(y,m-1,d).getTime()+ddd*24000*3600;
    
    theday=new Date();
    theday.setTime(ttt);
    
    document.getElementById("result1").innerHTML=theday.getFullYear()+"-"+(1+theday.getMonth())+"-"+theday.getDate();
    document.getElementById('bottom_result').style.display='block'
}else {
    alert('请输入正确的日期')
}


}


