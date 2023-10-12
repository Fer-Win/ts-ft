var score = 33;
var ferwin;
ferwin = { username: "Hey", id: 25 };
// function getDbId(id:number|string){
//   console.log(`DB d is:${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === 'string') {
        id.toUpperCase();
    }
    else {
        return id + 2;
    }
}
var dataa = [1, 2, 3];
var dts = ['2'];
// const data2 : string[] | number [] = ['hey',2]
var data2 = ['hey', 2];
var pi;
// pi =4.5
var seatAllotment;
// seatAllotment = 'frontseat'
