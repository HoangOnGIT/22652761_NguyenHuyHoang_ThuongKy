import React from 'react';

function Layout() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-screen-lg w-full">
        {/* Header Section */}
        <header className="bg-blue-900 text-white p-4 flex items-center">
          <div className="logo mr-4">
            <img src="logo.png" alt="Logo" className="h-12" />
          </div>
          <div className="header-info">
            <h1 className="text-xl font-bold">Industrial University of Ho Chi Minh City</h1>
            <p className="text-sm">Đổi mới tư duy, làm giàu thêm tri thức - đổi sống</p>
          </div>
        </header>

        {/* Navigation Bar */}
        <nav className="bg-blue-700 text-white shadow-md">
          <ul className="flex justify-around p-4 space-x-4">
            <li>
              <a 
                href="#about" 
                className="hover:underline hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a 
                href="#training" 
                className="hover:underline hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Đào tạo
              </a>
            </li>
            <li>
              <a 
                href="#admissions" 
                className="hover:underline hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Tuyển sinh
              </a>
            </li>
            <li>
              <a 
                href="#research" 
                className="hover:underline hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Nghiên cứu
              </a>
            </li>
            <li>
              <a 
                href="#students" 
                className="hover:underline hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Sinh viên
              </a>
            </li>
            <li>
              <a 
                href="#faculty" 
                className="hover:underline hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Giảng viên
              </a>
            </li>
          </ul>
        </nav>

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
        <footer className="bg-blue-900 text-white text-center p-4 mt-6">
          <p>© 2023 Industrial University of Ho Chi Minh City</p>
          <p>Contact: 028 3895 1932</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
