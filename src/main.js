document.addEventListener("DOMContentLoaded", function() 
{
    var links = document.querySelectorAll("ul li a");

    links.forEach(function(link) 
    {
        link.addEventListener("click", function(event) 
        {
            event.preventDefault(); // Prevent default hyperlink behavior
            var targetId = this.getAttribute("href").substring(1); // Get target section ID
            var targetElement = document.getElementById(targetId); // Get target section element
            var topOffset = 90; // Set the offset from the top

            if (targetElement) 
            {
                var targetOffset = targetElement.offsetTop - topOffset;
                window.scrollTo
                ({
                    top: targetOffset,
                    behavior: "smooth"
                });
            }
        });
    });
});