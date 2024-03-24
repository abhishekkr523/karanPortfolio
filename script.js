document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to all links inside the navigation list
    var navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            link.classList.add('active');

            // Check if the screen width is less than or equal to 767px
            if (window.innerWidth <= 767) {
                // Hide the navigation list when a link is clicked
                var navList = document.querySelector('.nav-list');
                var toggleButton1 = document.querySelector('.toggle-button i.fa-bars');
                var toggleButton2 = document.querySelector('.toggle-button i.fa-xmark');
                navList.style.display = 'none';
                toggleButton1.style.display = 'block';
                toggleButton2.style.display = 'none';
            }
        });
    });


    

});
function toggleMenu1() {
    var navList = document.querySelector('.nav-list');
    navList.style.display = 'flex';
    navList.style.flexDirection = 'column'; // Set flex-direction to column
    var toggleButton1 = document.querySelector('.toggle-button i.fa-bars');
    var toggleButton2 = document.querySelector('.toggle-button i.fa-xmark');
    toggleButton1.style.display = 'none';
    toggleButton2.style.display = 'block';
}

function toggleMenu2() {
    var navList = document.querySelector('.nav-list');
    navList.style.display = 'none';
    var toggleButton1 = document.querySelector('.toggle-button i.fa-bars');
    var toggleButton2 = document.querySelector('.toggle-button i.fa-xmark');
    toggleButton1.style.display = 'block';
    toggleButton2.style.display = 'none';
}


