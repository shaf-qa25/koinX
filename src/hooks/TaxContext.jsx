import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { fetchHoldings, fetchGains } from '../services/api';

const TaxContext = createContext();

export const TaxProvider = ({ children }) => {
    const [initialGains, setInitialGains] = useState(null);
    const [holdings, setHoldings] = useState([]);
    const [selectedCoins, setSelectedCoins] = useState(new Set());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([fetchGains(), fetchHoldings()]).then(([gains, coins]) => {
            setInitialGains(gains.capitalGains);
            setHoldings(coins);
            setLoading(false);
        });
    }, []);

    const initialTotal = useMemo(() => {
        if (!initialGains) return 0;
        return (initialGains.stcg.profits - initialGains.stcg.losses) +
            (initialGains.ltcg.profits - initialGains.ltcg.losses);
    }, [initialGains]);

    const postHarvestGains = useMemo(() => {
        if (!initialGains) return null;
        let updatedGains = {
            stcg: { ...initialGains.stcg },
            ltcg: { ...initialGains.ltcg }
        };

        selectedCoins.forEach(coinId => {
            const coin = holdings.find(h => h.coin === coinId);
            if (coin) {
                if (coin.stcg.gain > 0) updatedGains.stcg.profits += coin.stcg.gain;
                else updatedGains.stcg.losses += Math.abs(coin.stcg.gain);

                if (coin.ltcg.gain > 0) updatedGains.ltcg.profits += coin.ltcg.gain;
                else updatedGains.ltcg.losses += Math.abs(coin.ltcg.gain);
            }
        });
        return updatedGains;
    }, [selectedCoins, initialGains, holdings]);

    const toggleSelect = (id) => {
        const next = new Set(selectedCoins);
        next.has(id) ? next.delete(id) : next.add(id);
        setSelectedCoins(next);
    };

    const handleSelectAll = () => {
        if (selectedCoins.size === holdings.length) setSelectedCoins(new Set());
        else setSelectedCoins(new Set(holdings.map(h => h.coin)));
    };

    const value = {
        initialGains,
        postHarvestGains,
        holdings,
        selectedCoins,
        loading,
        initialTotal,
        toggleSelect,
        handleSelectAll
    };

    return <TaxContext.Provider value={value}>{children}</TaxContext.Provider>;
};

export const useTax = () => useContext(TaxContext);