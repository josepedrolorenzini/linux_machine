//https://rickandmortyapi.com/api/character/648
//https://youtu.be/PoRJizFvM7s?si=LOIGL5KRWk_ptkpk
const posts = [
  {title:'post One' , body: 'This is post one'},
   {title:'post One' , body: 'This is post one'}
];

function getPosts(){
  setTimeout(() => {
    let output = "" ; 
    posts.forEach((post,index) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  }, 1000)
}
//callback
// function createPost(post,callBack){
//   setTimeout(() => {
//     posts.push(post)
//     callBack()
//   },2000)
// }


function createPost(post){
 return new Promise((resolve , reject) => {
   setTimeout(() => {
     posts.push(post);
     const error = false;
     if(!error){
       resolve()
     }else{
       reject("error something went wrong")
     }
   },2000)
 })
}

// getPosts()
// createPost({title:'post Three' , body: 'This is post 3'} , getPosts)
createPost({title:'post Three' , body: 'This is post 3'} )
.then(getPosts)
.catch(err => console.log(err))

const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve,2000,'goodbye'))
const promise4 = fetch("https://rickandmortyapi.com/api/character/648")
Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values))


//async / await / fetch
async function init(){
    await createPost({title:'post Four' , body: 'This is post 3'} );
    getPosts();
}
init();

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

fetchUsers();
