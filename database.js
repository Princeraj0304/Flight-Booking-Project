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
<td><button onclick="mydelete('${e.id}')">Delete</button></td>
<td><button onclick="myedit('${e.id}')">edit</button></td>

</tr>
`).join('')

document.getElementById('table').innerHTML=b

}

getdata()

function mydelete(id){
    fetch(`http://localhost:3000/passengers/${id}`,{
        method : "DELETE"
    })
    .then(res=>alert("Passenger removed"))
}

function myedit(id){
    fetch(`http://localhost:3000/passengers/${id}`,{
        method : "PATCH"
    })
    .then(res=>alert("Passenger updated"))
}


function formsub(){
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