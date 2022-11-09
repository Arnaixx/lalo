//import libraries
const express = require('express');
const sequelize = require('./utils/database');
const path = require('path');
const universidadRoutes = require('./routes/universidad');
const ivestigadorRoutes = require('./routes/investigador');
const proyectoDoctoradoRoutes = require('./routes/proyectoDoctorado');

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/universidad',universidadRoutes)
app.use('/investigador',ivestigadorRoutes)
app.use('/proyectoDoctorado',proyectoDoctoradoRoutes)


sequelize.sync({force:true})
    .then(()=>{
    console.log("Conexion existosa");    
    //launch app
    app.listen(8080,()=>{
        console.log("Servidor en linea");
    }); 
}).catch(error=>console.log(error))
    
