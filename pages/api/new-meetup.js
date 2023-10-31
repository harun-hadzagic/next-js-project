import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const {title, image, address, description} = data

    await MongoClient.connect(
      "mongodb+srv://admin:admin123@cluster0.isjw9kk.mongodb.net/meetups"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
