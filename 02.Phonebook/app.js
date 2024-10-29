function attachEvents() {
const url='http://localhost:3030/jsonstore/phonebook'

const ul= document.getElementById('phonebook')
const loadButton=document.getElementById('btnLoad')
const createButton=document.getElementById('btnCreate')
const person=document.getElementById('person')
const phone=document.getElementById('phone')

loadButton.addEventListener('click',onCliclLoad)
createButton.addEventListener('click',onCliclCreate)

async function onCliclLoad(){
    ul.innerHTML=''
    const res=await fetch(url)
    const data = await res.json()

    console.log(data);
    

    Object.values(data).forEach(e=>{
const {person,phone,_id}=e

const li = createElement('li',`${person}:${phone}`,ul)
li.setAttribute('id',_id)

const dellButton=createElement('button','Delete',li)
dellButton.setAttribute('id','dellButton')

dellButton.addEventListener('click',onClickDelete)
    })
}


async function onCliclCreate(){
if(person.value!==''&&phone.value!==''){
    const response=await fetch(url,{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body:JSON.stringify({person:person.value,phone:phone.value})
    })
    loadButton.click()
    person.value=''
    phone.value=''
}
}

async function onClickDelete(ev){
const id =ev.target.parentNode.id
ev.target.parentNode.remove()

const deleteResponse=await fetch(`${url}/${id}`,{method:'DELETE'})
}



    function createElement(type,text,appender){
        const resuld=document.createElement(type)
        resuld.textContent=text

        appender.appendChild(resuld)

        return resuld
    }
}


attachEvents();