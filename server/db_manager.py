# -*- coding: utf-8 -*-
from sqlalchemy import create_engine,func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column,Integer,String,Text,DateTime,desc
from sqlalchemy.orm import sessionmaker
from datetime import datetime
import json


engine = create_engine('sqlite:///note.db', echo=False)
Base    = declarative_base()
Session = sessionmaker(bind=engine)

class Note(Base):
    __tablename__ = 'note'
    id       = Column(Integer, primary_key=True)
    name     = Column(String(64), nullable=False)
    imageurl = Column(Text(""), nullable=False)
    content  = Column(Text(""), nullable=False)
    pass

    @staticmethod
    def get_stuct():
        return ['name', 'content', 'pic']


class Article(Base):
    __tablename__ = 'article'
    id       = Column(Integer, primary_key=True)
    title    = Column(Text(""), nullable=False)
    content  = Column(Text(""), nullable=False)
    pass

    @staticmethod
    def get_detail_stuct():
        return ['title', 'content']
    
    def get_list_stuct():
        return ['id', 'title']


class ArticleManager():
    def __name___(self):
        pass

    def get_list_json_obj(self, list):
        json_obj = []
        for tmp in list:#todo 这里太耦合，应想个办法改掉
            json_obj.append(dict(zip(Article.get_list_stuct()
                    , [tmp.id, tmp.title])))
        pass
        return json_obj


    def get_list_json(self):
        session = Session()
        rows = session.query(Article).order_by(desc(Article.id)).all()
        session.close()
        ret = ''

        while True:
            if 0 == len(rows):
                break

            json_obj = self.get_list_json_obj(rows)
            if None == json_obj:
                break

            ret = json.dumps(json_obj)
            break
            pass

        return ret
        pass

    def get_detail_json_obj(self, rows):
        json_obj = []
        for tmp in rows:#todo 这里太耦合，应想个办法改掉
            json_obj.append(dict(zip(Article.get_detail_stuct()
                    , [tmp.title, tmp.content])))
        pass
        return json_obj
        pass

    def get_detail_json(self, id):
        session = Session()
        rows = session.query(Article).filter_by(id=id).all()
        session.close()
        ret = ''

        while True:
            if 0 == len(rows):
                break

            json_obj = self.get_detail_json_obj(rows)
            if None == json_obj:
                break

            ret = json.dumps(json_obj)
            break
            pass

        return ret
        pass


class DBManager():

    def __name___(self):
        pass


    def get_max_id(self):
        id = 1
        session = Session()
        #todo 这里取最大值的方法应该不是最好的方式
        query_res = session.query(Note).order_by(desc(Note.id)).all()
        if len(query_res) != 0:
            id = query_res[0].id
        session.close()
        return id
        pass

    def add_note(self, name, content, imageurl):
        ret = False
        while True:

            if None == name \
                or None == content \
                or None == imageurl:
                break

            new_id = 1 + self.get_max_id()

            note    = Note()
            note.id = new_id
            note.name     = name
            note.content  = content
            note.imageurl = imageurl

            session = Session()
            session.add(note)
            session.commit()
            session.close()

            ret = True
            break
            pass

        return ret
        pass


    def get_list_json_obj(self, list):
        json_obj = []
        for tmp in list:#todo 这里太耦合，应想个办法改掉
            json_obj.append(dict(zip(Note.get_stuct()
                    , [tmp.name, tmp.content, tmp.imageurl])))
        pass
        return json_obj


    def get_list_json(self):
        session = Session()
        rows = session.query(Note).order_by(desc(Note.id)).all()
        session.close()
        ret = ''

        while True:
            if 0 == len(rows):
                break

            json_obj = self.get_list_json_obj(rows)
            if None == json_obj:
                break

            ret = json.dumps(json_obj)
            break
            pass

        return ret
        pass


Base.metadata.create_all(engine)
db_manager      = DBManager()
article_manager = ArticleManager()


if __name__ == "__main__":
    print('我在手动执行这个程序...')