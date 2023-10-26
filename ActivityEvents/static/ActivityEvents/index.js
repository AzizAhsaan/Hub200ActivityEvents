
document.addEventListener('DOMContentLoaded', function() {




// Active Link Indicator
const links = document.querySelectorAll('nav a');
console.log(links)
console.log(window.location.href)
links.forEach(link => {
  console.log(link.href)
console.log(window.location.href)
  if(link.href === window.location.href) {
    link.classList.add('activelink');
  }
})




//ToastBox Notification

let toastbox = document.getElementById('toastbox')
let successmsgQAform = '<i class="fa-solid fa-circle-check"></i> We Have Received Your Message Thank You'
let errormsgQAform = '<i class="fa-solid fa-circle-check"></i> There Was An error Please Try Again Later'
let successmsg = '<i class="fa-solid fa-circle-check"></i> Sign-up successful! You can now log in.'
let errormsg = '<i class="fa-sharp fa-solid fa-circle-xmark"></i> Please fix the error!'
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i> Sign-up failed. Please Fill All The Requirements!'
let registerMessageSuccess = '<i class="fa-solid fa-circle-check"></i> We Have Received Your information Thank You For Registeration into this event!'
let registerMessageInvalid = '<i class="fa-solid fa-circle-exclamation"></i> Registeration failed. Please Fill All The Requirements!'

function showToast(msg){
  let toasts = document.createElement('div')
  toasts.classList.add('toasts')
  toasts.innerHTML = msg
  toastbox.appendChild(toasts)
  if(msg.includes('error')){
    toasts.classList.add('error')
  }
  if(msg.includes('failed')){
    toasts.classList.add('invalid')
  }
  setTimeout(()=>{
    toasts.remove()
  },5000)
}



//upload photo file
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#inputphoto").change(function() {
  readURL(this);
});

//toggle between signup and signin
const signuppage = document.getElementById('signuppage');
const signinpage = document.getElementById('signinpage');
const showsignupbutton = document.getElementById('showsignuppage');
const showsigninbutton = document.getElementById('showsigninpage');
const togglesigninbar = document.getElementById('togglesigninbar');
const togglesignupbar = document.getElementById('togglesignupbar');

if(showsignupbutton){
  showsignupbutton.addEventListener('click', ()=>{
    signuppage.style.display = 'flex'
    togglesignupbar.style.display = 'block'
    signinpage.style.display = 'none'
    togglesigninbar.style.display = 'none'
  
  })
}
if(showsigninbutton){
  showsigninbutton.addEventListener('click', ()=>{
    signuppage.style.display = 'none'
    togglesignupbar.style.display = 'none'
  
    signinpage.style.display = 'flex'
    togglesigninbar.style.display = 'block'
  
  })
}
// Setting the form into 2 parts
const buttonwrapper = document.getElementById('buttonwrapper')
const buttonsignupnext = document.getElementById('buttonsignupnext')
const formsubmitpart1 = document.getElementById('formsubmitpart1')
const formsubmitpart2 = document.getElementById('formsubmitpart2')
const buttonsignupback = document.getElementById('buttonsignupback')
const secondformtoggle = document.querySelectorAll('.secondformtoggle');
if(buttonsignupnext){
  buttonsignupnext.addEventListener('click', ()=>{
    if(formsubmitpart1.style.display === 'flex' || formsubmitpart1.style.display !== 'none'){
      formsubmitpart1.style.display = 'none'
      formsubmitpart2.style.display = 'flex'
      buttonsignupnext.style.display = 'none'
      buttonwrapper.style.display = 'block'
      buttonsignupback.style.display = 'block'
      secondformtoggle.forEach(element => {
        element.style.background = '#499DEC';
      });

    }
  })
}
if(buttonsignupback){
  buttonsignupback.addEventListener('click', ()=>{
    formsubmitpart1.style.display = 'flex'
    formsubmitpart2.style.display = 'none'
    buttonsignupnext.style.display = 'block'
    buttonwrapper.style.display = 'none'
    buttonsignupback.style.display = 'none'
    secondformtoggle.forEach(element => {
      element.style.background = '#D3D3D3';
    });
  })
}

