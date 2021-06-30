// const express = require('express');
// const router = express.Router();
// const basePath = '/';
// const db = require('./../database.json');

// router.get(basePath, (req, res) => {
//     //copiar el comentario
//     const filter = req.query;

//     let result = db.filter(item => {
//         for (let key in filter){
//             if (item[key] === undefined || item[key] !== filter[key])
//             return false;
//         }
//         return true;
//     })
//     res.status(200).json('Hello World');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const basePath = '/';
const db = require('./../database.json'); // se importa el archivo de base de datos

router.get(basePath, (req, res) => {
  // se obtienen los parametros de filtrado y le guardan en la constante 'filter'
  const filter = req.query

  // se aplica el filtro de a los datos que se encuentran en la constante db
  let result = db.filter(item => {
    for (let key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  });

  // se procede a realizar la respuesta de la petición http
  res.status(200).json(result);
});

module.exports = router;
