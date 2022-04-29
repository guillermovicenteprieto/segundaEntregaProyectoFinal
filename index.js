const mongoose = require('mongoose');
const app = require('./app/app')
require('dotenv').config()

//const {admin, serviceAccount} = require('.app/config/config')

const PORT = process.env.PORT
const urlBase = process.env.DB

if (process.env.AMBIENTE === "mongo") mongoose.connect(urlBase)
// if (process.env.AMBIENTE === "firebase") admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "http://ecommerce-backend-262b9.firebaseio.com"
// })




//mongoose.connect(urlBase);


// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//       databaseURL: "http://ecommerce-backend-262b9.firebaseio.com"
//   });

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))