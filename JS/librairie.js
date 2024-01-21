document.getElementById('mode').addEventListener('click', function dark(){
    let nav = document.querySelector('nav')
    let navA = document.querySelector('nav a')
    let footer = document.querySelector('footer')
    let navActive = document.querySelector('nav #active')
    let body = document.querySelector('body')
    let main = document.querySelector('main')
    if(nav.classList.contains('dark')){
        body.classList.remove('dark')
        navA.classList.remove('dark')
        footer.classList.remove('dark')
        navActive.classList.remove('darkform')
        nav.classList.remove('dark')
        main.classList.remove('darkform')
    } else{
        body.classList.add('dark')
        navA.classList.add('dark')
        footer.classList.add('dark')
        navActive.classList.add('darkform')
        nav.classList.add('dark')
        main.classList.add('darkform')
    }
})

//Menu burger
document.querySelector('accordeon').addEventListener('click',function(){
    if(this.classList.contains('.open')){
        this.classList.remove('.open')
        this.classList.add('.contenu')
    }else{
        this.classList.add('.open')
        this.classList.remove('.contenu')
    }
})