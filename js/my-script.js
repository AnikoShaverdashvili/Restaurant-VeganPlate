let navbarlinks = document.getElementById("navbar-links");
let burgerbutton = document.getElementById("burger-button");

burgerbutton.addEventListener("click", function() {
    navbarlinks.classList.toggle("active");
})



var btn_right = document.getElementById("slide-right");
var btn_left = document.getElementById("slide-left");

btn_right.addEventListener("click", function() { // კერძების მენიუს მარცხნივ გასქროლვა
    var element = document.querySelector(".active-menu-slider"); // ყველა ელემენტი კლასით: menu-slider

    if (element.nextElementSibling == null) {
        // alert("no more right");
        return;
    }
    element.nextElementSibling.classList.add("active-menu-slider");
    element.classList.remove("active-menu-slider");
})

btn_left.addEventListener("click", function() { // კერძების მენიუს მარჯვნივ გასქროლვა
    var element = document.querySelector(".active-menu-slider"); // ყველა ელემენტი კლასით: menu-slider

    if (element.previousElementSibling == null) {
        // alert("no more left");
        return;
    }
    element.previousElementSibling.classList.add("active-menu-slider");
    element.classList.remove("active-menu-slider");
})


// var btn_submit = document.getElementById("customerOrder");
// btn_submit.addEventListener("click", function() {
//     var res = document.getElementById("form-responce");
//     if (res.innerHTML === "") {
//         res.innerHTML = "Form Submited <i class='fa fa-check' aria-hidden='true'></i>";
//     } else {
//         res.innerHTML = "";
//     }
// })