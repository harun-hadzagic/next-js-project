import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <div>
      <MeetupDetail
        title="A Second Meetup"
        image="https://static.independent.co.uk/2023/06/23/16/iStock-1483998656.jpg"
        address="Some address 5, 12345 Some City"
        description="This is the Second meetup"
      />
    </div>
  );
};

export default MeetupDetails;
