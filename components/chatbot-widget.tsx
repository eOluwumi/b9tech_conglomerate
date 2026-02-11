"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! I'm B9Bot, your AI assistant. How can I help you learn more about B9TECH's ethical AI solutions today?",
    sender: 'bot',
    timestamp: new Date()
  }
]

const quickReplies = [
  "Tell me about your AI services",
  "What is B3 technology?",
  "How do you ensure ethical AI?",
  "Contact information",
  "Portfolio examples"
]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      const botResponse = getBotResponse(text)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000) // Random delay between 1-3 seconds
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes('ai services') || input.includes('services')) {
      return "B9TECH specializes in ethical AI solutions including healthcare diagnostics, financial security systems, educational platforms, and smart city technologies. All our AI systems prioritize human values and African context."
    }

    if (input.includes('b3') || input.includes('bartering')) {
      return "B3 (Barter, Build, Benefit) is our proprietary technology that enables decentralized value exchange. It allows African businesses to trade goods and services without traditional currency barriers, fostering economic growth and community building."
    }

    if (input.includes('ethical') || input.includes('ethics')) {
      return "Ethical AI is at our core. We ensure all our systems prioritize privacy, fairness, transparency, and human benefit. Our Nigerian-led team brings unique perspectives to global AI ethics standards."
    }

    if (input.includes('contact') || input.includes('reach')) {
      return "You can reach us through our contact form on the website, or email us at hello@b9tech.africa. We're also active on LinkedIn and Twitter. Would you like me to help you navigate to the contact section?"
    }

    if (input.includes('portfolio') || input.includes('projects') || input.includes('work')) {
      return "We've worked on exciting projects including AI healthcare systems, secure banking platforms, educational AI, and smart city solutions. Check out our portfolio section to see detailed case studies and metrics."
    }

    return "That's an interesting question! I'd be happy to help you learn more about B9TECH. Could you tell me more about what you're interested in? We specialize in ethical AI, B3 bartering technology, and innovative solutions for African businesses."
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 glass border-white/20 shadow-2xl flex flex-col">
        <CardHeader className="pb-3 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <CardTitle className="text-white text-sm">B9Bot</CardTitle>
                <p className="text-slate-400 text-xs">AI Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-4 overflow-hidden flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 mb-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'glass border-white/20 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {message.sender === 'bot' ? (
                      <Bot className="h-3 w-3 text-blue-400" />
                    ) : (
                      <User className="h-3 w-3" />
                    )}
                    <span className="text-xs opacity-70">
                      {message.sender === 'bot' ? 'B9Bot' : 'You'}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="glass border-white/20 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bot className="h-3 w-3 text-blue-400" />
                    <span className="text-xs text-slate-400">B9Bot is typing...</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="mb-3">
              <p className="text-xs text-slate-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs glass border-white/20 text-slate-300 hover:bg-white/10 h-7"
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="Type your message..."
              className="flex-1 glass border-white/20 text-white placeholder-slate-400 focus:ring-blue-400"
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
