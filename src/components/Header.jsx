import { useState } from "react"
import { Dropdown, Input } from "antd"
import { HomeOutlined, SearchOutlined, DownOutlined } from "@ant-design/icons"

export default function UniversityHeader() {
  const [searchValue, setSearchValue] = useState("")

  // Dropdown menu items for each navigation category
  const getMenuItems = (category) => {
    // Example submenu items - you can customize these
    return [
      { key: "1", label: `${category} Option 1` },
      { key: "2", label: `${category} Option 2` },
      { key: "3", label: `${category} Option 3` },
    ]
  }

  const navItems = [
    { key: "intro", label: "GIỚI THIỆU", items: getMenuItems("GIỚI THIỆU") },
    { key: "training", label: "ĐÀO TẠO", items: getMenuItems("ĐÀO TẠO") },
    { key: "admissions", label: "TUYỂN SINH", items: getMenuItems("TUYỂN SINH") },
    { key: "research", label: "NGHIÊN CỨU", items: getMenuItems("NGHIÊN CỨU") },
    { key: "students", label: "SINH VIÊN", items: getMenuItems("SINH VIÊN") },
    { key: "lecturers", label: "GIẢNG VIÊN", items: getMenuItems("GIẢNG VIÊN") },
    { key: "degrees", label: "VĂN BẰNG", items: getMenuItems("VĂN BẰNG") },
  ]

  return (
    <header className="w-full bg-slate-300 text-slate-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            <a href="/" className="text-slate-800 hover:text-slate-600">
              <HomeOutlined className="text-lg" />
            </a>

            {navItems.map((item) => (
              <Dropdown key={item.key} menu={{ items: item.items }} placement="bottomLeft">
                <button className="font-medium text-sm hover:text-slate-600 flex items-center">
                  {item.label}
                  <DownOutlined className="ml-1 text-xs" />
                </button>
              </Dropdown>
            ))}
          </div>

          <div className="relative">
            <Input
              placeholder="Tìm kiếm"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              suffix={<SearchOutlined />}
              className="w-40 h-8 rounded"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
