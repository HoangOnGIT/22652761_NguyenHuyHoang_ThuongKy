import React from 'react';
import TopBar from './TopBar';
import Banner from './Banner';
import UniversityHeader from './Header';

function Layout() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5">
        <TopBar />
        <Banner />
        {/* Header Section */}
       <UniversityHeader />

    

        {/* Main Content */}
        <main className="p-6">
          <section className="banner bg-gray-100 p-6 text-center">
            <h2 className="text-2xl font-semibold">Chào mừng kỷ niệm 50 năm ngày giải phóng miền Nam</h2>
            <p className="text-lg">Hòa bình - Phát triển</p>
          </section>
          <section className="content flex justify-between mt-6">
            <div className="news w-1/2 pr-4">
              <h3 className="text-xl font-bold mb-2">Thông báo</h3>
              <ul className="list-disc pl-6">
                <li>Thông báo về kế hoạch nghỉ hè...</li>
                <li>Thông báo tuyển sinh...</li>
              </ul>
            </div>
            <div className="events w-1/2 pl-4">
              <h3 className="text-xl font-bold mb-2">Tin tức - Sự kiện</h3>
              <p>AVEA tài trợ gói phần mềm trị giá...</p>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-200 text-gray-700 text-center p-4 mt-6">
          <div className="flex justify-between items-center text-sm">
            <div>
              <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
              <p>
                Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.
              </p>
            </div>
            <div>
              <p>Số lượt truy cập: 288,935,354</p>
              <p>Hôm nay: 21,708 | Đang xem: 69</p>
            </div>
            <div className="flex space-x-2">
              <a href="#" className="hover:opacity-75">
                <img src="/path/to/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75">
                <img src="/path/to/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-75">
                <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
