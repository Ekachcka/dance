function GetManId({ id, peopleData }) {
  const person = peopleData.people[id];
  return (
    <>
      <div>
        <h1>Мужчины</h1>
        <div>
          <h2>{person.name}</h2>
          <p>Возраст: {person.age}</p>
          <p>{person.shortDescription}</p>
          <p>{person.description}</p>
        </div>
      </div>
    </>
  );
}

export default GetManId;
