
let searchButton = document.getElementById("searchButton");
let courseId = document.getElementById("courseId");
let results = document.getElementById("results");
searchButton.addEventListener("click", () => {
    let query = `query getCourseById($courseId:Int!){
        course(id:$courseId){
        title
      }
    }`;
    let variables = {
        courseId: parseInt(courseId.value)
    }
    let operationName = "getCourseById";

    fetch("http://localhost:4000/graphql?",
        {
            headers: {
                "content-type": "application/json"

            },
            method: "POST",
            body: JSON.stringify({ operationName: operationName, query: query, variables: variables })
        })
        .then(response => response.json())
        .then(json => {
            if (json.data.course) {
                results.innerText = json.data.course.title;
            } else {
                results.innerText = "No course found with this id";
            }
        }).catch(
            error => results.innerText = "the ir an error in the server"
        )
})