const getFetchData = async () => {
    console.log("getting data");
    let res = await fetch("https://jsonplaceholder.typicode.com/photos")
    // console.log(res);
    let data = await res.json();
    console.log(data);
    // let fdata = data.filter((obj) => {
    //     if(obj.id <= 20 && obj.id >= 10)
    //         return obj
    // });
    // console.log(fdata);

    let l = 0;
    let r = data.length - 1;
    let targetId = 15;
    // let found = false;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let midObj = data[mid];
        if (midObj.id === targetId) {
            console.log(midObj);
            // found = true;
            break;
        } else if (midObj.id < targetId) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }


};
getFetchData();