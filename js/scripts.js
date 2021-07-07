/*!
* Start Bootstrap - Simple Sidebar v6.0.2 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function QuadraticFormula() {
    var a = document.getElementById("quadraticA").value;
    var b = document.getElementById("quadraticB").value;
    var c = document.getElementById("quadraticC").value;
    // program to solve quadratic equation
    let root1, root2;

    // calculate discriminant
    let discriminant = b * b - 4 * a * c;

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // result
        document.getElementById("answer").innerHTML = "Root 1 is " + root1
        document.getElementById("answer2").innerHTML = "Root 2 is " + root2
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        // result
        document.getElementById("answer").innerHTML = "The only root is " + root1
        document.getElementById("answer2").innerHTML = ""
    }

    // if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        // result
        console.log(
        document.getElementById("answer").innerHTML = `The first complex root is ${realPart} + ${imagPart}i`,
        document.getElementById("answer2").innerHTML = `The second  complex root is ${realPart} - ${imagPart}i`
        );
    }
    var AOS = ((-b) / (2*a));
    var yVertex = (a * (AOS * AOS)) + (b * AOS) + +c
    document.getElementById("answer3").innerHTML = "Axis of Symmetry is " + AOS
    document.getElementById("answer4").innerHTML = "X - Co-ordinate of Vertex is is " + -b / (2 * a);
    document.getElementById("answer5").innerHTML = "Y - Co-ordinate of Vertex is is " + yVertex
    document.getElementById("answer6").innerHTML = "Standard form is " + a + "x^2 + " + b + "x + " + c
    document.getElementById("answer7").innerHTML = "Vertex form is " + a + "(x - " + AOS + ")^2 + " + yVertex;
    document.getElementById("answer8").innerHTML = "Factored form is " + a + "(x -" + root1 + ") + (x -" + root2 + ")"
}

function AvgRateChange() {
    var Deriv1 = document.getElementById("DerivPoint1").value;
    var Deriv2 = document.getElementById("DerivPoint2").value;
    var Deriv3 = document.getElementById("DerivPoint3").value;
    var Deriv4 = document.getElementById("DerivPoint4").value;
    var AROC = ((Deriv4-Deriv2) / (Deriv3-Deriv1))
    document.getElementById("deriv1").innerHTML = "ARS is " + AROC
}

function Derivative() {
    var Deriv1 = document.getElementById("DerivPoint1").value;
    var Deriv2 = document.getElementById("DerivPoint2").value;
    var Deriv3 = document.getElementById("DerivPoint3").value;
    var Deriv4 = document.getElementById("DerivPoint4").value;
}