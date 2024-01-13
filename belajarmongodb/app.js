
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    // await client.db("myfirstdata").collection('databarang')
    // .insertOne({
    //     nama:"sangar",
    //     email:"martin@gmail.com"
    // })
    const data = await client.db('myfirstdata').collection('databarang').find({
      nama:'martin'
    }).toArray()
    console.log(data)

    await client.db('myfirstdata').collection('databarang').updateOne(
      {
        nama:"sangar",
      },
      {
        $set: {
          nama:'achmad',
        }
      }
    )
    console.log("databerhasil di ubah ")

    const update = await client.db('myfirstdata').collection('databarang').deleteOne(
      {
        nama:"martin",
      },
      {
        $set: {
          nama:'achmad',
        }
      }
    )
    console.log("databerhasil di ubah ")


    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
