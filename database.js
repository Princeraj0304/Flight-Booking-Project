
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
<td><img src='x-button.png' width='25px' id='userid' onclick="mydelete('${e.id}')"></td>
<td><img src='edit.png' width='25px' id='edituser' onclick="myedit('${e.id}')"></td>

</tr>
<tr>
`).join('')

b+=`<td colspan="5">Total amount </td>
<td colspan=3><span id='rupees'> ₹ <span id='tfare'> </span></td>
</tr>`

setTimeout(()=>{
    let updatedfare=document.getElementById('tfare')
    updatedfare.innerHTML=totalpass*prices.mumbai
},100)


document.getElementById('table').innerHTML=b

}

getdata()


function mydelete(id){
    fetch(`http://localhost:3000/passengers/${id}`,{
        method : "DELETE"
    })
    .then(res=>alert("Passenger removed"))
}



function validate(){
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


}




