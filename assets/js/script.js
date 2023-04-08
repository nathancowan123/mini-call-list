var formEl = document.querySelector("#new-client-form");
var tasksToDoEl = document.querySelector("#new-client");

var taskFormHandler = function(event) {
  event.preventDefault();
  var nameInput = document.querySelector("input[name='name-input'").value;
  var phoneInput = document.querySelector("input[name='phone-input']").value;
  var emailInput = document.querySelector("input[name='email-input']").value;

  // check if inputs are empty (validate)
  if (nameInput === "" || phoneInput === "" || emailInput === "" ) {
    alert("You need to fill out the task form!");
    return false;
  }
  
  formEl.reset();

  // reset form fields for next task to be entered
   document.querySelector("input[name='name-input'").value = "";
   document.querySelector("input[name='phone-input'").value = "";
 document.querySelector("input[name='email-input'").value = "";

  var clientDataObj = {
    name: nameInput,
    phone: phoneInput,
    email: emailInput
  };

  console.log(nameInput,phoneInput,emailInput)

  createClientEl(clientDataObj);
};

var createClientEl = function(clientDataObj) {
  // create list item
  var listItemEl = document.createElement("p");
  listItemEl.className = "client-name";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "client-phone";
  taskInfoEl.innerHTML = "<tr><th scope='row'>1</th><td><p class='client-name'>Junie Cook</p></td><td><a href='tel:+1813-534-3344'><button type='button' class='btn btn-primary callBtn' id='callBtnId-0'>Call</button></a></td><td><div class='dropdown'> <button class='btn btn-info dropdown-toggle textBtn' type='button' id='textBtn-0' data-bs-toggle='dropdown' aria-expanded='false'>Text </button> <ul class='dropdown-menu' aria-labelledby='textBtn-0'> <li><a class='dropdown-item' href='sms:813-534-3344&amp;body=This is Nathan MLO @ Umortgage. Thanks for taking my call today! I pride myself in keeping an open line of communication with my agent partners throughout the loan process from start to finish; consitantly providing updates, and proactively avoiding possible obsticals. I look forward to meeting up and becoming your trusted MLO. Be sure to save my contact! Nathan Cowan, MLO @ Umortgage. NMLS # 2142312 https://nathancowanmlo.com/contact/Cowan-MLO_Nathan.vcf'>First Talk To</a></li><li><a class='dropdown-item' href='sms:813-534-3344&amp;body=Feel free to call anytime or schedule an appointment on my Calendly. Nathan Cowan, MLO @ Umortgage. NMLS # 2142312 https://calendly.com/nathancowan-mlo'>Calendly</a></li> <li><a class='dropdown-item' href='sms:813-534-3344&amp;body=Now may not seem like the right time but save my number and I hope to work with you sometime soon. I'm a local MLO in the Tampa area and communication and availablility set me appart from the rest. I specialize in conventional and non-qm home loans and help clients all over the state of FL. Be sure to save my contact: Nathan Cowan, MLO @ Umortgage. NMLS # 2142313'>Not The Right Time</a></li> <li><a class='dropdown-item' href='sms:813-534-3344&amp;body=What Is a Non-QM Loan? A Non-QM loan, or a non-qualified mortgage, is a type of mortgage loan that allows you to qualify based on alternative methods, instead of the traditional income verification required for most loans. Common examples include bank statements or using your assets as income.Nathan Cowan, MLO @ Umortgage. NMLS # 2142313'>Non-QM</a></li></a></li> <li><a class='dropdown-item' href='sms:813-534-3344&amp;body=Top level communication and availability; call anytime. Nathan Cowan, MLO @ Umortgage. NMLS # 2142312 https://nathancowanmlo.com/contact/Cowan-MLO_Nathan.vcf'>Top-Level Communication </a></li></ul></div><td><p name='email-input'> </p></td><td>TBD</td><td><button type='button' class='btn btn-danger optOut' id='optOutId-0'>Request</button></td></tr>";
  listItemEl.appendChild(taskInfoEl);

  console.dir(listItemEl);
  console.log();
  
  // add list item to list
  tasksToDoEl.appendChild(listItemEl);
};

 formEl.addEventListener("submit", taskFormHandler);
