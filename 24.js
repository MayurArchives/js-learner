const getFetchData = async () => {
    console.log("getting data...");

    let res = await fetch("https://jsonplaceholder.typicode.com/comments")
    // console.log(res);
    let data = await res.json();
    console.log(data);
}
getFetchData();

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))