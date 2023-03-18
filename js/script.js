
//    1- open and close navbar ---------------------------------------------------------



let widthbox = $('.menu ul').outerWidth()
// console.log(widthbox);

$('.fa-bars').click(function(){

    let lefting =  $('.menu').offset().left
    // console.log(lefting);
    if(lefting == 0){
        $('.menu').css({left:`-${widthbox}px` , transition:`all 0.5s`})
        $('.menu .fa-xmark').attr('class', 'fa-solid fa-bars');
        $('.menu ul li').hide(1000)

        
    }else{
        $('.menu').css({left:`0px` , transition:`all 0.5s`})
        $('.menu .fa-bars').attr('class', 'fa-solid fa-xmark');
        $('.menu ul li').show(1000)
    }
    
})


//    2 - open other pages when click on links =======================


//   ---------------------search page-----------------


document.querySelector('.searching').addEventListener('click' , function(){

    document.querySelector('.show-data').classList.add('d-none')
    document.querySelector('.areaPage').classList.add('d-none')
    document.querySelector('.ingredientsPage').classList.add('d-none')
    document.querySelector('.categoriesPage').classList.add('d-none')
    document.querySelector('.searchPage').classList.remove('d-none')
    document.querySelector('.contactPage').classList.add('d-none')
    document.getElementById('backhome').classList.remove('d-none')
    // $('#backhome').show(500)

    
})


// ----------------- categories Page --------------------

document.querySelector('.menu .categories').addEventListener('click' , function(){

    document.querySelector('.show-data').classList.add('d-none')
    document.querySelector('.searchPage').classList.add('d-none')
    document.querySelector('.contactPage').classList.add('d-none')
    document.querySelector('.areaPage').classList.add('d-none')
    document.querySelector('.ingredientsPage').classList.add('d-none')
    document.querySelector('.categoriesPage').classList.remove('d-none')
    document.getElementById('backhome').classList.remove('d-none')
    // $('#backhome').show(500)



    getcategoriesList()

})


// ----------------- area Page --------------------

document.querySelector('.menu .area').addEventListener('click' , function(){

    document.querySelector('.show-data').classList.add('d-none')
    document.querySelector('.searchPage').classList.add('d-none')
    document.querySelector('.contactPage').classList.add('d-none')
    document.querySelector('.areaPage').classList.remove('d-none')
    document.querySelector('.ingredientsPage').classList.add('d-none')
    document.querySelector('.categoriesPage').classList.add('d-none')
    document.getElementById('backhome').classList.remove('d-none')
    // $('#backhome').show(500)



    getAreaList()
})

//  ------------------ ingredients Page -----------------------

document.querySelector('.menu .ingredients').addEventListener('click' , function(){

    document.querySelector('.show-data').classList.add('d-none')
    document.querySelector('.areaPage').classList.add('d-none')
    document.querySelector('.ingredientsPage').classList.remove('d-none')
    document.querySelector('.categoriesPage').classList.add('d-none')
    document.querySelector('.searchPage').classList.add('d-none')
    document.querySelector('.contactPage').classList.add('d-none')
    document.getElementById('backhome').classList.remove('d-none')
    // $('#backhome').show(500)



    getingredients()

})

//  ------------------ contact Page -----------------------

document.querySelector('.menu .contact').addEventListener('click' , function(){

    document.querySelector('.show-data').classList.add('d-none')
    document.querySelector('.areaPage').classList.add('d-none')
    document.querySelector('.ingredientsPage').classList.add('d-none')
    document.querySelector('.categoriesPage').classList.add('d-none')
    document.querySelector('.searchPage').classList.add('d-none')
    document.querySelector('.contactPage').classList.remove('d-none')
    document.getElementById('backhome').classList.remove('d-none')
    // $('#backhome').show(500)



})


//  3  ----  contact Page Validation

let inputs = document.querySelectorAll('.contactPage input')

// console.log(inputs);

function valName(){
    let regex = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
    if(regex.test(inputs[0].value)==true){
        inputs[0].classList.add('is-valid')
        inputs[0].classList.remove('is-invalid')
        return true
    }else{
        inputs[0].classList.add('is-invalid')
        inputs[0].classList.remove('is-valid')
        return false
    }
}
inputs[0].addEventListener('input' , function(){
    valName()
})


