const checkbox = document.querySelector('.form .checkbox')
let inscription = false;

checkbox.addEventListener('click',(e) => {
    e.currentTarget.classList.toggle('active')
    inscription = !inscription;
    if(inscription){
        document.querySelector('.form .signup').classList.remove('active')
        document.querySelector('.form .signin').classList.add('active')
    } else{
        document.querySelector('.form .signup').classList.add('active')
        document.querySelector('.form .signin').classList.remove('active')
    }
})


// Validate form 

/* Required function */

const required = (element,message) => {
    if(!element.value){
        element.nextElementSibling.innerHTML = message
    } else{
        element.nextElementSibling.innerHTML = ""
    }
}

//Validate signin form

const formSignup = document.forms['form-signup'];
const emailSignup = formSignup['email']
const passwordSignup = formSignup['password']
const nameSignup = formSignup['name']
const bioSignup = formSignup['bio']
const jobSignup = formSignup['job']
const age = formSignup['age']
const hobby = formSignup['hobby']



const validateName = () => {
    if(!nameSignup.value){
        nameSignup.classList.add('is-invalid')
        nameSignup.nextElementSibling.innerHTML = "Veuillez entrer votre nom";
    } else{
        if(!nameSignup.value.match(/^[a-zA-Z]/)){
            nameSignup.classList.add('is-invalid')
            nameSignup.nextElementSibling.innerHTML = "Votre nom doit commencer par une lettre";
        } else{
            
            if(nameSignup.value.length < 5){
                nameSignup.classList.add('is-invalid')
                nameSignup.nextElementSibling.innerHTML = "Votre nom doit contenir 6caractères au minimum";
            }
             else{
                if(nameSignup.classList.contains('is-invalid')){
                    nameSignup.classList.remove('is-invalid')
                }
                nameSignup.nextElementSibling.innerHTML = "";
            }

            
        }
    }
}

const validateEmail = function (){
    if(!emailSignup.value){
        emailSignup.classList.add('is-invalid')
        emailSignup.nextElementSibling.innerHTML = "Veuillez entrer votre email";
    } else{
        if(!emailSignup.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            emailSignup.classList.add('is-invalid')
            emailSignup.nextElementSibling.innerHTML = "Veuillez entrer un email valide";
        } else{
                if(emailSignup.classList.contains('is-invalid')){
                    emailSignup.classList.remove('is-invalid')
                }
                emailSignup.nextElementSibling.innerHTML = "";
        }
    }
}

const validatePassword = function (){
    if(!passwordSignup.value){
        passwordSignup.classList.add('is-invalid')
        passwordSignup.nextElementSibling.innerHTML = "Veuillez entrer votre mot de passe";
    } else{

        if(passwordSignup.value.length < 8){
            passwordSignup.classList.add('is-invalid')
            passwordSignup.nextElementSibling.innerHTML = "Votre mot de passe doit comporter plus de 8caractères";
        } else{
            if(!passwordSignup.value.match(/[0-9].*[0-9]/)){
                passwordSignup.classList.add('is-invalid')
                passwordSignup.nextElementSibling.innerHTML = "Votre mot de passe doit comporter deux chiffres";
            } else{
                if(!passwordSignup.value.match(/[*,+,-,@,_,&]+/)){
                    passwordSignup.classList.add('is-invalid')
                    passwordSignup.nextElementSibling.innerHTML = "Votre mot de passe doit contenir l'un des caractères suivants *,+,-,@,_ et &";
                } else{
                    if(passwordSignup.classList.contains('is-invalid')){
                        passwordSignup.classList.remove('is-invalid')
                    }
                    passwordSignup.nextElementSibling.innerHTML = "";
                }
            }
        }
        
    }
}

const validateJob = () => {
    if(!jobSignup.selectedOptions[0].value){
        jobSignup.parentNode.nextElementSibling.innerHTML = "Veuillez sélectionner votre job"
    }
}

const validateAge = () => {
    const value = age.value
    if(!value){
        document.querySelector('.form .signup .basic-infos fieldset .error').innerHTML = "Veuillez sélectionner une option"
    }
}

const validateHobby = () => {
    const values = [];
    hobby.forEach(checkbox => {
        console.log(checkbox)
        if(checkbox.checked){
            values.push(checkbox.value)
        }
    })
    console.log(values)
    if(!values.length){
        document.querySelector('.form .signup .profile fieldset .error').innerHTML = "Veuillez sélectionnez vos centres d'intérêts"
    }
}

//Input event on name field

nameSignup.addEventListener('change',() => {
    validateName()
})

emailSignup.addEventListener('change',() => {
    validateEmail()
})

passwordSignup.addEventListener('change',() => {
    validatePassword()
})

bioSignup.addEventListener('change',() => {
    required(bioSignup,'Veuillez renseigner votre bio')
})

formSignup.addEventListener('submit',(e) => {
    e.preventDefault();
    //name
    validateName()
    
    //email

    validateEmail()

    //password

    validatePassword()

    //textarea

    required(bioSignup,'Veuillez renseigner votre bio')

    //Job

    validateJob()

    //Age
    validateAge()

    //Hobby

    validateHobby()

})



//Validate signin form

const formSignin = document.forms['form-signin'];
const emailSignin = formSignin['email']
const passwordSignin = formSignin['password']


formSignin.addEventListener('submit',(e) => {
    e.preventDefault();
    required(emailSignin,'Veuillez renseigner votre email')
    required(passwordSignin,'Veuillez entrez votre mot de passe')
})

emailSignin.addEventListener('input',(e) => {
    required(emailSignin,'Veuillez renseigner votre email')
})

passwordSignin.addEventListener('input',(e) => {
    required(passwordSignin,'Veuillez entrez votre mot de passe')
})

console.log(hobby)