// Defines a function named searchReviews

function searchReviews() {
    
// Declares a variable 'input' and assigns it the value from the element with the id 'searchInput'
   
 var input = document.getElementById("searchInput").value;
    
    // Displays an alert dialog box with a message that includes the value of 'input'
    
alert('Search for ' + input);
}

// JavaScript for loading dynamic content based on navigation

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const sectionId = this.getAttribute('href'); // Get the href attribute of the clicked link
        document.querySelector(sectionId).scrollIntoView({behavior: 'smooth'}); // Smooth scroll to the section
    });
});