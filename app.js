const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const sequelize = require('./utils/database');
const cors = require('cors');
const adminRoutes = require('./routes/admin');
const product = require('./model/products');


app.use(cors());
app.use(bodyparser.json( { extended : false } ));

app.use('/admin',adminRoutes);

product
// .sync({force :true})
.sync()
.then((response)=>{
    console.log(response);
    app.listen(1000);
})
.catch(err=> console.log(err));