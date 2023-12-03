//

/*var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-links");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}


alert("hello world");*/
//
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-links");
    }

    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    this.classList.add("active-links");

    // Assuming tabname is the ID of the tab content to be shown
    document.getElementById(tabname).classList.add("active-tab");
}

// Attach the event handler to each tablink
for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function() {
        opentab.call(this, ""); // Pass the tabname here
    });
}


var sidemenu=document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right=" 0px"
}
function closemenu(){
    sidemenu.style.right=" -200px"
}



  
const scriptURL = 'https://script.google.com/macros/s/AKfycbyIiBLXIAJNCzl5EDTWpLepNonHIk984eqt_JW5RIDixrjnamKPqEw7RoppD4uPa-JEQA/exec'
const form=document.forms['submit-to-google-sheet']
const msg = document.getElementBYId("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Messege sent succesfully"
        setTimeout(function(){
             msg.innerHTML=""
        },5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
