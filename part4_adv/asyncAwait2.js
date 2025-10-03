function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data Fetch");
        }, 3000);
    });
}

function fetchPostComment(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Comment Fetch");
        }, 5000);
    });
}

async function getBlogData(){
    try {
        console.log("Fetching Blog data");
        // const blogData= await fetchPostData();
        // const blogComment=await fetchPostComment();
        const [blogData, blogComment]= await Promise.all([fetchPostData(),fetchPostComment()]);
        console.log(blogData);
        console.log(blogComment);

        console.log("Fetch completed");
    } catch (error) {
        console.log("Error fetching Blog data");
    }
}

getBlogData();