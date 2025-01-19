async function fetchData(){
    // simulating a netwirk requeest
    const dataPromise = new Promise((resolve) => {
        setTimeout (()=>{
            resolve("Data recieved")},2000);
        });
    
        // Pausing until the promise is resolved
    const data = await dataPromise;
    console.log(data);// Output: 'Data received'
    console.log('reached to the end');
}

fetchData();