let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('pass');
let msg = document.getElementById('message');
let strength = document.getElementById('strength');



eyeicon.onclick = function (){
    if(password.type == "password"){
        password.type="text";
        eyeicon.src = "./eye-icons/eye-open.png"
    }else{
        password.type  = "password"
        eyeicon.src = "./eye-icons/eye-close.png"
    }
}
// checking strength of thepassword

password.addEventListener('input',()=>{
    if(password.value.length >0){
        msg.style.display = 'block';
    }else{
        msg.style.display = 'none';
    }
    if(password.value.length <=4){
        strength.innerHTML = 'weak'
        password.style.borderColor='red'
        msg.style.color='red'
    }
    else if(password.value.length >=4 && password.value.length <8){
        strength.innerHTML = "medium"
        password.style.borderColor='gold'
        msg.style.color='gold'
    }
    else if(password.value.length >=8){
        strength.innerHTML="strong"
        password.style.borderColor='green'
        msg.style.color='green'
    }
})


