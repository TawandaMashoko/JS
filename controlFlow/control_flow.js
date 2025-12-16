let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

if(userRole === "admin"){
    accessLevel = "Full Access Granted";
} else if(userRole === "manager"){
    accessLevel = "Limited access granted";
} else{
    accessLevel = "No access granted";
}

console.log("User Access:", accessLevel)

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome Tawi";
    }else{
        userMessage = "Welcome User";
    }
}else{
    userMessage = "Please log in to access the system"
}

console.log("User Message:", userMessage)

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "unknown";
}

console.log("User Category:", userCategory);