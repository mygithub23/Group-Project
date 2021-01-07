$(function () {
    // let userQuery = document.querySelector("#NaturalLangQuery");
    let arrayLenghth = JS_Exercise.length;
    let exerciseBtn = document.querySelector("#exerciseBtn");
    let age = document.querySelector("#age");
    let weight = document.querySelector("#weight");
    let height = document.querySelector("#height");
    let male = document.querySelector("#male");
    let female = document.querySelector("#female");
    let exercise = document.querySelector("#exercise");

    const header = document.querySelector('header');
    const section = document.querySelector('section');
    let data1 = [];
    let data2 = [];
    let exerciseActivity = "";
    let exerciseDuration = 0;
    let gender = '';
    let duration = ['30 min','60 min','90 min','120 min']
    let totalCalToBurn = [];



    function getExerciseReport() {

        for (let i = 0; i < 4; i++) {
            $(`<li id='${i}' class='active-slide'></li>`).appendTo("#exerciseReport");
            $(`<button class='${i} btn btn-primary btn-lg btn-block' id='${i}'></button>`).appendTo(`#${i}`)
            $(`.${i}`).append(JS_Questions[arrayIndex].exerciseReport[i])


        }
    }


    function getCalReport(i){
        let age = 0;
        let weight_lb = 0;
        let height_ft = 0;
        let activity ='';

        // NOTE please Nikkie, get the age, weight, height and gender parameters. then uncomment lines 64 to 88. Thank you.
         age = $("#age").val();
         weight_lb = $("#weight").val();
         height_ft = $("#height").val();
         activity = $('#activities :selected').text();
       

        // console.log($('#run').val());
        // console.log($('#stretch').val());
        // console.log($('#activities :selected').text());




        $.each($("input[name='gender']:checked"), function () {
            gender = $(this).val();
        });
        // alert("my gender is: " + gender );



        console.log(age)
        console.log(weight_lb)
        console.log(height_ft)
        console.log(gender)
        console.log(activity)




        weight_kg = Math.round(weight_lb * 0.453592) // convert lbs to kg
        //height_cm = height_in * 2.54 // convert inches to cm
        height_cm = Math.round(height_ft * 30.48) // convert feet and inches to cm

        // class Duration {
        //     constructor(d1, d2, d3, d4){
        //         this.duration_30  = d1;
        //         this.duration_60  = d2;
        //         this.duration_90  = d3;
        //         this.duration_120 = d4;
        // }
        //     }
            

            // q = ${activity} ${duration[i]}
            q =   `${activity + ' ' + duration[i]}` 
            g = gender
            
            // class QueryParms {
                 
            //         query = query;
            //         gender = gender;
            //         weight_kg = weight_kg;
            //         height_cm = height_cm;
            //         age = age;
                
                

            // }

            // const queryParms = new QueryParms(q, g,weight_kg, height_cm,age);
            // JSON.stringify(queryParms);

            // JSON.stringify()

            const userQuery = {
                query:q,
                gender: g,
                weight_kg: weight_kg,
                height_cm: height_cm,
                age: Number(age),
            
                
              };
           // let userQuery = `"query" : '${q}' , "gender": '${g}', "weight":${weight_kg}, "height":${height_cm}, "age":${age}`
            console.log(userQuery);
            let userQueryS = JSON.stringify(userQuery, ["query", "gender", "weight_kg", "height_cm", "age"]);
            console.log(userQueryS)


         //   let userQuery = `"query" : ${q} , "gender": ${g}, "weight":${weight_kg}, "height":${height_cm}, "age":${age}`

            try {
                var settings = {
                    "url": "https://trackapi.nutritionix.com/v2/natural/exercise",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "x-app-id": "b9d04e17",
                        "x-app-key": "f26c71ee0749e743ffe86bc280b76cc0",
                        "x-remote-user-id": "0",
                        "Cache-Control": "no-cache"
                    },

                    // ------ this is hard coded parameters. replace with actual data
                  //  "data": JSON.stringify({"query":'Weight lifting 60 min' , "gender": 'male', "weight":248.114824, "height":167, "age":44}),
                   
                    "data": userQueryS,
                    //"data": JSON.stringify({"query":'Weight lifting 60 min' , "gender": 'male', "weight":248.114824, "height":167, "age":44}),
                    // "data": JSON.stringify({
                    //     "query": `${userQuery}`,
                    //     "timezone": "US/Eastern"
                    // }),

                };
                $.ajax(settings).done(function (response) {
                    console.log(response);
                    data1 = response;
                    console.log(data1);
                    console.log(data1.exercises[0].nf_calories);
                    console.log("Total Calories: " + data1.exercises[0].nf_calories);
                    totalCalToBurn[i]= data1.exercises[0].nf_calories;
                    $(`<li id='${i}' class='active-slide'></li>`).appendTo("#exerciseReport");
                    $(`<button class='${i} btn btn-primary btn-lg btn-block' id='${i}'></button>`).appendTo(`#${i}`)
                    $(`.${i}`).append("For " + JS_Exercise[i].duration[i] + " You will burn Total Calories: " + data1.exercises[0].nf_calories)
                });

            } catch (error) {
                alert(error)
            }
        
        console.log(totalCalToBurn);
        
    }



    
    
// Submit Event
    exerciseBtn.addEventListener('click', (e) => {
        e.preventDefault();
       // getCalReport(0);

        try {
         //  getCalReport(0);
            // getCalReport(1);
            // getCalReport(2);
            // getCalReport(3);
           // getCalReport3() ;
            for (i=0; i< 4; i++){
                getCalReport(i);
                
               
        
                }
            

        
        } catch (error) {
            alert(error)
        }
        
        try {
            // for (i=0; i< 4; i++){
            // $(`<li id='${i}' class='active-slide'></li>`).appendTo("#exerciseReport");
            // $(`<button class='${i} btn btn-primary btn-lg btn-block' id='${i}'></button>`).appendTo(`#${i}`)
            // $(`.${i}`).append(JS_Exercise[i] + "Total Calories: " + data1.exercises[0].nf_calories)
            // }
    
          //  getExerciseReport();
        } catch (error) {
            console.log(error);
        }
        
        

    })



})
