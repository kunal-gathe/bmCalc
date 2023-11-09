let weight = document.getElementById('weight')
let height = document.getElementById('height')
let results = document.getElementById('results')

function calculate(){
    validateData(weight, height);
    let m = parseInt( height.value) / 100;
    let bmi =( parseInt( weight.value) / (m * m)).toFixed(1)

    if( bmi <= 18.4  ){
        results.innerHTML = `Your BMI results is ${bmi} & you are underweight`
    }
    else if( bmi >= 18.5 && bmi <= 24.9){
        results.innerHTML = `Your BMI results is ${bmi} & you are Heathy`
    }
    else if( bmi >= 25 && bmi <= 30){
        results.innerHTML = `Your BMI results is ${bmi} & you are overweight`;
    }else{
        results.innerHTML = `Your BMI results is ${bmi} & you are obese`;
    }
} 

function validateData(weight, height) {
    if(parseInt(height.value) <= 0 && parseInt(weight.value) <= 0){
        alert(`height & weight can not be zero`)
    }
}