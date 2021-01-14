let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("reviewData");
let info = document.getElementById("step5");
let r;
/******show form2******************* */
document.getElementById("nextForm1").addEventListener("click" , ()=> {
    document.getElementById("people").style.maxLe
    if(document.getElementById("people").value > 10)    {
        alert("Sorry,Maximum number of people can only be upto 10");
        return false;
    }

    if(document.getElementById("meal").value == "" || document.getElementById("people").value == "")   {
        alert("This is required");
    }else {
        form2.style.display = "block";
        form1.style.display = "none";
        form3.style.display = "none";
        form4.style.display = "none";
        info.style.display  = "none";
        document.getElementById("step2").style.background = "#2196f380";
        document.getElementById("step1").style.background = "none";
        document.getElementById("step3").style.background = "none";
        document.getElementById("step4").style.background = "none";
    }

    let restaurant = document.getElementById("restaurant");
    let option,optionText;
    restaurant.innerHTML = "";
    option = document.createElement("option");
    optionText = document.createTextNode("---");
    option.append(optionText);
    option.setAttribute("value" , "");
    restaurant.appendChild(option);

/****breakfast resturants */
    if(document.getElementById("meal").value == "Breakfast")    { 
        let restArr = ["Mc Donalds" , "Vege Deli" , "Olive Garden"];
        for(let i = 0; i < restArr.length; i++) {
            option = document.createElement("option");
            optionText = document.createTextNode(restArr[i]);
            option.append(optionText);
            option.setAttribute("value" , restArr[i]);
            restaurant.appendChild(option);
        }
    }

/****Lunch resturants */
    if(document.getElementById("meal").value == "Lunch")    {
        let restArr = ["Mc Donalds" , "Taco Bell" , "Vege Deli" , "Pizzeria" , "Panda Express" , "Olive Garden"];
        for(let i = 0; i < restArr.length; i++) {
            option = document.createElement("option");
            optionText = document.createTextNode(restArr[i]);
            option.append(optionText);
            option.setAttribute("value" , restArr[i]);
            restaurant.appendChild(option);
        }
    }

/****Dinner resturants */
    if(document.getElementById("meal").value == "Dinner")    {
        let restArr = ["BBQ Hut" , "Mc Donalds" , "Taco Bell" , "Vege Deli" , "Pizzeria" , "Panda Express" , "Olive Garden"];
        for(let i = 0; i < restArr.length; i++) {
            option = document.createElement("option");
            optionText = document.createTextNode(restArr[i]);
            option.append(optionText);
            option.setAttribute("value" , restArr[i]);
            restaurant.appendChild(option);
        }
    }
})

/*******show form 1*********/
document.getElementById("prevDivForm2").addEventListener("click" , ()=>{
    form2.style.display = "none";
    form1.style.display = "block";
    form3.style.display = "none";
    form4.style.display = "none";
    info.style.display  = "none";
    document.getElementById("step1").style.background = "#2196f380";
    document.getElementById("step2").style.background = "none";
    document.getElementById("step3").style.background = "none";
    document.getElementById("step4").style.background = "none";
})

