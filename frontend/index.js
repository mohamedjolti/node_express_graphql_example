
//getting the button
let searchButton = document.getElementById("searchButton");
let courseId = document.getElementById("courseId")
searchButton.addEventListener("click", () => {
    let query = `
    query getCourseById($courseId:Int!){
        course(id:$courseId){
        title
        description
        author
      }
    }`;
    let variables = {
        courseId: courseId.value
    }
    fetch("http://localhost:4000/graphql?",
        {
            method: "POST",
            body: JSON.stringify({ query: query, variables: variables })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })


})