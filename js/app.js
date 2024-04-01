const usersMain = document.querySelector(".usersMain")
const viewUser = document.querySelector(".viewUser")
let add_btn = document.createElement("input")

add_btn.setAttribute('type',"button")
add_btn.setAttribute('value',"ADD")
add_btn.setAttribute("class","add_btn")
usersMain.appendChild(add_btn)
add_btn.addEventListener('click',(event) => {
    let showForm = document.querySelector(".userForm")
    showForm.classList.remove("hidden")    
})
let users_Raw = document.createElement("div")
usersMain.appendChild(users_Raw)
users_Raw.textContent= "List of users :"

let saveUserBtn = document.querySelector(".saveUserBtn")
saveUserBtn.addEventListener('click',(event)=> {
    addNewUser()
})



function showUsersFunc (){
    
    
    const storedUser = localStorage.getItem('users')
    const parsedUser = JSON.parse(storedUser) 
   
    for (user in parsedUser){
        console.log(parsedUser[user])
        let userRaw = document.createElement("ul")
        userRaw.textContent= parsedUser[user].firstName
        users_Raw.appendChild(userRaw)
        let view_btn = document.createElement("input")
        view_btn.setAttribute('type',"button")
        view_btn.setAttribute('value',"VIEW")
        view_btn.setAttribute('class', 'view_btn')
        userRaw.appendChild(view_btn)
        let edit_btn = document.createElement("input")
        edit_btn.setAttribute('type',"button")
        edit_btn.setAttribute('value',"EDIT")
        userRaw.appendChild(edit_btn)
        let remove_btn = document.createElement("input")
        remove_btn.setAttribute('type',"button")
        remove_btn.setAttribute('value',"REMOVE")
        userRaw.appendChild(remove_btn)
    }    

}


function addNewUser(){
    const user = collectData();
    let users = []; //finally
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

function viewUserFunc(){
    view_btn= document.querySelector('.view_btn')
    view_btn.addEventListener('click',(event)=>{
        viewUser.classList.remove("hidden")
        console.log("VIEW pressed")
        userLine = event.target.parentNode.textContent
        viewUser.textContent= userLine
    })
}

showUsersFunc()
viewUserFunc()

