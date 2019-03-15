import json
from flask import Blueprint, render_template, jsonify, request
from app.models import Tbl_Sales_Time_Count,Tbl_Sales_Channel_Count,Tbl_User_Score_Count
from app.extensions import db
from sqlalchemy import *

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return render_template('/main/index.html')

@main.route('/index/',methods=['POST','GET'])
def display():
    tstc_res = get_sales_time_count()
    tscc_res = get_sales_channel_count()
    tusc_res = get_user_score_count()


    # a=request.get_json()
    # print(a)

    timeArr=[[i.fld_phone_name for i in tstc_res ],[i.fld_sales_time for i in tstc_res ],[i.fld_sale_count for i in tstc_res]]
    channelArr=[[i.fld_phone_name for i in tscc_res ],[i.fld_sales_channel for i in tscc_res  ],[i.fld_sale_count for i in tscc_res]]
    scoreArr=[[i.fld_phone_name for i in tusc_res],[i.fld_user_score for i in tusc_res ]]



    return jsonify(timeArr,channelArr,scoreArr)

    # return json.dumps(JsonData)
    # return render_template('/main/index.html',tstc_res=tstc_res,tscc_res=tscc_res,tusc_res=tusc_res)

#查询Tbl_Sales_Time_Count类中所有数据，按fld_sales_time字段升序排列
def get_sales_time_count():
    tstc_res=Tbl_Sales_Time_Count.query.order_by('fld_sales_time')

    return tstc_res



#查询Tbl_Sales_Channel_Count类中所有数据，按fld_sale_count字段降序排列，并截取前十条数据
def get_sales_channel_count():

    tscc_res=Tbl_Sales_Channel_Count.query.order_by(desc('fld_sale_count')).limit(10)
    return tscc_res
#查询Tbl_User_Score_Count类中所有数据，按fld_sale_count字段降序排列，并截取前十条数据
def get_user_score_count():
    tusc_res =Tbl_User_Score_Count.query.order_by(desc('fld_sale_count')).limit(10)

    return tusc_res





