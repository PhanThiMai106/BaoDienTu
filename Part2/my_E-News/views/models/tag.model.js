var db = require('../utils/db');
 
module.exports ={
    all: () => {
        return db.load('select * from hashtag') ;
    },
   
    single: id=> {
        return db.load('select * from hashtag where HashID = '+ id);
    },
    
     add:entity => {
        return db.add('hashtag', entity);
    },

    update : entity =>{
        return db.update('hashtag', 'HashID', entity);
    },

    delete : id =>{
        return db.delete('hashtag', 'HashID', id);
    },
}; 



