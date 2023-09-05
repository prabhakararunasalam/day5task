const log = (logValue) => console.log(logValue);
const studentArr=["prawin","muhil","gopi","akon"];

for (let i = 0; i < studentArr.length; i++) {
  log(studentArr[i]);
}

const studentObj = {
    engineering:"prawin",
    bachelarOfScience:"muhil",
    hotelManagement:"gopi",
    masterOfScience:"akon"
  };
  
  const objectValues = Object.values(studentObj);
  log(objectValues);

  for (let i = 0; i < objectValues.length; i++) {
    log(objectValues[i]);
  }
  
  const objectkeys = Object.keys(studentObj);
  log(objectkeys);
  
  for (let i = 0; i < objectkeys.length; i++) {
    log(objectkeys[i]);
  }
  log("......for loop end.......")
  
//const studentArr=["prawin","muhil","gopi","akon"];
log("....foreach loop.....");
studentArr.forEach((value,index,accArr)=>{
    log(`
    value: ${value}
    index: ${index}
    accArr: ${accArr}
    `);
}
)
//const studentObj ={
  //  engineering:"prawin",
    //bachelarOfScience:"muhil",
    //hotelManagement:"gopi",
    //masterOfScience:"akon"
//};
 objectkeys.forEach ((value)=>{
    log(`
    objectkeys: ${value}
    objectvalue: ${studentObj[value]}
    
    `);
 });
 log("........forEach loop end.......");

 //forin loop
 log("......for in loop.....");

//const studentArr=["prawin","muhil","gopi","akon"];

for(key in studentArr) {
    log(`
    Index of array: ${key}
    value of array: ${studentArr[key]}
   
`);}

//const studentObj ={
  //  engineering:"prawin",
    //bachelarOfScience:"muhil",
    //hotelManagement:"gopi",
    //masterOfScience:"akon"
//};
for(key in studentObj) {
    log(`
    keys: ${key}
    values: ${studentObj[key]}
    `)
}

log(".....for in loop end.....");
//for of loop
log("....for of loop....");


for(value of studentArr) {
    log(`
    array value : ${value}
    `);
}

for(value of objectkeys){
    log(`
    object keys: ${value}
    objectvalue : ${studentObj[value]}
    `)
}