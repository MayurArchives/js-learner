const getFetchData = async () => {
    console.log("getting data...");
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    // console.log(res);
    let data = await res.json();
    console.log(data);
    let fData = data.filter((obj) => {
        return obj.id >= 110 && obj.id < 170;
    });
    console.log(fData);

}
getFetchData();

