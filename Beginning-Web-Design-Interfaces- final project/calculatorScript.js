document.getElementById('calculateButton').addEventListener('click', function() {
    var emissions = document.getElementById('inputEmissions').value;
    var result = calculateFootprint(emissions); // Define this function to calculate based on input
    document.getElementById('resultDisplay').innerHTML = result;
});


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        var section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


function calculateFootprint() {
    var miles = document.getElementById('milesDriven').value;
    var co2PerMile = 0.411; // Average CO2 kg per mile for a car
    var footprint = miles * co2PerMile;
    document.getElementById('result').innerHTML = `Your weekly carbon footprint is ${footprint.toFixed(2)} kg CO2.`;
}
