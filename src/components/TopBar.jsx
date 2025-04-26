import React from 'react';

function TopBar() {
  return (
    <div className="bg-blue-900 text-white text-sm flex justify-between items-center px-4 py-2">
      <div className="flex space-x-4">
        <a href="#eoffice" className="hover:underline">E-OFFICE</a>
        <a href="#email" className="hover:underline">EMAIL</a>
        <a href="#library" className="hover:underline">THƯ VIỆN - THÔNG TIN</a>
      </div>
      <div className="flex space-x-4 items-center">
        <a href="#connect" className="hover:underline">KẾT NỐI</a>
        <a href="#contact" className="hover:underline">LIÊN HỆ</a>
        <div className="flex space-x-2">
          <img src="vietnam-flag.png" alt="Vietnamese" className="h-4" />
          <img src="uk-flag.png" alt="English" className="h-4" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
