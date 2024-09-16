var open_contract_boxes = document.getElementsByClassName("open_contract_box");
var closeMsgboxButton = document.getElementById("closeMsgboxButton");
var contractBox = document.getElementById("contract");


closeMsgboxButton.addEventListener('click', function() {
    contractBox.style.display = "none";
});


Array.from(open_contract_boxes).forEach(function(element) 
{
    element.addEventListener('click', function() 
    {
        contractBox.style.display = "flex";
    });
});

