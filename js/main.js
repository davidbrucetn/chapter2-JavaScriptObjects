
//JavaScript Object Demo
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

// Output values to above using dot notation

console.log(`wardrobe height: ${wardrobe.height}`);
console.log(`wardrobe manufacturer: ${wardrobe.manufacturer}`);
console.log(`wardrobe contents: ${wardrobe.contents}`);
console.log(`wardrobe depth: ${wardrobe["depth"]}`);
console.log(`wardrobe width: ${wardrobe.width}`);

//Create new key on object
wardrobe.material = "Cedar";
console.log(wardrobe);

const keys = ["height","manufacturer","contents","depth","width" ];
const keysLength = keys.length;
for ( var i = 0; i < keysLength; i++ ) {
    var keyname = keys[i];
    console.log(`Wardrobe key as var stepthrough: ${wardrobe[keyname]}`)
}

//Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State 
//Building to the console.
//Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the 
// console. Create 5 variables first with the keys as their values. Use those variables to look 
// up the values.
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// output using dot notation
console.log(`Dot notation object key-value stories: ${empireStateBuilding.stories}`);
console.log(`Dot notation object key-value height: ${empireStateBuilding.height}`);
console.log(`Dot notation object key-value squareFeet: ${empireStateBuilding.squareFeet}`);
console.log(`Dot notation object key-value eastWestLength: ${empireStateBuilding.eastWestLength}`);
console.log(`Dot notation object key-value northSouthLength: ${empireStateBuilding.northSouthLength}`);
console.log(`Dot notation object key-value architect: ${empireStateBuilding.eastWestLength}`);

// output using square bracket notation
console.log(`Dot notation object key-value address: ${empireStateBuilding["address"]}`);
console.log(`Dot notation object key-value constructionDate: ${empireStateBuilding["constructionDate"]}`);
console.log(`Dot notation object key-value cost: ${empireStateBuilding["cost"]}`);
console.log(`Dot notation object key-value owner: ${empireStateBuilding["owner"]}`);

// Arrays as Values
//Lightning Exercise 1: Output the names of the part-time instructors followed by the 
//  names of the full-time instructors in the console.

//Lightning Exercise 2: Output only Andy and Zoe in the console.
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

function loopInstructors(myObj) {
    const nssInsKeys = ["partTime","fullTime"];
    const nssInsKeysLength = nssInsKeys.length;
    var nssKey,nssInsLen,insName,retVal;
    for ( var j = 0; j < nssInsKeysLength; j++) {
        nssKey = nssInsKeys[j];
        nssInsLen = myObj["instructors"][nssKey]["length"];
        for ( i=0; i < nssInsLen; i++) {
            insName = myObj["instructors"][nssKey][i];
            retVal = nssKey + ':' + insName;
            console.log(retVal);
        }
    }

}

// Exercise 1 part time and then full time
loopInstructors(nashvilleSoftwareSchool);

// Exercise 2 Andy and Zoe
console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

//Practice Accessing Property Values
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.`);