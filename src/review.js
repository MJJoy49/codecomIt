var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var reviewerName = document.getElementById("reviewerName"); 
var reviewText = document.getElementById("review");

var reviews = [
    { review: "Incredible service with timely support. Highly recommend for IT solutions. They were responsive, knowledgeable, and proactive throughout the process. Definitely exceeded our expectations. Alex Johnson.", reviewer: "Alex Johnson" },
    { review: "Exceptional professionalism and problem-solving skills. Truly outstanding experience. Mia Wong provided insightful solutions to complex issues. A pleasure to work with from start to finish. Mia Wong.", reviewer: "Mia Wong" },
    { review: "Delivered high-quality work within deadlines. Impressive technical expertise. Chris Smith ensured seamless integration and impeccable execution. Highly commendable service. Chris Smith.", reviewer: "Chris Smith" },
    { review: "Very responsive and helpful. Made our tech transition smooth and easy. Janet Matthews offered invaluable guidance and support. Exceptional communication and problem-solving skills. Janet Matthews.", reviewer: "Janet Matthews" },
    { review: "Offers innovative solutions and great customer service. Highly satisfied. Ethan Ray's innovative approaches and dedication are commendable. Top-notch service throughout the project. Ethan Ray.", reviewer: "Ethan Ray" },
    { review: "Their team goes above and beyond. Fantastic work ethics. Olivia Stanley demonstrated exceptional commitment and professionalism. A pleasure to collaborate with. Olivia Stanley.", reviewer: "Olivia Stanley" },
    { review: "Professional, efficient, and reliable. Highly recommended for any IT needs. Liam Brown provided comprehensive solutions tailored to our requirements. Exceeded expectations in every aspect. Liam Brown.", reviewer: "Liam Brown" },
    { review: "Exceptional attention to detail and very patient with clients. Sophia Martin's meticulous approach and patience were highly appreciated. Delivered exceptional results within tight deadlines. Sophia Martin.", reviewer: "Sophia Martin" },
    { review: "Knowledgeable staff and cutting-edge solutions. A game-changer in IT. Jacob Lee's expertise and innovative solutions were invaluable. Transformed our IT infrastructure seamlessly. Jacob Lee.", reviewer: "Jacob Lee" },
    { review: "Impressive project management and implementation. A+ service. Isabella Gonzalez demonstrated outstanding leadership and project management skills. Highly recommend for IT projects of any scale. Isabella Gonzalez.", reviewer: "Isabella Gonzalez" },
    { review: "Quick to respond and solve issues. Great customer service. Noah Hernandez provided swift solutions and excellent customer service. Highly responsive and professional throughout. Noah Hernandez.", reviewer: "Noah Hernandez" },
    { review: "Their expertise in the IT sector is unmatched. Truly top-notch. Emma Rodriguez's expertise and professionalism were evident from day one. Highly recommend for IT solutions and support. Emma Rodriguez.", reviewer: "Emma Rodriguez" },
    { review: "A reliable partner for IT services and support. Trustworthy and efficient. Ava Lopez provided reliable support and innovative solutions. A valuable asset for any IT project. Ava Lopez.", reviewer: "Ava Lopez" },
    { review: "Outstanding technical support and maintenance. Very proactive. William Jones provided proactive support and maintenance. Highly efficient and knowledgeable. William Jones.", reviewer: "William Jones" },
    { review: "The team provided personalized and effective IT solutions. Sophia Davis offered personalized IT solutions tailored to our needs. Exceptional service and attention to detail. Sophia Davis.", reviewer: "Sophia Davis" },
    { review: "Innovative and strategic approaches to complex problems. Excellent. James Wilson's strategic approach and innovative solutions were instrumental. Exceptional service and expertise. James Wilson.", reviewer: "James Wilson" },
    { review: "Comprehensive services with a client-focused attitude. Exceptional. Charlotte Anderson provided comprehensive services with a focus on client needs. Highly recommend for IT projects. Charlotte Anderson.", reviewer: "Charlotte Anderson" },
    { review: "Efficient problem-solving and excellent value for money. Logan Thomas provided efficient problem-solving and excellent value for money. Highly satisfied with the service. Logan Thomas.", reviewer: "Logan Thomas" },
    { review: "Their dedication to quality and innovation is evident. Amelia Martinez demonstrated dedication to quality and innovation. Highly impressed with the level of service. Amelia Martinez.", reviewer: "Amelia Martinez" },
    { review: "Provided top-tier IT support and services. Highly efficient. Harper Garcia provided top-tier IT support and services. Highly efficient and professional. Harper Garcia.", reviewer: "Harper Garcia" }
  ];
  
  

var currentIndex = 0;

function displayReview(index) 
{
    reviewText.style.opacity = 0;
    reviewerName.style.opacity = 0;
    setTimeout(function() 
    {
        console.log( reviewerName.innerText = reviews[index].reviewer);
        console.log("ok");
        
        reviewerName.innerText = reviews[index].reviewer;
        reviewText.textContent = reviews[index].review;
        
        reviewerName.style.opacity = 1;
        reviewText.style.opacity = 1;
    }, 300); // Wait for 0.3s (the duration of the transition) before updating content
}

displayReview(currentIndex);

nextButton.addEventListener("click", function() 
{
    currentIndex = (currentIndex + 1) % reviews.length;
    displayReview(currentIndex);
});

previousButton.addEventListener("click", function() 
{
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    displayReview(currentIndex);
});