const http = new easyHTTP();

http.get('https://jsonplaceholder.typicode.com/users') 
  .then(data => console.log(data))
  .catch(err => console.log(err));

// const data = {
//   name: "Abrahab Graham",
//   username: "Brad",
// };

// http.delete('https://jsonplaceholder.typicode.com/users/1')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));