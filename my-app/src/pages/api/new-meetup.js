import { MongoClient } from 'mongodb'
// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    // TODO: Note: add error handling - try/catch
    const data = req.body

    // destructure. However, we don't need this when using collection.insertOne...
    // const { title, image, address, description } = data

    const client = await MongoClient.connect(
      'mongodb+srv://johnsonsg:6LOAXi8KulHpceIa@cluster0.wvnjnk4.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)
    console.log(result)

    client.close()

    res.status(201).json({ message: 'Meetup Inserted!' })
  }
}

export default handler
