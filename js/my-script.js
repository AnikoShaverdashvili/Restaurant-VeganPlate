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




/* personal data start */
function getPersonal(page) {
    fetch('https://reqres.in/api/users?page=1', {
            method: 'GET'
        })
        .then(function(response) {
            if (response.status !== 200) {
                throw response.status;
            }
            return response.json();
        })
        .then(function(responseData) {
            var sheff = responseData.data[3];
            var cook = responseData.data[4];

            console.log(sheff);

            var sheff_full_name = sheff.first_name + " " + sheff.last_name;
            var sheff_avatar = sheff.avatar;
            var sheff_mail = sheff.email;
            document.getElementById('sheff_full_name').append(sheff_full_name);
            document.getElementById("img-sheff").src = sheff_avatar;
            document.getElementById('sheff_mail').append(sheff_mail);
            document.getElementById('sheff_mail').href = "mailto:" + sheff_mail;

            var cook_full_name = cook.first_name + " " + cook.last_name;
            var cook_avatar = cook.avatar;
            var cook_mail = cook.email;
            document.getElementById('cook_full_name').append(cook_full_name);
            document.getElementById("img-cook").src = cook_avatar;
            document.getElementById('cook_mail').append(cook_mail);
            document.getElementById('cook_mail').href = "mailto:" + cook_mail;
        })
        .catch(function(error) {
            if (error == 404) {
                let p = document.createElement('p');
                p.textContent = 'page not found';
                p.classList.add('error-text');
                document.getElementById('api').appendChild(p);
            } else {
                let p = document.createElement('p');
                p.textContent = 'server error';
                p.classList.add('error-text');
                document.getElementById('api').appendChild(p);
            }
            console.log(error);
        })
}

getPersonal();
/* personal data end */