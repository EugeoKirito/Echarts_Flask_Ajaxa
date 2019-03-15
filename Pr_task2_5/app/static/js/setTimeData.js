//timeChart
function setTimeData(timeArr,nameBarr,dateArr,lineOneData,lineTwoData,lineThreeData) {
 for(var i=0;i<timeArr[0].length;i++){
    if(i<=4){
        lineOneData.push(timeArr[2][i]);
        lineTwoData.push(0);
        lineThreeData.push(0);
    }
    if(i==6){
        lineOneData.push(timeArr[2][i]);
        lineThreeData.push(0);
    }
    if(i==5){
        lineTwoData.push(timeArr[2][i]);
    }
    if(nameBarr.indexOf(timeArr[0][i])<0){
        nameBarr.push(timeArr[0][i]);
    }
    if(dateArr.indexOf(timeArr[1][i])<0){
        dateArr.push(timeArr[1][i]);
    }
    if(nameBarr.indexOf(timeArr[0][i])==0 && i>6){
        if(nameBarr.indexOf(timeArr[0][i])==0){
            lineOneData.push(timeArr[2][i]);
        } else {
            lineOneData.push(0);
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