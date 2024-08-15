const getFetchData = async () => {
    console.log("getting data...");

    let res = await fetch("https://jsonplaceholder.typicode.com/comments")
    // console.log(res);
    let data = await res.json();
    console.log(data);
    let fData = data.filter((obj) => {
          
        return obj.id >= 100 && obj.id < 150;
    });

    console.log(fData);


}
getFetchData();

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))