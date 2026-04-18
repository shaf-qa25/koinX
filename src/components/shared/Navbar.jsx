import React from 'react';

const Navbar = () => (
    <nav className="border-b bg-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <img src="assets/logo.png" alt="" />
        </div>
        {/* <div className="flex gap-6 text-sm font-medium text-gray-600">
            <span className="cursor-pointer hover:text-blue-600">Crypto Taxes</span>
            <span className="cursor-pointer hover:text-blue-600">Free Tools</span>
            <span className="cursor-pointer hover:text-blue-600">Features</span>
        </div> */}
    </nav>
);

export default Navbar;