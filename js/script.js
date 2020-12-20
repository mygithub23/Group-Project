$(function () {
    // let userQuery = document.querySelector("#NaturalLangQuery");
    let btnQuery = document.querySelector("#query");
    let dvResult1 = document.querySelector(".result1");
    let dvResult2 = document.querySelector(".result2");
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    let data1 = [];
    let data2 = [];
   





    btnQuery.addEventListener('click', (e) => {

        let userQuery = $("#NatrualLangQuery").val();

        //   alert(userQuery);

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
            
          //  data1 = JSON.stringify(response);
            data1=response;
            data2= response.foods
            console.log(data1);
            console.log(data2);
            $(".result11").html(data1);
            $(".result22").html(data2);
            
           /*  dvResult1.html(data1);
            dvResult2.html(data2);  */
            function populateHeader(obj) {
                const myH1 = document.createElement('h1');
                myH1.textContent = obj[0].food_name;
                header.appendChild(myH1);
              
                const myPara = document.createElement('h2');
                myPara.textContent = 'serving_qty: ' + obj[0].serving_qty + ' serving_unit: ' + obj[0].serving_unit + 
                                    ' serving_weight_grams ' + obj[0].serving_weight_grams;
                header.appendChild(myPara);
              }

            function showFoodNutrients(obj) { 
                

                for (let i = 0; i < obj.length; i++){
                    const myArticle = document.createElement('article');
                    const myimg1 = document.createElement('img');
                    const myH2 = document.createElement('h2');
                    const myPara1 = document.createElement('p');
                    const myPara2 = document.createElement('p');
                    const myPara3 = document.createElement('p');
                    const myPara4 = document.createElement('p');
                    const myPara5 = document.createElement('p');
                    const myPara6 = document.createElement('p');
                    const myPara7 = document.createElement('p');
                    const myPara8 = document.createElement('p');
                    const myPara9 = document.createElement('p');
                    const myPara10 = document.createElement('p');
                    const myPara11 = document.createElement('p');
                    const myPara12 = document.createElement('p');
                    const myPara13 = document.createElement('p');
                    const myList = document.createElement('ul');

                    
                    myimg1.src=obj[i].photo.thumb;
                    myH2.textContent = obj[i].food_name;
                    myPara1.textContent = 'Serving Unit: ' + obj[i].serving_unit;
                    myPara2.textContent = 'serving weight: ' + obj[i].serving_weight_grams;
                    myPara3.textContent = 'serving_weight_grams: '  + obj[i].serving_weight_grams;
                    myPara4.textContent = 'nf_calories: ' + obj[i].nf_calories;
                    myPara5.textContent = 'nf_total_fat: ' + obj[i].nf_total_fat;
                    myPara6.textContent = 'nf_saturated_fat: ' + obj[i].nf_saturated_fat;
                    myPara7.textContent = 'nf_cholesterol: ' + obj[i].nf_cholesterol;
                    myPara8.textContent = 'nf_sodium: ' + obj[i].nf_sodium;
                    myPara9.textContent = 'nf_protein: ' + obj[i].nf_protein;
                    myPara10.textContent = 'nf_total_carbohydrate: ' + obj[i].nf_total_carbohydrate;
                    myPara11.textContent = 'nf_dietary_fiber: ' + obj[i].nf_dietary_fiber;
                    myPara12.textContent = 'nf_sugars: ' + obj[i].nf_sugars;
                    
                    myPara13.textContent = 'Full_Nutrients:';

                    const full_Nutrient = obj[i].full_nutrients;
                    for (let j = 0; j < full_Nutrient.length; j++) {
                        const listItem = document.createElement('li');
                        listItem.textContent = full_Nutrient[j].attr_id + ": " + full_Nutrient[j].value;
                        myList.appendChild(listItem);
                      }

                    myArticle.appendChild(myimg1);
                    myArticle.appendChild(myH2);
                    myArticle.appendChild(myPara1);
                    myArticle.appendChild(myPara2);
                    myArticle.appendChild(myPara3);
                    myArticle.appendChild(myPara4);
                    myArticle.appendChild(myPara5);
                    myArticle.appendChild(myPara6);
                    myArticle.appendChild(myPara7);
                    myArticle.appendChild(myPara8);
                    myArticle.appendChild(myPara9);
                    myArticle.appendChild(myPara11);
                    myArticle.appendChild(myPara12);
                    myArticle.appendChild(myPara12);
                    myArticle.appendChild(myPara13);

                    

                    myArticle.appendChild(myList);
                
                    section.appendChild(myArticle);



                }

             }
            populateHeader(data2);
            showFoodNutrients(data2);
          
        });

    })

})