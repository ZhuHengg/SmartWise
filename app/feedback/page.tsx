import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeedbackForm } from "@/components/feedback-form"

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6 max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Feedback</h1>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Help us improve RideWise by sharing your experience with campus bus services.
        </p>

        <FeedbackForm />
      </main>

      <Footer />
    </div>
  )
}
