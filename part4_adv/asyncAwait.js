function fetchUserData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name: "chandan", lastName: "Yadav"});
        },3000);
    });
};

async function getUserData(){
    try {
        console.log("Fetching data...");
        const userData=await fetchUserData();
        console.log("UserData: ",userData);
    } catch (error) {
        console.log("Error fetching data");
    }
}

getUserData();