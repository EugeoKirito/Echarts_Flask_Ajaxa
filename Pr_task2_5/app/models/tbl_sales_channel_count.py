from app.extensions import db

class Tbl_Sales_Channel_Count(db.Model):
    __tablename__ = 'tbl_sales_channel_count_copy'
    fld_index = db.Column(db.Integer,primary_key=True)
    fld_phone_name = db.Column(db.String(256),unique=True)
    fld_sales_channel = db.Column(db.String(256),unique=True)
    fld_sale_count = db.Column(db.Integer,unique=True)