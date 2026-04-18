import React, { useState, useEffect, useMemo } from 'react';
import { fetchHoldings, fetchGains } from '../services/api';
import TaxCard from '../components/dashboard/TaxCard';
import Navbar from '../components/shared/Navbar';
import Holdings from '../components/ui/Holdings';
import Header from '../components/dashboard/Header';
import Skeleton from '../components/dashboard/Skeleton';

const TaxHarvesting = () => {
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

    const postHarvestGains = useMemo(() => {
        if (!initialGains) return null;

        let updatedGains = {
            stcg: { ...initialGains.stcg },
            ltcg: { ...initialGains.ltcg }
        };

        selectedCoins.forEach(coinId => {
            const coin = holdings.find(h => h.coin === coinId);
            if (coin) {
                if (coin.stcg.gain > 0) {
                    updatedGains.stcg.profits += coin.stcg.gain;
                } else {
                    updatedGains.stcg.losses += Math.abs(coin.stcg.gain);
                }

                if (coin.ltcg.gain > 0) {
                    updatedGains.ltcg.profits += coin.ltcg.gain;
                } else {
                    updatedGains.ltcg.losses += Math.abs(coin.ltcg.gain);
                }
            }
        });

        return updatedGains;
    }, [selectedCoins, initialGains, holdings]);

    const toggleSelect = (id) => {
        const next = new Set(selectedCoins);
        next.has(id) ? next.delete(id) : next.add(id);
        setSelectedCoins(next);
    };

    const initialTotal = useMemo(() => {
        if (!initialGains) return 0;
        return (initialGains.stcg.profits - initialGains.stcg.losses) +
            (initialGains.ltcg.profits - initialGains.ltcg.losses);
    }, [initialGains]);


    const handleSelectAll = () => {

        if (selectedCoins.size === holdings.length) {
            setSelectedCoins(new Set());
        } else {
            const allIds = holdings.map(h => h.coin);
            setSelectedCoins(new Set(allIds));
        }
    };

    if (loading) {
        return (
            <div className="bg-gray-50 min-h-screen">
                <Navbar />
                <main className="max-w-7xl mx-auto p-4 md:p-8">
                    <Skeleton />
                </main>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <main className="max-w-7xl mx-auto p-4 md:p-8">
                <Header />

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <TaxCard
                        title="Pre-harvesting"
                        data={initialGains}
                        type="pre"
                    />


                    <TaxCard
                        title="After-harvesting"
                        data={postHarvestGains}
                        type="post"
                        preTotal={initialTotal}
                    />
                </div>


                <Holdings
                    holdings={holdings}
                    selectedCoins={selectedCoins}
                    toggleSelect={toggleSelect}
                    handleSelectAll={handleSelectAll}
                />
            </main>
        </div>
    );
};

export default TaxHarvesting;