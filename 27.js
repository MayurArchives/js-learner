const getFetchData = async () => {
    console.log("getting data");
    let res = await fetch("https://jsonplaceholder.typicode.com/photos")
    console.log(res);
    let data = await res.json();
    console.log(data);
    let fdata = data.filter((obj) => {
        if(obj.id <= 20 && obj.id >= 10)
            return obj
    });
    console.log(fdata);

};
getFetchData();