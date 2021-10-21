document.body.innerHTML =`<section class ="bye"></section> `;

async function hi()
{
    const data = await fetch("https://api.github.com");
    const user = await data.json();
    console.log("user",user);
const aa = document.querySelector(".bye");
    user.forEach((element)=>{

        aa.innerHTML += ` <div class="user-container
"><img class ="image" src ="${element.avatar}" alt ="${element.name}"/> 
        <p class = "names">${element.name}</p>
        <button onclick = "del()">DELETE</button>
        </div>
        `;
    });


}

hi();

