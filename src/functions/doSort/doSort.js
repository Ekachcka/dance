function doSort(Sort, id, peopleData) {
  const arr = [];
  for (let i = 0; i < peopleData.woman.length; i++) {
    for (let j = 0; j < peopleData.man[id].partner.length; j++) {
      if (i == peopleData.man[id].partner[j]) {
        arr.push(peopleData.woman[i]);
      }
    }
  }
  for (let i = 0; i < peopleData.woman.length; i++) {
    if (Sort == "id") {
      arr.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      });
      console.log(arr);
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
      console.log(arr);
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
      console.log(arr);
    }
  }
  return arr;
}

export default doSort;
