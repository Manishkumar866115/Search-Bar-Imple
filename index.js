const express=require("Express");
const cors=require("cors");
const mysql=require('mysql');
const stem=require('./stem');
const match=require('./match');
const unmatch = require("./unmatch.js");

const app=express();
app.use(cors());

const client = new mysql.createConnection({
  host: 'localhost',
  user : 'root',
  password : 'password',
  database : 'flickzeeasign'
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected to the database')
    }
})

const port=3000;
app.listen(port,()=>{
    console.log("Listening on the port :"+port);
});

app.get('/api/search/:id',(req,res)=>{
  var arr2=[]
  var s2=stem(req.params.id)
  for(let i=0;i<26;i++)
    arr2.push(0);
  for(let i=0;i<s2.length;i++)
    arr2[ s2.charCodeAt(i)-97]+=1;
  
  client.query("Select title,year from movies",(err,rows,fields)=>{
    if(err){
      console.log(err);
    }else{
      var arr=[]
      for(let i in rows)
        arr.push( { "title" : rows[i].title , "year": rows[i].year , "match" : match(stem(rows[i].title),arr2) , "unmatch" : unmatch(rows[i].title,stem(rows[i].title),arr2,req.params.id) })
      
      //console.log(arr.length)
      arr.sort(function(a,b){ 
          return b.unmatch-a.unmatch;
      })
      res.send(arr.splice( arr.length-10,arr.length).reverse());
    }
  })
})

app.get('/',(req,res)=>{
  client.query("Select title from movies", (err,rows,fields)=>{
    if(err)
      console.log(err)
    else
      res.send(rows)
  })
})