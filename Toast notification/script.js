let crt = document.getElementById("crt");
let err = document.getElementById("err");
let wrg = document.getElementById("wrg");
let toastBox = document.querySelector(".toastBox");
let successMsg = 'successfully submitted'
let errorMsg = 'Please check the error'
let invalidMsg = 'Invalid input'

function getNoti(msg){

    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    }, 2000);

    
}

crt.addEventListener("click", () =>{
    getNoti(successMsg);
    
});
err.addEventListener("click", ()=>{
    getNoti(errorMsg);
});
wrg.addEventListener("click", ()=>{
    getNoti(invalidMsg);
} );