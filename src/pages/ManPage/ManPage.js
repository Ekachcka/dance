import React from "react";
import GetManId from "../../components/people/GetManId/GetManId";
import GetWomanId from "../../components/people/GetWomanId/GetWomanId";
import { useParams } from "react-router-dom";
import GetWomenIds from "../../components/people/GetWomenIds/GetWomenIds";
function ManPage() {
  const params = useParams();
  return (
    <>
      {params.p == "M" ? (
        <>
          <GetManId id={params.id} />
          <GetWomenIds id={params.id} />
        </>
      ) : (
        <>
          <GetWomanId id={params.id} />
        </>
      )}
    </>
  );
}
export default ManPage;
