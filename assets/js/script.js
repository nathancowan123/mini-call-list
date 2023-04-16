var formEl = document.querySelector("#new-client-form");
var tasksToDoEl = document.querySelector("#new-client");
var pageContentEl = document.querySelector("#page-content");
var interestedContactEl = document.querySelector('#interested-contact')


 // JSON Data Fetch

 const tableBody = document.querySelector('#myTable tbody')

 fetch('data.json')
   .then((response) => response.json())
   .then((data) => {
     let rowNum = 1
     data.forEach((row) => {
       const tr = document.createElement('tr')
       tr.setAttribute('data-id', `row-${rowNum}`)
       tr.innerHTML = 
       `
       <td>
       <button type="button" class="btn btn-secondary" data-action="opt-out">Request</button>          
       </td>
       <td>
         <p>${row.name}</p>
       </td>
       <td>
         <a href="tel:+1${row.phone}">
           <button type="button" class="btn btn-primary callBtn" id="callBtnId-${rowNum}">Call</button>
         </a>
       </td>
       <td>
         <div class="dropdown">
           <button class="btn btn-info dropdown-toggle textBtn" type="button" id="textBtn-${rowNum}" data-bs-toggle="dropdown" aria-expanded="false">
             Text
           </button>
           <ul class="dropdown-menu" aria-labelledby="textBtn-${rowNum}">
             <li><a class="dropdown-item" href="sms:${row.phone}&amp;body=">First Talk To</a></li>
             <li><a class="dropdown-item" href="sms:${row.phone}&amp;body=">Calendly</a></li>
             <li><a class="dropdown-item" href="sms:${row.phone}&amp;body=">Not The Right Time</a></li>
             <li><a class="dropdown-item" href="sms:${row.phone}&amp;body=">Non-QM</a></li>
             <li><a class="dropdown-item" href="sms:${row.phone}&amp;body=">Top-Level Communication</a></li>
           </ul>
         </div>
       </td>
       <td>
         <p name="email-input">${row.email}</p>
       </td>
       <td>
         Brandon
       </td>
       <td>
       <div class="dropdown">
       <button class="btn btn-secondary dropdown-toggle" type="button" id="statusDropdown-${rowNum}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         ${row.statusBtn}
         <span class="statusSpan"></span>
       </button>
       <div class="dropdown-menu" aria-labelledby="statusDropdown-${rowNum}">
         ${row.statusState.map((state) => `<a class="dropdown-item" href="#" data-id="${state}">${state}</a>`).join('')}
       </div>
     </div>
       </td>
       `
       tableBody.appendChild(tr)
       rowNum++
     })
   })


 

//Input form Handler
// // Selector
var taskFormHandler = function(event) {
  event.preventDefault();
  var nameInput = document.querySelector("input[name='name-input'").value;
  var phoneInput = document.querySelector("input[name='phone-input']").value;
  var emailInput = document.querySelector("input[name='email-input']").value;
  var areaInput = document.querySelector("input[name='area-input']").value;

  // check if inputs are empty (validate)
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
  var tbody = document.getElementById("myTableBody");
  //generate unique ID for row
  var rowId = "row-" + Date.now();
  //insert new row with unique ID
  var row = tbody.insertRow(0);
  row.setAttribute("data-id", rowId);
  //incert Cell variable and location
  var cellNo = row.insertCell(0);
  var clientName = row.insertCell(1);
  var clientCall = row.insertCell(2);
  var clientText = row.insertCell(3);
  var clientEmail = row.insertCell(4);
  var clientArea = row.insertCell(5);
  var clientOptOut = row.insertCell(6);

  //Inner HTML
  cellNo.innerHTML = "<button type='button' class='btn btn-secondary' data-action='opt-out'>Request</button>";
  clientName.innerHTML =  "<p class='client-name'>"+ clientDataObj.name + "</p>";
  clientCall.innerHTML = "<a href='tel:+" + clientDataObj.phone + "'><button type='button' class='btn btn-primary callBtn' id='callBtnId-0'>Call</button></a>";
  clientText.innerHTML = "<div class='dropdown'> <button class='btn btn-info dropdown-toggle textBtn' type='button' id='textBtn-0' data-bs-toggle='dropdown' aria-expanded='false'>Text </button> <ul class='dropdown-menu' aria-labelledby='textBtn-0'> <li><a class='dropdown-item' href='sms:" + clientDataObj.phone + "'&amp;body='>First Talk To</a></li><li><a class='dropdown-item' href='sms:" + clientDataObj.phone + "'&amp;body=' href='sms:" + clientDataObj.phone + "'&amp;body=' href='sms:" + clientDataObj.phone + "'&amp;body=' href='sms:" + clientDataObj.phone + "'&amp;body='>Top-Level Communication </a></li></ul></div>";
  clientEmail.innerHTML = "<p name='email-input'>"+ clientDataObj.email +  "</p>";
  clientArea.innerHTML =  clientDataObj.area;
  clientOptOut.innerHTML = "<div class='dropdown'><button class='btn btn-secondary dropdown-toggle' type='button' id='statusDropdown-${rowNum}' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Dropdown button</button><div class='dropdown-menu' aria-labelledby='statusDropdown-${rowNum}'><a class='dropdown-item' href='#' id='interested-contact'>Interested in Contact Info</a><a class='dropdown-item' href='#' id='PAL'>Pre-Approval Requested</a><a class='dropdown-item' href='#' id='SPA'>SPA</a><a class='dropdown-item' href='#' id='sent-LE'>Sent LE</a><a class='dropdown-item' href='#' id='i2p'>Accepted I2P</a><a class='dropdown-item' href='#' id='appraisal-complete'>Appraisal Complete</a><a class='dropdown-item' href='#' id='c2c'>Clear to Close</a></div>";

  // Define an array to hold the client data objects
var clients = [];

// Add the client data object to the array
clients.push(clientDataObj);

// Convert the array to a JSON string
var json = JSON.stringify(clients);
console.log(json)

};

    // End Input Handler


    // // Button Click
    const tableParent = document.getElementById('table-parent')

    tableParent.addEventListener('click', function (event) {
      // Check if the clicked element is a button with data-action="opt-out"
      if (
        event.target.tagName.toLowerCase() === 'button' &&
        event.target.getAttribute('data-action') === 'opt-out'
      ) {
        // Remove the "btn-secondary" class and add the "btn-danger" class
        event.target.classList.remove('btn-secondary')
        event.target.classList.add('btn-danger')
    
        // Change the text on the button
        event.target.textContent = 'Do Not Call'
      }
    })
  

    // Status Button

  


  
    

 formEl.addEventListener("submit", taskFormHandler);

