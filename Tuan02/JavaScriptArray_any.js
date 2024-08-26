let prom1 = new Promise((resolve, reject) => {
    reject("reject");
})
let prom2 = new Promise((resolve, reject) => {
    reject("reject to load");
})
let prom3 = new Promise((resolve, reject) => {
    resolve("Worked");
})
let prom4 = new Promise((resolve, reject) => {
    resolve("Successful");
})
 
let prom = [prom1, prom2, prom3, prom4];
// prom.map((p, index) => (console.log(p)))
 
Promise.any(prom).then((val) => { console.log(val) });