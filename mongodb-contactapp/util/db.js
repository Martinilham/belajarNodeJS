const mongoose = require('mongoose')
const api = 'mongodb+srv://martinilham15:2Azct32sNLJqNgj2@myserver.aw1tteh.mongodb.net/myfirstdata?retryWrites=true&w=majority';


mongoose.connect(api);

const data = mongoose.model('databarang',{
    nama: String,
    email: String
})

const databaru = new data({
    nama:'martinus',
    email:"martinus@gmail.com"
})

databaru.save().then((res)=>console.log(res))