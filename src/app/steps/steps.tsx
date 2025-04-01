import { Card } from "./cards";
import { FaClipboardList, FaCogs, FaCheckCircle } from "react-icons/fa";
import "./steps.css";

const Steps =()=> {
  const steps = [
    {
      icon: <FaClipboardList className="step-icon" />,
      title: "Submit Your Requirements",
      description: "Tell us what you need—Web, AI, Automation, or Design. Fill out the form with details.",
    },
    {
      icon: <FaCogs className="step-icon" />,
      title: "We Process & Plan",
      description: "Our experts analyze your requirements and craft a tailored plan for your project.",
    },
    {
      icon: <FaCheckCircle className="step-icon" />,
      title: "Receive Your Project",
      description: "Get your software solution delivered efficiently with top-tier quality assurance.",
    },
  ];

  return (
    <div className="steps-wrapper">
      <h2 className="steps-heading">How to Order Your Website</h2>
      <p className="steps-subtext">Follow these simple steps to get your professional site delivered.</p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <Card key={index} title={step.title} description={step.description} icon={step.icon} />
        ))}
      </div>
    </div>
  );
}
export default Steps;