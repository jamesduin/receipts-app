var express = require('express'),
    app = express(),
    port = 8081,
    bodyParser = require('body-parser');
    
var receiptRoutes = require("./routes/receipts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/receipts', receiptRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT 8081");
})
    
    