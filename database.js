
async function getdata(){
    let data= await fetch('http://localhost:3000/passengers')
    let res = await data.json()

let b=res.map((e)=>`
<tr>
<td>${e.id}</td> 
<td>${e.firstname}</td>
<td>${e.lastname}</td> 
<td>${e.age}</td> 
<td>${e.passportnumber}</td> 
<td><img src='minus.png' width='25px' id='userid' onclick="mydelete('${e.id}')"></td>
<td><img src='edit.png' width='25px' id='edituser' onclick="myedit('${e.id}')"></td>

</tr>

<tr>
`).join('')

b+=`<td><img src='add.png' onclick="return passadd()" id='addimg' ></td> </tr>`




document.getElementById('table').innerHTML=b

}

getdata()


function mydelete(id){
    fetch(`http://localhost:3000/passengers/${id}`,{
        method : "DELETE"
    })
    .then(res=>alert("Passenger removed"))
}


async function myedit(id){
  
 let gettingdata= await fetch(`http://localhost:3000/passengers/${id}`)
 let resultant= await gettingdata.json()

  let formappear=`
  <form>
 
  <label for="id">ID</label>
  <input type="text" name="" id="passengerid" value="${resultant.id}" readonly><br><br>

   <label for="name">First Name</label><span id="firstnameerror"></span>
   <input type="text" name="" id="passengerfname" value="${resultant.firstname}"><br><br>

   <label for="name">Last Name</label><span id="lastnameerror"></span>
   <input type="text" name="" id="passengerlname" value="${resultant.lastname}"><br><br>

   <label for="name">Age</label><span id="ageerror"></span>
   <input type="text" name="" id="passengerage" value="${resultant.age}"><br><br>

   <label for="name">Passport Number</label><span id="numbererror"></span>
   <input type="text" name="" id="passportnum" value="${resultant.passportnumber}"><br><br>

   <input type="submit" name="" onclick="return updateform('${resultant.id}')" id="updatebutton" value="update">
   </form>
  `

  document.getElementById('updateform').innerHTML=formappear
}


function updateform(id){

  document.getElementById('firstnameerror').style.display = 'none';
  document.getElementById('lastnameerror').style.display = 'none';
  document.getElementById('ageerror').style.display = 'none';
  document.getElementById('numbererror').style.display = 'none';

   
  
  let firstname= document.getElementById('passengerfname').value
  let lastname= document.getElementById('passengerlname').value
  let age= document.getElementById('passengerage').value
  let passnumber= document.getElementById('passportnum').value

  if(firstname==''){
    let fne=document.getElementById('firstnameerror')
    fne.innerHTML='please enter your first name'
    fne.style.display='inline-block'
    document.getElementById('passengerfname').focus()
    return false
  }

  else if(lastname==''){
    let lne=document.getElementById('lastnameerror')
    lne.innerHTML='please enter your last name'
    lne.style.display='inline-block'
    document.getElementById('passengerlname').focus()
    return false
  }
  
  else if(age==''){
    let age=document.getElementById('ageerror')
    age.innerHTML='please enter your age'
    age.style.display='inline-block'
    document.getElementById('passengerage').focus()
    return false
  }

  else if(passnumber==''){
    let passnum=document.getElementById('numbererror')
    passnum.innerHTML='please enter your passport number'
    passnum.style.display='inline-block'
    document.getElementById('passportnum').focus()
    return false
  }

  else if(passnumber.length>8|| passnumber.length<8){
    let passnum=document.getElementById('numbererror')
    passnum.innerHTML='Please Enter valid 8 digit number'
    passnum.style.display='inline-block'
    document.getElementById('passportnum').focus()
    return false
  }


  let frmdata={
      id : document.getElementById('passengerid').value,
      firstname : document.getElementById('passengerfname').value,
      lastname : document.getElementById('passengerlname').value,
      age : document.getElementById('passengerage').value,
      passportnumber: document.getElementById('passportnum').value,
  }
  

  fetch(`http://localhost:3000/passengers/${id}`,{
      method : "PUT", headers:{
           'content-type':'application/json'
      },
      body: JSON.stringify(frmdata)}
      ).then(r=>alert("data updated successful"))

 
      

}