function valemail(){
    let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(regex.test(inputs[1].value)==true){
        inputs[1].classList.add('is-valid')
        inputs[1].classList.remove('is-invalid')
        return true
    }else{
        inputs[1].classList.add('is-invalid')
        inputs[1].classList.remove('is-valid')
        return false
    }
}
inputs[1].addEventListener('input' , function(){
    valemail()
})

function valphone(){
    let regex = /^01[0125][0-9]{8}$/
    if(regex.test(inputs[2].value)==true){
        inputs[2].classList.add('is-valid')
        inputs[2].classList.remove('is-invalid')
        return true
    }else{
        inputs[2].classList.add('is-invalid')
        inputs[2].classList.remove('is-valid')
        return false
    }
}
inputs[2].addEventListener('input' , function(){
    valphone()
})



function valage(){
    let regex = /^([1-7][0-9]|80)$/
    if(regex.test(inputs[3].value)==true){
        inputs[3].classList.add('is-valid')
        inputs[3].classList.remove('is-invalid')
        return true
    }else{
        inputs[3].classList.add('is-invalid')
        inputs[3].classList.remove('is-valid')
        return false
    }
}
inputs[3].addEventListener('input',function(){
    valage()
})



function valpassword(){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(inputs[4].value)==true){
        inputs[4].classList.add('is-valid')
        inputs[4].classList.remove('is-invalid')
        return true
    }else{
        inputs[4].classList.add('is-invalid')
        inputs[4].classList.remove('is-valid')
        return false
    }
}
inputs[4].addEventListener('input' , function(){
    valpassword()
})




function valrepassword(){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(inputs[5].value)==true && inputs[5].value == inputs[4].value){
        inputs[5].classList.add('is-valid')
        inputs[5].classList.remove('is-invalid')
        return true
    }else{
        inputs[5].classList.add('is-invalid')
        inputs[5].classList.remove('is-valid')
        return false
    }
}
inputs[5].addEventListener('input' , function(){
    valrepassword()
})


document.querySelector('.contactPage form').addEventListener('input',async function(e){
    e.preventDefault();

    if(valName() && valemail() && valphone() && valage() && valpassword() && valrepassword()){
        document.querySelector('.contactPage form button').classList.remove('disabled')
    }
    
})




// ------------------ get categories page  -------------------

async function getcategoriesList(){
    let result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    let catNames = await result.json()
    let catArray = catNames.meals 


    displayCategories(catArray)
}

function displayCategories(cat){
    var trs =''
    for(var i = 0 ; i < cat.length ; i++){
        // console.log(cat[i].strArea);
        trs += `
        <div class="col position-relative" id="${cat[i].strCategory}>
            <div class="itemcat rounded">
                <img src="https://www.themealdb.com/images/category/${cat[i].strCategory}.png" alt="" class="w-100" id="${cat[i].strCategory}">
                <div class="meal-layer position-absolute text-center text-black p-2" id="${cat[i].strCategory}" >
                            <p class="mt-5 ms-2 h3 text-dark">${cat[i].strCategory}</p>
                </div>
            </div>
        
        </div>
        
        `
    }

    document.querySelector('.categoriesPage .showcategories').innerHTML = trs
    ;

}



document.querySelector('.categoriesPage').addEventListener('click' , function(e){

    let elem = e.target
    let nameCat = elem.id 
    displayMeals(nameCat)

})

