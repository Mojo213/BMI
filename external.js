function calculateBmi() {
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    let bmi = (weight / ((height * height) / 10000)). toFixed(2)
    
    document.getElementById("heading").innerHTML = "Your BMI is :"
    document.getElementById("result").innerHTML = bmi

    }

   
    function reload () {
         window.location.reload ()
    }



//bmi formula = formula to use in the function is: weight (kg) / [height (m)]squared