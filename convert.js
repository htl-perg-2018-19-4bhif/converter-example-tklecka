const args = process.argv;
if(process.argv.length===6 && process.argv[4]==="to" && !isNaN(process.argv[2])){
    args[3] === args[5] ? print(1) : args[3] === "m" && args[5] === "cm" ? print(100) : args[3] === "m" && args[5] === "mm" ? print(1000) : args[3] === "cm" && args[5] === "m" ? print(0.01) : args[3] === "cm" && args[5] === "mm" ? print(10) : args[3] === "mm" && args[5] === "cm" ? print(0.1) : args[3] === "mm" && args[5] === "m" ? print(0.001) : args[3] === "kg" && args[5] === "g" ? print(1000) : args[3] === "g" && args[5] === "kg" ? print(0.001) : console.log("Invalid parameters");
} else {
    console.log("Invalid parameters");
}
function print(factor){
    console.log(args[2] + " " + args[3] + " are " + args[2]*factor + " " + args[5]);
}
//Still one Left for an Comment :D