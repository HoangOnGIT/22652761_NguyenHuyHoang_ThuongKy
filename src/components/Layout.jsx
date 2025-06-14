import React from 'react';
import { Carousel } from 'antd';
import TopBar from './TopBar';
import Banner from './Banner';
import UniversityHeader from './Header';
import image1 from '../../public/bannerImg/image1.jpg';
import image2 from '../../public/bannerImg/image2.jpg';
import NewsPortal from './NewsPortal';
import CampusShowcase from './CampusWithRealImage';
import CampusReview from './CampusReview';
import InfoSection from './InfoSection';
import bannerNew from "../../public/bannerNews.jpg";

function Layout() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-4/5">
                <TopBar />
                <Banner />
                {/* Header Section */}
                <UniversityHeader />

                {/* Banner Section */}
                <Carousel autoplay>
                    <div>
                        <img src={image1} alt="Banner 1" className="w-full h-96 object-cover" />
                    </div>
                    <div>
                        <img src={image2} alt="Banner 2" className="w-full h-96 object-cover" />
                    </div>
                    <div>
                        <img src={image2} alt="Banner 3" className="w-full h-96 object-cover" />
                    </div>
                </Carousel>

                {/* Content Layout - Navigation and News Portal side by side */}
                <div className="flex mt-4 gap-4">
                    {/* Navigation Bar */}
                    <nav className="bg-[#d7dfe2] text-white shadow-md w-1/5 ring-2 ring-blue-700 flex-shrink-0">
                        <h3 className="bg-blue-800 text-center py-2 font-bold">CƠ CẤU TỔ CHỨC</h3>
                        <ul className="space-y-2 p-4">
                            <li className="flex justify-between items-center px-4 py-2 border-b border-blue-700 text-blue-700 hover:text-red-500">
                                <span>LÃNH ĐẠO</span>
                                <span className="font-bold">&gt;</span>
                            </li>
                            <li className="flex justify-between items-center px-4 py-2 border-b border-blue-700 text-blue-700 hover:text-red-500">
                                <span>CÁC PHÒNG BAN</span>
                                <span className="font-bold">&gt;</span>
                            </li>
                            <li className="flex justify-between items-center px-4 py-2 border-b border-blue-700 text-blue-700 hover:text-red-500">
                                <span>CÁC KHOA</span>
                                <span className="font-bold">&gt;</span>
                            </li>
                            <li className="flex justify-between items-center px-4 py-2 border-b border-blue-700 text-blue-700 hover:text-red-500">
                                <span>CÁC VIỆN</span>
                                <span className="font-bold">&gt;</span>
                            </li>
                            <li className="flex justify-between items-center px-4 py-2 border-b border-blue-700 text-blue-700 hover:text-red-500">
                                <span>CÁC TRUNG TÂM</span>
                                <span className="font-bold">&gt;</span>
                            </li>
                            <li className="flex justify-between items-center px-4 py-2 border-b border-blue-700 text-blue-700 hover:text-red-500">
                                <span>CÁC PHÂN HIỆU</span>
                                <span className="font-bold">&gt;</span>
                            </li>
                            <li className="flex justify-between items-center px-4 py-2 border-b border-blue-700 text-blue-700 hover:text-red-500">
                                <span>ĐOÀN THỂ</span>
                                <span className="font-bold">&gt;</span>
                            </li>
                        </ul>
                    </nav>

                    {/* News Portal - taking the remaining width */}
                    <div className="w-4/5">
                        <NewsPortal />
                    </div>
                </div>
                
                {/* Campus Review Section */}
                <div className='Review mt-6'>
                    <CampusReview bannerImage={bannerNew} />
                </div>
                
                {/* Info Section */}
                <div className="mt-6">
                    <InfoSection />
                </div>

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
