const getFetchData = async () => {
    console.log("getting data");

    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    // console.log(res);
    let data = await res.json();
    console.log(data);
    let fdata = data.filter((obj) => {
        let el = obj.id > 6 && obj.id < 8
        return el;
    });
    console.log(fdata);
};
getFetchData();