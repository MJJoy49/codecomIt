//id=serviceCataory ---> li[index] {as a button}
//after click chng 
//class=card[index] ----> img.src , h2


var ul=document.getElementById("serviceCataory");

var listItems=ul.getElementsByTagName("li");

var items = [
    {
        srcImg: ["servicesImgIcon/UserManualCreation.png", "servicesImgIcon/API_Documentation.jpg", "servicesImgIcon/SoftwareDocumentation.jpg", "servicesImgIcon/TrainingMaterialDevelopment.jpg", "servicesImgIcon/KnowledgeBaseManagement.jpg", "servicesImgIcon/StandardOperatingProcedureCreation.jpeg"],
        itemName: ["User Manual Creation", "API Documentation", "Software Documentation", "Training Material Development", "Knowledge Base Management", "Standard Operating Procedure Creation"]
    },
    {
        srcImg: ["servicesImgIcon/DatabaseDesignandImplementation.jpeg", "servicesImgIcon/DataMigrationServices.jpg", "servicesImgIcon/DatabasePerformanceOptimization.jpg", "servicesImgIcon/DataSecurityandComplianceManagement.png", "servicesImgIcon/DatabaseBackupandRecoverySolutions.jpg", "servicesImgIcon/DatabaseAdministrationandMaintenance.jpg"],
        itemName: ["Database Design and Implementation", "Data Migration Services", "Database Performance Optimization", "Data Security and Compliance Management", "Database Backup and Recovery Solutions", "Database Administration and Maintenance"]
    },
    {
        srcImg: ["servicesImgIcon/CustomWebApplicationDevelopment.png", "servicesImgIcon/E-commerceWebsiteDevelopment.jpg", "servicesImgIcon/ContentManagementSystemDevelopment.jpg", "servicesImgIcon/ProgressiveWebAppDevelopment.png", "servicesImgIcon/WebPortalDevelopment.jpg", "servicesImgIcon/WebApplicationMaintenanceandSupport.jpg"],
        itemName: ["Custom Web Application Development", "E-commerce Website Development", "Content Management System (CMS) Development", "Progressive Web App (PWA) Development", "Web Portal Development", "Web Application Maintenance and Support"]
    },
    {
        srcImg: ["servicesImgIcon/DesktopSupportServices.jpg", "servicesImgIcon/NetworkTroubleshooting.jpg", "servicesImgIcon/SoftwareInstallationandConfiguration.jpg", "servicesImgIcon/HardwareTroubleshootingandRepair.jpg", "servicesImgIcon/RemoteITSupportServices.jpg", "servicesImgIcon/ITAssetManagement.jpg"],
        itemName: ["Desktop Support Services", "Network Troubleshooting", "Software Installation and Configuration", "Hardware Troubleshooting and Repair", "Remote IT Support Services", "IT Asset Management"]
    },
    {
        srcImg: ["servicesImgIcon/BusinessProcessMapping.png", "servicesImgIcon/StakeholderInterviewsandWorkshops.png", "servicesImgIcon/RequirementElicitationandDocumentation.jpeg", "servicesImgIcon/UseCaseDevelopment.jpg", "servicesImgIcon/BusinessRuleDefinition.jpg", "servicesImgIcon/RequirementPrioritizationandTraceability.png"],
        itemName: ["Business Process Mapping", "Stakeholder Interviews and Workshops", "Requirement Elicitation and Documentation", "Use Case Development", "Business Rule Definition", "Requirement Prioritization and Traceability"]
    },
    {
        srcImg: ["servicesImgIcon/ProjectPlanningandScheduling.jpg", "servicesImgIcon/RiskAssessmentandManagement.jpg", "servicesImgIcon/ResourceAllocationandManagement.jpg", "servicesImgIcon/BudgetingandCostControl.png", "servicesImgIcon/AgileProjectManagement.jpg", "servicesImgIcon/StakeholderCommunicationandReporting.jpg"],
        itemName: ["Project Planning and Scheduling", "Risk Assessment and Management", "Resource Allocation and Management", "Budgeting and Cost Control", "Agile Project Management", "Stakeholder Communication and Reporting"]
    }
];



function firstshow() {
    action(0);
    var item = items[0];
    
    for (var j = 0; j < item.srcImg.length; j++) { // Ensure we loop according to the item's length
        var card = document.getElementsByClassName("card")[j];
        if (!card) {
            console.error("Card not found for index", j);
            continue; // Skip this iteration if the card is not found
        }
        var img = card.querySelector(".img"); // Using querySelector for better specificity and simplicity
        var name = card.querySelector(".name"); // Same as above
        
        if (name) name.innerText = item.itemName[j]; // Check if name exists before setting innerText
        if (img) img.src = item.srcImg[j]; // Check if img exists before setting src
        else console.error("No img element found in card", card);
    }
}




for (var i = 0; i < listItems.length; i++) {
    (function(index) {
        listItems[index].addEventListener("click", function() 
        {
            action(index);
            var item = items[index]; // Assuming you define `items` somewhere
            
             // Select the img inside the card

             for (var j = 0; j < 7; j++) 
             {
                

                var card = document.getElementsByClassName("card")[j];
                var img = card.querySelector("img");
                var name = card.querySelector("h2"); // Use querySelector to select the first <h2> element
                name.innerText = item.itemName[j];
                if (img) 
                {
                    img.src = item.srcImg[j];
                } 
                else 
                {
                    console.error("No img element found in card", card);
                }
            }

            

        });
    })(i);
}

function action(x) {
    for (var index = 0; index < listItems.length; index++) 
    {
        if (index !== x) {
            listItems[index].style.color = "var(--clr-light)";
            listItems[index].style.borderBottom="none";
        } else {
            listItems[index].style.color = "var(--clr-slate600)";
            listItems[index].style.borderBottom="0.5px solid var(--clr-light)";
        }
    }
}

firstshow() ;

            

