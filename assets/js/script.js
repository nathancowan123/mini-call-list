var formEl = document.querySelector("#new-client-form");
var tasksToDoEl = document.querySelector("#new-client");

// id="statusBtn" onClick event
var interested = function() {
    document.getElementById("statusBtn").style.background = "#F62394";
    document.getElementById("statusBtn").innerHTML = "Interested in Partnership";
  }

var PAL = function() {
    document.getElementById("statusBtn").style.background = "#83CE01";
    document.getElementById("statusBtn").innerHTML = "Pre-Approval Requested";    
  }

var SPA = function() {
    document.getElementById("statusBtn").style.background = "#00B3D4";
    document.getElementById("statusBtn").innerHTML = "SPA";
  }

var LE = function() {
    document.getElementById("statusBtn").style.background = "#8B20BB";
    document.getElementById("statusBtn").innerHTML = "Sent LE";
  }

var i2p = function() {
    document.getElementById("statusBtn").style.background = "#007AC7";
    document.getElementById("statusBtn").innerHTML = "Accepted I2P";
  }

var appraisal = function() {
    document.getElementById("statusBtn").style.background = "#0024BA";
    document.getElementById("statusBtn").innerHTML = "Appraisal Complete";
  }

var c2c = function() {
    document.getElementById("statusBtn").style.background = "#01B700";
    document.getElementById("statusBtn").innerHTML = "Clear to Close";
  }

//OptOut Client onClick event


//Input form Handler
// // Selector
var taskFormHandler = function(event) {
  event.preventDefault();
  var nameInput = document.querySelector("input[name='name-input'").value;
  var phoneInput = document.querySelector("input[name='phone-input']").value;
  var emailInput = document.querySelector("input[name='email-input']").value;
  var areaInput = document.querySelector("input[name='area-input']").value;


  // check if inputs are empty (validate)
  if (nameInput === "" || phoneInput === "" || emailInput === "" ) {
    alert("You need to fill out the task form!");
    return false;
  }
  

   // reset form fields for next task to be entered
    formEl.reset();

    document.querySelector("input[name='name-input'").value = "";
    document.querySelector("input[name='phone-input'").value = "";
    document.querySelector("input[name='email-input'").value = "";
    document.querySelector("input[name='area-input'").value = "";

    //Client Data objects
  var clientDataObj = {
    name: nameInput,
    phone: phoneInput,
    email: emailInput,
    area: areaInput,
  };


  createClientEl(clientDataObj);
};
  
  var createClientEl = function myFunction(clientDataObj) {
    // Locate table
      var tbody = document.getElementById("myTable");
      //insert new row
      var row = tbody.insertRow(0);
      //incert Cell variable and location
      var cellNo = row.insertCell(0);
      var clientName = row.insertCell(1);
      var clientCall = row.insertCell(2);
      var clientText = row.insertCell(3);
      var clientEmail = row.insertCell(4);
      var clientArea = row.insertCell(5);
      var clientOptOut = row.insertCell(6);
      
      //Inner HTML
      cellNo.innerHTML = "<button class='btn btn-secondary dropdown-toggle' type='button'  id='statusBtn' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Dropdown button</button><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a class='dropdown-item' href='#' onclick='interested()' id='interested-contact'>Interested in Contact Info</a><a class='dropdown-item' href='#' onclick='PAL()' id='PAL'>Pre-Approval Requested</a><a class='dropdown-item' href='#' onclick='SPA()' id='SPA'>SPA</a><a class='dropdown-item' href='#' onclick='LE()' id='sent-LE'>Sent LE</a><a class='dropdown-item' href='#' onclick='i2p()' id='i2p'>Accepted I2P</a><a class='dropdown-item' href='#' onclick='appraisal()' id='appraisal-complete'>Appraisal Complete</a><a class='dropdown-item' href='#' onclick='c2c()' id='c2c'>Clear to Close</a></div></div>";
      clientName.innerHTML =  "<p class='client-name'>"+ clientDataObj.name + "</p>";
      clientCall.innerHTML = "<a href='tel:+" + clientDataObj.phone + "'><button type='button' class='btn btn-primary callBtn' id='callBtnId-0'>Call</button></a>";
      clientText.innerHTML = "<div class='dropdown'> <button class='btn btn-info dropdown-toggle textBtn' type='button' id='textBtn-0' data-bs-toggle='dropdown' aria-expanded='false'>Text </button> <ul class='dropdown-menu' aria-labelledby='textBtn-0'> <li><a class='dropdown-item' href='sms:" + clientDataObj.phone + "'&amp;body=This is Nathan MLO @ Umortgage. Thanks for taking my call today! I pride myself in keeping an open line of communication with my agent partners throughout the loan process from start to finish; consitantly providing updates, and proactively avoiding possible obsticals. I look forward to meeting up and becoming your trusted MLO. Be sure to save my contact! Nathan Cowan, MLO @ Umortgage. NMLS # 2142312 https://nathancowanmlo.com/contact/Cowan-MLO_Nathan.vcf'>First Talk To</a></li><li><a class='dropdown-item' href='sms:" + clientDataObj.phone + "'&amp;body=Feel free to call anytime or schedule an appointment on my Calendly. Nathan Cowan, MLO @ Umortgage. NMLS # 2142312 https://calendly.com/nathancowan-mlo'>Calendly</a></li> <li><a class='dropdown-item' href='sms:" + clientDataObj.phone + "'&amp;body=Now may not seem like the right time but save my number and I hope to work with you sometime soon. I'm a local MLO in the Tampa area and communication and availablility set me appart from the rest. I specialize in conventional and non-qm home loans and help clients all over the state of FL. Be sure to save my contact: Nathan Cowan, MLO @ Umortgage. NMLS # 2142313'>Not The Right Time</a></li> <li><a class='dropdown-item' href='sms:" + clientDataObj.phone + "'&amp;body=What Is a Non-QM Loan? A Non-QM loan, or a non-qualified mortgage, is a type of mortgage loan that allows you to qualify based on alternative methods, instead of the traditional income verification required for most loans. Common examples include bank statements or using your assets as income.Nathan Cowan, MLO @ Umortgage. NMLS # 2142313'>Non-QM</a></li></a></li> <li><a class='dropdown-item' href='sms:" + clientDataObj.phone + "'&amp;body=Top level communication and availability; call anytime. Nathan Cowan, MLO @ Umortgage. NMLS # 2142312 https://nathancowanmlo.com/contact/Cowan-MLO_Nathan.vcf'>Top-Level Communication </a></li></ul></div>";
      clientEmail.innerHTML = "<p name='email-input'>"+ clientDataObj.email +  "</p>";
      clientArea.innerHTML =  clientDataObj.area;
      clientOptOut.innerHTML = "<button type='button' class='btn btn-danger optOut' id='optOutId-0'>Request</button>";

    };
    // End Input Handler

 formEl.addEventListener("submit", taskFormHandler);
