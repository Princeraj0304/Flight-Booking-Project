// Login form validation

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


// signup form validation

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


// booking form validation

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

// Destination view

 window.onload=  function (){

   let a= JSON.parse(localStorage.getItem('traveldetails'))
 
   let from=document.getElementById('travelfrom')
   let xx=document.getElementById('xx')
   let yy=document.getElementById('yy')
   xx.innerHTML=a.from

   from.innerHTML=a.from
   from.style.color='#c60c31'


   let to=document.getElementById('travelto')

   to.innerHTML=a.to
   yy.innerHTML=a.to
   to.style.color='#c60c31'

   let date=document.getElementById('traveldate')
   let zz=document.getElementById('zz')
   zz.innerHTML=a.date
   date.innerHTML=a.date
   date.style.color='#c60c31'
 
}




//Counter javascript

let adcount=0
let chcount=0
let incount=0

function updatecounter(){
    document.getElementById('adultcounter').innerHTML=adcount
    document.getElementById('childcounter').innerHTML=chcount
    document.getElementById('infantcounter').innerHTML=incount
    document.getElementById('totalpassenger').innerHTML=adcount+chcount+incount
    
}

function adultadd(){
    adcount++
    updatecounter()
    
}

function adultsub(){
    if(adcount>0){
    adcount--
    updatecounter()
    
}

}



function childadd(){
    chcount++
    updatecounter()

}

function childsub(){
    if(chcount>0){
    chcount--
    updatecounter()
    
}

}


function infantadd(){
    incount++
    updatecounter()
    
}

function infantsub(){
    if(incount>0){
    incount--
    updatecounter()
}

}

function totalcount(){
      let hide=document.querySelector('.dropdown')
      updatecounter()
      hide.style.display='none'
}


function showdropdown(){
    
    let hide=document.querySelector('.dropdown')
    hide.style.display = hide.style.display === 'block' ? 'none' : 'block';

   

    // if(hide.style.display=='none' || hide.style.display == ''){
    //     hide.style.display='block'
    // }
    // else{
    //     hide.style.display='none'
    // }

}

//TOTAL FARE PRICE

let passdetails= JSON.parse(localStorage.getItem('traveldetails'))
let totalpass=passdetails.passengers
let passfrom=passdetails.from
let passto=passdetails.to



let prices = {
  'mumbai': 5730,
  'delhi': 4090,
  'indore': 3701,
  'patna': 4568,
  'bangalore': 5090,
  'pune': 6024
};

setTimeout(()=>{

if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='mumbai'){
   let updatedfare=document.getElementById('tfare')
   let total=document.getElementById('grandtotal')
   total.innerHTML=totalpass*prices.mumbai
   updatedfare.innerHTML=totalpass*prices.mumbai
   let tflare= document.getElementById('passfare')
   tflare.innerHTML=totalpass*prices.mumbai

}

else if(passfrom.toLowerCase()=='mumbai' && passto.toLowerCase()=='bhopal'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.mumbai
    updatedfare.innerHTML=totalpass*prices.mumbai
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.mumbai
}

else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='delhi'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.delhi
    updatedfare.innerHTML=totalpass*prices.delhi
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.delhi
}

else if(passfrom.toLowerCase()=='delhi' && passto.toLowerCase()=='bhopal'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.delhi
    updatedfare.innerHTML=totalpass*prices.delhi
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.delhi
}

else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='indore'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.indore
    updatedfare.innerHTML=totalpass*prices.indore
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.indore
}

else if(passfrom.toLowerCase()=='indore' && passto.toLowerCase()=='bhopal'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.indore
    updatedfare.innerHTML=totalpass*prices.indore
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.indore
}

else if(passfrom.toLowerCase()=='patna' && passto.toLowerCase()=='bhopal'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.indore
    updatedfare.innerHTML=totalpass*prices.patna
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.patna
}

else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='patna'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.patna
    updatedfare.innerHTML=totalpass*prices.patna
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.patna
}

else if(passfrom.toLowerCase()=='banglore' && passto.toLowerCase()=='bhopal'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.patna
    updatedfare.innerHTML=totalpass*prices.bangalore
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.bangalore
}

else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='banglore'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.bangalore
    updatedfare.innerHTML=totalpass*prices.bangalore
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.bangalore
}

else if(passfrom.toLowerCase()=='pune' && passto.toLowerCase()=='bhopal'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.pune
    updatedfare.innerHTML=totalpass*prices.pune
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.pune
} 

else if(passfrom.toLowerCase()=='bhopal' && passto.toLowerCase()=='pune'){
    let updatedfare=document.getElementById('tfare')
    let total=document.getElementById('grandtotal')
    total.innerHTML=totalpass*prices.pune
    updatedfare.innerHTML=totalpass*prices.pune
    let tflare= document.getElementById('passfare')
    tflare.innerHTML=totalpass*prices.pune
}
}
,100)


//Total passengers 


let a=JSON.parse(localStorage.getItem('traveldetails'))
let b=a.passengers

let d=document.getElementById('deti')

let state=JSON.parse(sessionStorage.getItem('state')) || Array(b).fill(0)

let arr=['1','2','3','4']

for(let i=0;i<b;i++){
let para=document.createElement('div')
let det=document.createElement('p')
let q=document.getElementById('det')
det.innerHTML='passenger '+ arr[i]

q.appendChild(det)


para.classList.add('bookingformappear')
d.appendChild(para)

para.style.marginLeft='65px'


if(state[i]){
    para.style.backgroundImage="url('correct.png')"
    det.style.backgroundColor='#03de46'
    para.style.border='none'
    det.style.color='black'
}


para.addEventListener('click',()=>{
    let p=document.querySelector('.passformii')
    
    p.style.visibility='visible'
    p.style.opacity='1'
    p.style.transform='translateX(-50px)'
    


    
      
    state[i]=1
    sessionStorage.setItem('state',JSON.stringify(state))
    para.style.backgroundImage="url('correct.png')"
    det.style.backgroundColor='#03de46'
    det.style.color='black'
    para.style.border='none'
    
    

})
}

// function resetbutton(){
//     sessionStorage.removeItem('state')
//     location.reload()
// }


