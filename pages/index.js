import { useEffect, useState } from "react";
import MeetUpList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "1",
    title: "A First Meetup",
    image:
      "https://cdn.vox-cdn.com/thumbor/CRqJoRaVIKgea8ySXvbzJm19n7A=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13335435/NorthBroadSt_Landscape_1_M.Edlow.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is the first meetup",
  },
  {
    id: "2",
    title: "A Second Meetup",
    image:
      "https://static.independent.co.uk/2023/06/23/16/iStock-1483998656.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is the Second meetup",
  },
  {
    id: "3",
    title: "A Third Meetup",
    image:
      "https://i.natgeofe.com/n/73d9e4e3-4884-4e93-ac41-6be6a90079f5/mexico-city-travel%20(1).jpg?w=2880&h=1920",
    address: "Some address 5, 12345 Some City",
    description: "This is the Third meetup",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetUpList meetups={loadedMeetups} />;
};

export default HomePage;
