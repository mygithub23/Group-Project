$(function () {
    // let userQuery = document.querySelector("#NaturalLangQuery");
    let btnQuery = document.querySelector("#query");
    let btnQuery1 = document.querySelector("#query1");
    let dvResult1 = document.querySelector(".result1");
    let dvResult2 = document.querySelector(".result2");
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    let input = document.querySelector('#NatrualLangQuery');
    testFour = document.querySelector("#test4");

    let data1 = [];
    let data2 = [];
    // $("#pre4").text(`$('#test4').nutritionLabel({
    //     showServingUnitQuantity : false,
    //     showAmountPerServing : false,
    //     showCalorieDiet : true,
    //     ingredientList : 'one cup of milk, two eggs, 2 slices of pizza, one cheeseburger, 1 large french fries, one slice of cheesecake',
    //     itemName : 'Fire Grilled Sirloin Tips',
    //     showPolyFat : false,
    //     showMonoFat : false,
    //     showTransFat : false,
    //     showVitaminD : false,
    //     showVitaminC : false,
    //     showCalcium : false,
    //     showIron : false,
    //     showFatCalories : false,
    //     valueCalories : 41,
    //     valueTotalFat : 22,
    //     valueSatFat : 11,
    //     valueCholesterol : 105,
    //     valueSodium : 1220,
    //     valueTotalCarb : 20,
    //     valueFibers : 0,
    //     valueSugars : 18,
    //     valueProteins : 48,
    //     valueVitaminD : 12.22,
    //     valuePotassium_2018 : 4.22,
    //     valueCalcium : 7.22,
    //     valueIron : 11.22,
    //     valueCaffeine : 15.63,
    //     showLegacyVersion : false
    // });
    //     `)
    
    input.innerHTML = "";

    function UpdateFoodNutritients() {         
        let markupArray = [];
        let markupNutLabele = [];
       
            

        for (i = 0; i < data.length; i++) {
            markupArray[i]=`
            <div class="shadow">
                <img class="img" src=${data[i].photo.thumb} alt="food pic">
                <div class="crd-bd">
                    <h2 class="card-title">${data[i].food_name}</h2>
                    <p class="txt">Serving Unit: ${data[i].serving_unit} </p>
                    <p class="txt">Calories: ${data[i].nf_calories}</p>
                    <p class="txt">Total fat: ${data[i].nf_total_fat}</p>
                    <p class="txt">Carbohydrate: ${data[i].nf_total_carbohydrate}</p>
                    <p class="txt1" id="test43"></p>
                </div>
            </div>      
                        `;     


            markupNutLabele[i] =`{
            showServingUnitQuantity : false,
            showAmountPerServing : false,
            showCalorieDiet : true,
            ingredientList : 'one cup of milk, two eggs, 2 slices of pizza, one cheeseburger, 1 large french fries, one slice of cheesecake',
            itemName : 'Fire Grilled Sirloin Tips',
            showPolyFat : false,
            showMonoFat : false,
            showTransFat : false,
            showVitaminD : false,
            showVitaminC : false,
            showCalcium : false,
            showIron : false,
            showFatCalories : false,
            valueCalories : 41,
            valueTotalFat : 22,
            valueSatFat : 11,
            valueCholesterol : 105,
            valueSodium : 1220,
            valueTotalCarb : 20,
            valueFibers : 0,
            valueSugars : 18,
            valueProteins : 48,
            valueVitaminD : 12.22,
            valuePotassium_2018 : 4.22,
            valueCalcium : 7.22,
            valueIron : 11.22,
            valueCaffeine : 15.63,
            showLegacyVersion : false
        }
            `                                                   
        }
    
        for (i = 0; i < markupArray.length; i++) {
        $(markupArray[i]).appendTo(".daily");
       
        }
        
        // for (i = 0; i < 1; i++) {
        //   //  $(markupNutLabele[i]).appendTo('#test4');
        //   $('#test4').nutritionLabel(markupNutLabele[i]);
        //     eval(eval($('#test4').nutritionLabel(markupNutLabele[i])));
        // }
        
        $(".shadow").addClass("card");
        $(".img").addClass("card-img-top");
        $(".crd-bd").addClass("card-body");
        $(".txt").addClass("card-text");

         

        $(".card").css ({
            '-webkit-box-shadow': '3px 3px 5px 6px #ccc',  
            '-moz-box-shadow':    '3px 3px 5px 6px #ccc',  
            'box-shadow':         '3px 3px 5px 6px #ccc',
            'width': '18rem',
            'hight': 'auto',
            'margin': '5px',
            'padding': '10px'
        })
        // $(".card-deck .card").css({
        //     '-webkit-box-shadow': '3px 3px 5px 6px #ccc',  
        //     '-moz-box-shadow':    '3px 3px 5px 6px #ccc',  
        //     'box-shadow':         '3px 3px 5px 6px #ccc',
            
        //     })


        // $(".card-body").css ({
        //     'width': '150px'
        // })

        $(".card-img-top").css ({
            'max-width': '200px'
        })
        
        $("<div id='test44'></div>").appendTo("#test4");
       // eval(eval($('#test44').nutritionLabel(markupNutLabele2)));
        // $(".card-title").css ({
        // 'width': '150px'
        // })
    
        // $(".card-text").css ({
        // 'width': '150px'
        // })


       
        // $(".card-text").css({
        // 'font-size': '16px',
        // 'font-weight': 'bold',
        // 'margin-top': '5px'
        // })
        input.innerHTML = "";
        
    }

    btnQuery1.addEventListener('click', (e) => {
     //   ($('#test4').nutritionLabel(markupNutLabele2)) appendTo("#prep4");
     //   $("#pre4").text("$('#test4').nutritionLabel(markupNutLabele2)")

    //  <h2 class="card-title">${data[i].food_name}</h2>
    //                 <p class="txt">Serving Unit: ${data[i].serving_unit} </p>
    //                 <p class="txt">Calories: ${data[i].nf_calories}</p>
    //                 <p class="txt">Total fat: ${data[i].nf_total_fat}</p>
    //                 <p class="txt">Carbohydrate: ${data[i].nf_total_carbohydrate}</p>


//     'Serving Unit: ' + data[i].serving_unit;
//    'serving weight: ' + data[i].serving_weight_grams;
//     myPara3.textContent = 'serving_weight_grams: '  + data[i].serving_weight_grams;
//     myPara4.textContent = 'nf_calories: ' + data[i].nf_calories;
//     myPara5.textContent = 'nf_total_fat: ' + data[i].nf_total_fat;
//     myPara6.textContent = 'nf_saturated_fat: ' + data[i].nf_saturated_fat;
//     myPara7.textContent = 'nf_cholesterol: ' + data[i].nf_cholesterol;
//     myPara8.textContent = 'nf_sodium: ' + data[i].nf_sodium;
//     myPara9.textContent = 'nf_protein: ' + data[i].nf_protein;
//     myPara10.textContent = 'nf_total_carbohydrate: ' + data[i].nf_total_carbohydrate;
//     myPara11.textContent = 'nf_dietary_fiber: ' + data[i].nf_dietary_fiber;
//     myPara12.textContent = 'nf_sugars: ' + data[i].nf_sugars;

        let valueCalories = 0;
        let valueTotalFat = 0;
        let valueSatFat = 0;
        let valueCholesterol = 0;
        let valueSodium = 0;
        let valueTotalCarb = 0;
        let valueFibers = 0;
        let valueSugars = 0;
        let valueProteins = 0;
        

        for (i=0; i< data.length; i++) {
            valueCalories    += data[i].nf_calories;
            valueTotalFat    += data[i].nf_total_fat
            valueSatFat      += data[i].nf_saturated_fat
            valueCholesterol += data[i].nf_cholesterol
            valueSodium      += data[i].nf_sodium
            valueTotalCarb   += data[i].nf_total_carbohydrate
            valueFibers      += data[i].nf_dietary_fiber
            valueSugars      += data[i].nf_sugars
            valueProteins    += data[i].nf_protein

            console.log(valueCalories);
        }
        console.log(valueCalories);

     $("#pre4").text(`$('#test4').nutritionLabel({
        showServingUnitQuantity : false,
        showAmountPerServing : false,
        showCalorieDiet : true,
        ingredientList : 'one cup of milk, two eggs, 2 slices of pizza, one cheeseburger, 1 large french fries, one slice of cheesecake',
        itemName : 'Fire Grilled Sirloin Tips',
        showPolyFat : false,
        showMonoFat : false,
        showTransFat : false,
        showVitaminD : false,
        showVitaminC : false,
        showCalcium : false,
        showIron : false,
        showFatCalories : false,
        valueCalories : ${valueCalories},
        valueTotalFat : ${valueTotalFat},
        valueSatFat : ${valueSatFat},
        valueCholesterol : ${valueCholesterol},
        valueSodium : ${valueSodium},
        valueTotalCarb : ${valueTotalCarb},
        valueFibers : ${valueFibers},
        valueSugars : ${valueSugars},
        valueProteins : ${valueProteins},
        valueVitaminD : false,
        valuePotassium_2018 : false,
        valueCalcium : false,
        valueIron : false,
        valueCaffeine : false,
        showLegacyVersion : false
    });
        `)
        eval(eval($('#pre4').html()));
       // let x = eval(eval($('#test4').nutritionLabel(markupNutLabele2)));
      //  console.log(x)
    })

    btnQuery.addEventListener('click', (e) => {

        let userQuery = $("#NatrualLangQuery").val();

        
        //input.removeChild();
        
        $("#NatrualLangQuery").empty();

        //   alert(userQuery);

        $(".shadow").remove();

        // #shadow-root (user-agent)
        // <div id="inner-editor"></div>
        $('#inner-editer').innerHTML = "";
        

        var settings = {
            "url": "https://trackapi.nutritionix.com/v2/natural/nutrients",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-app-id": "070d9486",
                "x-remote-user-id": "0",
                "x-app-key": "a5d8e436c8e7b138eb4af47c74228064"
            },
            
            "data": JSON.stringify({
                "query": `${userQuery}`,
                "timezone": "US/Eastern"
            }),
        };
     
        $.ajax(settings).done(function (response) {
            console.log(response);
            
            data2 = JSON.stringify(response);
            data1=response;
            data= response.foods
            console.log(data1);
            console.log(data2);
      
          //showFoodNutrients();
         UpdateFoodNutritients();

         
                   
        });
    })
})