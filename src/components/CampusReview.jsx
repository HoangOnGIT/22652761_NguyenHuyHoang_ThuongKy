import React from 'react';

function CampusReview({ bannerImage }) {
  return (
    <div className="bg-white shadow">
      <div className="grid grid-cols-3 gap-4">
        <div className="campus-section">
          <div className="bg-blue-700 text-white font-bold p-2 text-center">
            PHÂN HIỆU QUẢNG NGÃI
          </div>
          <div className="p-2">
            <img 
              src={bannerImage} 
              alt="Phân Hiệu Quảng Ngãi" 
              className="w-full h-32 object-cover"
            />
          </div>
        </div>
        
        <div className="campus-section">
          <div className="bg-blue-700 text-white font-bold p-2 text-center">
            CƠ SỞ THANH HÓA
          </div>
          <div className="p-2">
            <img 
              src={bannerImage}  
              alt="Cơ Sở Thanh Hóa" 
              className="w-full h-32 object-cover"
            />
          </div>
        </div>
        
        <div className="campus-section">
          <div className="bg-blue-700 text-white font-bold p-2 text-center">
            VIDEO VÀ HÌNH ẢNH
          </div>
          <div className="p-2">
            <div className="relative">
              <img 
                src={bannerImage} 
                alt="Video và Hình Ảnh" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-50 rounded-full p-2">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusReview;
