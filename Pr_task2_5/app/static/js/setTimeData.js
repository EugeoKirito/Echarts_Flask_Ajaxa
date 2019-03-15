//timeChart
function setTimeData(timeArr,nameBarr,dateArr,lineOneData,lineTwoData,lineThreeData) {


 for(var i=0;i<timeArr[0].length;i++){
    if(i<=4){
        lineOneData.push(timeArr[2][i]);  //如果index<4的全是荣耀手机
        lineTwoData.push(0);               //Iphone前五个都是没有 直接添加空值
        lineThreeData.push(0);              //小米前5个也是空值

    }
    if(i==6){
        lineOneData.push(timeArr[2][i]);  //index为6时 也是荣耀手机，此时时间按开始有重复值
        lineThreeData.push(0);
    }
    if(i==5){
        lineTwoData.push(timeArr[2][i]);  //当index为5时  是Iphone手机
    }
    if(nameBarr.indexOf(timeArr[0][i])<0){  //拿到重复的手机名字 => nameBarr为空 nameBarr.indexOf(timeArr[0][i]==-1)
        nameBarr.push(timeArr[0][i]);


    }
    if(dateArr.indexOf(timeArr[1][i])<0){    // 拿到重复时间的
        dateArr.push(timeArr[1][i]);

    }
    if(nameBarr.indexOf(timeArr[0][i])==0 && i>6){ // nameBarr=>['HuaWei','Iphone','XiaoMi']  遍历总TimeArr的手机名 ，从index为
                                                    //6开始，如果nameBarr含有(就是==0)
        if(nameBarr.indexOf(timeArr[0][i])==0){   //如果HuaiWei==HuaWei
            lineOneData.push(timeArr[2][i]);   // 添加 HuaWei的手机销量

        } else {
            lineOneData.push(0);    //如果没有 也就是那个月没卖 添加0
        }
    }
    if(nameBarr.indexOf(timeArr[0][i])==1 && i>6){
        if(nameBarr.indexOf(timeArr[0][i])==1){
            lineTwoData.push(timeArr[2][i]);
        } else {
            lineTwoData.push(0);
        }
    }
    if(nameBarr.indexOf(timeArr[0][i])==2 && i>6){
        if(nameBarr.indexOf(timeArr[0][i])==2){
            lineThreeData.push(timeArr[2][i]);
        } else {
            lineThreeData.push(0);
        }
    }
 }
}