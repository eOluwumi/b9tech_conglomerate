"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    company: "TechStart Inc.",
    content: "B9TECH's ethical AI approach transformed our data security. Their AI-powered trust systems gave our users confidence in our platform. The Nigerian innovation was exactly what we needed.",
    rating: 5,
    avatar: "/images/avatar-1.jpg",
    industry: "FinTech"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Head of AI Ethics",
    company: "Global Health Initiative",
    content: "Working with B9TECH on our AI healthcare project was exceptional. Their commitment to ethical AI development ensured our medical AI systems prioritize patient privacy and safety above all.",
    rating: 5,
    avatar: "/images/avatar-2.jpg",
    industry: "Healthcare"
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "CEO, African Innovations",
    company: "African Innovations",
    content: "As a fellow Nigerian entrepreneur, I was impressed by B9TECH's B3 platform. Their bartering technology is revolutionizing how we think about value exchange in our communities.",
    rating: 5,
    avatar: "/images/avatar-3.jpg",
    industry: "Community Tech"
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "VP of Engineering",
    company: "EduTech Solutions",
    content: "B9TECH delivered exactly what we promised our stakeholders: AI that serves humanity. Their educational AI platform increased student engagement by 300% while maintaining ethical standards.",
    rating: 5,
    avatar: "/images/avatar-4.jpg",
    industry: "Education"
  },
  {
    id: 5,
    name: "Ngozi Adebayo",
    role: "Director of Digital Transformation",
    company: "Nigerian Banking Group",
    content: "The secure AI systems from B9TECH helped us modernize our banking infrastructure while ensuring compliance with international standards. Their local expertise was invaluable.",
    rating: 5,
    avatar: "/images/avatar-5.jpg",
    industry: "Banking"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Quote className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Trusted by <span className="text-blue-400">Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how B9TECH's ethical AI solutions have transformed businesses across Africa and beyond
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass border-white/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-blue-400 mx-auto mb-6 animate-float" />
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-400">{testimonials[currentIndex].role}</p>
                    <p className="text-slate-400 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                    {testimonials[currentIndex].industry}
                  </Badge>
                  <div className="flex">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 glass border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 glass border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-slate-400 text-sm">Happy Clients</div>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
            <div className="text-slate-400 text-sm">Satisfaction Rate</div>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-slate-400 text-sm">Support Available</div>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">5★</div>
            <div className="text-slate-400 text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}