const email = document.querySelector('#Email');
const username = document.querySelector('#Username');
const password = document.querySelector('#Password');
const passwordCheck = document.querySelector('#Password2');
const form = document.querySelector('form');
const loginForm = document.querySelector('#login-form');
const passwordLogin = document.querySelector('#PasswordLogin');
const usernameLogin = document.querySelector('#UsernameLogin')


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    validateInput();
});



function validateInput(){
    //collect input values and rid them of whitespace
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();
    const emailValue = email.value.trim();

    // signup input validation
    if(usernameValue === ''){
        //show error message and add error class
        setError(username, 'Username cannot be blank');
    }else{
        //show success message and add success class
        setSuccess(username, '')
    }

    if(emailValue ===''){
        //show error message and add error class
        setError(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setError(email, 'Email is  not valid');
    }else{
        //show success message and add success class
        setSuccess(email, '')
    }

    if(passwordValue ===''){
        //show error message and add error class
        setError(password, 'Password cannot be blank');
    }else{
        //show success message and add success class
        setSuccess(password, '')
    }

    if(passwordCheckValue ===''){
        //show error message and add error class
        setError(passwordCheck, 'Please re-enter password');
    }else if(passwordValue !== passwordCheckValue){
        setError(passwordCheck, 'Passwords does not match');
    }else{
        //show success message and add success class
        setSuccess(passwordCheck, '')
    }
};

function setError(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add message
    small.innerText = message;

    //add class
    formControl.classList.add('error');
}
function setSuccess(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add message
    small.innerText = message;

    //add class 
    formControl.classList.remove('error');
    formControl.classList.add('success');

}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

