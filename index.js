let arr = ["Abu Sayed", "Anushka", "Nur", "Aylin", "Hima", "Lawrance", "Md Hridoy", "Imran", "Rubel", "Ismail", "Shohel", "Gahangir", "Nafiz", "Rabbi", "Raiyan", "Saimun", "Sakibul", "Sifat", "Subroto", "Mahian", "Tanjil"];
let femaleNames = new Set(["Anushka", "Aylin", "Hima"]);

for (let i = 0; i < arr.length; i++){
    if (femaleNames.has(arr[i])){
        const female = `${arr[i]} mam`
        console.log(female);
    } else {
        const male = `${arr[i]} Sir`
        console.log(male);
    }
}
// Prompt user for a member's name
let memberName = prompt("Enter the member's name").trim(); // Removing leading or trailing whitespace
let members = document.getElementById("members");
if (arr.includes(memberName)) {
    const isFemale = femaleNames.has(memberName);
    if (isFemale){
        const title = `${memberName} mam`
        confirm(`Are you searching ${title}?`);
        members.innerHTML = `You are searching ${title}`;
    }
    else{
        const title = `${memberName} Sir`
        confirm(`Are you searching ${title}?`);
        members.innerHTML = `You are searching ${title}`;
    }
} else {
    members.innerHTML = "You are not a member";
}