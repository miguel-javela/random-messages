const messages = [
    "Miguel","Ana","Nicolay","Laura","Diego"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = {randomMsg}