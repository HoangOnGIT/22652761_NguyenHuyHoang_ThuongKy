import bannerNew from "../../public/bannerNews.jpg";

export default function NewsPortal() {
  return (
    <div className="p-4">
      {/* Top sections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Announcements Section */}
        <div className="shadow-sm">
          <div className="flex justify-between items-center p-2 border-b border-red-600">
            <h2 className="font-bold text-black">THÔNG BÁO</h2>
            <a href="#" className="text-xs text-black flex items-center bg-gray-200 px-2 py-1 rounded hover:bg-blue-700 hover:text-white">
              xem tất cả →
            </a>
          </div>
          <div className="p-3">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-start">
                  <span className="text-yellow-600 mr-2">▶</span>
                  <div>
                    <p className="text-sm hover:text-blue-600">
                      Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025
                    </p>
                    <p className="text-xs text-gray-500">24-04-2025 <span className="bg-red-600 text-white text-xs px-1 rounded ml-1">NEW</span></p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start">
                  <span className="text-yellow-600 mr-2">▶</span>
                  <div>
                    <p className="text-sm hover:text-blue-600">
                      Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội
                    </p>
                    <p className="text-xs text-gray-500">
                      21-04-2025 <span className="bg-red-600 text-white text-xs px-1 rounded ml-1">NEW</span>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Admissions Section */}
        <div className="shadow-sm">
          <div className="flex justify-between items-center p-2 border-b border-red-600">
            <h2 className="font-bold text-black">TUYỂN SINH</h2>
            <a href="#" className="text-xs text-black flex items-center bg-gray-200 px-2 py-1 rounded hover:bg-blue-700 hover:text-white">
              xem tất cả →
            </a>
          </div>
          <div className="p-3">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-start">
                  <span className="text-yellow-600 mr-2">▶</span>
                  <div>
                    <p className="text-sm hover:text-blue-600">
                      Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình...
                    </p>
                    <p className="text-xs text-gray-500">30-03-2025</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start">
                  <span className="text-yellow-600 mr-2">▶</span>
                  <div>
                    <p className="text-sm hover:text-blue-600">
                      Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025
                    </p>
                    <p className="text-xs text-gray-500">30-03-2025</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom sections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* News & Events Section */}
        <div className="shadow-sm">
          <div className="flex justify-between items-center p-2 border-b border-red-600">
            <h2 className="font-bold text-black">TIN TỨC - SỰ KIỆN</h2>
            <a href="#" className="text-xs text-black flex items-center bg-gray-200 px-2 py-1 rounded hover:bg-blue-700 hover:text-white">
              xem tất cả →
            </a>
          </div>
          <div className="p-3">
            <div className="mb-4">
              <img
                src={bannerNew
                }
                alt="News event"
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-start">
                  <span className="text-yellow-600 mr-2">▶</span>
                  <div>
                    <p className="text-sm hover:text-blue-600">
                      AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp...
                    </p>
                    <p className="text-xs text-gray-500">
                      22-04-2025 <span className="bg-red-600 text-white text-xs px-1 rounded">NEW</span>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start">
                  <span className="text-yellow-600 mr-2">▶</span>
                  <div>
                    <p className="text-sm hover:text-blue-600">
                      Hội nghị khoa học quốc tế BÁCH BẢN 2 tại ĐH - Sức mạnh AI trong...
                    </p>
                    <p className="text-xs text-gray-500">
                      22-04-2025 <span className="bg-red-600 text-white text-xs px-1 rounded">NEW</span>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* International Cooperation Section */}
        <div className="shadow-sm">
          <div className="flex justify-between items-center p-2 border-b border-red-600">
            <h2 className="font-bold text-black">HỢP TÁC QUỐC TẾ</h2>
            <a href="#" className="text-xs text-black flex items-center bg-gray-200 px-2 py-1 rounded hover:bg-blue-700 hover:text-white">
              xem tất cả →
            </a>
          </div>
          <div className="p-3">
            <div className="mb-4">
              <img
                src={bannerNew}
                alt="International cooperation"
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-start">
                  <span className="text-yellow-600 mr-2">▶</span>
                  <div>
                    <p className="text-sm hover:text-blue-600">
                      Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc...
                    </p>
                    <p className="text-xs text-gray-500">27-03-2025</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start">
                  <span className="text-yellow-600 mr-2">▶</span>
                  <div>
                    <p className="text-sm hover:text-blue-600">
                      Sinh viên ĐH tham gia dự án Green Edu Seeds của quỹ Erasmus
                    </p>
                    <p className="text-xs text-gray-500">15-03-2025</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
