"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Ethical AI in African Healthcare",
    excerpt: "Exploring how B9TECH's AI systems are revolutionizing medical diagnostics while maintaining the highest standards of patient privacy and ethical considerations.",
    author: "Dr. Amara Nwosu",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Healthcare AI",
    tags: ["Ethics", "Healthcare", "Africa"],
    featured: true,
    image: "/images/blog-1.jpg"
  },
  {
    id: 2,
    title: "B3 Technology: Redefining Value Exchange",
    excerpt: "How our proprietary bartering technology is creating new economic opportunities for African businesses and communities through decentralized value exchange.",
    author: "Emeka Okafor",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Innovation",
    tags: ["Blockchain", "Economy", "B3"],
    featured: false,
    image: "/images/blog-2.jpg"
  },
  {
    id: 3,
    title: "AI Ethics: Nigerian Perspectives on Global Standards",
    excerpt: "A comprehensive look at how Nigerian AI developers are shaping global ethical standards and ensuring AI serves humanity's best interests.",
    author: "Ngozi Adebayo",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "AI Ethics",
    tags: ["Ethics", "Standards", "Global"],
    featured: true,
    image: "/images/blog-3.jpg"
  },
  {
    id: 4,
    title: "Sustainable AI: Balancing Innovation and Environmental Impact",
    excerpt: "Examining the environmental footprint of AI systems and how B9TECH is developing energy-efficient solutions for African markets.",
    author: "Dr. Michael Chen",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Sustainability",
    tags: ["Environment", "Efficiency", "Innovation"],
    featured: false,
    image: "/images/blog-4.jpg"
  },
  {
    id: 5,
    title: "The Rise of AI in Nigerian Education",
    excerpt: "How personalized AI learning platforms are transforming education accessibility and quality across Nigeria's diverse educational landscape.",
    author: "Sarah Johnson",
    date: "2024-12-20",
    readTime: "9 min read",
    category: "Education",
    tags: ["Education", "Personalization", "Africa"],
    featured: false,
    image: "/images/blog-5.jpg"
  },
  {
    id: 6,
    title: "Cybersecurity in the Age of AI: African Solutions",
    excerpt: "Exploring innovative AI-powered cybersecurity approaches developed by African tech companies to protect digital infrastructure.",
    author: "David Rodriguez",
    date: "2024-12-15",
    readTime: "11 min read",
    category: "Security",
    tags: ["Cybersecurity", "AI", "Protection"],
    featured: true,
    image: "/images/blog-6.jpg"
  }
]

export function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3)

  return (
    <section id="blog" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.01&quot;%3E%3Ccircle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-4 w-4 text-green-400" />
            <span className="text-green-300 font-medium">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Thoughts on <span className="text-green-400">AI & Innovation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay informed with our latest articles on ethical AI, technological innovation, and the future of technology in Africa
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="glass border-white/20 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500">
                <div className="relative h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-green-300 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-slate-400 text-sm">{post.author}</span>
                    </div>
                    <Button variant="ghost" className="text-green-400 hover:text-green-300 p-0">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Recent Posts</h3>
            <Button variant="outline" className="glass border-white/20 text-slate-300 hover:bg-white/10">
              View All Articles
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="glass border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-0">
                      Read <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-6">
              Get our weekly newsletter with the latest insights on AI ethics, tech trends, and innovations from Africa.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}