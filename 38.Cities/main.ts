//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan.
 //Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(nameofCity:string,country:string= "Pakistan" ){
    return `${nameofCity} is in ${country}`; 
};

//3 cities

let city1 =describe_city("karachi")

let  city2 = describe_city("france","europe")
let city3  = describe_city("lahore","punjab")

console.log(city1)
console.log(city2)
console.log(city3)

    
