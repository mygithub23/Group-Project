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
   


    function getExerciseReport(){

        for (let i = 0; i < 4; i++) {
            $(`<li id='${i}' class='active-slide'></li>`).appendTo("#exerciseReport");
              $(`<button class='${i} btn btn-primary btn-lg btn-block' id='${i}'></button>`).appendTo(`#${i}`)
              $(`.${i}`).append(JS_Questions[arrayIndex].exerciseReport[i])
        
         
            } 
    }

    let exerciseActivity = "";
    let exerciseDuration = 0;
   

    exerciseBtn.addEventListener('click', (e) => {

        // NOTE please Nikkie, get the age, weight, height and gender parameters. then uncomment lines 64 to 88. Thank you.
        let age = $("#age").val();
        let weight = $("#weight").val(); 
        let height = $("#height").val();
        let exercise = $("#exercise").val();

        

        // let male = $("#male").val();
        // let female = $("#female").val(); 
        let userQuery = `"query":${exercise}, "gender":"male", "weight":${weight}, "height":${height}, "age":${age}`
          console.log(userQuery);
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
                "data": JSON.stringify({"query":"ran 3 miles","gender":"female","weight_kg":72.5,"height_cm":167.64,"age":30}),

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
          alert ("Total Calories: " + data1.exercises[0].nf_calories)
                      

            });

        } catch (error) {
            alert(error)
        }


    })

})