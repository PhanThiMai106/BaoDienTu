var db = require('../utils/db');
 
module.exports ={
    all: () => {
        return db.load('select * from categories') ;
    },
   
    single: id=> {
        return db.load('select * from categories where CaId = '+ id);
    },
    
     add:entity => {
        return db.add('categories', entity);
    },

    update : entity =>{
        return db.update('categories', 'CaId', entity);
    },

    delete : id =>{
        return db.delete('categories', 'CaId', id);
    },
}; 



