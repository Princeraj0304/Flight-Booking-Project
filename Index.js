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
      passengers :document.getElementById('totalpassenger').innerHTML
    }
    
    if(bookingdetails.from==''){
       document.querySelector('#ermsg').innerHTML='please enter your starting Destination'
       msgerror.style.visibility='visible'
       document.getElementById('from').focus()
        return false
    }
    
    else if(bookingdetails.to==''){
        document.querySelector('#ermsg').innerHTML='please enter your Final Destination'
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
   from.style.color='#c60c31'


   let to=document.getElementById('travelto')

   to.innerHTML=a.to
   to.style.color='#c60c31'

   let date=document.getElementById('traveldate')
   date.innerHTML=a.date
   date.style.color='#c60c31'


       
    
   let passdetails= JSON.parse(localStorage.getItem('traveldetails'))
   let totalpass=passdetails.passengers
   let passfrom=passdetails.from
   let passto=passdetails.to
   
   

 let prices = {
     'mumbai': 100,
     'delhi': 200,
     'indore': 300,
     'patna': 400,
     'bangalore': 500,
     'pune': 600
 };

 if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='mumbai'){
     let passengerfare=totalpass*prices.mumbai
     console.log(passengerfare)
 }
 
else if(passfrom.toLowerCase()=='mumbai' && passto.toLowerCase()=='bhopal'){
     console.log(totalpass*prices.mumbai);
 }

 else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='delhi'){
     console.log(totalpass*prices.delhi);
 }

 else if(passfrom.toLowerCase()=='delhi' && passto.toLowerCase()=='bhopal'){
     console.log(totalpass*prices.delhi);
 }

 else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='indore'){
     console.log(totalpass*prices.indore);
 }

 else if(passfrom.toLowerCase()=='indore' && passto.toLowerCase()=='bhopal'){
     console.log(totalpass*prices.indore);
 }

 else if(passfrom.toLowerCase()=='patna' && passto.toLowerCase()=='bhopal'){
     console.log(totalpass*prices.patna);
 }

 else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='patna'){
     console.log(totalpass*prices.patna);
 }

 else if(passfrom.toLowerCase()=='banglore' && passto.toLowerCase()=='bhopal'){
     console.log(totalpass*prices.bangalore);
 }

 else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='banglore'){
     console.log(totalpass*prices.bangalore);
 }

 else if(passfrom.toLowerCase()=='pune' && passto.toLowerCase()=='bhopal'){
     console.log(totalpass*prices.pune);
 } 
 
 else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='pune'){
     console.log(totalpass*prices.pune);
 }

 
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



let a=JSON.parse(localStorage.getItem('traveldetails'))
console.log(a.passengers);
let b=a.passengers

let arr=['First','Second','Third','Fourth','Fifth','Sixth','Seventh']
let d=document.getElementById('det')

for(let i=0;i<b;i++){
let para=document.createElement('div')
para.innerHTML='<i class="fa-solid fa-user"></i>'+" "+arr[i]+"  "+" passenger"

para.classList.add('bookingformappear')
d.appendChild(para)

para.style.borderRadius='25px'
para.style.marginTop='10px'
para.style.boxShadow='box-shadow: 0 1px 3px rgba(0,0,0,0.25)'


para.addEventListener('click',()=>{
    let p=document.querySelector('.passformii')
    p.style.visibility='visible'
    p.style.opacity='1'
     para.style.border='2px solid gray'
   
    

})
}



// function validate(){
//   let firstname= document.getElementById('firstname').value
//   let lastname= document.getElementById('lastname').value
//   let age= document.getElementById('age').value
//   let passnumber= document.getElementById('passportnumber').value

//   if(firstname==''){
//     let fne=document.getElementById('firstnameerror')
//     fne.innerHTML='please enter your first name'
//     fne.style.display='inline-block'
//     document.getElementById('firstname').focus()
//     return false
//   }

//   else if(lastname==''){
//     let lne=document.getElementById('lastnameerror')
//     lne.innerHTML='please enter your last name'
//     lne.style.display='inline-block'
//     document.getElementById('lastname').focus()
//     return false
//   }
  
//   else if(age==''){
//     let age=document.getElementById('ageerror')
//     age.innerHTML='please enter your age'
//     age.style.display='inline-block'
//     document.getElementById('age').focus()
//     return false
//   }

//   else if(passnumber==''){
//     let passnum=document.getElementById('numbererror')
//     passnum.innerHTML='please enter your passport number'
//     passnum.style.display='inline-block'
//     document.getElementById('passportnumber').focus()
//     return false
//   }

//   else if(passnumber.length>8|| passnumber.length<8){
//     let passnum=document.getElementById('numbererror')
//     passnum.innerHTML='Please Enter valid 8 digit number'
//     passnum.style.display='inline-block'
//     document.getElementById('passportnumber').focus()
//     return false
//   }
  
  


// }



