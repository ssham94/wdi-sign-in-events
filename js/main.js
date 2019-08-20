document.addEventListener('DOMContentLoaded', function(){
    const signIn = document.querySelector('.signin');
    const modal = document.querySelector('.modal')
    const close = document.querySelector('.close')
    const submit = document.querySelector('.submit')
    const user = document.querySelector('#user')
    const password = document.querySelector('#pass')
    signIn.addEventListener('click', () => {
        modal.style.display = "block";
    })
    close.addEventListener('click', function(){
        modal.style.display = 'none';
    })
    submit.addEventListener('click', function(){
        user.setAttribute('class', 'error')
        password.setAttribute('class', 'error')
    })

    function removeClass(){
        this.removeAttribute('class')
    }

    user.addEventListener('click', removeClass);
    password.addEventListener('click', removeClass);
})