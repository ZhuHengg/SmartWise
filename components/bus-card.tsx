import { Card, CardContent } from "@/components/ui/card"
import { Bus, User } from "lucide-react"

type BusCardProps = {
  bus: {
    name: string
    plate: string
    driver: string
    occupancy: number
  }
}

export function BusCard({ bus }: BusCardProps) {
  const getOccupancyColor = (occupancy: number) => {
    if (occupancy < 70) return "bg-green-500"
    if (occupancy < 80) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getOccupancyText = (occupancy: number) => {
    if (occupancy < 70) return "Low"
    if (occupancy < 80) return "Medium"
    return "High"
  }

  return (
    <Card className="border-gray-200">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Bus className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">{bus.name}</h3>
              <p className="text-sm text-slate-600">Plate: {bus.plate}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-slate-600" />
              <span className="text-sm text-slate-600">{bus.driver}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-slate-600">Occupancy</p>
                <p className="text-lg font-semibold text-slate-800">{bus.occupancy}%</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className={`w-3 h-3 rounded-full ${getOccupancyColor(bus.occupancy)}`} />
                <span className="text-xs text-slate-600">{getOccupancyText(bus.occupancy)}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
