const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000 ;
app.get('/', (req, res)=> res.send("API is Running at port 5000"));

app.listen(PORT, ()=>{
    console.log("Server started on port", PORT);
});