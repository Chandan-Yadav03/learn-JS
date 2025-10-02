// let teaList=["green tea","black tea","chai","oolong tea"];
// let selectTea=[];
// for(let i=0;i<teaList.length;i++)
// {
//     if(teaList[i]==="chai")
//     {
//         break;
//     }
//     selectTea.push(teaList[i]);
// }
// //console.log(selectTea);
// //for num of numbers
// let worldCities={
//     "Sydney" : 5000000,
//     "Tokyo" : 9000000,
//     "Berlin" : 3500000,
//     "Paris" : 2200000
// };
// let largeCities={};
// for (const city in worldCities) {
//     if(worldCities[city]<3000000)
//     {
//         continue;
//     }
//     largeCities[city]=worldCities[city];
// }
// //console.log(largeCities);
// let teaLists=["green tea","black tea","chai","oolong tea"];
// let availableTeas=[];
// teaLists.forEach(function (tea) {
//     if(tea=="chai")
//     {
//         return;
//     }
//     availableTeas.push(tea);
// });
// console.log(availableTeas);
let worldCities=["Berlin", "Tokyo", "Sydney","Paris"];
let travelCities=[];
worldCities.forEach(city => {
    if(city==="Sydney")
    {
        return;
    }
    travelCities.push(city);
});
console.log(travelCities);