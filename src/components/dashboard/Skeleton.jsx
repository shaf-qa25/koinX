import React from 'react';

const Skeleton = () => {
    return (
        <div className="animate-pulse">
            {/* Title Skeleton */}
            <div className="h-8 w-64 bg-gray-400 rounded-md mb-8"></div>

            {/* Cards Skeleton */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="h-44 bg-gray-400 rounded-2xl shadow-sm"></div>
                <div className="h-44 bg-gray-400 rounded-2xl shadow-sm"></div>
            </div>

            {/* Table Skeleton */}
            <div className="bg-white rounded-2xl border border-gray-500 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-gray-400">
                    <div className="h-6 w-32 bg-gray-500 rounded"></div>
                </div>
                <div className="p-4 space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4 border-b border-gray-200 pb-4 last:border-0">
                            <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-1/4 bg-gray-500 rounded"></div>
                                <div className="h-3 w-1/6 bg-gray-400 rounded"></div>
                            </div>
                            <div className="h-4 w-20 bg-gray-500 rounded"></div>
                            <div className="h-4 w-20 bg-gray-500 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skeleton;