import fetch from "node-fetch";

const run = async () => {
    for(let i = 0; i < 55; i++) {
        const coin = i % 2 === 0 ? 'bitcoin' : 'etherum';
        await fetch(`http://localhost:3000/price/${coin}`);
        console.log(`Requisição ${i + 1} enviada`);
    }
};

run();