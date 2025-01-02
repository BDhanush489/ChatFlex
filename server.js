
// const { Client } = require('whatsapp-web.js');
// const qrcode = require('qrcode');
// const fs = require('fs');

// const client = new Client();

// client.on('qr', (qr) => {
//     // Save QR code as an image
//     qrcode.toFile('qr-code.png', qr, (err) => {
//         if (err) {
//             console.error('Error saving QR code:', err);
//         } else {
//             console.log('QR code saved as qr-code.png');
//         }
//     });
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.on('message', msg => {
//     console.log(msg)
//     if (msg.body == 'ping') {
//         msg.reply('pong');
//     }
// });

// client.initialize();


const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode');

const client = new Client();

client.on('qr', (qr) => {
    console.log('QR Code received. Generating...');
    // Print QR code in the terminal
    qrcode.toFile('qr-code.png', qr, (err) => {
        if (err) {
            console.error('Error saving QR code:', err);
        } else {
            console.log('QR code saved as qr-code.png');
        }
    });
});

client.on('message', msg => {
    console.log('Message received:', msg.body);
    if (msg.body === 'hi') {
        msg.reply('hello');
    }
    if (msg.body === 'ping') {
        msg.reply('pong');
    }
 
});

// Initialize the client
console.log('Initializing client...');
client.initialize();