// submit the sign in form
var	wrapper2 = $( "#buttonwrapper2" );

const signinform = document.getElementById('signinform')
if(signinform){
  signinform.addEventListener('submit', ()=>{
    inputsigninemail=document.getElementById('inputsigninemail').value
    inputsigninpassword=document.getElementById('inputsigninpassword').value
    if(inputsigninemail !== '' && inputsigninpassword !== '')
    {
      if(wrapper2.not( ".checked" )) {
        wrapper2.addClass( "checked" );
        setTimeout(function(){
          wrapper2.removeClass( "checked" );
        }, 6000);
      }
      console.log('Done')
    }
  
  })
}
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};





var	wrapper = $( "#buttonwrapper" );

function phonenumber(phone){
  var patternphonenumber = /^[0-9]+$/;
  if(typeof phone === 'string' && phone.match(patternphonenumber))
  {
    return true
  }
  else{
    return false
  }
}

function emailvalidation(email){
  var patternemail = /^[^ ]+@[^ ]+\.[a-zA-Z]{2,3}$/;
  if(typeof email === 'string' && email.match(patternemail))
  {
    return true
  }
  else{
    return false
  }
}


const validateInputsSignup = () => {
  const inputusername = document.getElementById('inputusernames')
  const inputphonenumber = document.getElementById('inputphonenumber')
  const inputphoto = document.getElementById('inputphoto')
  const inputemails = document.getElementById('inputemail')
  const inputpasswords = document.getElementById('inputpassword')
  const inputconfirmpasswords = document.getElementById('inputconfirmpassword')
  let allValid = true

  // If any validation fails, set allValid to false
  if (inputusername.value === '') {
      setError(inputusername, 'Username is required')
      allValid = false
  } else {
      setSuccess(inputusername)
  }

  if (inputemails.value === '') {
      setError(inputemails, 'Email is required')
      allValid = false
  }else if(!emailvalidation(inputemails.value)){
    setError(inputemails, 'Unvalid Email')
    allValid = false
  }
   else{
      setSuccess(inputemails)
  }
  if (inputphonenumber.value === '') {
      setError(inputphonenumber, 'Phonenumber is required')
      allValid = false
  }
  else if(!phonenumber(inputphonenumber.value)){
    setError(inputphonenumber, 'PhoneNumber Must be numbers only!')
    allValid=false
  }
  else if (inputphonenumber.value.length < 11) {
      setError(inputphonenumber, 'Phonenumber must be at least 11 characters.')
      allValid = false
  } else {
      setSuccess(inputphonenumber)
  }

  if (inputpasswords.value === '') {
      setError(inputpasswords, 'Password is required')
      allValid = false
  } else if (inputpasswords.value.length < 8) {
      setError(inputpasswords, 'Password must be at least 8 characters.')
      allValid = false
  } else {
      setSuccess(inputpasswords);
  }

  if (inputconfirmpasswords.value === '') {
      setError(inputconfirmpasswords, 'Please confirm your password')
      allValid = false
  } else if (inputconfirmpasswords.value !== inputpasswords.value) {
      setError(inputconfirmpasswords, "Passwords don't match")
      allValid = false
  } else {
      setSuccess(inputconfirmpasswords)
  }
  if (allValid) {
      if(wrapper.not( ".checked" )) {
        wrapper.addClass( "checked" );
        setTimeout(function(){
          wrapper.removeClass( "checked" );
        }, 6000);
      }
    showToast(successmsg)


    const formData = new FormData()
    formData.append('inputusername', inputusername.value)
    formData.append('inputphonenumber', inputphonenumber.value)
    formData.append('inputemail', inputemails.value)
    formData.append('inputpassword', inputpasswords.value)
    formData.append('inputconfirmpassword', inputconfirmpasswords.value)
    if (inputphoto.files.length > 0) {
      formData.append('inputphoto', inputphoto.files[0])
    }
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
    fetch('/signup', {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrftoken,
      },
        body: formData,    
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/signingupdone'
        } else {
            console.error('Failed to sign up:', response.statusText)
        }
    })
    .catch(error => {
        console.error('Error:', error)
    })
}else{
showToast(invalidmsg)
}
}

