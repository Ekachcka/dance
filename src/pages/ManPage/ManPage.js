import React from "react";
import GetManId from "../../components/people/GetManId/GetManId";
import GetWomanId from "../../components/people/GetWomanId/GetWomanId";
import { useParams } from "react-router-dom";
import GetWomenIds from "../../components/people/GetWomenIds/GetWomenIds";
function ManPage({ peopleData }) {
  const params = useParams();
  return (
    <>
      {params.p == "M" ? (
        <>
          <GetManId id={params.id} peopleData={peopleData} />
          <GetWomenIds id={params.id} peopleData={peopleData} />
        </>
      ) : (
        <>
          <GetWomanId id={params.id} peopleData={peopleData} />
        </>
      )}
    </>
  );
}
export default ManPage;
