from app.extensions import db

class Tbl_User_Score_Count(db.Model):
    __tablename__ = 'tbl_user_score_count_copy'
    fld_index = db.Column(db.Integer,primary_key=True)
    fld_phone_name = db.Column(db.String(256),unique=True)
    fld_user_score = db.Column(db.Float,unique=True)
    fld_sale_count = db.Column(db.Integer, unique=True)
