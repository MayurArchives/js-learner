const getFetchData = async() => {
    console.log("getting data...");


    let res= await fetch("https://jsonplaceholder.typicode.com/albums")
  //  console.log(res);
    let data = await res.json();
    console.log(data);
    let fdata =data.filter ((obj) =>{
   
    return obj.userId >=3 && obj.userId<=9
    });
    console.log(fdata);
    
};
getFetchData();