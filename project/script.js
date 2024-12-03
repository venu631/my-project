let currentSlide = 0;
let slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;

function showSlide() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
    slides[currentSlide].style.display = "block"; // Show the current slide
}

// Initial call to display the first slide
showSlide();

// Set an interval to change slides every 5 seconds
setInterval(showSlide, 5000);
// ----------------------------------------------------------------------------------------------------------------------------------
// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const aboutUsLink = document.getElementById('about-us-link');
    const homeLink = document.getElementById('home-link');
    const fineteckDiv = document.getElementById('Fineteck');
    const aboutUsSection = document.getElementById('about-us');
    const page1link=document.getElementById('barcode-scanning-link');
    const page2link=document.getElementById('mobilecomputing');
    const page3link=document.getElementById('barcodeprinting');
    const page4link=document.getElementById('rfid');
    const page5link=document.getElementById('pos');
    const page6link=document.getElementById('supplies');
    const contactlink1=document.getElementById('contactlink');

    const page1=document.getElementById('page1')
    const page2=document.getElementById('page2')
    const page3=document.getElementById('page3')
    const page4=document.getElementById('page4')
    const page5=document.getElementById('page5')
    const page6=document.getElementById('page6')
    const con=document.getElementById('contact')



    // When "ABOUT US" is clicked
    aboutUsLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Hide the 'Fineteck' div
        fineteckDiv.style.display = 'none';
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='none';
        page4.style.display='none';        
        page5.style.display='none';        
        page6.style.display='none'; 
        con.style.display='none';       


        // Show the 'About Us' section
        aboutUsSection.style.display = 'block';
    });

    // When "HOME" is clicked
    homeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Show the 'Fineteck' div
        fineteckDiv.style.display = 'block';

        // Hide the 'About Us' section
        aboutUsSection.style.display = 'none';
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='none';
        page4.style.display='none';
        page5.style.display='none';
        page6.style.display='none';
        con.style.display='none';

    });

    page1link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Show the 'Fineteck' div
        fineteckDiv.style.display = 'none';
        aboutUsSection.style.display = 'none';
        page2.style.display='none';
        page3.style.display='none';
        page4.style.display='none';
        page5.style.display='none';
        page6.style.display='none';
        con.style.display='none';



        // Hide the 'About Us' section
        page1.style.display = 'block';
    });
    page2link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Show the 'Fineteck' div
        fineteckDiv.style.display = 'none';
        aboutUsSection.style.display = 'none';
        page1.style.display='none';
        page3.style.display='none';
        page4.style.display='none';
        page5.style.display='none';
        page6.style.display='none';
        con.style.display='none';

        // Hide the 'About Us' section
        page2.style.display = 'block';
    });
    page3link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Show the 'Fineteck' div
        fineteckDiv.style.display = 'none';
        aboutUsSection.style.display = 'none';
        page1.style.display='none';
        page2.style.display='none';
        page4.style.display='none';
        page5.style.display='none';
        page6.style.display='none';
        con.style.display='none';



        // Hide the 'About Us' section
        page3.style.display = 'block';
    });
    page4link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Show the 'Fineteck' div
        fineteckDiv.style.display = 'none';
        aboutUsSection.style.display = 'none';
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='none';
        page5.style.display='none';
        page6.style.display='none';
        con.style.display='none';
        

        // Hide the 'About Us' section
        page4.style.display = 'block';
    });
    page5link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Show the 'Fineteck' div
        fineteckDiv.style.display = 'none';
        aboutUsSection.style.display = 'none';
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='none';
        page4.style.display='none';
        page6.style.display='none';
        con.style.display='none';

        

        // Hide the 'About Us' section
        page5.style.display = 'block';
    });
    page6link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Show the 'Fineteck' div
        fineteckDiv.style.display = 'none';
        aboutUsSection.style.display = 'none';
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='none';
        page4.style.display='none';
        page5.style.display='none';
        con.style.display='none';

        

        // Hide the 'About Us' section
        page6.style.display = 'block';
    });
    contactlink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page reload

        // Show the 'Fineteck' div
        fineteckDiv.style.display = 'none';
        aboutUsSection.style.display = 'none';
        page1.style.display='none';
        page2.style.display='none';
        page3.style.display='none';
        page4.style.display='none';
        page5.style.display='none';
        page6.style.display='none';


        

        // Hide the 'About Us' section
        con.style.display = 'block';
    });

});
// Hide all error messages on page load
window.onload = function () {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (error) {
        error.style.display = 'none';
    });
};

document.getElementById('contactForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const comment = document.getElementById('comment');

    // Validate Name
    if (!name.value) {
        document.getElementById('nameError').style.display = 'block'; // Show error message
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none'; // Hide error message
    }

    // Validate Email
    if (!email.value) {
        document.getElementById('emailError').style.display = 'block'; // Show error message
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none'; // Hide error message
    }

    // Validate Phone Number
    if (!phone.value) {
        document.getElementById('phoneError').style.display = 'block'; // Show error message
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none'; // Hide error message
    }

    // Validate Comment
    if (!comment.value) {
        document.getElementById('commentError').style.display = 'block'; // Show error message
        isValid = false;
    } else {
        document.getElementById('commentError').style.display = 'none'; // Hide error message
    }

    // Prevent form submission if any field is invalid
    if (!isValid) {
        event.preventDefault();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const buttonlink1 = document.getElementById('sub1');
    const buttonlink2 = document.getElementById('sub2');
    const buttonlink3 = document.getElementById('sub3');
    const buttonlink4 = document.getElementById('sub4');
    const buttonlink5 = document.getElementById('sub5');
    const buttonlink6 = document.getElementById('sub6');
    const fineteckDiv = document.getElementById('Fineteck');
    
    const page1 = document.getElementById('page1')
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const page5 = document.getElementById('page5');
    const page6 = document.getElementById('page6');
    const con = document.getElementById('contact');
    

    // When "ABOUT US" link is clicked
    buttonlink1.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent page reload
      page1.style.display = 'block';
      fineteckDiv.style.display='none';
  
    });
    buttonlink2.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent page reload
      page2.style.display = 'block';
      fineteckDiv.style.display='none';
  
    });
    buttonlink3.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent page reload
      page3.style.display = 'block';
      fineteckDiv.style.display='none';
  
    });
    buttonlink4.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent page reload
      page4.style.display = 'block';
      fineteckDiv.style.display='none';
  
    });
    buttonlink5.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent page reload
      page5.style.display = 'block';
      fineteckDiv.style.display='none';
  
    });
    buttonlink6.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent page reload
      page6.style.display = 'block';
      fineteckDiv.style.display='none';
  
    });
  });
  
  