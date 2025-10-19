import { Check, Circle } from "lucide-react"

type Stop = {
  name: string
  eta: string
  status: "reached" | "current" | "upcoming"
}

type RouteProgressProps = {
  stops: Stop[]
}

export function RouteProgress({ stops }: RouteProgressProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Route Progress</h3>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200" />
        <div
          className="absolute top-5 left-0 h-0.5 bg-blue-600 transition-all duration-500"
          style={{ width: `${(stops.filter((s) => s.status === "reached").length / stops.length) * 100}%` }}
        />

        {/* Stops */}
        <div className="relative flex justify-between">
          {stops.map((stop, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  stop.status === "reached"
                    ? "bg-blue-600 border-blue-600"
                    : stop.status === "current"
                      ? "bg-yellow-500 border-yellow-500"
                      : "bg-white border-gray-300"
                }`}
              >
                {stop.status === "reached" ? (
                  <Check className="h-5 w-5 text-white" />
                ) : (
                  <Circle className={`h-5 w-5 ${stop.status === "current" ? "text-white" : "text-gray-400"}`} />
                )}
              </div>

              {/* Stop Info */}
              <div className="text-center">
                <p className={`text-sm font-medium ${stop.status === "current" ? "text-blue-600" : "text-slate-700"}`}>
                  {stop.name}
                </p>
                <p className="text-xs text-slate-500">{stop.eta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
