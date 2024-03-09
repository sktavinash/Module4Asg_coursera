var names = new Array();
names[0] = "Yaakov"
names[1] = "Jen"
names[2] = "jason"
names[3] = "paul"
names[4] = "Frank"
names[5] = "larry"
names[6] = "Yaakov"
names[7] = "paula"
names[8] = "jim"

for (let index = 0; index < names.length; index++) {
    if (names[index].charAt(0) === "J" || names[index].charAt(0) === "j") {
        console.log("Goodbye " + names[index]);
    } else {
        console.log("Hello " + names[index]);
    }
}


    
    
