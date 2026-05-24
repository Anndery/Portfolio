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
              I design and deliver end-to-end platforms across frontend, backend, mobile, and cloud infrastructure. On the frontend, I work extensively with React, Next.js, and TypeScript to build scalable, high-performance user interfaces. On the backend, I use .NET, Node.js, and Python to develop robust APIs, microservices, and data-driven systems.           
            </p>
            <p>
              My work includes designing distributed architectures using microservices and event-driven patterns, leveraging technologies like Kafka and RabbitMQ for high-throughput, asynchronous processing. I build and deploy cloud-native systems on AWS using Docker and Kubernetes, with strong emphasis on observability, CI/CD, and resilient infrastructure.            
            </p>
            <p>
              I specialize in integrating machine learning models into production environments—building inference services, real-time pipelines, and AI-powered applications that deliver measurable business impact. I also design AI automation systems and intelligent workflows, incorporating LLMs and orchestration tools to streamline operations and enhance decision-making.            
            </p>
            <p>
              In addition, I develop mobile applications with a focus on performance, usability, and seamless backend integration, ensuring consistency across platforms.            
            </p>
            <p>
              I prioritize performance, scalability, and reliability—applying best practices such as caching strategies, efficient database design, parallel processing, and fault-tolerant patterns like retries and circuit breakers. I also implement secure authentication and authorization systems using OAuth2, JWT, and RBAC.            
            </p>
            <p>
              I enjoy working at the intersection of engineering and product—translating complex business requirements into scalable, maintainable systems, mentoring engineers, and contributing to strong, outcome-driven engineering cultures.
            </p>
            <p>
              Outside of work, I’m driven by curiosity. I explore side projects, experiment with emerging technologies, and continuously refine my approach to building impactful, real-world systems.
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
              <span className="font-semibold">AI Automation & Intelligent Workflows:</span>{' '}
                I design and implement AI-driven automation systems that streamline business processes, reduce manual effort, and improve operational efficiency. This includes building intelligent agents, workflow orchestration, and integrating LLMs into production-grade applications.            
            </p>
            <p>
              <span className="font-semibold">Full-Stack Development:</span>{' '}
                I develop end-to-end applications using React, Next.js, and TypeScript on the frontend, with .NET, Node.js, and Python on the backend. I focus on performance, scalability, and clean architecture.           
            </p>
            <p>
              <span className="font-semibold">Mobile Development:</span>{' '}
                I build cross-platform and native mobile applications with a focus on performance, usability, and seamless integration with backend services. I ensure responsive design, efficient state management, and production-ready deployment.           
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
