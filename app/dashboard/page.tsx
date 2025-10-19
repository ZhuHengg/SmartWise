"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { OccupancyChart } from "@/components/occupancy-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const routes = ["AB", "BA", "C", "D", "E", "13"]

export default function DashboardPage() {
  const [selectedRoute, setSelectedRoute] = useState("AB")

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6 max-w-7xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Dashboard</h1>

        <Tabs value={selectedRoute} onValueChange={setSelectedRoute} className="mb-6">
          <TabsList className="bg-white border border-gray-200">
            {routes.map((route) => (
              <TabsTrigger
                key={route}
                value={route}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Route {route}
              </TabsTrigger>
            ))}
          </TabsList>

          {routes.map((route) => (
            <TabsContent key={route} value={route} className="space-y-6">
              {/* Occupancy Chart */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">Occupancy Over Time - Route {route}</CardTitle>
                  <CardDescription>Real-time bus occupancy tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <OccupancyChart route={route} />
                </CardContent>
              </Card>

              {/* AI Insights */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">AI Insights</CardTitle>
                  <CardDescription>Automated analysis of route performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-800">Peak Hours:</strong> Route {route} experiences highest
                      occupancy between 4:00 PM - 5:30 PM with an average of 78% capacity.
                    </p>
                    <p>
                      <strong className="text-slate-800">Delay Pattern:</strong> Average delay of 5 minutes detected at
                      KK10 stop during peak hours, likely due to traffic congestion.
                    </p>
                    <p>
                      <strong className="text-slate-800">Crowd Prediction:</strong> Expected 85% occupancy tomorrow at
                      4:15 PM based on historical patterns.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* AI Recommendations */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-slate-800">AI Recommendations</CardTitle>
                  <CardDescription>Suggested actions for route optimization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Deploy an additional bus during 4:00 PM - 5:30 PM to reduce overcrowding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Adjust departure time by 3 minutes earlier to compensate for traffic delays at KK10</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Send push notifications to students when occupancy exceeds 75% to manage expectations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Consider alternative route through KK8 during peak hours to avoid congestion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
