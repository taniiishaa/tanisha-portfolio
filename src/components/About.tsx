import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          I'm Tanisha — a <span>Backend & AI Developer</span> who likes
          building things that are meant to leave the laptop and actually be
          useful. I work across backend engineering and applied AI, from{" "}
          <span>REST APIs and database-driven systems</span> to{" "}
          <span>LLM, RAG, and tool-connected workflows</span>. I care less
          about making something look impressive in a demo and more about
          making it work when someone actually uses it.
        </p>

        <p className="para">
          Most of my favourite projects start with a messy problem. My{" "}
          <span>Smart Resume Analyzer</span>, for example, came from my own
          frustration with ATS systems. I turned that frustration into a
          working application that analyzes resumes, evaluates skills, and
          makes the results easier to understand. That's the kind of
          engineering I enjoy —{" "}
          <span>turning ambiguity into something structured, practical, and useful.</span>
        </p>

        <p className="para">
          And I don't just like building things — I like{" "}
          <span>understanding and sharing how they work</span>. Through my
          college's Earn While Learn Scheme, I've mentored junior students in
          Python and helped them turn concepts into working projects. It has
          taught me that writing good code matters, but being able to explain
          it, improve it, and build with others matters just as much.
        </p>
      </div>
    </div>
  );
};

export default About;