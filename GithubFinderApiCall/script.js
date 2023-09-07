

const searchBar = document.getElementById("searchbar");
const cardContainer = document.getElementById("cardContainer");
const searchBtn = document.getElementById("SearchBtn");
const getAllUsers = document.getElementById("getAllUsers");
const diable = document.getElementById("diable");




function getUser(searchValue){
  let apiUrl;
   if(searchValue === undefined){
     apiUrl = `https://api.github.com/users`;
   }
   else{
     apiUrl = `https://api.github.com/users/${searchValue}`;
   }
   
   const promise =  fetch(apiUrl)
   promise.then((result)=>{
    return result.json()   //json return promise that why you use then
   }).then((data)=>{
    let res =data;
       
      
          console.log(cardContainer);
         console.log(res);
       


    cardContainer.innerHTML= "";
      if(res.message === "Not Found"){
        const heading = document.createElement("h1");
        heading.classList.add("Error");
        heading.innerText= "404 Erorr Not Found User";
        cardContainer.appendChild(heading);
      }
      else{

        diable.style.display = "none";
       

    let newString = res.created_at.substring(0,10);


        cardContainer.innerHTML = `  <div class="output_relative">
        <div class="flex_img">
          <div class="next_flex">
          <img class="image_round" src="${ res.avatar_url}" alt="">
          <div class="title">
              <p id="name">${res.name}</p>
              <p id="git_id">@${res.login}</p>
          </div>
      </div>
          <div>
              <p>Joined ${newString}</p>
          </div>
        </div>
         
        <h4 id="des" >${res.bio}</h4>

        <div class="white">
          <span>
              <p>Repos</p>
              <p id="repo">${res.public_repos}</p>
          </span>
          <span>
              <p>Followers</p>
              <p id="follower">${res.followers}</p>
          </span>
          <span>
              <p>Following</p>
              <p id="following">${res.following}</p>
          </span>
        </div>
       
     <div class="flex1">
       <span><i class="fa-solid fa-map-location-dot"></i> - <p>${res.map}</p></span>
       <span><i class="fa-brands fa-twitter"></i> - <p>${res.twitter_username}</p> </span>
     </div>
     <div class="flex2">
      <span><i class="fa-solid fa-link"></i> - <p>${res.links}</p></span>
      <span><i class="fa-regular fa-building"></i> - <p>${res.office_username}</p></span>
     </div>
      </div>`
      




      }

    
       
   });

}


  searchBtn.addEventListener("click", (e)=>{
            e.preventDefault();
           
            var searchValue = searchBar.value
            getUser(searchValue);
            searchValue = "";
          
  });
  searchValue="";

  document.getElementById('nightModeToggle').addEventListener('change', function() {
    const body = document.body;
    const elementsToToggle = document.querySelectorAll('.night-mode, .toggle, .toggle-label, .body, .main, .h2, .aside, #SearchBtn, .fa-solid, #searchbar');

    body.classList.toggle('night-mode-active');
    elementsToToggle.forEach(element => {
        element.classList.toggle('night-mode-active');
    });
});




///bio
//created_at
//followers
//following
//name
//login
//public_repos
//twitter_username
