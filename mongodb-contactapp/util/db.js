
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://martinilham15:2Azct32sNLJqNgj2@myserver.aw1tteh.mongodb.net/myfirstdata?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      
    // Send a ping to confirm a successful connection
    const data = mongoose.model('contact',{
        nama: String,
        email: String
    })
    
    const databaru = new data({
        nama:'achmad',
        email:"achmad@gmail.com"
    })
    
    await databaru.save().then((res)=>console.log(res))
    
  } finally {
    // Ensures that the client will close when you finish/error
   
  }
}
run().catch(console.dir);
