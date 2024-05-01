document.querySelector("#app").innerHTML = `
  <h1>Want to know a fact about cats?</h1>
  <button id="fetch-request">Get a fact</button>
  <div id="box">
    <p id="fact"></p>
  </div>
`;

// document.querySelector("#fetch-request").addEventListener("click", async () => {
//   try {
//     const response = await axios.get("https://catfact.ninja/fact");
//     console.log("this is response \n", response);
//     const catFact = response.data;
//     document.querySelector("#fact").innerText = catFact.fact;
//   } catch (error) {
//     document.querySelector("#fact").innerText = `Sorry, we couldn't get a cat fact. ${error}`;
//   }
// });


document.querySelector("#fetch-request").addEventListener("click", async () => {
  fetch("https://catfact.ninja/fact").then(response => {
    console.log("this is response \n", response);
    return response.json();
  }).then(data => {
    console.log("this is data \n", data);
    document.querySelector("#fact").innerText = data.fact;
  }).catch(error => {
    document.querySelector("#fact").innerText = `Sorry, we couldn't get a cat fact. ${error}`;
  });
});