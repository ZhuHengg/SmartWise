import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function MapView() {
  return (
    <Card className="border-gray-200">
      <CardContent className="p-0">
        <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          {/* Placeholder for map - will be replaced with actual map integration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <p className="text-slate-600 font-medium">Interactive Map View</p>
              <p className="text-sm text-slate-500">Live bus tracking will appear here</p>
            </div>
          </div>

          {/* Mock route line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 200 Q 200 100, 350 200 T 650 200"
              stroke="#2563eb"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Mock bus icon */}
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
