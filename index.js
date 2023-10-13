let express = require('express');
let app = express();
let port = 8080;
let path = require('path');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

//app.set('views', path.join(__dirname, '/views'));

app.listen(port, ()=>{
    console.log(`listening on port : ${port}`);
})

//route - 
app.get('/ig/:username', (req, res) => {
    let username = req.params.username;
    let instaData = require('./data.json');
    const data = instaData[username];
    console.log(data)
    res.render("instagram", { data : data});
    //res.render("instagram", { data: instaData[username] });
})