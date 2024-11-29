//Oef 
1

function calculateSquare(num, callback) {
  callback(num);
}

function squared(num) {
  const squared = num * num;
  console.log(squared);
}

calculateSquare(4, squared);

//2. Oefening 2

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Voorbeeld data");
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data);
      const processedData = data.toUpperCase();
      resolve(processedData);
    }, 1000);
  });
}

function displayResult(result) {
  console.log(result);
}

// fetchData()
//   .then((data) => processData(data))
//   .then((processedData) => displayResult(processedData))
//   .catch((error) => console.log(error))
//   .then((data) => processData(data))
//   .finally(() => console.log("Always"));

  //Met Promises -> .then(), catch(), finally()
    // Met Async = async - await keyword -> try ...catch / finally
    
async function handleData() {
    try {
        const data = await fetchData();  
        const processedData = await processData(data);
        displayResult(processedData);
    }
    catch(error) {
        console.log("Er ging iets mis", error);
    }
    finally {
        console.log("Always executed");
    }
}


handleData();