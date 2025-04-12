const xhr = new XMLHttpRequest();

//methods to send/receive message to backend 

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); //asynchronous code

//We can send different message/request to backend using URL path 

//Types of data the backend can respond with are 
//Text , JSON , HTML , Image