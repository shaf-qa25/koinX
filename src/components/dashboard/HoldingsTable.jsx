import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, ArrowUpDown } from 'lucide-react';

const HoldingsTable = ({ holdings, selectedIds, onSelect, onSelectAll, limit }) => {
    const isAllSelected = holdings.length > 0 && selectedIds.size === holdings.length;
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });


    const sortedHoldings = useMemo(() => {
        let sortableItems = [...holdings];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                let aValue, bValue;

                if (sortConfig.key === 'stcg') {
                    aValue = a.stcg.gain;
                    bValue = b.stcg.gain;
                } else if (sortConfig.key === 'ltcg') {
                    aValue = a.ltcg.gain;
                    bValue = b.ltcg.gain;
                } else {
                    aValue = a[sortConfig.key];
                    bValue = b[sortConfig.key];
                }

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableItems;
    }, [holdings, sortConfig]);
    const displayHoldings = limit ? sortedHoldings.slice(0, limit) : sortedHoldings;

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };


    const getSortIcon = (key) => {
        if (sortConfig.key !== key) return <ArrowUpDown size={14} className="opacity-30" />;
        return sortConfig.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                    <tr>
                        <th className="p-4 text-left">
                            <input
                                type="checkbox"
                                checked={isAllSelected}
                                onChange={onSelectAll}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                        </th>
                        <th className="p-4 text-left font-semibold cursor-pointer hover:bg-gray-100" onClick={() => requestSort('coinName')}>
                            <div className="flex items-center gap-1">Asset {getSortIcon('coinName')}</div>
                        </th>
                        <th className="p-4 text-right font-semibold cursor-pointer hover:bg-gray-100" onClick={() => requestSort('totalHolding')}>
                            <div className="flex items-center justify-end gap-1">Holdings {getSortIcon('totalHolding')}</div>
                        </th>
                        <th className="p-4 text-right font-semibold cursor-pointer hover:bg-gray-100" onClick={() => requestSort('stcg')}>
                            <div className="flex items-center justify-end gap-1">Short-term {getSortIcon('stcg')}</div>
                        </th>
                        <th className="p-4 text-right font-semibold cursor-pointer hover:bg-gray-100" onClick={() => requestSort('ltcg')}>
                            <div className="flex items-center justify-end gap-1">Long-term {getSortIcon('ltcg')}</div>
                        </th>
                        <th className="p-4 text-right font-semibold">Amount to Sell</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {displayHoldings.map((coin) => (
                        <tr key={coin.coin} className={`hover:bg-gray-50 transition-colors ${selectedIds.has(coin.coin) ? 'bg-blue-50/50' : ''}`}>
                            <td className="p-4 text-left">
                                <input
                                    type="checkbox"
                                    checked={selectedIds.has(coin.coin)}
                                    onChange={() => onSelect(coin.coin)}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <img src={coin.logo} alt={coin.coin} className="w-8 h-8 rounded-full shadow-sm" />
                                    <div>
                                        <div className="font-bold text-gray-900">{coin.coinName}</div>
                                        <div className="text-xs text-gray-500">{coin.coin}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 text-right">
                                <div className="text-sm font-medium">{coin.totalHolding.toFixed(4)} {coin.coin}</div>
                                <div className="text-xs text-gray-400">Avg. $ {coin.averageBuyPrice.toFixed(2)}</div>
                            </td>
                            <td className="p-4 text-right">
                                <div className={`text-sm font-medium ${coin.stcg.gain < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                    {coin.stcg.gain < 0 ? '-' : '+'} $ {Math.abs(coin.stcg.gain).toFixed(2)}
                                </div>
                            </td>
                            <td className="p-4 text-right">
                                <div className={`text-sm font-medium ${coin.ltcg.gain < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                    {coin.ltcg.gain < 0 ? '-' : '+'} $ {Math.abs(coin.ltcg.gain).toFixed(2)}
                                </div>
                            </td>
                            <td className="p-4 text-right text-gray-400 text-sm">
                                {selectedIds.has(coin.coin) ? `${coin.totalHolding.toFixed(4)} ${coin.coin}` : '-'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HoldingsTable;