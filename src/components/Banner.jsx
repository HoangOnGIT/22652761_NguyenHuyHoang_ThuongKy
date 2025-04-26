import React from 'react';

function Banner() {
  return (
    <div className="bg-blue-100 text-center py-4">
      <div className="flex items-center justify-center space-x-4">
        <img src="logo.png" alt="Logo" className="h-16" />
        <div>
          <h1 className="text-xl font-bold text-blue-900">
            BỘ CÔNG THƯƠNG
          </h1>
          <h2 className="text-lg font-bold text-blue-900">
            ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
          </h2>
          <p className="text-sm text-red-600">
            Đổi mới tư duy, làm giàu thêm tri thức - đổi sống
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
