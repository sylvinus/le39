var express = require('express'),
    path = require('path');

if (require.main === module) {
  var app = express();

  app.use(express.static(path.resolve(__dirname,'../static_files')));

  console.log("Started server on port "+parseInt(process.env.PORT,10));
  app.listen(parseInt(process.env.PORT,10));
}
