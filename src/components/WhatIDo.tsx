import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Category {
  title: string;
  description: string;
  tags: string[];
}

const categories: Category[] = [
  {
    title: "BACKEND DEVELOPMENT",
    description:
      "Building reliable backend systems and REST APIs, from database design to deployment.",
    tags: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Flask",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Git",
    ],
  },
  {
    title: "AGENTIC AI",
    description:
      "Building LLM-powered workflows, AI agents, and tool-connected intelligent applications.",
    tags: [
      "Python",
      "LLMs",
      "LangChain",
      "Ollama",
      "Agentic AI",
      "AI Agents",
      "APIs",
      "Tools/Models",
    ],
  },
  {
    title: "DATA & ANALYTICS",
    description:
      "Working with data to extract insights, build analytical workflows, and support decision-making.",
    tags: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Power BI", "Matplotlib"],
  },
  {
    title: "CLOUD & DEPLOYMENT",
    description:
      "Deploying and working with modern applications and cloud-based infrastructure.",
    tags: ["AWS", "Docker", "Linux", "Git/GitHub", "APIs"],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          {categories.map((category, index) => (
            <div
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
              key={category.title}
            >
              <div className="what-border1">
                <svg height="100%">
                  {index === 0 && (
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                  )}
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{category.title}</h3>
                <h4>Description</h4>
                <p>{category.description}</p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  {category.tags.map((tag) => (
                    <div className="what-tags" key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
