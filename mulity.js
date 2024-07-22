const num=document.querySelector('#num')
const btn=document.querySelector('#sumnum')
const show=document.querySelector('.show')
const times=document.querySelector('.time')
btn.addEventListener("click",() =>{
    let t= times.value;
    show.innerHTML=null;
    let n= num.value
    console.log(n);
    for (let i =1; i <= t; i++){
        let a= `${n} x ${i}= ${n * i}<br>`;
        show.innerHTML +=a
    }
})