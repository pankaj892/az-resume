window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = "https://getresumecounteraz.azurewebsites.net/api/GetResumeCounter?code=IUle30KXZxkkUxikzfdIeW7uj4w_sLKW5JHS7RNm2tt4AzFuaWMJ-Q=="
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 10;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}