document.querySelector("#app").innerHTML = `
  <h1>Want to know a fact about cats?</h1>
  <button id="fetch-request">Get a fact</button>
  <div id="box">
    <p id="fact"></p>
  </div>
`;


document.querySelector("#fetch-request").addEventListener("click", async () => {
  fetch("https://catfact.ninja/fact").then(response => {
    return response.json();
  }).then(data => {
    document.querySelector("#fact").innerText = data.fact;
    document.querySelector("#box").style.display = "block";
  }).catch(error => {
    document.querySelector("#fact").innerText = `Sorry, we couldn't get a cat fact. ${error}`;
    document.querySelector("#box").style.display = "block";
  });
});
