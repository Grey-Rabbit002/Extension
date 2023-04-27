async function fetchdata(user_dept_id,user_section)
{
   let url = `http://34.228.162.233:8000/posts/show?search_dept_id=${user_dept_id}&search_section=${user_section}`
   let res = await fetch(url)
   let record = await res.json()
     document.getElementById('ext').innerHTML = record.map(rec => 
      `
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id : ${rec.id}</li>
        <li class="list-group-item">Teacher_Name: ${rec.teacher_name}</li>
        <li class="list-group-item">Title: ${rec.title}</li>
        <li class="list-group-item">Content: ${rec.content}</li>
      </ul>
      `)
}

function checkCookie()
{
 let user_dept_id = getCookie("user_dept_id")
 let user_section = getCookie("user_section")
 if(user_dept_id!=""&& user_section !="")
 {
   fetchdata(user_dept_id,user_section)
   return 1
 }
 else
 {
   setCookie()
   return 0
 }
}
function setCookie()
{
 user_dept_id = prompt("enter dept_id")
 user_section = prompt("enter section")
 document.cookie = "user_dept_id"+ "=" + user_dept_id
 document.cookie = "user_section"+ "=" + user_section
}
function getCookie(cname)
{
 let name = cname + "="
 let ca = document.cookie.split(';')
 for(let i = 0; i < ca.length; i++) {
   let c = ca[i]
   while (c.charAt(0) == ' ') {
     c = c.substring(1)
   }
   if (c.indexOf(name) == 0) {
     return c.substring(name.length, c.length)
   }
 }
 return ""
}
// initial call to the function
let res = checkCookie()
if (res == 0)
{
  checkCookie()
}