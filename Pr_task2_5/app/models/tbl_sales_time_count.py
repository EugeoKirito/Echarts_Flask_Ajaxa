from app.extensions import db

class Tbl_Sales_Time_Count(db.Model):
    __tablename__ = 'tbl_sales_time_count_copy'
    fld_index = db.Column(db.Integer,primary_key=True)
    fld_phone_name = db.Column(db.String(256),unique=True)
    fld_sales_time = db.Column(db.Date,unique=True)
    fld_sale_count = db.Column(db.Integer,unique=True)