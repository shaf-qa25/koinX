import { HOLDINGS_DATA, GAINS_DATA } from './data';

export const fetchHoldings = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(HOLDINGS_DATA), 1500);
    });
};

export const fetchGains = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(GAINS_DATA), 1500);
    });
};