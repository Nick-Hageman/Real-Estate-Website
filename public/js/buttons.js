
// Add event listener
//let submitBtn = document.getElementById('btn');
//submitBtn.addEventListener('click', displayPlantDetail);

//Event listeners for first and last cards
const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach((card) => card.addEventListener("click", flipCard));

//Event listener for card clicks
let resumeCard = document.getElementById('resume');
resumeCard.addEventListener('click', displayResume);

let portfolioCard = document.getElementById('portfolio');
portfolioCard.addEventListener('click', displayPortfolio);

function displayResume() {
  window.open('img/Nick_Hageman_Resume.pdf');
  return false;
}

function displayPortfolio() {
  window.open('https://github.com/Nick-Hageman');
  return false;
}

//let i = 0;
/*
// create function
function displayPlantDetail() {
    //collect data from form
    let name = document.getElementById('name').value;
    let location = document.getElementById('location').value;
    let id = document.getElementById('id').value;
    //let moisture = getData();
    let img = document.getElementById('file-select').files[0].name;
    let html = `<div class="card">
                        <img src="img/${img}" style="vertical-align:middle" height="300px" width="250px">
                        <div class="plant-details">
                            <div class="name">Name: ${name}</div>
                            <div class="location">Location: ${location}</div>
                            <div class="id">ID: ${id}</div>
                            <div class="moisture">Moisture: ${moisture}</div>
                            </div>
                            <div class="skill">
                              <div class="outer">
                                <div class="inner">
                                  <div id="number">
                                    65%
                                  </div>
                                </div>
                              </div>
                
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                   <linearGradient id="GradientColor">
                                      <stop offset="0%" stop-color="#e91e63" />
                                      <stop offset="100%" stop-color="#673ab7" />
                                   </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                        <script>
                            //Script for hydration bar
                            let number = document.getElementById("number");
                            let counter = 0;
                            setInterval(() => {
                                if(counter == 65){
                                    clearInterval();
                                }else{
                                    counter += 1;
                                    number.innerHTML = counter + "%"
                                }
                            }, 30);
                        </script>
                        </div>
                        <div class="div-remove-card">
                            <button class="remove-card" id="remove-card-${i}">X</button>
                        </div>
                    </div>`;
    
    div.insertAdjacentHTML("beforeend", html);

    document.querySelector('#remove-card-' + i)
    .addEventListener('click', function(){
        let confrm = confirm('Do you really want to remove this plant?')
        let removeEl = this.parentNode.parentNode;
        if(confrm)
            div.removeChild(removeEl)
    })
    i++;

}
*/
