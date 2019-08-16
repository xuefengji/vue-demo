var express = require('express');
var fs = require('fs');
var path = require('path');


var app = express();

app.get('/api',function (req,res) {
  var file = path.join(__dirname,'model/newList.json');
  fs.readFile(file,(err, data) => {
    if (err) console.log(err) ;
    res.send(data);
  });
})
app.listen(3000);
