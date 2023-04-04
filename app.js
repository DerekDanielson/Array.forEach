const socials = ['Twitter', 'LinkedIn', 'Instagram', 'Facebook'];

/*socials.forEach(function(item){
    console.log(item);
});*/

//socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));


function logSocials(item) {
    console.log(item);
}

//socials.forEach(logSocials);



const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Facebook', url: 'https://facebook.com' }
];

socialObjs.forEach((item) => console.log(item.url));