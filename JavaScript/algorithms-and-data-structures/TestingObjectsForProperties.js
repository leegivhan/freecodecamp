function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

myObj = {
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh"
};

console.log(checkObj(myObj, "gift"));
// console.log(myObj.hasOwnProperty("middle"));