async function displayMeals(nameCat) {
    
    let result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameCat}`)
    let response = await result.json()
    // console.log(response.meals);
    
    displaymealsfromcatname(response.meals)
}

function displaymealsfromcatname(meals){
    
    var trs =''
    for (let i = 0; i < meals.length; i++) {
        console.log(meals[i].idMeal);
        trs += `
        <div class="col position-relative">
            <div class="itemmeals rounded">
                <img src="${meals[i].strMealThumb}" alt="" class="w-100" onclick="fixShow(${meals[i].idMeal})">
                <div class="meal-layer position-absolute text-center text-black p-2" onclick="fixShow(${meals[i].idMeal})" >
                            <p class="mt-5 ms-2 h3 text-dark">${meals[i].strMeal}</p>
                </div>
            
            </div>
        
        </div>
        
        `
        
    }

    document.querySelector('.categoriesPage .showcategories').innerHTML = trs
}


// ==============/////////  fixed - box   //////////// ======================
async function fixShow(id){
    let result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)  
    let response = await result.json()
    // console.log(response.meals);
    fixedBoxdisplay(response.meals)
}

function fixedBoxdisplay(selectedMeal){
    console.log(selectedMeal[0].strArea);

    document.querySelector('#fixed-details').classList.remove('d-none')

    let trs = `
    

    <div class="col col-4">
    <div class="fcol">
        <img src="${selectedMeal[0].strMealThumb}" alt="" class="w-100 rounded">
        <h2 class="mt-3">${selectedMeal[0].strMeal}</h2>
    </div>
    </div>
    <div class="col col-8">
        <h2>Instructions</h2>
        <p class="mt-3">${selectedMeal[0].strInstructions}</p>
        <h3>Area :<span>${selectedMeal[0].strArea}</span></h3>
        <h3>Category :<span>${selectedMeal[0].strCategory}</span></h3>
        <h3>Reciepes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure1}${selectedMeal[0].strIngredient1}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure2}${selectedMeal[0].strIngredient2}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure3}${selectedMeal[0].strIngredient3}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure4}${selectedMeal[0].strIngredient4}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure5}${selectedMeal[0].strIngredient5}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure6}${selectedMeal[0].strIngredient6}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure7}${selectedMeal[0].strIngredient7}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure8}${selectedMeal[0].strIngredient8}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure9}${selectedMeal[0].strIngredient9}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure10}${selectedMeal[0].strIngredient10}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure11}${selectedMeal[0].strIngredient11}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure12}${selectedMeal[0].strIngredient12}</li>
            <li class="alert alert-info m-2 p-1">${selectedMeal[0].strMeasure13}${selectedMeal[0].strIngredient13}</li>
        </ul>
        <h3>Tags</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1"><a href="${selectedMeal[0].strSource}">source</a></li>
            <li class="alert alert-info bg-danger m-2 p-1"><a href="${selectedMeal[0].strYoutube}">YouTube</a></li>
        </ul>
    </div>
    
    
    `

    document.getElementById('fixedRowOfMealId').innerHTML =trs
}


document.getElementById('closefixedmeal').addEventListener('click' , function(){
    document.querySelector('#fixed-details').classList.add('d-none')
})



// ------------------end of category page ------------------------


// ==================== start of area page ========================================


async function getAreaList(){
    let result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=listwww.themealdb.com/api/json/v1/1/list.php?a=list')
    let response = await result.json()
    
    let areasnames = response.meals
    // console.log(areasnames);
    displayArea(areasnames)
}

function displayArea(areaaa){
    var trs =''
    for(var i = 0 ; i < areaaa.length ; i++){
        // console.log(areaaa[i].strArea);
        trs += `
        <div class="col text-light shadow-lg" id="${areaaa[i].strArea}">
            <div class="itemcat d-flex flex-column" id="${areaaa[i].strArea}">
            <div class="text-center mb-3"><i class="fa-solid fa-location-dot"></i> <br/></div>
            <h2 class="text-center" id="${areaaa[i].strArea}">${areaaa[i].strArea}</h2>
            
            </div>
        
        </div>
        
        `
    }

    document.querySelector('.areaPage .showarea').innerHTML = trs

}




document.querySelector('.areaPage').addEventListener('click' , function(e){

    let elem = e.target
    let namearea = elem.id 
    // console.log(namearea);

    displayMealsbyarea(namearea)

})



async function displayMealsbyarea(areana) {
    console.log(areana);
    let result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areana}`)
    let response = await result.json()
    // console.log(response.meals);
    
    displaymealsforareaname(response.meals)
}


function displaymealsforareaname(countrymeals){
    console.log(countrymeals);

    let trs =''
    for (let i = 0 ; i < countrymeals.length; i++) {
        // console.log(countrymeals[i].strMealThumb);

        trs += `
        <div class="col rounded overflow-hidden position-relative" id="${countrymeals[i].idMeal}>
            <div class="itemcat rounded">
                <img src="${countrymeals[i].strMealThumb}" alt="" class="w-100" id="${countrymeals[i].idMeal}" onclick="fixShow(${countrymeals[i].idMeal})">
                <div class="meal-layer position-absolute text-center text-black p-2" id="${countrymeals[i].idMeal}" onclick="fixShow(${countrymeals[i].idMeal})" >
                            <p class="mt-5 ms-2 h3 text-dark">${countrymeals[i].strMeal}</p>
                </div>
            </div>
        
        </div>
        
        `
        
    }

    document.querySelector('.areaPage .showarea').innerHTML = trs

}



// ------------====================== end of area page -----------------------------------------------------------------


// ========================== ====== start of ingredients page =================================

