const getFetchData = async () => {
    console.log("gettin data...");


    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await res.json();
    console.log(data);
    let fData = data.filter((obj) => {
        return obj.id >= 120 && obj.id < 180;

    });
    console.log(fData);

}
getFetchData();



