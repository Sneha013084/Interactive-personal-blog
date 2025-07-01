
//global variable
 let posts = [];
//All DOM elements
const form =document.getElementById ('blog-form');
const titleInput = document.getElementById("title");
const contentInput =document.getElementById('text-content');

const titleError= document.getElementById('title-error');
const contentError = document.getElementById('content-error');

const submitBtn = document.getElementById('submit-btn');
const postsDiv = document.getElementById('posts');
  let editingPostId = null;
//Load Posts from localStorage to the array

function loadPosts(){
    const savedPosts =localStorage.getItem('blogPosts');
    if(savedPosts){
        posts =JSON.parse(savedPosts);
    }else{
        posts=[];
    }
}
//Render Posts Function://

//Clear the Posts Area

function renderPosts(){
    
    postsDiv.innerHTML = '';


  // create a html element for each post and insert post data ,edit and delete button

    posts.forEach(post=> {
        const postElement= document.createElement('div');
        postElement.className ='post';
        postElement.dataset.id = post.id;

        //setting this postElement to each post

        postElement.innerHTML= `
        <h3>${post.title}</h3>
         <p>${post.content}</p>
<div class ="post-actions"> 
         <button class ="edit-btn"> Edit</button>
         <button class ="delete-btn">Delete</button>

 </div> `;   
 
  postsDiv.appendChild(postElement);
    });
}

//validate form input
function checkValidity(title, content){
    let isValid = true;

    titleError.textContent =""
    contentError.textContent="";


    if (!title){
        titleError.textContent = "Title is required";
        isValid = false;
    }
    if(!content){
        contentError.textContent="Content is required"
        isValid = false;
    }
    return isValid;

    }

//Handle New Post Form Submission- add event listner

 form.addEventListener ('submit', (event)=> {
    event.preventDefault(); 
 

    //get the values from form field

    const title = titleInput.value ;
    const content = contentInput.value;

    //add  validation step

    const isValid = checkValidity(title,content);
    if(!isValid){
        return;
    }
  
  //edit a post
if(editingPostId){
   
    const post = posts.find(post=>post.id===editingPostId);
    if(post){
        post.title = title;
        post.content=content;
    }
    editingPostId =null;
    submitBtn.textContent ='Add Post';
}else{
//create a new post object (e.g., with id, title, content, timestamp).

const newPost ={
    id:Date.now().toString(),
    title :title,
    content:content,
    timeStamp: new Date().toISOString()
};
//Add the new post to your local array of posts.

posts.unshift(newPost);
};
//.Save the updated array of posts to localStorage

localStorage.setItem('blogPosts', JSON.stringify(posts));

//Re-render the list of posts on the page.

  renderPosts();

  //clear form
  form.reset ();
 });

 //Use event delegation
 
 postsDiv.addEventListener('click', (event)=>{

    if(event.target.classList.contains('delete-btn')){
        postElement = event.target.closest('.post');
        if(postElement){
           const postId =postElement.dataset.id;

           //for keeping the post not matching with the id
           posts = posts.filter(post =>post.id !==postId);
           localStorage.setItem('blogPost',JSON.stringify(posts))
           renderPosts();
            
      }
    }
    
});

//handling of edit post
  

postsDiv.addEventListener('click', (event)=>{

    if(event.target.classList.contains('edit-btn')){
     postElement =event.target.closest('.post');
     if(postElement){
        const postId=postElement.dataset.id;
        const post = posts.find(post=> post.id ===postId);

        //to populate the post data

        
        if(post){
        titleInput.value= post.title;
        contentInput.value=post.content;
        editingPostId = postId;
        submitBtn.textContent = ('Update Post');
        }
loadPosts();
renderPosts();

     }
    }
})
