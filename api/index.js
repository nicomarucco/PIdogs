//         ┏┓ 　　┏┓ 
//　　　┏━━┛┻━━━━━┛┻━━┓ 
//　　　┃　　　　　  　┃ 　
//　　　┃━　　━━　　 　┃ 
//　  ████━████       ┃
//　　　┃　　　　　  　┃ 
//　　　┃  ━━━┻　   　┃
//　　　┃　　　　　  　┃ 
//　　　┗━━━┓　 　 ┏━━┛
//　　　　　┃　　　┃　　　　　　　　　　　
//　　　　　┃　　　┃ 
//　　　　　┃　　　┃　　　　+ Codes are far away from bugs with the animal protecting　+　　
//　　　　　┃　　　┃ 　
//　　　　　┃　　　┃
//　　　　　┃　　　┃　　　　　　　　　　　
//　　　　　┃　 　 ┗━━━━━┓ 
//　　　　　┃ 　　　  　　┣┓
//　　　　　┃ 　　　　　　┏┛
//　　　　　┗━┓┓┏━━┳┓┏━━━┛ 
//　　　　　　┃┫┫　┃┫┫
//　　　　　　┗┻┛　┗┻┛
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
//conn.sync({ froce: true }).then(() => { //force "reset" | alter "aware of changes"
conn.sync({ alter: true }).then(() => { //force "reset" | alter "aware of changes"
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
