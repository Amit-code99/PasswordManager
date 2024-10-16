// Globale Varaiable
let addbtn=document.querySelector("#addbtn");
let item=document.querySelector('#item');
let reset=document.querySelector("#reset")
let deletes = (website)=>{
    data=localStorage.getItem("passwords"); 
    arr=JSON.parse(data);
    uppdate=arr.filter((x)=>{
       return x.website != website
         })
    localStorage.setItem("passwords",JSON.stringify(uppdate)) 
    showdata()
}

function showdata(){
let data=localStorage.getItem("passwords");
 if(data==null){
   item.innerHTML="No Data" 
}else{
    let text="";
    let arr=JSON.parse(data)
    arr.forEach(element => {
        //console.log(element)
   
    text +=`<tr>
            <td>${element.website}</td>
            <td>${element.username}</td>
            <td>${element.password}</td>
            <td>${element.date}</td>
            <td><button id="btn" onclick="deletes('${element.website}' );">Delete</button> </td>
            </tr>`
        });
            item.innerHTML=text
}
 }
 showdata()

  reset.addEventListener("click",()=>{
    website.value=""
   username.value=""
   password.value=""
  })
  let dates=()=>{
    let d=new Date()
    let mm= "" + (d.getMonth()+1)
    let dyy= "" + d.getDate()
    let yyy=d.getFullYear()
     let times= d.toLocaleTimeString()
    return[[dyy,mm,yyy].join("-") , times]
  } 
 
addbtn.addEventListener('click',(e)=>{
   e.preventDefault()
   //console.log(website.value)
     let passwords=localStorage.getItem("passwords");
   if(passwords == null){
    let json=[];
    json.push({website:website.value, username: username.value, password:password.value,date:dates()})
   // console.log(data)
    localStorage.setItem("passwords",JSON.stringify(json))
   }else{
    let json=JSON.parse(localStorage.getItem("passwords"))
    json.push({website: website.value,username: username.value,password: password.value,date: dates()});
    localStorage.setItem("passwords",JSON.stringify(json))

   }
   website.value=""
   username.value=""
   password.value=""
   showdata() 
})