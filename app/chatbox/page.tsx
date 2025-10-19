"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "ai"
  timestamp: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm RideWise AI Assistant. How can I help you with campus bus information today?",
    sender: "ai",
    timestamp: "4:20 PM",
  },
]

export default function ChatboxPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
    }

    const aiResponse: Message = {
      id: messages.length + 2,
      text: "I understand your question. Based on current data, Route AB is running on schedule with 65% occupancy. The next bus will arrive at UM Central in 5 minutes.",
      sender: "ai",
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
    }

    setMessages([...messages, userMessage, aiResponse])
    setInput("")
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl flex flex-col">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">AI Chatbox</h1>

        {/* Chat Container */}
        <div className="flex-1 bg-white rounded-lg border border-gray-200 flex flex-col overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-slate-800"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <p
                    className={`text-xs text-slate-500 mt-1 ${message.sender === "user" ? "text-right" : "text-left"}`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about bus schedules, routes, or delays..."
                className="flex-1"
              />
              <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
