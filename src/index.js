const messages = [
    "Capitana Marvel",
    "Hombre Araña",
    "Capitan America",
    "Gambito",
    "Hombre Hormiga",
    "Avispa",
    "Pantera Negra",
    "Thor",
];

const randomNameAvenger = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}


module.exports = {
    randomNameAvenger
};