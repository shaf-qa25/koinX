import React from 'react'
import { Tooltip } from 'react-tooltip'

const Header = () => {
    return (
        <>
            <div className="flex items-center gap-2 mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Tax Harvesting</h1>
                <span
                    data-tooltip-id="harvest-helper"
                    data-tooltip-content="Tax-loss harvesting involves selling assets at a loss to offset capital gains tax, reducing your total tax payout."
                    className="text-blue-600 text-sm underline cursor-pointer decoration-dotted underline-offset-4"
                >
                    How it works?
                </span>


                <Tooltip
                    id="harvest-helper"
                    place="top"
                    style={{ backgroundColor: "#111827", borderRadius: "8px", width: "250px", fontSize: "12px", zIndex: 100 }}
                />
            </div>


            <div className="bg-[#EBF2FF] border border-blue-100 p-4 rounded-lg mb-8 text-sm text-gray-700">
                <p className="font-semibold text-blue-800 mb-1"> Important Notes & Disclaimers</p>
                <ul className="list-disc ml-5 space-y-1 opacity-80">
                    <li>Tax-loss harvesting is currently not allowed under certain regulations. Consult your advisor.</li>
                    <li>Only realized losses are considered for harvesting.</li>
                </ul>
            </div>
        </>
    )
}

export default Header
