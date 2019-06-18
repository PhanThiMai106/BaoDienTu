var db = require('../utils/db');

module.exports = {
  all: () => {
    return db.load('select * from articles');
  },

  allWithLimit: (limit, offset)=>{ 
    return db.load('select * from articles limit ' + limit + ' offset '  + offset);
  },
  allByCa: id => {
    return db.load('select * from articles where category = '+ id) ;
},

allByState: state => {
  return db.load('select * from articles a left join users u on a.Author = u.UserID where ArStatus = '+ state) ;
},

  pageByCa: (caId, limit, offset) => {
    return db.load('select * from articles where category = ' + caId+ ' limit ' + limit + ' offset '  + offset);
  },

  count: () => {
    return db.load('select count(*) as total from articles' );
  },

  countByCa: caId => {
    return db.load(`select count(*) as total from articles where category = ` + caId);
  },

  single: id=> {
    return db.load('select * from articles where ArID = '+ id);
},

 add:entity => {
    return db.add('articles', entity);
},

update : entity =>{
    return db.update('articles', 'ArID', entity);
},

  delete : id =>{
    return db.delete('articles', 'ArID', id);
},
};
