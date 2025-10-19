import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapView } from "@/components/map-view"
import { BusCard } from "@/components/bus-card"
import { RouteProgress } from "@/components/route-progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const routeData = {
  route: "AB",
  bus: { name: "Bus A", plate: "VAD 3121", driver: "Mr. Ahmad", occupancy: 65 },
  stops: [
    { name: "UM Central", eta: "Now", crowd: 20, predOcc: 65, delay: 0, status: "reached" },
    { name: "KK7", eta: "4:30 PM", crowd: 30, predOcc: 72, delay: 2, status: "reached" },
    { name: "KK10", eta: "4:35 PM", crowd: 60, predOcc: 74, delay: 3, status: "current" },
    { name: "API", eta: "4:40 PM", crowd: 45, predOcc: 78, delay: 5, status: "upcoming" },
    { name: "KK11", eta: "4:45 PM", crowd: 35, predOcc: 80, delay: 10, status: "upcoming" },
  ],
}

export default function BusStopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6 max-w-7xl">
        {/* Map Section */}
        <div className="mb-6">
          <MapView />
        </div>

        {/* Route Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Select Route</label>
          <Select defaultValue="AB">
            <SelectTrigger className="w-full md:w-64 bg-white">
              <SelectValue placeholder="Select a route" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="AB">Route AB</SelectItem>
              <SelectItem value="BA">Route BA</SelectItem>
              <SelectItem value="C">Route C</SelectItem>
              <SelectItem value="D">Route D</SelectItem>
              <SelectItem value="E">Route E</SelectItem>
              <SelectItem value="13">Route 13</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bus Info Card */}
        <div className="mb-6">
          <BusCard bus={routeData.bus} />
        </div>

        {/* Route Progress */}
        <div className="mb-6">
          <RouteProgress stops={routeData.stops} />
        </div>

        {/* Stop List Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Stop Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">ETA</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Crowd</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Predicted Occupancy</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Delay (min)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {routeData.stops.map((stop, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-slate-800 font-medium">{stop.name}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">{stop.eta}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">{stop.crowd}</td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          stop.predOcc < 70
                            ? "bg-green-100 text-green-800"
                            : stop.predOcc < 80
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {stop.predOcc}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {stop.delay > 0 ? `+${stop.delay}` : stop.delay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
