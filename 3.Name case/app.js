// lower case 
var personName = "Mehwish";
console.log("lowercase:", personName.toLowerCase());
//upper case 
console.log("uppercase:", personName.toLocaleUpperCase());
// Titile case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
