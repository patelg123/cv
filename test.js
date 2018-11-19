let city= 'leicester_';
let a = {
[ city + 'population' ]: 500000
};
a[ city + 'county' ] = 'Leicestershire';
console.log(a); // {leicester_population: 350000, leicester_county: 'Leicestershire' }