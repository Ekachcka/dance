import React from "react";
import GetManS from "../../components/people/GetManS/GetManS";
function home({ peopleData }) {
  return (
    <>
      <GetManS peopleData={peopleData} />
    </>
  );
}
export default home;