async function getingredients(){
    let result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let response = await result.json()
    
    let ingredients = response.meals
    console.log(ingredients);
    ingredientsDisplay(ingredients)  

}



function ingredientsDisplay(ing){
    var trs =''
    for(var i = 0 ; i < ing.length ; i++){
        // console.log(ing[i].strArea);
        trs += `
        <div class="col text-light shadow-lg text-center" id="${ing[i].strIngredient}">
            <i class="fa-regular fa-turkey" id="${ing[i].strIngredient}"></i>
            <h2 id="${ing[i].strIngredient}">${ing[i].strIngredient}</h2>
            <p id="${ing[i].strIngredient}">${ing[i].strDescription}</p>
        
        </div>
        
        `
    }

    document.querySelector('.ingredientsPage .showIngredients').innerHTML = trs

}



document.querySelector('.ingredientsPage').addEventListener('click' , function(e){

   let elem = e.target 
//    console.log(elem.id);

    getidofmail(elem.id)

})


async function getidofmail(mealnameeee){
    let result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealnameeee}`)
    let response = await result.json()
    
    let currentmeals = response.meals
    console.log(currentmeals);
    mealsiningerDisplay(currentmeals)  
}


function mealsiningerDisplay(dat){
    var trs =''
    for(var i = 0 ; i < dat.length ; i++){
        // console.log(ing[i].strArea);
        trs += `
        <div class="col rounded overflow-hidden position-relative" id="${dat[i].idMeal}>
            <div class="itemcat rounded">
                <img src="${dat[i].strMealThumb}" alt="" class="w-100" id="${dat[i].idMeal}" onclick="fixShow(${dat[i].idMeal})">
                <div class="meal-layer position-absolute text-center text-black p-2" id="${dat[i].idMeal}" onclick="fixShow(${dat[i].idMeal})" >
                            <p class="mt-5 ms-2 h3 text-dark">${dat[i].strMeal}</p>
                </div>
            </div>
        
        </div>
        
        `
    }

    document.querySelector('.ingredientsPage .showIngredients').innerHTML = trs

}


// ========================== ====== end of ingredients page =================================


// ========================== ====== start of search page =================================



async function searchByName(written){
    let result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${written}`)
    let response = await result.json()
    
    // console.log(response.meals); 
    searchdisplay(response.meals)
}

function searchdisplay(output){
    var trs =''
    for(var i = 0 ; i < output.length ; i++){
        // console.log(output[i].idMeal);
        trs += `
        <div class="col rounded overflow-hidden position-relative" id="${output[i].idMeal}>
            <div class="itemcat">
                <img src="${output[i].strMealThumb}" alt="" class="w-100" id="${output[i].idMeal}" onclick="fixShow(${output[i].idMeal})">
                <div class="meal-layer position-absolute text-center text-black p-2" id="${output[i].idMeal}" >
                            <p class="mt-5 ms-2 h3 text-dark">${output[i].strMeal}</p>
                </div>
            
            </div>
        
        </div>
        
        `
    }

    document.querySelector('.searchoutput .searchdiv').innerHTML = trs

}