/********show form3******* */
document.getElementById("nextForm2").addEventListener("click" , ()=> {
   
    if(document.getElementById("restaurant").value == "")   {
        alert("This is required");
    }else {
        form3.style.display = "block";
        form1.style.display = "none";
        form2.style.display = "none";
        form4.style.display = "none";
        info.style.display  = "none";
        document.getElementById("step3").style.background = "#2196f380";
        document.getElementById("step1").style.background = "none";
        document.getElementById("step2").style.background = "none";
        document.getElementById("step4").style.background = "none";
    }

    let dish = document.getElementById("dish");
    let option,optionText;
    if(r != document.getElementById("restaurant").value) {
        dish.innerHTML = "";
        document.getElementById("servings").value = 1;
    }
    option = document.createElement("option");
    optionText = document.createTextNode("---");
    option.append(optionText);
    option.setAttribute("value" , "");
    dish.appendChild(option);

    if(document.getElementById("meal").value == "Breakfast") {
        if(document.getElementById("restaurant").value == "Mc Donalds") {
            option = document.createElement("option");
            optionText = document.createTextNode("Egg Muffin");
            option.append(optionText);
            option.setAttribute("value" , "Egg Muffin");
            dish.appendChild(option);
        }else if(document.getElementById("restaurant").value == "Vege Deli")   {
            let dishArr = ["Coleslaw Sandwich" , "Grilled Sandwich"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Olive Garden"){
            option = document.createElement("option");
            optionText = document.createTextNode("Garlic Bread");
            option.append(optionText);
            option.setAttribute("value" , "Garlic Bread");
            dish.appendChild(option);
        }

    }else if(document.getElementById("meal").value == "Lunch") {
        if(document.getElementById("restaurant").value == "Mc Donalds")   {
            let dishArr = ["Chicken Burger" , "Ham Burger" , "Cheese Burger" , "Fries"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Taco Bell")   {
            let dishArr = ["Burrito" , "Tacos" , "Quesadilla"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Vege Deli")   {
            let dishArr = ["Vegan Bento" , "Veg Salad" , "Fruit Salad" , "Corn Soup" , "Tomato Soup" , "Minestrone Soup"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Pizzeria")   {
            let dishArr = ["Pepperoni Pizza" , "Hawaiian Pizza" , "Seafood Pizza" , "Deep Dish Pizza"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Panda Express")   {
            let dishArr = ["Wontons" , "Kung Pao" , "Mapo Tofu" , "Chow Mein"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Olive Garden")   {
            let dishArr = ["Fettucine Pasta" , "Rigatoni Spaghetti" , "Ravioli" , "Garlic Bread"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }
    }else if(document.getElementById("meal").value == "Dinner") {
        if(document.getElementById("restaurant").value == "Mc Donalds")   {
            let dishArr = ["Chicken Burger" , "Ham Burger" , "Cheese Burger" , "Fries"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Taco Bell")   {
            let dishArr = ["Burrito" , "Tacos" , "Quesadilla"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Vege Deli")   {
            let dishArr = ["Veg Salad" , "Fruit Salad" , "Corn Soup" , "Tomato Soup" , "Minestrone Soup"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Pizzeria")   {
            let dishArr = ["Pepperoni Pizza" , "Hawaiian Pizza" , "Seafood Pizza" , "Deep Dish Pizza"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Panda Express")   {
            let dishArr = ["Wontons" , "Kung Pao" , "Mapo Tofu" , "Chow Mein"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "Olive Garden")   {
            let dishArr = ["Fettucine Pasta" , "Rigatoni Spaghetti" , "Ravioli" , "Garlic Bread"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }else if(document.getElementById("restaurant").value == "BBQ Hut")   {
            let dishArr = ["Steak" , "Yakitori" , "Nankotsu" , "Piman"];
            for(let i = 0; i < dishArr.length; i++) {
                option = document.createElement("option");
                optionText = document.createTextNode(dishArr[i]);
                option.append(optionText);
                option.setAttribute("value" , dishArr[i]);
                dish.appendChild(option);
            }
        }
    }
    if(r != document.getElementById("restaurant").value)    {
        document.getElementById("divv").innerHTML = ""; 
    }
})

/**********show form2***************/
document.getElementById("prevForm3").addEventListener("click" , ()=>{
    form2.style.display = "block";
    form1.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    info.style.display  = "none";
    document.getElementById("step2").style.background = "#2196f380";
    document.getElementById("step1").style.background = "none";
    document.getElementById("step3").style.background = "none";
    document.getElementById("step4").style.background = "none";
})

/******add More dishes*****************/
document.getElementById("addMore").addEventListener("click" , () => {
    
    r = document.getElementById("restaurant").value;
    if(document.getElementById("servings")) {
        if(document.getElementById("servings").value > 10)    {
            alert("Maximum servings you can enter is 10");
            return false;
        }
    }

    if(document.getElementById("getInfo")!=null)    {
        document.getElementById("getInfoCross").addEventListener("click" , ()=>{
            document.getElementById("getInfo").remove();
        });
    }

    if(document.getElementById("dish").value) {
        let childCount,child,cln;
        let dishLen = document.getElementById("dish").length;
        let dishValue = document.getElementById("dish").value;
   
        for(let i = 1; i< dishLen; i++)   {
            if(document.getElementById(`select${i}`))  {
                let v = document.getElementById(`select${i}`).value;
                for(let i = 1; i< dishLen; i++)   {
                    if(document.getElementById("dish")[i].value == v)   {
                        document.getElementById("dish")[i].disabled = true;
                    }   
                }
                
            }

            if(document.getElementById("dish")[i].value == dishValue)  {
                document.getElementById("dish")[i].style.display = "none";
            }
        }
    
        let count = document.getElementById("divv").childElementCount;
    
        if(count == dishLen-2) {
            alert("Oops,No more dishes");
            if(document.getElementById(`select${dishLen-2}`)){
                for(let i = 1; i<dishLen; i++) {
                    if(document.getElementById(`select${dishLen-2}`).value)  {
                        let v = document.getElementById(`select${i}`);
                        let v1 = document.getElementById(`select${dishLen-2}`).value;
                        for(let j =1; j<dishLen; j++) {
                            if(v[j].value == v1)   { 
                                v[j].disabled = true;
                            }
                        }
                    }
                }
            }
            return;
        }
        if(count >= 1) {
            for(let i = 0; i < count; i++ ) {
                let createSlct = document.getElementById(`select${i+1}`);
                let createSlctValue = document.getElementById(`select${i+1}`).value;
                for(let i = 0; i < dishLen; i++)   {
                    if(createSlct[i].value == createSlctValue){
                        createSlct[i].style.display = "none";
                    }
                }  
            }
        }

        for(let i = 1; i<dishLen; i++) {
        
            if(document.getElementById(`select${i+1}`))  {
                let v = document.getElementById(`select${i}`);
                for(let k = 1; k< dishLen; k++)   {
            
                    if(document.getElementById(`select${k+1}`)) {
                        let v1 = document.getElementById(`select${k+1}`).value;
                        for(let j =1; j<dishLen; j++) {
                            if(v[j].value == v1)   { 
                                v[j].disabled = true;
                            }
                        }
                    }
                }
            }
        }

        let crossIcon = document.createElement("div");
        if(count < 1)    {
            let dishh = document.getElementById("getInfo");
            let cln = dishh.cloneNode(true);
            cln.id = count+1;
            cln.getElementsByTagName("div")[0].id = `cross${count+1}`;
            document.getElementById("divv").append(cln);
            document.getElementById(`${count+1}`).style.padding = 5 + "px";
            document.getElementById(`${count+1}`).style.width = 550 + "px";
            document.getElementById(`cross${count+1}`).style.display = "inline-block";
            childCount = document.getElementById(count+1).childElementCount;
            child = document.getElementById(count+1).children;
            cln.getElementsByTagName("select")[0].id = `select${count+1}`;
            cln.getElementsByTagName("input")[0].id = `input${count+1}`;
            document.getElementById(`input${count+1}`).value = 1;
            document.getElementById(`cross${count+1}`).addEventListener("click", (e)=>{
                let remove = e.target.parentNode.id;
                let removeId = remove.substr(5);
                document.getElementById(removeId).remove();
            })
        }

        if(count >=1){
            let cln;
            for(let i = 1; i<=count; i++)    {
                let dishh2 = document.getElementById(i);
                cln = dishh2.cloneNode(true);
                cln.id = count+1;
            }
            if(document.getElementById(`input${count}`).value >10) {
                alert("Maximum servings you can enter is 10");
                return false;
            }
            if(document.getElementById(`select${count}`).value) {
                document.getElementById("divv").append(cln);
                document.getElementById(`${count+1}`).style.padding = 5 + "px";
                document.getElementById(`${count+1}`).style.width = 550 + "px";
                cln.getElementsByTagName("div")[0].id = `cross${count+1}`;
                document.getElementById(`cross${count+1}`).style.display = "inline-block";
                document.getElementById(`cross${count+1}`).addEventListener("click", (e)=>{
                    let remove = e.target.parentNode.id;
                    let removeId = remove.substr(5);
                    document.getElementById(removeId).remove();
                })
                cln.getElementsByTagName("select")[0].id = `select${count+1}`;
                cln.getElementsByTagName("input")[0].id = `input${count+1}`;
                document.getElementById(`input${count+1}`).value = 1;
            }else {
                alert("Please select dish first");
            }
        }
    } else {
        alert("Please select dish first");
    }
});

/************reviw info**********************/
document.getElementById("nextForm3").addEventListener("click" , ()=>{

    let count = document.getElementById("divv").childElementCount;
     
    for(let i =0; i < count; i++){
        let parentId = document.getElementById("divv").childNodes[i].id;
        if(document.getElementById(`select${parentId}`).value == "") {
            alert("please select dish");
            return false;
        }

        if(document.getElementById(`input${parentId}`).value > 10) {
            alert("Maximum servings you can enter is 10");
            return false;
        }
    }

    if(document.getElementById("servings")!=null) {
        if(document.getElementById("servings").value > 10)    {
            alert("Maximum servings you can enter is 10");
            return false;
        }
    }

    if(document.getElementById("dish")!=null)   {
        if(document.getElementById("dish").value == "")   { 
            alert("This is required");
            return false;
        }
    }
    form4.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    info.style.display  = "none";
    document.getElementById("step4").style.background = "#2196f380";
    document.getElementById("step1").style.background = "none";
    document.getElementById("step2").style.background = "none";
    document.getElementById("step3").style.background = "none";

    document.getElementById("selctMeal").innerHTML = document.getElementById("meal").value;
    document.getElementById("selctPeople").innerHTML = document.getElementById("people").value;
    document.getElementById("selctRestaurant").innerHTML = document.getElementById("restaurant").value;

    let childCount = document.getElementById("divv").childElementCount;
    let dishesInfo = document.getElementsByClassName("dishes")[0];
    let createPara;
    dishesInfo.innerHTML = "";
    for(let i = 1; i <= childCount+1; i++)   {
        createPara = document.createElement("p");
        createPara.id = `p${i}`;
        dishesInfo.append(createPara);
    }

    if(childCount == 0) {
        for(let i = 1; i <= childCount+1; i++)   {
            document.getElementById(`p${i}`).innerHTML = `${document.getElementById("dish").value} - ${document.getElementById("servings").value}`;
        }
    }else if(childCount > 0) {
        
            if(document.getElementById("dish")!=null)   {
                document.getElementById(`p${1}`).innerHTML = `${document.getElementById("dish").value} - ${document.getElementById("servings").value}`;
                for(let i =0;i<count;i++) {
                    let parentId = document.getElementById("divv").childNodes[i].id;
                    document.getElementById(`p${i+2}`).innerHTML =  `${document.getElementById(`select${parentId}`).value} - ${document.getElementById(`input${parentId}`).value}`;
                }
            }else   {
                for(let i =0;i<count;i++) {
                    let parentId = document.getElementById("divv").childNodes[i].id;
                    document.getElementById(`p${i+1}`).innerHTML =  `${document.getElementById(`select${parentId}`).value} - ${document.getElementById(`input${parentId}`).value}`;
                }
            }
        }
    
});

/*************show form3*****************/
document.getElementById("prevReviewData").addEventListener("click" , ()=> {
    alert("Order is cancelled successfully!");
    window.open("index.html");
})


/************************info about order********************/
document.getElementById("submit").addEventListener("click" , ()=>{
    info.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    document.getElementById("step3").style.background = "#2196f380";
    document.getElementById("step1").style.background = "#2196f380";
    document.getElementById("step2").style.background = "#2196f380";
    document.getElementById("step4").style.background = "#2196f380";
})

