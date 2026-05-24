// src/components/SkillsSection.jsx
import { useState, useRef, useEffect } from 'react'

const skills = [
  "AI/ML & Data Science",
  "Web & App Development",
  "Data Visualization",
  "Programming Languages",
  "Cloud & DevOps",
  "Tools & Platforms",
]

const techStacks = {
  "AI/ML & Data Science": [
    "TensorFlow", "PyTorch", "Keras", "scikit-learn",
    "Pandas", "NumPy",
    "LLMs (GPT, LLaMA, BERT, M2M, MBart)",
    "RAG (Retrieval-Augmented Generation)",
    "Prompt Engineering & LLM Optimization",
    "LangChain & LLM Orchestration",
    "AI Agents & Workflow Automation",
    "Model Serving & Inference Systems",
    "Feature Engineering & ML Pipelines",
    "Explainable AI (SHAP)",
    "NLP (SpaCy, NLTK)",
    "Computer Vision (OpenCV, Attention-based CNNs)",
    "AWS SageMaker"
  ],

  "Web & App Development": [
    "React", "Next.js", "Redux",
    "Angular", "Vue.js",
    "TypeScript", "JavaScript",
    "HTML5", "CSS3",
    "Node.js (Express)",
    "Python (FastAPI, Django, Flask)",
    ".NET (C#)",
    "RESTful APIs & GraphQL",
    "Authentication (JWT, OAuth2)",
    "Mobile Development (React Native / Flutter)",
    "Performance Optimization & Scalable UI"
  ],

  "Data Visualization": [
    "D3.js", "Chart.js", "Recharts",
    "Tableau (Cloud & Desktop)",
    "Power BI",
    "Matplotlib", "Seaborn",
    "Real-Time Dashboards",
    "Data Storytelling & UX",
    "Figma (Prototyping & Wireframing)"
  ],

  "Programming Languages": [
    "Python", "TypeScript", "JavaScript",
    "C# (.NET)", "Java",
    "C++", "C",
    "SQL", "R",
    "Scala", "Kotlin"
  ],

  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda, RDS, ECS, Bedrock, SageMaker)",
    "Azure",
    "Docker", "Kubernetes",
    "CI/CD (GitHub Actions, Jenkins)",
    "Terraform (Infrastructure as Code)",
    "Serverless Architecture",
    "Observability (Logging, Monitoring, Tracing)",
    "Temporal (Workflow Orchestration)"
  ],

  "Data Engineering & Distributed Systems": [
    "Apache Kafka", "RabbitMQ",
    "Event-Driven Architecture",
    "Microservices Architecture",
    "Distributed Systems Design",
    "Streaming & Batch Processing",
    "Apache Spark",
    "Hadoop Ecosystem",
    "ETL Pipelines & Data Ingestion",
    "High-Throughput System Design",
    "Caching (Redis)",
    "Fault Tolerance (Retries, Circuit Breakers)"
  ],

  "Tools & Platforms": [
    "Git", "GitHub",
    "VS Code", "PyCharm",
    "Jupyter Notebooks", "Google Colab",
    "Linux/Unix", "Windows",
    "Figma",
    "Jira", "Slack",
    "Agile & Scrum Methodologies"
  ]
}

const pillColors = [
  "#D1C2F6",  // purple
  "#FFC6E0",  // pink
  "#BEE7FB",  // light blue
  "#C6F7E2",  // mint green
  "#FFD6BA",  // peach
  "#FFFACD",  // pale yellow
]

export default function SkillsSection() {
  const [hovered, setHovered] = useState(null)
  const [popupTop, setPopupTop] = useState(0)
  const popupRef = useRef(null)

  // Auto-scroll effect when hovering
  useEffect(() => {
    const el = popupRef.current
    if (!hovered || !el) return

    let frameId
    let pos = 0
    const maxScroll = el.scrollWidth - el.clientWidth
    const speed = 0.5

    function step() {
      pos = pos >= maxScroll ? 0 : pos + speed
      el.scrollLeft = pos
      frameId = requestAnimationFrame(step)
    }
    frameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(frameId)
      el.scrollLeft = 0
    }
  }, [hovered])

  return (
    <section id="skills" className="py-12 px-8 max-w-[1440px] mx-auto">
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-8">
        Skills
      </h2>

      <div className="relative">
        {/* Auto-scrolling popup */}
        {hovered && (
          <div
            ref={popupRef}
            onMouseLeave={() => setHovered(null)}
            style={{ top: popupTop }}
            className="
              absolute left-0 right-0 z-20 mb-8
              bg-white/95 border border-gray-200/60
              rounded-2xl shadow-xl
              h-[120px] overflow-x-auto whitespace-nowrap
              flex items-center space-x-6 px-6
            "
          >
            {techStacks[hovered].map((tag, i) => {
                const hex = pillColors[i % pillColors.length];
                return (
                  <span
                    key={tag}
                    style={{ backgroundColor: `${hex}33`, borderColor: hex }}
                    className="
                      inline-block border-2 rounded-full
                      px-6 py-2
                      text-[#343F56] text-[16px] font-bold
                      shadow-md transform transition-all duration-200 ease-out
                      hover:scale-105
                    "
                  >
                    {tag}
                  </span>
                );
              })}
          </div>
        )}

        {/* The six-tile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skills.map(skill => (
            <div
              key={skill}
              onMouseEnter={e => {
                const gridTop = e.currentTarget.parentElement
                  .getBoundingClientRect().top;
                const tileTop = e.currentTarget
                  .getBoundingClientRect().top;
                setPopupTop(tileTop - gridTop);
                setHovered(skill);
              }}
              className="
                flex items-center justify-center
                bg-white/70 backdrop-blur-sm
                border border-gray-200/60
                rounded-2xl
                shadow-md p-6
                text-center text-[18px] font-bold text-[#343F56]
                transition-all duration-300 ease-out
                hover:shadow-xl
                hover:border-purple-300
              "
              style={{ minHeight: '120px' }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}