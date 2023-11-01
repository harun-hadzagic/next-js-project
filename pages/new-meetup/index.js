import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import React from "react";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();
  const onAddMeetupHandler = async (enteredMeetupData) => {
    const respons = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await respons.json();

    console.log(data);
    router.push("/");
  };
  return (
    <React.Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add your own meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </React.Fragment>
  );
};

export default NewMeetupPage;
