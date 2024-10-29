const getFetchData = async () => {
  console.log("getting data...");


  let res = await fetch("https://jsonplaceholder.typicode.com/albums")
  //  console.log(res);
  let data = await res.json();
  console.log(data);
  let fdata = data.filter((obj) => {

    return obj.userId >= 3 && obj.userId <= 10
  });
  console.log(fdata);

  fdata.forEach((obj) => {
    return obj.title >= 1 && obj.title <= 9
    // console.log("title", obj.title);
  });



};
getFetchData();
