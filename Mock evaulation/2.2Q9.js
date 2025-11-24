function displayCar(){
    console.log("car selected");
}
function displayTruck(){
    console.log("Truck selected");
}
function displayBike(){
    console.log("Bike selected ");

}
function vehiclenInfo(vehiclCategory,callbackFn){
    console.log("vehical:",vahicleCategory);
    callbackFn();
}
vehiclenInfo("Car",displayCar);
vehiclenInfo("truck",displayTruck);

vehiclenInfo("bike",displayBike);




