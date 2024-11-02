
loadPost()

let topicTitleContener = document.querySelector('.topic-title')
let form=document.querySelector('form')

//Input

//Btn
let postBtn=form.querySelector('.public')
postBtn.addEventListener('click',createPost)
let edit=form.querySelector('.cancel')
edit.addEventListener('click',cansel)

function cansel(event){
    event.preventDefault()
    form.reset()
}

async function createPost(e){
    e.preventDefault()


    let date = new Date()
let dateString = date.toISOString()


let titleInput=document.querySelector('#topicName')
let usernameInput=document.querySelector('#username')
let postInput=document.querySelector('#postText')


let tittleNameInput=titleInput.value
let usernameNameInput=usernameInput.value
let postNameInput=postInput.value

if(tittleNameInput.trim()!==''&& usernameNameInput.trim()!=='' && postNameInput.trim()!==''){
    let post = {
        tittle: tittleNameInput,
        username: usernameNameInput,
        post: postNameInput,
        date: dateString
    }
    
    let setting = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }
    let createPostRequesr = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', setting)
    console.log(createPostRequesr);

    form.reset()
    loadPost()
}


}

async function loadPost(){
    topicTitleContener.innerHTML = ''
    let postRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
let postsObject = await postRequest.json()
let posts = Object.values(postsObject)
for (const post of posts) {
    let divTopicContent = document.createElement('div')
    divTopicContent.classList.add('topic-container')

    let divTopicNameWraper = document.createElement('div')
    divTopicNameWraper.classList.add('topic-name-wrapper')

    let divName = document.createElement('div')
    divName.classList.add('topic-name')

    let tittleAnchor = document.createElement('a')
    tittleAnchor.classList.add('normal')

    let tittleHeader = document.createElement('h2')
    tittleHeader.textContent = post.tittle
    //

    let columsDiv = document.createElement('div')
    columsDiv.classList.add('columns')

    let columsPaddingDiv = document.createElement('div')

    let timeParagraf = document.createElement('p')
    timeParagraf.textContent = `Data  `

    let time = document.createElement('time')
    time.textContent=post.date

    let nicDiv = document.createElement('div')
    nicDiv.classList.add('nick-name')

    let nickParagraf = document.createElement('p')
    nickParagraf.textContent = 'Username '

    let nickSpam = document.createElement('spam')
    nickSpam.textContent = post.username

    divTopicContent.appendChild(divTopicNameWraper)
    divTopicNameWraper.appendChild(divName)
    divName.appendChild(tittleAnchor)
    tittleAnchor.appendChild(tittleHeader)

    divName.appendChild(columsDiv)
    columsDiv.appendChild(columsPaddingDiv)
    columsPaddingDiv.appendChild(timeParagraf)
    timeParagraf.appendChild(time)
    columsPaddingDiv.appendChild(nicDiv)
    nicDiv.appendChild(nickParagraf)
    nickParagraf.appendChild(nickSpam)


    topicTitleContener.appendChild(divTopicContent)

}
}







