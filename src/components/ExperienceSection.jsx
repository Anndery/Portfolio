// src/components/ExperienceSection.jsx
import React from 'react'

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Boston Consulting Group',
    // description: 'Empowering enterprises to unlock siloed data and build differentiated AI faster through real-time labeling, intelligent data orchestration, and scalable data pipelines.',
    location: 'Boston, Massachusetts',
    dates: 'Apr 2024 – Present',
    bullets: [
      'Architected and led the development of a large-scale AI-driven decision intelligence platform using .NET Core, Node.js, and Python, designing a microservices-based system that processes high-throughput enterprise datasets and exposes low-latency APIs consumed by internal analytics tools and client-facing dashboards, ensuring scalability through containerization with Docker and orchestration using Kubernetes',
      'Designed and implemented complex data acquisition pipelines using Python, Apache Kafka, and AWS services (S3, Lambda, RDS), enabling ingestion of structured and unstructured data from third-party APIs, web scraping systems, and internal data sources, while building robust data validation, transformation, and enrichment layers to support downstream machine learning workflows',
      'Engineered event-driven architectures using Kafka and asynchronous messaging patterns, enabling real-time stream processing and decoupled communication between distributed services, significantly improving system resilience and throughput under concurrent workloads',
      'Developed high-performance RESTful and GraphQL APIs using ASP.NET Core and Node.js, incorporating Redis caching, query optimization, and connection pooling strategies to handle high request volumes with minimal latency',
      'Integrated machine learning models into production-grade systems using TensorFlow and PyTorch, building scalable inference services and model-serving APIs, while implementing versioning, monitoring, and fallback mechanisms to ensure reliability in production environments',
      'Designed scalable microservices architecture with clear domain boundaries using Domain-Driven Design principles, enabling independent deployment and horizontal scaling of services across cloud environments',
      'Optimized database performance across PostgreSQL and SQL Server by implementing advanced indexing strategies, query refactoring, and read/write separation patterns, reducing query execution time for large datasets',
      'Built sophisticated frontend applications using React, Next.js, and TypeScript, implementing advanced state management, real-time data updates via WebSockets, and performance optimizations such as lazy loading and memoization',
      'Developed CI/CD pipelines using GitHub Actions, Docker, and Kubernetes, automating build, test, and deployment processes while ensuring zero-downtime deployments and consistent environment configurations',
      'Implemented secure authentication and authorization mechanisms using OAuth2, JWT, and RBAC, ensuring compliance with enterprise-grade security standards',
      'Implemented secure authentication and authorization mechanisms using OAuth2, JWT, and RBAC, ensuring compliance with enterprise-grade security standards',
      'Enhanced observability by integrating structured logging (Serilog), distributed tracing, and monitoring tools, enabling proactive identification of performance bottlenecks and system failures',
      'Reduced latency in critical data processing paths by implementing parallel processing, asynchronous execution, and efficient data structures within high-throughput pipelines',
      'Built reusable internal SDKs and shared service libraries to standardize communication patterns and accelerate development across multiple teams',
      'Collaborated with data scientists and product stakeholders to translate complex business requirements into scalable AI-powered solutions',
      'Implemented fault tolerance mechanisms including retries, circuit breakers, and graceful degradation strategies to ensure high system availability',
      'Developed real-time analytics dashboards using React and WebSockets to visualize streaming data and key system metrics',
      'Mentored engineers on distributed systems, system design, and best practices, contributing to team technical excellence',
      'Led migration initiatives from monolithic architectures to microservices-based systems, improving scalability and maintainability',
      'Conducted deep performance profiling and optimization across backend services, significantly improving throughput and system efficiency',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Galena',
    // description: 'Streetlives builds AI-powered platforms to connect underserved communities with critical social services through intelligent automation and conversational interfaces.',
    location: 'Sao Paulo, Sao Paulo',
    dates: 'Aug 2021 – Mar 2024',
    bullets: [
      'Architected and delivered enterprise-grade full-stack platforms using .NET Core, ASP.NET Core, React, and TypeScript,designing microservices-based systems with clearly defined service boundaries, implementing business logic layers and API contracts, and deploying containerized services using Docker to ensure scalability, maintainability, and consistent environments across development and production',
      'Designed and implemented backend services using ASP.NET Core and Entity Framework Core, building high-throughput RESTful APIs with advanced validation, middleware pipelines, and exception handling mechanisms, while optimizing performance through asynchronous programming patterns and efficient database interaction strategies',
      'Developed AI-powered modules using Python, Scikit-learn, and Pandas, training and deploying predictive models, exposing inference endpoints via REST APIs, and integrating model outputs into .NET and Node.js services to enable intelligent automation and decision-making workflows within production applications',
      'Engineered robust data acquisition frameworks using Node.js, Python, and message brokers such as RabbitMQ, building pipelines that ingest high-frequency data from third-party APIs and IoT devices, implementing buffering, batching, retry logic, and schema validation to ensure data consistency and fault tolerance',
      'Optimized backend performance by implementing Redis-based caching strategies, connection pooling, and query optimization techniques in PostgreSQL, significantly improving response times for data-intensive endpoints under concurrent user load',
      'Built scalable frontend applications using React, Next.js, and TypeScript, designing reusable component architectures, implementing state management with Redux Toolkit, and optimizing rendering performance through memoization, lazy loading, and efficient component lifecycle management',
      'Leveraged AWS cloud services including EC2, S3, and RDS to design and deploy scalable infrastructure, configuring auto-scaling groups, storage layers, and managed databases to support high-availability production systems',
      'Implemented event-driven architectures using RabbitMQ and asynchronous messaging patterns, enabling decoupled communication between microservices and improving system resilience and scalability under peak workloads',
      'Improved database performance in PostgreSQL by redesigning schemas, implementing indexing strategies, and optimizing complex queries, reducing execution time for large datasets and improving overall system throughput',
      'Automated build and deployment workflows using Docker, GitHub Actions, and CI/CD pipelines, ensuring consistent builds, automated testing, and reliable deployment processes across multiple environments',
      'Designed and implemented secure authentication and authorization mechanisms using JWT and OAuth2, incorporating role-based access control and secure token handling to protect application endpoints',
      'Built comprehensive logging and monitoring systems using structured logging frameworks and centralized logging pipelines, enabling real-time visibility into system behavior and faster issue resolution',
      'Reduced latency in data processing pipelines by implementing parallel execution models and efficient data transformation techniques using Python and Node.js',
      'Collaborated closely with product managers and designers to translate business requirements into scalable technical solutions, ensuring alignment between system architecture and user needs',
      'Developed reusable backend modules and shared services using .NET Core and Node.js, improving development efficiency and consistency across multiple projects',
      'Implemented real-time communication features using WebSockets and Node.js, enabling live updates and notifications for end users',
      'Conducted load testing and performance benchmarking using realistic traffic scenarios, identifying bottlenecks and optimizing system components to meet scalability requirements',
      'Mentored junior engineers on full-stack development, distributed systems, and best practices, contributing to team knowledge sharing and technical growth',
      'Contributed to architectural decisions including service decomposition, data flow design, and infrastructure planning, ensuring long-term scalability and maintainability',
      'Participated in code reviews and enforced coding standards, improving overall code quality and maintainability across the codebase',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Universidade Federal de Minas Gerais',
    // description: 'Office of Academic Program Review and Assessment (OAPRA) ensures academic program quality and regulatory compliance by reviewing and approving new programs in alignment with Middle States accreditation.',
    location: 'Belo Horizonte, Minas Gerais',
    dates: 'Feb 2019 – Jun 2021',
    bullets: [
      'Developed backend systems using .NET Core and ASP.NET Core, designing modular and maintainable services that expose RESTful APIs, implementing middleware pipelines, validation layers, and structured error handling to support reliable webbased platforms',
      'Built data acquisition tools using C#, Python, and Node.js to capture user interactions and system metrics, designing pipelines that perform data collection, transformation, and storage, ensuring data consistency and readiness for analytics',
      'Designed and implemented RESTful APIs with ASP.NET Core, incorporating routing, model binding, and validation, while optimizing request handling through asynchronous programming and efficient resource utilization',
      'Modeled and optimized relational databases in SQL Server, designing normalized schemas, implementing indexing strategies, and tuning queries to improve performance for transactional and analytical workloads',
      'Developed frontend components using React and modern JavaScript, implementing dynamic UI elements, responsive layouts, and efficient rendering techniques to enhance user experience',
      'Integrated third-party APIs using HTTP clients and SDKs, handling authentication, rate limiting, and error scenarios to extend platform functionality',
      'Implemented asynchronous job processing systems using background workers and task queues, enabling efficient handling of long-running operations and improving overall system responsiveness',
      'Identified and resolved performance bottlenecks through profiling tools and code analysis, optimizing CPU and memory usage across backend services',
      'Built authentication and authorization systems using JWT and secure token-based mechanisms, ensuring proper access control and protection of sensitive endpoints',
      'Implemented logging frameworks using structured logging approaches, capturing detailed application metrics and supporting debugging and monitoring workflows',
      'Participated in system design discussions, contributing to architectural improvements and scalability considerations for growing applications',
      'Developed data processing workflows using Python and C#, transforming raw data into structured formats suitable for storage and analysis',
      'Implemented caching strategies using Redis to reduce database load and improve API response times for frequently accessed data',
      'Wrote comprehensive unit and integration tests using xUnit and other testing frameworks, ensuring code reliability and maintainability',
      'Collaborated with cross-functional teams including designers and product managers to deliver features aligned with business goals',
      'Maintained and refactored legacy systems, improving code structure, readability, and scalability',
      'Diagnosed and resolved production issues using logging, monitoring, and debugging tools, ensuring minimal downtime',
      'Developed reusable components and utilities to standardize development patterns and reduce duplication',
      'Supported deployment processes using CI/CD pipelines and environment configuration tools',
      'Documented system architecture, APIs, and technical decisions to support knowledge sharing and onboarding'
    ],
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-12">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line - lighter gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-300 via-purple-300 to-purple-400 hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className="relative pl-0 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-blue-300 to-purple-300 md:hidden"></div>
              <div className="absolute left-[-6px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-4 border-white shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:border-purple-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="text-[22px] font-bold text-[#343F56] mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-[18px] font-semibold text-purple-700 mb-2">
                      {exp.company}
                    </p>
                    {exp.description && (
                      <p className="text-[13px] text-gray-600 italic leading-relaxed mb-3 border-l-2 border-gray-300 pl-3">
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <div className="md:text-right flex-shrink-0">
                    <p className="text-[14px] font-medium text-gray-700">
                      {exp.dates}
                    </p>
                    <p className="text-[14px] text-gray-600 flex items-center md:justify-end gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 text-[15px] text-[#343F56] leading-relaxed">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold flex-shrink-0 mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