// submit the sign up form 
const signupform = document.getElementById('signupform')
if(signupform){
  signupform.addEventListener('submit' , (event)=>{
    event.preventDefault()
    validateInputsSignup()
  });
}


//QAform
formQAs = document.getElementById('formQAs')
usernameinputQA = document.getElementById('usernameinputQA')
emailinputQA = document.getElementById('emailinputQA')
messageinputQA = document.getElementById('messageinputQA')
if(formQAs){
  formQAs.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData3 = new FormData()
    formData3.append('usernameinputQA', usernameinputQA.value)
    formData3.append('emailinputQA', emailinputQA.value)
    formData3.append('messageinputQA', messageinputQA.value)
  
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
    if(wrapper.not( ".checked" )) {
      wrapper.addClass( "checked" );
      setTimeout(function(){
        wrapper.removeClass( "checked" );
      }, 6000);
    }
    fetch('/ASKAQUESTION', {
        method: 'POST',
        headers: {
          'X-CSRFToken': csrftoken,
      },
        body: formData3,    
    }).then((response) => {
      if (response.ok) {
        showToast(successmsgQAform);
      } else {
        showToast(errormsgQAform)
      }
    })
  })
  
  
}






//EventDateRangeForm
EventDateRangeForm = document.getElementById('EventDateRangeForm')
InputStartRange = document.getElementById('InputStartRange')
InputEndRange = document.getElementById('InputEndRange')
ButtonEventRangeForm=document.getElementById("ButtonEventRangeForm")
function updatebuttondisabled() {
  if (InputStartRange.value === '' ) {
    ButtonEventRangeForm.disabled = true;
  }else if(InputEndRange.value === ''){
    ButtonEventRangeForm.disabled = true;

  }
   else {
    ButtonEventRangeForm.disabled = false;
  }
}

if(EventDateRangeForm){
  updatebuttondisabled()
  InputStartRange.addEventListener('input', updatebuttondisabled);
  InputEndRange.addEventListener('input', updatebuttondisabled);

}
  
  
  








//Event-Contact Form
formContactUs = document.getElementById('contactusform')
usernameinputcontactusform = document.getElementById('usernameinputcontactusform')
emailinputcontactusform = document.getElementById('emailinputcontactusform')
messageinputcontactusform = document.getElementById('messageinputcontactusform')

    if(formContactUs ){
    
      formContactUs.addEventListener('submit',(e)=>{
        e.preventDefault()

        const formData2 = new FormData()
        formData2.append('usernameinputcontactusform', usernameinputcontactusform.value)
        formData2.append('emailinputcontactusform', emailinputcontactusform.value)
        formData2.append('messageinputcontactusform', messageinputcontactusform.value)
    
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
        if(wrapper.not( ".checked" )) {
          wrapper.addClass( "checked" );
          setTimeout(function(){
            wrapper.removeClass( "checked" );
          }, 6000);
        }
        fetch('/contactus', {
            method: 'POST',
            headers: {
              'X-CSRFToken': csrftoken,
          },
            body: formData2,    
        }).then((response) => {
          if (response.ok) {
            showToast(successmsgQAform);
          } else {
            showToast(errormsgQAform)
          }
        })
    })}




// Registeration Form 





