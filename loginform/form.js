const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
const listen= document.querySelector('.usernamebtton');
listen.addEventListener('keydown',(event) =>{
    const hi =document.querySelector('.usernamebtton').value;
  
    
 })
 const pass=document.querySelector('.passwordbtton');
 pass.addEventListener('keydown',(event)=>{
    const helo=document.querySelector('.passwordbtton').value;
    
 })
const log=document.querySelector('.js-btn');
log.addEventListener('click', ()=>{
    const hi =document.querySelector('.usernamebtton').value;
    const helo=document.querySelector('.passwordbtton').value;
    console.log(hi,helo);
})
const hh=document.querySelector('.userlog');
hh.addEventListener('keydown',(event)=>{
    const mm=document.querySelector('.userlog').value;
})
const bb=document.querySelector('.userpass');
bb.addEventListener('keydown',(event)=>{
    const cc=document.querySelector('.userpass').value;
})
const uu=document.querySelector('.js-userlogin');
uu.addEventListener('click',()=>{
    const mm=document.querySelector('.userlog').value;
    const cc=document.querySelector('.userpass').value;
    console.log(mm,cc);
})
