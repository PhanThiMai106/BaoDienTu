var db = require('../utils/db');
 
module.exports ={
    all: () => {
        return db.load('select * from users') ;
    },
    single: id=> {
        console.log('select * from users where UserID = '+ id);
        return db.load('select * from users where UserID = '+ id);
    },
    update : entity =>{
        return db.update('users', 'UserID', entity);
    },

}