const validateInputsRegisteration = () => {
  UsernameRegistration = document.getElementById('UsernameRegistration')
  PhonenumberRegistration = document.getElementById('PhonenumberRegistration')
  EmailRegistration = document.getElementById('EmailRegistration')
  DateofbirthRegistration = document.getElementById('DateofbirthRegistration')
  LocationRegistration = document.getElementById('LocationRegistration')
  EventsRegistration = document.getElementById('EventsRegistration')
  const selectedGender = document.querySelector('input[name="gender"]:checked')
  const genderValue = selectedGender.id
  GuestsRegistration = document.getElementById('GuestsRegistration')
  CommentRegistration = document.getElementById('CommentRegistration')
  let allValid = true

  // If any validation fails, set allValid to false
  if (UsernameRegistration.value === '') {
      setError(UsernameRegistration, 'Username is required')
      allValid = false
  } else {
      setSuccess(UsernameRegistration)
  }

  if (EmailRegistration.value === '') {
      setError(EmailRegistration, 'Email is required')
      allValid = false
  }else if(!emailvalidation(EmailRegistration.value)){
    setError(EmailRegistration, 'Uncorrect Valid Email')
    allValid = false
  }
   else{
      setSuccess(EmailRegistration)
  }
  if (PhonenumberRegistration.value === '') {
      setError(PhonenumberRegistration, 'Phonenumber is required')
      allValid = false
  }
  else if(!phonenumber(PhonenumberRegistration.value)){
    setError(PhonenumberRegistration, 'PhoneNumber Must be numbers only!')
    allValid=false
  }
  else if (PhonenumberRegistration.value.length < 11) {
      setError(PhonenumberRegistration, 'Phonenumber must be at least 11 characters.')
      allValid = false
  } else {
      setSuccess(PhonenumberRegistration)
  }

  if(DateofbirthRegistration.value === ''){
    setError(DateofbirthRegistration, 'DateOfBirth is required')
    allValid = false
  }else{
    setSuccess(DateofbirthRegistration)
  }

  if(LocationRegistration.value === ''){
    setError(LocationRegistration, 'Location is required')
    allValid = false
  }else{
    setSuccess(LocationRegistration)
  }

  if(EventsRegistration.value === ''){
    setError(EventsRegistration, 'Events is required')
    allValid = false
  }else{
    console.log(EventsRegistration.value)
    setSuccess(EventsRegistration)
  }

  
  if(genderValue === ''){

    allValid = false
  }


  
  if (allValid) {
      if(wrapper.not( ".checked" )) {
        wrapper.addClass( "checked" );
        setTimeout(function(){
          wrapper.removeClass( "checked" );
        }, 6000);
      }
      const formDataregister = new FormData()
      formDataregister.append('UsernameRegistration', UsernameRegistration.value)
      formDataregister.append('EmailRegistration', EmailRegistration.value)
      formDataregister.append('PhonenumberRegistration', PhonenumberRegistration.value)
      formDataregister.append('DateofbirthRegistration', DateofbirthRegistration.value)
      formDataregister.append('LocationRegistration', LocationRegistration.value)
      formDataregister.append('EventsRegistration', EventsRegistration.value)
      formDataregister.append('gender', genderValue)
      formDataregister.append('GuestsRegistration', GuestsRegistration.value)
      formDataregister.append('CommentRegistration', CommentRegistration.value)
      console.log(UsernameRegistration.value)
      console.log(EmailRegistration.value)
      console.log(PhonenumberRegistration.value)
      console.log(DateofbirthRegistration.value)
      console.log(LocationRegistration.value)
      console.log(genderValue)
      console.log(GuestsRegistration.value)

      const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
      fetch('/registrations', {
          method: 'POST',
          headers: {
            'X-CSRFToken': csrftoken,
        },
          body: formDataregister,    
      })
    showToast(registerMessageSuccess)
}else{
  showToast(registerMessageInvalid)
}
}







registerform = document.getElementById('registerform')

if(registerform){
  registerform.addEventListener('submit', (e)=>{
    console.log(registerform)
    e.preventDefault()
    validateInputsRegisteration()

  })
}

})



// scroll to the section
function scrollfunction(sectionId) {
  const section = document.getElementById(sectionId)
  if(section){
      window.scrollTo({
          top:section.offsetTop,
          behavior:'smooth'
      })
  }
}