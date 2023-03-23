const express = require('express');
var cors = require('cors')
const app = express()
const port = 8000


app.use(cors())

// configre the .env file 
const dotenv = require('dotenv');
dotenv.config();

require('./DB.js')
const userRoute  = require('./routes/usersRoute')
const postsRoute  = require('./routes/postsRoute')
const commentsRoute  = require('./routes/commentsRoute')
const reviewsRoute  = require('./routes/reviewsRoute')
const creatorRoute  = require('./routes/creatorRoute')



app.use(express.json());
app.use("/users",userRoute)
app.use("/posts",postsRoute)
app.use("/comments",commentsRoute)
app.use("/creators",creatorRoute)



app.listen(port, () => {
    console.log(`app listening on port ${process.env.PORT} done `)
})



// error handelar 
app.use((err,req, res, next) => {
    err.statusCode = err.statusCode || 500 ;
    res.status(err.statusCode).json({
        status:"error",
        message:err.message  || "server error",
        err
    });
})

