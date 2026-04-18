import React, { useState, useEffect, useMemo, use } from 'react';
import { fetchHoldings, fetchGains } from '../services/api';
import TaxCard from '../components/dashboard/TaxCard';
import Navbar from '../components/shared/Navbar';
import Holdings from '../components/ui/Holdings';
import Header from '../components/dashboard/Header';
import Skeleton from '../components/dashboard/Skeleton';
import { useTax } from '../hooks/TaxContext';

const TaxHarvesting = () => {
    const { loading, initialGains, postHarvestGains, initialTotal } = useTax();

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


                <Holdings />
            </main>
        </div>
    );
};

export default TaxHarvesting;