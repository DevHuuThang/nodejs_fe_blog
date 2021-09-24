const express = require("express");
const app = express();
const port = 3000;

app.get('/' , (req , res)=>{
  var a = port;
   res.send('Hello from simple server :)')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

