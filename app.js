var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")
var menu = document.getElementById("menu");
var slideBtns = document.getElementsByClassName("slide-btn")
var slide = document.getElementById("slide")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwKJZAz2Eqra3AUzn7pdM9fujMin2JRY0bUxzrefCmB37o60rOttkuzithHPgScX3be/exec'
const form = document.forms['contacts']
const submitMsg = document.getElementById("submit-msg")

function slideX(e, xTranslate) {
    slide.style.transform = `translateX(${xTranslate}px)`
    for (btn of slideBtns){
        btn.classList.remove("active-btn")
    }
    e.classList.add("active-btn")
}
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        submitMsg.innerHTML = "Message sent!";
        setTimeout(function(){
            subMsg.innerHTML = ""
        }, 5000)
        console.log('Success!', response);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
})

function openTab(tabName){
    for (tabLink of tabLinks){
       tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    var displayContent = document.getElementById(tabName);
    displayContent.classList.add("active-tab");
}

function openMenu(){
    menu.style.right = "0";
}

function closeMenu(){
    menu.style.right = "-200px";
}



