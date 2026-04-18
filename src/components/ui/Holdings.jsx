import React, { useState } from 'react'
import HoldingsTable from '../dashboard/HoldingsTable'

const Holdings = ({ holdings, selectedCoins, toggleSelect, handleSelectAll }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 font-bold text-lg">Holdings</div>
            <HoldingsTable
                holdings={holdings}
                selectedIds={selectedCoins}
                onSelect={toggleSelect}
                onSelectAll={handleSelectAll}
                limit={isExpanded ? undefined : 4}
            />
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 text-sm font-semibold hover:underline"
                >
                    {isExpanded ? 'Show Less' : 'View all'}
                </button>
            </div>
        </div>
    )
}

export default Holdings
