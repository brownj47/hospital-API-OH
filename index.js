const express = require("express");
const PORT =  process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`listening at http://localhost:${PORT}`)
})