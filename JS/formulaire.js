//SCRIPT ENVOI DU FORMULAIRE + vérification de tous les champs

let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    //Définition des classes pour le message de succès
    
    let successContainer = document.querySelector('.message-success')
    let successText = document.querySelector('.message-success')

    //Définition des class pour le message d'erreur
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    
    successText.innerHTML =""

    errorList.innerHTML  = ""
    errorContainer.classList.remove('visible')


    //Script first name check
    let name = document.querySelector('#nom')
    if (name.value==''){
        errorContainer.classList.add('visible')
        name.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = 'Le nom ne peut être vide'
        console.log('First name empty')

        errorList.appendChild(err)
        }else{
            name.classList.add('success')
            errorContainer.classList.remove('visible')
    }



    // Script email check
    let email = document.querySelector('#email')

    if(email.value==''){
        errorContainer.classList.add('visible')
        email.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ email ne peut être vide"
        console.log('Email empy')

        errorList.appendChild(err)
        } else{
            email.classList.add('success')
            console.log('email success')
            errorContainer.classList.remove('visible')
    }

    // Script last names check
    let prenom = document.querySelector('#prenom')

    if(prenom.value==''){
        errorContainer.classList.add('visible')
        prenom.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ prénom ne peut pas être vide"

        errorList.appendChild(err)
        console.log('Last name empty')

        } else{
            prenom.classList.add('success')
            errorContainer.classList.remove('visible')

            console.log('Last name success')
    }


    // Phone number check
    let phone = document.querySelector('#phone')

    if(phone.value.length < 10){
        errorContainer.classList.add('visible')
        phone.classList.remove('success')
        console.log('Phone number empty')

        let err = document.createElement('li')
        err.innerText = "Le champ numéro de téléphone doit contenir au moins 10 caractères"

        errorList.appendChild(err)

        
        } else{
            phone.classList.add('success')
            console.log('Phone number success')
            errorContainer.classList.add('hidden')
        }

    // Verification finale et message d'envoi du formulaire
    if(name.classList.contains('success') && prenom.classList.contains('success') &&email.classList.contains('success') && phone.classList.contains('success'))
    {
        successContainer.classList.add('visible')
        let success = document.createElement('li')
        success.innerText = "Le formulaire a été envoyé"
        successText.appendChild(success)
        console.log('Envoi du form détecté!')
        window.alert('Le formulaire a été envoyé');
    } else{
        console.log("Formulaire à remplir")
    }
})



//Dark mode
document.getElementById('mode').addEventListener('click', function dark(){
    let nav = document.querySelector('nav')
    let footer = document.querySelector('footer')
    let navA = document.querySelector('nav a')
    let navActive = document.querySelector('nav #active')
    let body = document.querySelector('body')
    let form = document.querySelector('form')
    let tab = document.querySelector('.tab-active')

    if(nav.classList.contains('dark')){
        body.classList.remove('dark')
        navA.classList.remove('dark')
        footer.classList.remove('footer')
        navActive.classList.remove('darkform')
        nav.classList.remove('dark')
        form.classList.remove('darkform')
        tab.classList.remove('darkform')
    } else{
        body.classList.add('dark')
        navA.classList.add('dark')
        footer.classList.add('dark')
        navActive.classList.add('darkform')
        nav.classList.add('dark')
        form.classList.add('darkform')
        tab.classList.add('darkform')
    }
})

//Script Tab
const tabs = document.querySelectorAll('.tab-nav');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove active classes from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('tab-active'));
    contents.forEach(content => content.classList.remove('.tab-content-active'));

    // Add active class to the clicked tab
    this.classList.add('tab-active');

    for (i = 0; i < tabs.length; i++){
        if (tabs[i].classList.contains('tab-active')){
            contents[i].classList.remove('tab-content')
            contents[i].classList.add('tab-content-active')
            console.log(contents[i].className + " est actif")
        }

    }

    /*
    let cdeb = document.querySelector('.tab-nav CDEB')
    let cdi = document.querySelector('.tab-nav  CDI')
    let cd = document.querySelector('.tab-nav CD')
    let jv = document.querySelector('.tab-nav JV')
    let anim = document.querySelector('.tab-nav ANIM')

    let cdebContent = document.querySelector('.tab-content CDEB')
    let cdiContent = document.querySelector('.tab-content CDI')
    let cdContent = document.querySelector('.tab-content CD')
    let jvContent = document.querySelector('.tab-content JV')
    let animContent = document.querySelector('.tab-content ANIM')

    if(cdeb.classList.contains('.tab-active CDEB')){
        cdebContent.classList.add('tab-active')
    }
    if(cdi.classList.contains('.tab-nav tab-active CDI')){
        cdiContent.classList.add('tab-active')
    }
    if(cd.classList.contains('.tab-nav tab-active CD')){
        cdContent.classList.add('tab-active')
    }
    if(jv.classList.contains('.tab-nav tab-active JV')){
        jvContent.classList.add('tab-active')
    }
    if(anim.classList.contains('.tab-nav tab-active ANIM')){
        animContent.classList.add('tab-active')
    }
    */
  });
});