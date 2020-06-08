const dbConnection = require('../../config/dbConnection');




module.exports = app => {

  const connection =dbConnection();


  connection.connect(function(err) {
    if (err) throw err;
    console.log('“##Successfully connected to MySQL container##”');
  });

  
  app.get('/', (req, res) => {
    
      res.render('news/news', {
      
      });
    });
  //selec posts
app.get('/vista1',(req,res) =>{
    connection.query('SELECT * FROM BDSpotify.AlbumesEscuchados_Fecha',(err,result) => {
        console.log(result);


       
    })
});

app.get('/vista2',(req,res) =>{
    connection.query('SELECT * FROM BDSpotify.canciones_mas_escuchadas;',(err,result) => {
        console.log(result);
       
    })
});

app.get('/vista3',(req,res) =>{
    connection.query('SELECT * FROM BDSpotify.reporte_ingreso_usuario;',(err,result) => {
        console.log(result);
       
    })
});

}