async function searchByFLetter(written){
    let result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${written}`)
    let response = await result.json()
    
    // console.log(response.meals); 
    searchdisplaylet(response.meals)
}

function searchdisplaylet(output){
    var trs =''
    for(var i = 0 ; i < output.length ; i++){
        // console.log(output[i].idMeal);
        trs += `
        <div class="col rounded overflow-hidden position-relative" id="${output[i].idMeal}>
            <div class="itemcat position-relative">
                <img src="${output[i].strMealThumb}" alt="" class="w-100" id="${output[i].idMeal}" onclick="fixShow(${output[i].idMeal})">
                <div class="meal-layer position-absolute text-center text-black p-2" id="${output[i].idMeal}" >
                            <p class="mt-5 ms-2 h3 text-dark">${output[i].strMeal}</p>
                </div>
            
            </div>
        
        </div>
        
        `
    }

    document.querySelector('.searchoutput .searchdiv').innerHTML = trs

}



// =============== when start ===================


//2- fetch data of some meals for home  page---------------------------------------

var arr = []
var mealsNames = ['Corba','Burek','sushi','kumpir','tamiya','dal fry','poutine','lasagne','big mac','wontons','timbits','koshari','Kapsalon','Tourtiere','Yaki Udon','Eton Mess','shawarma','moussaka','stamppot','kedgeree']



for(var i = 0 ; i<mealsNames.length ; i++){
        somemeals(mealsNames[i])
        
                
}




async function somemeals(name){
    let result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let response = await result.json()
    
    // pusharray(response.meals[0])
    display(response.meals[0])
    // console.log(response.meals[0]);
    
}



function display(mealDeatails){
    // console.log(mealDeatails.idMeal);
    var trs = ''
    trs = `
                <div class="col">
                    <div class="meal rounded position-relative" id="${mealDeatails.idMeal}">
                        <img src="${mealDeatails.strMealThumb}" alt="" class="w-100" id="${mealDeatails.idMeal}"">
                        <div class="meal-layer position-absolute text-center text-black p-2" id="${mealDeatails.idMeal}" >
                            <p class="mt-5 ms-2 h3 text-dark">${mealDeatails.strMeal}</p>
                        </div>
                    </div>
                </div>


                `
                $('#fixedRow').append(trs);
    
}


document.querySelector('#fixedRow').addEventListener('click' , function(e){
    let elem = e.target 
    fixShow(elem.id)
})



document.getElementById('hummy').addEventListener('click' , function(){
    

    document.querySelector('.show-data').classList.remove('d-none')
    document.querySelector('.searchPage').classList.add('d-none')
    document.querySelector('.contactPage').classList.add('d-none')
    document.querySelector('.areaPage').classList.add('d-none')
    document.querySelector('.ingredientsPage').classList.add('d-none')
    document.querySelector('.categoriesPage').classList.add('d-none')
    document.getElementById('backhome').classList.add('d-none')
    // $('#backhome').slideUp(500)


    for(var i = 0 ; i<mealsNames.length ; i++){
        somemeals(mealsNames[i])
        
                
}

})






// ========= layer ===========




//  layers of home page
document.querySelector('.show-data').addEventListener('mousemove' , function(e){
    let currentelement = e.target ;
    let layer = currentelement.nextElementSibling ;



    function showlay(){
        layer.style.top = "0"
    }

    var counter = 0;
    var i = setInterval(function(){
    showlay()

    counter++;
    if(counter === 1) {
        clearInterval(i);
    }
      }, 200);

      function hidelay(){
        layer.style.top = "100%"
    }
    setInterval(hidelay,1500)



})



// layer of search page

document.querySelector('.searchPageContainer').addEventListener('mousemove' , function(e){
    let currentelement = e.target ;
    let layer = currentelement.nextElementSibling ;


    console.log(layer);

    function showlay(){
        layer.style.top = "0"
    }

    var counter = 0;
    var i = setInterval(function(){
    showlay()

    counter++;
    if(counter === 1) {
        clearInterval(i);
    }
      }, 200);

      function hidelay(){
        layer.style.top = "100%"
    }
    setInterval(hidelay,1500)



})


// layer of cat page

document.querySelector('.categoriesPage').addEventListener('mousemove' , function(e){
    let currentelement = e.target ;
    let layer = currentelement.nextElementSibling ;


    console.log(layer);

    function showlay(){
        layer.style.top = "0"
    }

    var counter = 0;
    var i = setInterval(function(){
    showlay()

    counter++;
    if(counter === 1) {
        clearInterval(i);
    }
      }, 200);

      function hidelay(){
        layer.style.top = "100%"
    }
    setInterval(hidelay,1500)



})


//  layer of area page

document.querySelector('.areaPage').addEventListener('mousemove' , function(e){
    let currentelement = e.target ;
    let layer = currentelement.nextElementSibling ;


    console.log(layer);

    function showlay(){
        layer.style.top = "0"
    }

    var counter = 0;
    var i = setInterval(function(){
    showlay()

    counter++;
    if(counter === 1) {
        clearInterval(i);
    }
      }, 200);

      function hidelay(){
        layer.style.top = "100%"
    }
    setInterval(hidelay,1500)



})


//  layer of ingredientsPage

document.querySelector('.ingredientsPage').addEventListener('mousemove' , function(e){
    let currentelement = e.target ;
    let layer = currentelement.nextElementSibling ;


    console.log(layer);

    function showlay(){
        layer.style.top = "0"
    }

    var counter = 0;
    var i = setInterval(function(){
    showlay()

    counter++;
    if(counter === 1) {
        clearInterval(i);
    }
      }, 200);

      function hidelay(){
        layer.style.top = "100%"
    }
    setInterval(hidelay,1500)



})



//  loading

$(window).ready(()=>{
    $('#loading').slideUp(3000);
})