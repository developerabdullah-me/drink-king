
//  spiner
const toggolSpinner= displayStyle=>{
  document.getElementById('spinners').style.display=displayStyle;
}
// search Enter
let go = document.getElementById("go");
let txt = document.getElementById("search-fild");
txt.addEventListener("keypress", function(event) {
if (event.key == "Enter")
  go.click();
});
// searchButton
const searchButton= ()=>{
const searchFild=document.getElementById('search-fild')
//  spener show
toggolSpinner('block');
const searchFood=searchFild.value;
const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFood}`
fetch(url)
.then(res=> res.json())
.then(data=> searchResult(data.drinks))


}
searchButton()
const searchResult=drinks=>{
document.getElementById('search-fild').value='';
const containerdiv=document.getElementById('container')
//  document.getElementById('container').value='';
containerdiv.textContent='';
drinks.forEach(drink=>{
  const div=document.createElement('div')
  div.classList.add('co')
  div.innerHTML=` 
  <img class="w-25  mx-auto d-block py-3" src="${drink.strDrinkThumb}" alt="">
    <h2 class="text-center">${drink.strDrink}</h2>
    <p class="text-center">${drink.idDrink}</p>
    <p class="text-center">${drink.strInstructions.slice(0,200)}</p>
 
  `;
  containerdiv.appendChild(div)
})

toggolSpinner('none')
}

