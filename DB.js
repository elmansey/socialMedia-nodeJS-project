const mongoose = require('mongoose');
mongoose.connect(`${process.env.DB_URL}`)
.then(() => console.log('connected to database'))
.catch((err)=>{
	console.log(err)
	process.exit(1)
})





