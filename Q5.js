let user = {
    name: "Prajakta",
    address:{
        city: "sangli",
        pin: 315408,
        geo: {
            lat: 11.22, lng: 77.33
        }
    }
    let {
        address:{
            city,
            geo:{lat, lng}
        }
    }
} = user;
console.log(city);
console.log(lat);
console.log(lng);