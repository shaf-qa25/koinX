const HOLDINGS_DATA = [/* Paste the JSON from your task here */];

export const fetchHoldings = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(HOLDINGS_DATA), 800); // Simulate network lag
    });
};