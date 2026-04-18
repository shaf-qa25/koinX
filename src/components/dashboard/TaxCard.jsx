import React from 'react';
import { cn } from '../../utils/cn';

const TaxCard = ({ title, data, type = "pre", preTotal = 0 }) => {
    const isPost = type === "post";

    const currFormatter = (val) => {
        const absVal = Math.abs(val).toLocaleString('en-US');
        return val < 0 ? `- $ ${absVal}` : `$ ${absVal}`;
    };

    const netSTCG = data.stcg.profits - data.stcg.losses;
    const netLTCG = data.ltcg.profits - data.ltcg.losses;
    const totalGains = netSTCG + netLTCG;

    return (
        <div className={cn(
            "p-6 rounded-xl transition-all duration-300 min-h-[300px] flex flex-col justify-between",
            isPost ? "bg-[#0052FE] text-white" : "bg-white text-[#0F1629] border border-gray-200"
        )}>

            <h3 className="text-lg font-bold mb-6">{title}</h3>

            <div className="grid grid-cols-3 gap-2 text-sm mb-6">
                <div></div>
                <div className="text-right opacity-80">Short-term</div>
                <div className="text-right opacity-80">Long-term</div>

                {/* profit row */}
                <div className="opacity-80">Profits</div>
                <div className="text-right font-medium">{currFormatter(data.stcg.profits)}</div>
                <div className="text-right font-medium">{currFormatter(data.ltcg.profits)}</div>

                {/* Losses Row */}
                <div className="opacity-80">Losses</div>
                <div className="text-right font-medium">{currFormatter(-data.stcg.losses)}</div>
                <div className="text-right font-medium">{currFormatter(-data.ltcg.losses)}</div>

                {/* Net Row */}
                <div className="opacity-80">Net Capital Gains</div>
                <div className="text-right font-medium">{currFormatter(netSTCG)}</div>
                <div className="text-right font-medium">{currFormatter(netLTCG)}</div>
            </div>

            {/* Footer Area */}
            <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">
                        {isPost ? "Effective Capital Gains:" : "Realised Capital Gains:"}
                    </span>
                    <span className="text-2xl font-bold">{currFormatter(totalGains)}</span>
                </div>

                {isPost && preTotal > totalGains && (
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium bg-white/20 p-2 rounded-lg border border-white/30 animate-pulse">
                        <span>🎉</span>
                        <span>You are going to save upto $ {(preTotal - totalGains).toLocaleString('en-US')}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaxCard;