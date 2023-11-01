import MeetUpList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import React from "react";
const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>NextJS Meetups</title>
        <meta
          name="description"
          content="Browse meetups in my first NextJS project"
        />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin123@cluster0.isjw9kk.mongodb.net/meetups"
  );

  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}

export default HomePage;