function validate(){
   
  
  let firstname= document.getElementById('firstname').value
  let lastname= document.getElementById('lastname').value
  let age= document.getElementById('age').value
  let passnumber= document.getElementById('passportnumber').value

  if(firstname==''){
    let fne=document.getElementById('firstnameerror')
    fne.innerHTML='please enter your first name'
    fne.style.display='inline-block'
    document.getElementById('firstname').focus()
    return false
  }

  else if(lastname==''){
    let lne=document.getElementById('lastnameerror')
    lne.innerHTML='please enter your last name'
    lne.style.display='inline-block'
    document.getElementById('lastname').focus()
    return false
  }
  
  else if(age==''){
    let age=document.getElementById('ageerror')
    age.innerHTML='please enter your age'
    age.style.display='inline-block'
    document.getElementById('age').focus()
    return false
  }

  else if(passnumber==''){
    let passnum=document.getElementById('numbererror')
    passnum.innerHTML='please enter your passport number'
    passnum.style.display='inline-block'
    document.getElementById('passportnumber').focus()
    return false
  }

  else if(passnumber.length>8|| passnumber.length<8){
    let passnum=document.getElementById('numbererror')
    passnum.innerHTML='Please Enter valid 8 digit number'
    passnum.style.display='inline-block'
    document.getElementById('passportnumber').focus()
    return false
  }
  

    let getdata={
        firstname : document.getElementById('firstname').value,
        lastname : document.getElementById('lastname').value,
        age : document.getElementById('age').value,
        passportnumber : document.getElementById('passportnumber').value,
    }

    fetch('http://localhost:3000/passengers',{method : "POST",
                                           headers:{
                                               'Content-type': 'application/json'
                                           }, 
                                           body: JSON.stringify(getdata)}
         ).then(r=>alert("Passenger updated"))
    
         window.location.hash = '#hash'; 
         location.reload();

}

function passadd(){

  let container=document.getElementById('updateform1')
  

  if(container.innerHTML==''){
    showform()
    

  }

  if(container.style.display==''){
    container.style.display='block'
     document.getElementById('addimg').src='x-button.png'
    
  }
  else{
    container.style.display=''
    document.getElementById('addimg').src='add.png'
  }

  function showform(){



  let addform=`
   <form >

   <label for="name">First Name</label><span id="firstnameerror"></span>
   <input type="text" name="" id="addpassengerfname"><br><br>

   <label for="name">Last Name</label><span id="lastnameerror"></span>
   <input type="text" name="" id="addpassengerlname"><br><br>

   <label for="name">Age</label><span id="ageerror"></span>
   <input type="text" name="" id="addpassengerage"><br><br>

   <label for="">Nationality</label><br>
<select name="" id="nationselecting">
   <option value="Indian">Indian</option>
   <option value="japan">Japan</option>
   <option value="British">British</option>
   <option value="brazil">Brazil</option>
   <option value="italy">Italy</option>
</select>
<br><br>

   <label for="name">Passport Number</label><span id="numbererror"></span>
   <input type="text" name="" id="addpassportnum"><br><br>

   <input type="submit" name="" onclick="return updateform1()" id="updatebutton1" value="Add">
   </form>
  
  `

  document.getElementById('updateform1').innerHTML=addform
}

}

function updateform1(){
  

  let frmdata={
    firstname : document.getElementById('addpassengerfname').value,
    lastname : document.getElementById('addpassengerlname').value,
    age : document.getElementById('addpassengerage').value,
    passportnumber: document.getElementById('addpassportnum').value,
}


if(frmdata.firstname==''){
  let fne=document.getElementById('firstnameerror')
  fne.innerHTML='please enter your first name'
  fne.style.display='inline-block'
  document.getElementById('addpassengerfname').focus()
  return false
}

else if(frmdata.lastname==''){
  let lne=document.getElementById('lastnameerror')
  lne.innerHTML='please enter your last name'
  lne.style.display='inline-block'
  document.getElementById('addpassengerlname').focus()
  return false
}

else if(frmdata.age==''){
  let age=document.getElementById('ageerror')
  age.innerHTML='please enter your age'
  age.style.display='inline-block'
  document.getElementById('addpassengerage').focus()
  return false
}

else if(frmdata.passnumber==''){
  let passnum=document.getElementById('numbererror')
  passnum.innerHTML='please enter your passport number'
  passnum.style.display='inline-block'
  document.getElementById('addpassportnum').focus()
  return false
}

else if(frmdata.passportnumber.length>8|| frmdata.passportnumber.length<8){
  let passnum=document.getElementById('numbererror')
  passnum.innerHTML='Please Enter valid 8 digit number'
  passnum.style.display='inline-block'
  document.getElementById('passportnum').focus()
  return false
}



fetch('http://localhost:3000/passengers',{method : "POST",
  headers:{
      'Content-type': 'application/json'
  }, 
  body: JSON.stringify(frmdata)}
).then(r=>alert("Passenger updated"))
}






