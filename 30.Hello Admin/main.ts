// task 30
// hello admin:make a array of five or more usernames,including the name'admin'.imagine you are writing code that will print
// a greeting to each user after they log into a website.loop through the array, and  print  a greeting to each user:

//*if the username is ,'admin'print a special greeting,such as hello admin,would you like to see a status report?
// * otherwise,print a  generic greeting, such as hello eric,thankyou for logging in again.


let users:string [] =["eric","haseeb","ali","fatima","admin"] 

for(let user of users){
    if (user ==="admin"){
     console.log("Hello admin,would you like to see a status report?")    
     
}else{
    console.log(`Hello ${user},thank you for logging in again`)
     }
}




