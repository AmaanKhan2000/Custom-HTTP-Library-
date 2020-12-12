const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
//   if(err){
//     console.log(err)
//   }else {
//     console.log(posts);
//   }
// });
// const data = {
//   "title": "Post extra",
//   "body": "This is an added post"
// };

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// })

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
  if(err){
    console.log(err)
  }else {
    console.log(response);
  }
});