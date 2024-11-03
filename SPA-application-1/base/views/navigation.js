export function renderNavigation(){
    const email=localStorage.getItem('email')

    if(email&&email!=='undefined'){
        const userNavigation = document.getElementById('user');
        userNavigation.style.display='inline'
    }else{
        const guestNavigation=document.getElementById('guest')
        guestNavigation.style.display='inline'
    }
}