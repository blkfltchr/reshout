const Contact = require('./contact');

const Kieran = new Contact({
    dateAdded: new Date(),
    firstName: 'Kieran'
});
const Nick = new Contact({
    dateAdded: new Date(),
    firstName: 'Nick'
});

const Marco = new Contact();

setTimeout(() => {
    const Patrick = new Contact();
    console.log('Patrick', Patrick);
}, 3000);

console.log('Kieran', Kieran);
console.log('Nick', Nick);
console.log('Marco', Marco);
