// src/components/AboutSection.jsx
import { useState } from 'react'
import FunFactsModal from './FunFacts'

export default function AboutSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="about" className="py-12 px-8 max-w-[1440px] mx-auto">
      {/* Section title */}
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-8">
        About Me
      </h2>

      {/* Two-column grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Who I Am card */}
            <div className="
            flex-1
            bg-white/70 backdrop-blur-sm
            border border-gray-200/60
            rounded-2xl
            shadow-md
            p-8
            text-[#343F56]
            space-y-4
            transition-all
            duration-300
            ease-out
            hover:shadow-xl
            hover:border-purple-300
        ">
          <h3 className="text-[24px] font-semibold text-purple-700 text-center">
            Who I Am
          </h3>
          <div className="space-y-4 text-[16px] leading-relaxed">
            <p>
              Senior Full-Stack & AI Engineer with 7+ years of experience building high-performance, distributed systems and production-ready AI applications.
            </p>
            <p>
              I design and deliver end-to-end platforms across backend, frontend, and cloud infrastructure. My work focuses on scalable architectures, real-time data pipelines, and integrating machine learning models into reliable, low-latency systems used in production.           
            </p>
            <p>
              I enjoy working at the intersection of engineering and product. Turning complex requirements into clear, scalable systems—and making AI practical and usable—is where I do my best work.            
            </p>
            <p>
              Outside of work, I’m driven by curiosity. I explore side projects, experiment with new technologies, and bring that same problem-solving mindset into teams tackling high-impact challenges.            
            </p>
          </div>
        </div>

        {/* What I'm Good At card */}
        <div className="
            flex-1
            bg-white/70 backdrop-blur-sm
            border border-gray-200/60
            rounded-2xl
            shadow-md
            p-8
            text-[#343F56]
            space-y-4
            transition-all
            duration-300
            ease-out
            hover:shadow-xl
            hover:border-purple-300
          ">
          <h3 className="text-[24px] font-semibold text-purple-700 text-center">
            What I'm Good At
          </h3>
          <div className="space-y-3 text-[16px] leading-relaxed">
            <p>
              <span className="font-semibold">AI & Production Systems:</span>{' '}
                I build and deploy AI-powered systems in production, not just prototypes. Experience with ML model integration, inference services, and data pipelines that support real-world decision-making at scale.            
            </p>
            <p>
              <span className="font-semibold">Full-Stack Development:</span>{' '}
                I develop end-to-end applications using React, Next.js, and TypeScript on the frontend, with .NET, Node.js, and Python on the backend. I focus on performance, scalability, and clean architecture.           
            </p>
            <p>
              <span className="font-semibold">Distributed Systems & Architecture:</span>{' '}
                Strong expertise in microservices, event-driven systems, and high-throughput architectures using Kafka, RabbitMQ, and asynchronous processing patterns.             
            </p>
            <p>
              <span className="font-semibold">Cloud & Infrastructure:</span>{' '}
                Experienced with AWS, Docker, Kubernetes, and cloud-native design. I build scalable, resilient systems with proper observability, CI/CD pipelines, and infrastructure best practices.             
            </p>
            <p>
              <span className="font-semibold">Data Engineering & Pipelines:</span>{' '}
                I design robust data acquisition and processing systems, including streaming and batch pipelines, ETL workflows, and large-scale data ingestion from multiple sources.  
            </p>
            <p>
              <span className="font-semibold">Performance & Scalability:</span>{' '}
                I optimize systems for low latency and high throughput using caching, parallel processing, efficient database design, and profiling techniques.     
            </p>
            <p>
              <span className="font-semibold">Security & Reliability:</span>{' '}
                I implement secure authentication (OAuth2, JWT, RBAC) and design fault-tolerant systems with retries, circuit breakers, and graceful degradation.
            </p>
            <p>
              <span className="font-semibold">Product & Collaboration:</span>{' '}
                I work closely with product and data teams to translate business needs into scalable technical solutions, while mentoring engineers and contributing to strong engineering culture.
            </p>
          </div>
        </div>
      </div>

      {/* Fun Facts button */}
      {/* <div className="flex justify-center mt-12">
        <button
          onClick={() => setOpen(true)}
          aria-label="View fun facts about Anndery"
          className="
            px-8 py-3
            bg-gradient-to-r from-purple-300 to-blue-300
            border-2 border-transparent
            rounded-full
            text-white
            text-[18px]
            font-semibold
            tracking-wide
            shadow-md
            transition-all
            duration-200
            ease-out
            hover:from-purple-400 hover:to-blue-400
            hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
          "
        >
          Fun Facts
        </button>
      </div> */}

      {/* Modal pop-up */}
      <FunFactsModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
