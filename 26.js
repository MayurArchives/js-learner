const getFetchData = async () => {
    console.log("getting data");

    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(res);
    let data = await res.json();
    console.log(data);
    // let fdata = data.filter((obj) => {
    //     let el = obj.id > 6 && obj.id < 8
    //     return el;
    // });

    //  let fname = data[6].name.split(" ");
    // console.log(fname);
    // let firstName = fname[0];
    // console.log(firstName);

    let fname = data[0].email.split("@");
    console.log(fname);
    let username = fname[0];
    console.log(username.split("").reverse().join(""), username);
    let str = "";
    for (let i = username.length - 1; i >= 0; i--) {
        str += username[i];
    }
    console.log(str);
};
getFetchData();