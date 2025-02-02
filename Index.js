function sub(){
    let userdata={
     email : document.querySelector('#email').value,
     password :document.querySelector('#password').value,
}
  
let saveddata= JSON.parse(localStorage.getItem('signup'))

    

    let error=document.querySelector('#error')


    if(userdata.email==''){
        let a=document.getElementById('error').innerHTML="Sorry, the email address field is empty please enter an email address."
        error.style.display = "block";
        document.getElementById('email').focus()

        return false
    }

    else if(!(userdata.email.includes('@'))){
        let a=document.getElementById('error').innerHTML="Sorry, the email address your entered is not a valid one, please enter a valid email address."
        error.style.display = "block";
        document.getElementById('email').focus()
        return false
    }

    else if(userdata.password==''){
        let a=document.getElementById('error').innerHTML="Sorry, the password field is empty please enter the password, It is mandatory"
        error.style.display = "block";
        document.getElementById('password').focus()
        return false
    }
    

    if(saveddata.email!=userdata.email || saveddata.password!=userdata.password){
    document.getElementById('error').innerHTML="User not Found Please Signup First or Forget the password or e-mail and try again"
    error.style.display='block'
    return false
    }


    alert("Login successful You will be redirected to the Booking Page")
}


function signin(){
    let signindata={
     number : document.querySelector('#number').value,   
     email : document.querySelector('#email').value,
     password :document.querySelector('#password').value,
     cpassword :document.querySelector('#cpassword').value
}

    let error=document.querySelector('#error')

    if(signindata.number==''){
        document.getElementById('error').innerHTML="Sorry, the mobile number field is empty please enter your mobile number."
        error.style.display = "block";
        document.getElementById('number').focus()
      return false
    }

    else if(isNaN(signindata.number)){
        document.getElementById('error').innerHTML="Sorry, the mobile number should contain numbers only not any other characrer."
        error.style.display = "block";
        document.getElementById('number').focus()
        return false
    }

    else if(signindata.number.length>10 || signindata.number.length<10){
        document.getElementById('error').innerHTML="Sorry, the mobile number should contain 10 digits in order for processing."
        error.style.display = "block";
        document.getElementById('number').focus()
      return false
    }

    

    else if(signindata.email==''){
        document.getElementById('error').innerHTML="Sorry, the email address field is empty please enter an email address."
        error.style.display = "block";
        document.getElementById('email').focus()

        return false
    }

    else if(!(signindata.email.includes('@'))){
        let a=document.getElementById('error').innerHTML="Sorry, the email address your entered is not a valid one, please enter a valid email address."
        error.style.display = "block";
        document.getElementById('email').focus()
        return false
    }

    else if(signindata.password==''){
        let a=document.getElementById('error').innerHTML="Sorry, the password field is empty please enter the password, It is mandatory"
        error.style.display = "block";
        document.getElementById('password').focus()
        return false
    }

    else if(!(signindata.password.match(/[~!@#$%^&*<>]/))){
        let a=document.getElementById('error').innerHTML="Sorry the password should contain a special character in order to get verified"
        error.style.display = "block";
        document.getElementById('password').focus()
        return false
    }

    
    else if(signindata.cpassword==''){
        document.querySelector('#error').innerHTML="Please enter the password again to verify that you entered the password correctly"
        document.getElementById('cpassword').focus()
        return false
    }

    else if(signindata.password!=signindata.cpassword){
         let a=document.getElementById('error').innerHTML="Sorry the password doesn't match with the password you entered previously"
        document.getElementById('cpassword').focus()
        return false
    }
    

    localStorage.setItem('signup',JSON.stringify(signindata))

    alert('Signup successful Please Login ')
    

}



function book() {

    let msgerror=document.querySelector('#ermsg')
  
    let bookingdetails={
      from :document.querySelector('#from').value,
      to :document.querySelector('#to').value,
      date :document.querySelector('#date').value,
      passengers :document.getElementById('totalpassenger')
    }
    
    if(bookingdetails.from==''){
       document.querySelector('#ermsg').innerHTML='please enter your starting Destination'
       msgerror.style.visibility='visible'
       document.getElementById('from').focus()
        return false
    }
    
    else if(bookingdetails.to==''){
        document.querySelector('#ermsg').innerHTML='please enter your Finla Destination'
        msgerror.style.visibility='visible'
        document.getElementById('to').focus()
         return false
     }

    else if(bookingdetails.date==''){
        document.querySelector('#ermsg').innerHTML='please enter the Journey Date'
        msgerror.style.visibility='visible'
        document.getElementById('date').focus()
         return false
     }


     localStorage.setItem('traveldetails',JSON.stringify(bookingdetails))

 

}
  
 window.onload=  function (){

   let a= JSON.parse(localStorage.getItem('traveldetails'))
 
   let from=document.getElementById('travelfrom')
   from.innerHTML=a.from
   from.style.color='#8e2158'


   let to=document.getElementById('travelto')

   to.innerHTML=a.to
   to.style.color='#8e2158'

   let date=document.getElementById('traveldate')
   date.innerHTML=a.date
   date.style.color='#8e2158'
}


//Dropdown javascript

let adcount=0
let chcount=0
let incount=0

// for adult

function adultadd(){
    adcount++
    document.getElementById('adultcounter').innerHTML=adcount
}

function adultsub(){
    if(adcount>0){
    adcount--
    document.getElementById('adultcounter').innerHTML=adcount
}

}


// for child

function childadd(){
    chcount++
    document.getElementById('childcounter').innerHTML=chcount
}

function childsub(){
    if(chcount>0){
    chcount--
    document.getElementById('childcounter').innerHTML=chcount
}

}

// for infant

function infantadd(){
    incount++
    document.getElementById('infantcounter').innerHTML=incount
}

function infantsub(){
    if(incount>0){
    incount--
    document.getElementById('infantcounter').innerHTML=incount
}

}

function totalcount(){
      document.getElementById('totalpassenger').innerHTML=adcount+chcount+incount
      let hide=document.querySelector('.dropdown')
      hide.style.display='none'
}


function showdropdown(){
    let hide=document.querySelector('.dropdown')
    hide.style.display='block'

}




