var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.writeHead(200,{'Content-Type': 'text/html'});
  fs.readFile('./index.html', null, function(error, data)
{
  if(error){
    res.write('File Note Found');
  }
  else{
    res.write(data);
  }
  res.end();
})

});

module.exports = router;
