



var signUp = document.getElementById('signUp');
var signUpPage = document.getElementById('signUpPage')
var signIn = document.getElementById('signIn');
var validLogin = document.getElementById("validLogin")
var validInput = document.getElementById("validInput")




signUp.addEventListener('click' , function()
{
    signUpPage.classList.remove('d-none');
})

signIn.addEventListener('click' , function()
{
    signUpPage.classList.add('d-none');

})


var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var signUpBtn = document.getElementById('signUpBtn')

var emailInputCheek=document.getElementById('emailInputCheek');
var passwordInputCheek=document.getElementById('passwordInputCheek');
var login = document.getElementById('login');

var logOutPage  = document.getElementById('logOutPage');
var loginPage  = document.getElementById('loginPage');
var sayWelcome = document.getElementById('sayWelcome');

var logout = document.getElementById('logout');

var validSignUp = document.getElementById('validSignUp');
var validSignUpinputs = document.getElementById('validSignUpinputs') 


var mailContainer = [];


if(JSON.parse(localStorage.getItem('MailList')) !=null)
{
    mailContainer = JSON.parse(localStorage.getItem('MailList')) ;
    
}









var inputs = document.querySelectorAll('#nameInput , #emailInput , #passwordInput');



for(var i=0 ; i<inputs.length ;i++)
{   
    inputs[i].addEventListener('keyup' , function()
    {
        if(validName() && validEmail() && validPassword())
        {
            validSignUpinputs.classList.remove('d-none');
            signUpBtn.removeAttribute('disabled')
        }
        else
        {
            validSignUpinputs.classList.add('d-none');
            signUpBtn.disabled=true;
        }
    })
}




function validName()
{
    var regex =  /^[a-z-A-Z]{3,8}$/;
    if(regex.test(nameInput.value)==true)
    {   
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        return true
    }
    else
    {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        return false
    }
}


function validEmail()
{
    var regex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regex.test(emailInput.value)==true)
    {   
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        return true
    }
    else
    {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        return false
    }
}



function validPassword()
{
    var regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(regex.test(passwordInput.value)==true)
    {   
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        return true
    }
    else
    {
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        return false
    }
}









signUpBtn.addEventListener('click' , function()
{   

    addMail();
    clearForm();
})

function addMail()
{
    var mail =
    {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
    }
    mailContainer.push(mail);
    localStorage.setItem('MailList' , JSON.stringify(mailContainer));

}

function clearForm()
{
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";
    passwordInputCheek.value="";
    emailInputCheek.value="";
}



function checkAccount()

{
    
    for(var i=0 ; i<mailContainer.length;i++)
    {

        if(emailInputCheek.value==mailContainer[i].email && passwordInputCheek.value==mailContainer[i].password)
        {
            loginPage.classList.add('d-none');
            logOutPage.classList.remove('d-none');
            sayWelcome.innerHTML=`Welcome ${mailContainer[i].name}`;

        }
        
        else if(i==mailContainer.length-1 )
        {
            validLogin.classList.remove("d-none");
            validInput.classList.add('d-none');

        }
    }

    if(passwordInputCheek.value=="" || emailInputCheek.value=="")
    {
        validInput.classList.remove('d-none');
        validLogin.classList.add('d-none');
    }

}

login.addEventListener('click' , function()
{

    checkAccount()
})


logout.addEventListener('click' , function()
{
    loginPage.classList.remove('d-none');
    logOutPage.classList.add('d-none');
    validLogin.classList.add('d-none');
    validInput.classList.add('d-none')
    clearForm();
})


