const btn_login = document.getElementById("button_submit");
btn_login.onclick = function(){
    console.log("Button clicked!");
    window.location.href = 'home_page.html'
}

const link_signup = document.getElementById("sign_up");
link_signup.onclick = function(){
    console.log("Change to sign up page");
    window.location.href = 'registration.html'
}