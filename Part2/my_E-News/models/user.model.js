var db = require('../utils/db');

module.exports = {

  all: () => {
    return db.load('select * from users') ;// where  Kind != 4
},

single: id=> {
    return db.load('select * from users where UserID = '+ id);
},

allByKind: kind => {
    return db.load('select * from users where Kind = '+ '"'+kind+'"') ;
},
add:entity => {
    return db.add('users', entity);
},
delete : id =>{
    return db.delete('users', 'UserID', id);
},

 singleByUserName: userName => {
   
  console.log('select * from users where UserName = '+ userName);
    return db.load('select * from users where UserName = '+ '"'+userName+'"');
  },


  allWithLimit: (limit, offset)=>{ 
    return db.load('select * from users limit ' + limit + ' offset '  + offset);

  },
  count: () => {
    return db.load('select count(*) as total from users' );
  },
  // update: entity => {
  //   var id = entity.f_ID;
  //   delete entity.f_ID;
  //   return db.update('users', 'f_ID', entity, id);
  // },

};
