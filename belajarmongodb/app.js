
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://martinilham15:2Azct32sNLJqNgj2@myserver.aw1tteh.mongodb.net/?retryWrites=true&w=majority";
const dbName = "myfirstdata"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("myfirstdata").collection('databarang')
    .insertOne({
        nama:"martin",
        email:"martin@gmail.com"
    },(err,client)=>{
        if(err) {
            return console.log("eror")
        }
        return console.log("berhasil ditambah")
    })
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close(console.log("database connect"));
  }
}
run().catch(console.dir);
