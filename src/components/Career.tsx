import "./styles/Career.css";

interface CareerEntry {
  role: string;
  company: string;
  date: string;
  description: string;
}

const careerEntries: CareerEntry[] = [
  {
    role: "Trainee",
    company: "OOPS Institute of Computer Technology",
    date: "JUL '24",
    description:
      "Designed GUI-based desktop applications in Tkinter with SQL database connectivity, and built Bank and Library Management Systems using Python and MySQL — cutting manual effort and improving the end-user experience.",
  },
  {
    role: "Trainee",
    company: "The Core Systems India",
    date: "JUL '25",
    description:
      "Built and deployed AI- and IoT-driven prototypes using YOLOv8, MQTT, and Dash, integrating live data streams with AWS for real-time monitoring, and analyzed datasets exceeding 100K records to sharpen reporting accuracy.",
  },
  {
    role: "Python Developer Intern",
    company: "Elevate Labs",
    date: "SEP '25",
    description:
      "Engineered RESTful APIs and backend modules with Flask and MySQL, and partnered with a cross-functional team to build and deploy Python-based solutions on AWS — improving scalability and system reliability.",
  },
  {
    role: "Student Mentor",
    company: "JMIT",
    date: "JAN '26",
    description:
      "Selected as a Student Mentor under the Earn While Learn Scheme — guiding first- and second-year students in programming fundamentals and problem-solving, while also mentoring peers on Personality Development: communication, public speaking, and placement-readiness.",
  },
  {
    role: "Data Analyst Intern",
    company: "Bluestock Fintech",
    date: "MAY '26",
    description:
      "Worked on data analysis and SQL-driven workflows, handling and interpreting datasets to support analytical reporting and decision-making.",
  },
  {
    role: "Trainee",
    company: "Codenoids",
    date: "JUN '26",
    description:
      "Trained in Agentic AI and LLM-powered application development — building AI agents and tool-connected workflows with LangChain, MCP/FastMCP, Ollama, and Streamlit.",
  },
  {
    role: "Data Analyst Intern",
    company: "CodroidHub",
    date: "JUN '26",
    description:
      "Worked on data analysis tasks, cleaning and interpreting datasets and supporting reporting workflows using Python and SQL.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerEntries.map((entry) => (
            <div className="career-info-box" key={`${entry.company}-${entry.date}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{entry.role}</h4>
                  <h5>{entry.company}</h5>
                </div>
                <h3>{entry.date}</h3>
              </div>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
