import { Card, Typography, Button } from "antd"
import { PlayCircleFilled } from "@ant-design/icons"

const { Title } = Typography

const CampusShowcase = () => {
  return (
    <div className="bg-blue-800 p-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <Card
          className="border-0 rounded-none overflow-hidden"
          headStyle={{
            backgroundColor: "#003d99",
            color: "white",
            fontWeight: "bold",
            padding: "8px 16px",
            fontSize: "16px",
            border: "none",
          }}
          bodyStyle={{ padding: 0 }}
          title="PHÂN HIỆU QUẢNG NGÃI"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AMu82UVeYhtsv4U1VG99XtezXszGkT.png"
              alt="Quảng Ngãi Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>

        <Card
          className="border-0 rounded-none overflow-hidden"
          headStyle={{
            backgroundColor: "#003d99",
            color: "white",
            fontWeight: "bold",
            padding: "8px 16px",
            fontSize: "16px",
            border: "none",
          }}
          bodyStyle={{ padding: 0 }}
          title="CƠ SỞ THANH HÓA"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AMu82UVeYhtsv4U1VG99XtezXszGkT.png"
              alt="Thanh Hóa Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>

        <Card
          className="border-0 rounded-none overflow-hidden"
          headStyle={{
            backgroundColor: "#003d99",
            color: "white",
            fontWeight: "bold",
            padding: "8px 16px",
            fontSize: "16px",
            border: "none",
          }}
          bodyStyle={{ padding: 0 }}
          title={
            <div className="flex justify-between items-center">
              <span>VIDEO VÀ HÌNH ẢNH</span>
              <Button type="text" size="small" className="text-white hover:text-gray-200 p-0 m-0">
                xem tất cả
              </Button>
            </div>
          }
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AMu82UVeYhtsv4U1VG99XtezXszGkT.png"
              alt="Videos and Images"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircleFilled className="text-white text-5xl opacity-80" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CampusShowcase
