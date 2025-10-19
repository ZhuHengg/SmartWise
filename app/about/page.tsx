import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">About RideWise</h1>

        <Card className="border-gray-200 mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              RideWise is a smart campus mobility assistant designed to help students at the University of Malaya track
              campus bus locations, occupancy levels, and estimated arrival times in real-time. Our goal is to reduce
              waiting times, improve campus mobility, and enhance the overall student experience.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By leveraging real-time data and AI-powered predictions, RideWise provides students with accurate
              information to make informed decisions about their campus transportation, ultimately creating a more
              efficient and stress-free commuting experience.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Key Features</h2>
            <ul className="space-y-2 text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Real-time bus location tracking with interactive maps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Live occupancy monitoring and crowd predictions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Accurate ETA calculations for all bus stops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>AI-powered insights and route optimization recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Interactive chatbot for instant bus information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Student feedback system for continuous improvement</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Team Momocow</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              RideWise is developed by Team Momocow, a group of dedicated students from the University of Malaya
              committed to improving campus life through innovative technology solutions.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🐮</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800">University of Malaya</p>
                <p className="text-sm text-slate-600">Faculty of Computer Science & Information Technology</p>
              </div>
            </div>
            <p className="text-sm text-slate-500">© 2025 RideWise | Team Momocow. All rights reserved.</p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
