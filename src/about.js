//fullDetailsTemplate and allMember and button is closeFullInfoButton and fullInfoButton 
//display flex and none
// info-1,2,3,4,5,6 ==
//id=memberImg with img, id=memberName with h1, id=description with p, id=skill1 2 3 4 5 6 with li item, id=edu1 2 3 with li item

var closeFullInfoButton = document.getElementById("closeFullInfoButton");
var fullInfoButtons = document.getElementsByClassName("fullInfoButton");
var fullDetailsTemplate = document.getElementById("fullDetailsTemplate");
var allMember = document.getElementById("allMember");

// Assuming you have an array of member objects with their information
var members = [
    {
        imgSrc: "img/sayed.png",
        name: "Sayed Mamun",
        description: "My name is Sayed Mamun. My home is Gaibandha. I work in CodeIT IT firm. Let me describe my work style in one word. I always want to give my best work",
        skills: ["- Technical Writing", "- Research Skills", "- Documentation Tools","- Advance Excel", "- Version Control", "- Information Architecture"],
        education: ["SSC Milestone college(Uttara,Dhaka)", "HSC Milestone college(Uttara,Dhaka)", "B.Sc in (CSE) American Internation University-Bangladesh"]
        
    },

    {
        imgSrc: "img/nirob.png",
        name: "Nirob Sarker",
        description: "My name is Nirob Sarker. My home is Gazipur. I work in CodeIT IT firm. Let me describe my work style in one word. I always want to give my best work",
        skills: ["- SQL", "- Database Design", "- Performance Tuning","- Backup and Recovery", "- Security Management", "- Replication"],
        education: ["SSC Milestone college(Uttara,Dhaka)", "HSC Milestone college(Uttara,Dhaka)", "B.Sc in (CSE) American Internation University-Bangladesh"]
    },
    
    {
        imgSrc: "img/joy.png",
        name: "MJ Joy",
        description: "My name is MJ Joy. My home is Gazipur. I work in CodeIT IT firm. Let me describe my work style in one word. I always want to give my best work",
        skills: ["- Front-end Development", "- Back-end Development", "- Database Management","- Version Control Systems", "- API Design and Development", "- Debugging and Testing"],
        education: ["SSC Milestone college(Uttara,Dhaka)", "HSC Milestone college(Uttara,Dhaka)", "B.Sc in (CSE) American Internation University-Bangladesh"]
    },
    
    {
        imgSrc: "img/fahad.png",
        name: "Fahad Ibne Firoz",
        description: "My name is Fahad Ibne Firoz. My home is Shariatpur. I work in CodeIT IT firm. Let me describe my work style in one word. I always want to give my best work",
        skills: ["- Troubleshooting", "- Technical Support", "- Network Management","- Operating Systems", "- Remote Desktop Support", "- Customer Service"],
        education: ["SSC Milestone college(Uttara,Dhaka)", "HSC Milestone college(Uttara,Dhaka)", "B.Sc in (CSE) American Internation University-Bangladesh"]
    },
    
    {
        imgSrc: "img/sifat.png",
        name: "Md Arafat Rahman Sifat",
        description: "My name is Md Arafat Rahman Sifat. My home is Narayanganj. I work in CodeIT IT firm. Let me describe my work style in one word. I always want to give my best work",
        skills: ["- Requirements Gathering", "- Business Process Modeling", "- Stakeholder Analysis","- Data Analysis", "- Solution Assessment and Validation", "- Agile Methodologies"],
        education: ["SSC Milestone college(Uttara,Dhaka)", "HSC Milestone college(Uttara,Dhaka)", "B.Sc in (CSE) American Internation University-Bangladesh"]
    },
    
    {
        
        imgSrc: "img/asef.jpg",
        name: "Asef Abdullah",
        description: "My name is Md Arafat Rahman Sifat. My home is Faridpur. I work in CodeIT IT firm. Let me describe my work style in one word. I always want to give my best work",
        skills: ["- Project Planning", "- Communication Skills", "- Agile and Scrum","- Budgeting and Forecasting", "- Stakeholder Management", "- Quality Assurance"],
        education: ["SSC Milestone college(Uttara,Dhaka)", "HSC Milestone college(Uttara,Dhaka)", "B.Sc in (CSE) American Internation University-Bangladesh"]
    }
    
];


closeFullInfoButton.addEventListener("click", function() 
{
    allMember.style.opacity = "100%";
    fullDetailsTemplate.style.display = "none";
});




// Loop through each fullInfoButton element and attach the event listener
for (var i = 0; i < fullInfoButtons.length; i++) 
{
    (function(index) 
    {
        fullInfoButtons[index].addEventListener("click", function() 
        {
            // Fetch member information
            var member = members[index];

            memberImg.src = member.imgSrc;
            memberName.textContent = member.name;
            description.textContent = member.description;

            // Update skills list
            for (var j = 0; j < member.skills.length; j++) 
            {
                document.getElementById("skill" + (j + 1)).innerText = member.skills[j];
            }

            // Update education list
            for (var k = 0; k < member.education.length; k++) 
            {
                document.getElementById("edu" + (k + 1)).innerText = member.education[k];
            }

            // Show full details template and hide all members
            fullDetailsTemplate.style.display = "flex";
            allMember.style.opacity = "60%";
        });
    })(i);
}