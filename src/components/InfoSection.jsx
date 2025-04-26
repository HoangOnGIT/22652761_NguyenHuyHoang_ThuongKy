import React from 'react';

function InfoSection() {
  return (
    <div className="bg-white mt-4">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* LIÊN HỆ */}
        <div className="border-r border-gray-200">
          <div className="bg-blue-700 text-white font-bold p-2 text-center">
            LIÊN HỆ
          </div>
          <div className="p-3 text-sm">
            <p className="font-bold">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4,</p>
            <p>Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
            <p>Điện thoại: 028 38940 390 - 100</p>
            <p>Tuyển sinh: 028 3895 1932 - 028 3895 8958 -</p>
            <p>028 3895 1917</p>
            <p>Email: <a href="mailto:dhcn@iuh.edu.vn" className="text-blue-600">dhcn@iuh.edu.vn</a></p>
          </div>
        </div>

        {/* HOẠT ĐỘNG KHÁC */}
        <div className="border-r border-gray-200">
          <div className="bg-blue-700 text-white font-bold p-2 text-center">
            HOẠT ĐỘNG KHÁC
          </div>
          <div className="p-3 text-sm">
            <ul>
              <li className="mb-1">Hoạt động phục vụ cộng đồng</li>
              <li className="mb-1">Sinh viên tình nguyện</li>
              <li className="mb-1">CLB/Đội/Nhóm sinh viên</li>
              <li className="mb-1">Kết nối doanh nghiệp</li>
            </ul>
          </div>
        </div>

        {/* THÔNG TIN MỞ RỘNG */}
        <div className="border-r border-gray-200">
          <div className="bg-blue-700 text-white font-bold p-2 text-center">
            THÔNG TIN MỞ RỘNG
          </div>
          <div className="p-3 text-sm">
            <ul>
              <li className="mb-1">Báo chí viết về IUH</li>
              <li className="mb-1">Khám phá IUH</li>
              <li className="mb-1">Kỹ năng mềm</li>
              <li className="mb-1">Bổ sung lập</li>
            </ul>
          </div>
        </div>

        {/* VĂN BẢN TIỆN ÍCH */}
        <div>
          <div className="bg-blue-700 text-white font-bold p-2 text-center">
            VĂN BẢN TIỆN ÍCH
          </div>
          <div className="p-3 text-sm">
            <ul>
              <li className="mb-1">Quy chế-Quy định-Quy trình</li>
              <li className="mb-1">Báo công khai</li>
              <li className="mb-1">Biểu mẫu đào tạo</li>
              <li className="mb-1">Quản lý khoa học</li>
              <li className="mb-1">Dịch vụ sinh viên</li>
              <li className="mb-1">Phản hồi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
