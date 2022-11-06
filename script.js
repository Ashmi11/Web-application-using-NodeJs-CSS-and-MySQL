/* This javascript file is for the currency converter */

const dropList = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");


/*  It is a loop which runs through the whole list of countries. It starts with  creating a variable called selected that is set to an 
empty string if i is equal to 0. If it's not, then the value of selected will be the currency code corresponding with what was 
clicked on in the drop-down list.Next, a new option tag is created and inserted before the end of each drop-down list item using 
insertAdjacentHTML().The change event listener for each drop-down list item listens for changes in selection and updates its contents 
accordingly.When this happens, it checks which currency was chosen and sets selected accordingly.(it will change the text inside the 
option tag from "EUR" to "selected").  */

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "THB" ? "selected" : "" : currency_code == "EUR" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}


/* This function  uses a for loop to iterate through all of country_list and check if each code matches with element's value property.
If so, it will create an img tag with that country's flag and set its src attribute to :
https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png
The code will load the flag of the country that was clicked on. An event listener for loadFlag() is added to the window object.*/

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}
window.addEventListener("load", ()=>{
    getExchangeRate();
});



/*  The code starts by adding a click event listener to the button. The function getExchangeRate() is called when the button is clicked.*/

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});


/* The code starts by finding the form with an icon.
 The code then adds a click listener to the icon, which changes the value of fromCurrency and toCurrency.
 After that, it loads both currencies into memory and calls loadFlag on each currency.
 Finally, it gets the exchange rate between them using getExchangeRate(). */

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})


/*  The code starts by getting the value of a div.wrapper input element and store it in "amount".
Then, it gets the text inside an exchange-rate form field and assigns it to "exchangeRateTxt" 
The value stored in amount is then assigned  to variable amountVal.
If there is no value in this input or if its value is 0, then we assign 1 to amountVal. But if these two statements are not true then
we set the innerText property of exchangeRateTxt to "Getting exchange rate..." and get the api from exchangerate-api to 
perform a calculation and hence display the final result through exchangeRateTxt.innerText. But if an error occurs in this
process then the message "Something went wrong" would be displayed*/

function getExchangeRate(){
    const amount = document.querySelector("div.wrapper input ");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/929e05da215d7e0fb973de5e/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() =>{
        exchangeRateTxt.innerText = "Something went wrong";
    });
}


