
 var dict={}

function ajaxData(timeArr, channelArr,scoreArr) {
//此处ajax的路由是 /index/  此条路由只return 数据 , 真正的POST请求是在main.py 中的 def index函数中
//渲染的   所以 http://127.0.0.0:5000/index 没有POST的请求
//http://127.0.0.1:5000 有POST请求
//此ajax函数 是由/index/ 传给 / 路由

$.ajax({

        url:'/index/',
        type:'POST',
        async:false,
        data:JSON.stringify({'yeye':'y'}),
        dataType:'json',
        contentType:'appliction/json;charset=UTF-8',
        success:function (data) {

//             dict['one']=data[0];
//             dict['two']=data[1];
//             dict['three']=data[2];

                 timeArr=data[0];
                 channelArr=data[1];
                 scoreArr=data[2];







        }






})
 return [timeArr,channelArr,scoreArr]

}





