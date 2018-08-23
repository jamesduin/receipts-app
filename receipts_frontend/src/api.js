const APIURL = '/api/receipts/'




export async function getReceipts() {
  return fetch(APIURL)
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   }) 
}





export async function createReceipt(val){
  console.log(val);
  return fetch(APIURL, {
     method: 'post',
     headers: new Headers({
       'Content-Type': 'application/json',
     }),
    body: JSON.stringify({name: val.inputName, value: val.inputAmount})
   })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   })
}





export async function removeReceipt(id){
  const deleteURL = APIURL + id;
   return fetch(deleteURL, {
     method: 'delete'
   })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   })
}




export async function updateReceipt(receipt) {
  const updateURL = APIURL + receipt._id;
   return fetch(updateURL, {
     method: 'put',
     headers: new Headers({
       'Content-Type': 'application/json',
     }),
     body: JSON.stringify({completed: !receipt.completed})
   })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   })
}






