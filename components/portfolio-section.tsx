"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Filter } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "SecureBank AI Trust System",
    description: "Revolutionary AI-powered banking security system that uses ethical AI to detect fraud while maintaining customer privacy. Implemented advanced machine learning algorithms with Nigerian banking compliance.",
    image: "/images/project-1.jpg",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
    category: "FinTech",
    industry: "Banking",
    status: "Completed",
    link: "#",
    github: "#",
    metrics: {
      users: "500K+",
      accuracy: "99.7%",
      savings: "$2.3M"
    }
  },
  {
    id: 2,
    title: "HealthAI Diagnostic Assistant",
    description: "AI-powered medical diagnostic assistant that helps healthcare professionals in Nigeria make informed decisions while ensuring patient data privacy and ethical AI practices.",
    image: "/images/project-2.jpg",
    technologies: ["Python", "PyTorch", "React", "FastAPI", "MongoDB"],
    category: "Healthcare",
    industry: "Medical",
    status: "Completed",
    link: "#",
    github: "#",
    metrics: {
      accuracy: "94.2%",
      patients: "10K+",
      timeSaved: "60%"
    }
  },
  {
    id: 3,
    title: "EduAI Learning Platform",
    description: "Personalized learning platform using AI to adapt educational content for Nigerian students, incorporating local context and cultural relevance while maintaining academic standards.",
    image: "/images/project-3.jpg",
    technologies: ["Next.js", "Python", "OpenAI", "Supabase", "Tailwind"],
    category: "Education",
    industry: "EdTech",
    status: "In Progress",
    link: "#",
    github: "#",
    metrics: {
      students: "25K+",
      engagement: "+300%",
      completion: "87%"
    }
  },
  {
    id: 4,
    title: "B3 Bartering Network",
    description: "Decentralized bartering platform connecting African businesses through our proprietary B3 technology, enabling value exchange without traditional currency barriers.",
    image: "/images/project-4.jpg",
    technologies: ["Solidity", "React", "Node.js", "IPFS", "Web3"],
    category: "Blockchain",
    industry: "Commerce",
    status: "Completed",
    link: "#",
    github: "#",
    metrics: {
      transactions: "15K+",
      value: "$1.2M",
      users: "8K+"
    }
  },
  {
    id: 5,
    title: "AgriTech Yield Predictor",
    description: "AI system that predicts crop yields for Nigerian farmers using satellite imagery, weather data, and local farming practices to optimize agricultural productivity.",
    image: "/images/project-5.jpg",
    technologies: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL"],
    category: "Agriculture",
    industry: "AgriTech",
    status: "Completed",
    link: "#",
    github: "#",
    metrics: {
      accuracy: "91.5%",
      farmers: "5K+",
      yield: "+25%"
    }
  },
  {
    id: 6,
    title: "SmartCity Traffic AI",
    description: "Intelligent traffic management system for Lagos using computer vision and predictive AI to optimize traffic flow and reduce congestion in major Nigerian cities.",
    image: "/images/project-6.jpg",
    technologies: ["Python", "OpenCV", "React", "Node.js", "Redis"],
    category: "Smart City",
    industry: "Transportation",
    status: "In Progress",
    link: "#",
    github: "#",
    metrics: {
      reduction: "35%",
      coverage: "500km",
      efficiency: "+40%"
    }
  }
]

const categories = ["All", "FinTech", "Healthcare", "Education", "Blockchain", "Agriculture", "Smart City"]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;80&quot; height=&quot;80&quot; viewBox=&quot;0 0 80 80&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.02&quot;%3E%3Ccircle cx=&quot;40&quot; cy=&quot;40&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Eye className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Innovative <span className="text-purple-400">Solutions</span> in Action
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our portfolio of transformative AI projects that are shaping the future of technology across Africa
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`glass border-white/20 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-500/20 text-purple-300 border-purple-400/50'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass border-white/20 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className={`${
                    project.status === 'Completed'
                      ? 'bg-green-500/20 text-green-300 border-green-400/30'
                      : 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
                  }`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs">
                      {project.industry}
                    </Badge>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="glass p-2 rounded">
                      <div className="text-blue-400 font-bold text-sm">{value}</div>
                      <div className="text-slate-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/30">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                  <Button size="sm" variant="outline" className="glass border-white/20 text-slate-300 hover:bg-white/10">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6">
              Let's discuss how we can leverage ethical AI to transform your business and create innovative solutions.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}