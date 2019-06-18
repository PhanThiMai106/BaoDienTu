var db = require('../utils/db');

module.exports = {
  all: () => {
    return db.load('select * from categories');
  },

  allWithDetails: () => {
    // return db.load(`
    //   select c.CatID, c.CatName, count(p.ProID) as num_of_products
    //   from categories c left join products p on c.CatID = p.CatID
    //   group by c.CatID, c.CatName
    // `);
    return db.load('SELECT * from categories c left JOIN articles a on c.CaID = a.category');

  },

  single: id => {
    return db.load('select * from categories where CaId = ' + id);
  },

  add: entity => {
    return db.add('categories', entity);
  },

  update: entity => {
    return db.update('categories', 'CaId', entity);
  },

  delete: id => {
    return db.delete('categories', 'CaId', id);
  },

};
