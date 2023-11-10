import partnerData from "../../components/people/partner.json";

function doSort(Sort, id, peopleData) {
  const arr = [];
  const m = [],
    w = [];
  for (let i = 0; i < peopleData.people.length; i++) {
    if (peopleData.people[i].sex == "M") {
      m.push(peopleData.people[i]);
    } else {
      w.push(peopleData.people[i]);
    }
  }
  {
    let temp;
    for (let i = 0; i < partnerData.partner.length; i++) {
      if (partnerData.partner[i][0] == id) {
        temp = partnerData.partner[i];
      }
    }
    for (let i = 0; i < w.length; i++) {
      let wp = w[i].id;
      for (let j = 1; j < temp.length; j++) {
        if (wp == temp[j]) {
          arr.push(w[i]);
        }
      }
    }
  }
  for (let i = 0; i < w.length; i++) {
    if (Sort == "id") {
      arr.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      });
    }
    if (Sort == "age") {
      arr.sort((a, b) => {
        if (a.age < b.age) {
          return 1;
        }
        if (a.age > b.age) {
          return -1;
        }
      });
    }
    if (Sort == "name") {
      arr.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      });
    }
  }
  return arr;
}

export default doSort;
