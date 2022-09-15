// object destructuring 
const band = {
    bandname:'pappu' , 
    famoussong: 'gana gawelu' , 
    year : 2000 ,
    city:'ram nagar'

}
const bandName = band.bandname;
const famousSong = band.famoussong;

// destructuring variable  , aliasing bandname as ramu
const {bandname :ramu , famoussong , ...restProp} = band;
console.log(ramu, famoussong)
console.log(restProp)// { year: 2000, city: 'ram nagar' }














