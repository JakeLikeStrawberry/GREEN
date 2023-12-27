import React, { Component } from "react";
import "../Styles/GREEN.css"
import GREENMenu from "./GREENMenu.js";

export default class GREEN extends Component {
  render() {
    return (<>
      <div className="GREENbody">
        <div className = "page-header">
          <div className = "green-page-title">
            <h1>Proposal: GREEN - The LEED Calculator</h1>
          </div>
          <div className = "section">
            <h2>Introduction</h2>
            <p>
            GREEN is a web based calculator able to give a user a 
            simulated LEED score, a feasibility score, and recommendations for areas to 
            explore a means of improving their score. This tool will be applicable to 
            anywhere in the world that the client is looking to achieve LEED rating or 
            simply gain insight to environmental considerations.
            </p>
          </div>
          <div className="section">
            <h2>Key Features and Solutions</h2>
            <p>
            GREEN could offer a wide range of features and solutions to organizations, individuals, or companies seeking LEED certification or aiming to integrate sustainable practices into their projects. Here are some key features and solutions that GREEN could provide:
            Project Assessment and Scoring: GREEN would assess the sustainability of a building or project by evaluating its design and construction against LEED criteria. It would provide a score based on the project's compliance with various LEED prerequisites and credits.
            Customized Recommendations: GREEN would generate personalized recommendations to help users improve their LEED score. It would suggest specific actions, design modifications, or materials substitutions to meet LEED requirements more effectively.
            Cost-Benefit Analysis: GREEN could provide a cost-benefit analysis for different sustainable strategies. It would help users understand the financial implications of pursuing specific LEED credits and how these investments can yield long-term savings.
            LEED Credit Tracking: Users could input project details and track their progress toward LEED certification in real-time. GREEN could help users keep a record of achieved credits, pending requirements, and deadlines.
            Documentation Assistance: The calculator could assist users in preparing the necessary documentation for LEED certification. It could generate templates, checklists, and guidelines for compiling and submitting the required materials.
            Resource Database: GREEN could maintain an extensive database of sustainable building materials, products, and technologies. Users could search for environmentally friendly options and assess their impact on LEED credits.
            Energy Modeling: The calculator could incorporate energy modeling tools to estimate a project's energy efficiency and carbon footprint. It would provide insights into energy-saving measures and their potential impact on LEED certification.
            LEED Rating System Guidance: GREEN could offer detailed explanations of LEED rating systems (e.g., LEED for New Construction, LEED for Existing Buildings) and help users select the most appropriate one for their project type.
            LEED Education: Provide resources such as articles, videos, and webinars to educate users about LEED principles, sustainable design, and construction practices.
            Real-time Updates: Keep users informed about the latest updates and changes to LEED requirements, ensuring that their projects remain compliant with the most current standards.
            Benchmarking and Comparative Analysis: GREEN could allow users to compare their projects with similar LEED-certified buildings, providing insights into how their sustainability efforts stack up against industry benchmarks.
            Certification Pathway Guidance: Provide a step-by-step roadmap for the LEED certification process, outlining milestones and key tasks to achieve certification.
            Project Collaboration: Enable multiple team members or stakeholders to collaborate on a project within the calculator, streamlining communication and coordination.
            Reporting and Analytics: Generate detailed reports summarizing the project's sustainability performance, LEED credit status, and potential areas for improvement.
            Integration with Building Information Modeling (BIM): GREEN could integrate with BIM software to facilitate the seamless exchange of project data and assist in generating sustainable design options.
            Regulatory Compliance: Provide information on local and regional building codes and regulations that intersect with LEED requirements.
            Mobile Accessibility: Ensure that GREEN is accessible via mobile devices, allowing users to access information and make updates while on-site.
            </p>
          </div>
          <div className = "section">
            <h2>Conclusion</h2>
            <p>By providing these features and solutions, GREEN would greatly simplify 
              the LEED certification process, promote sustainable building practices, 
              and support organizations and individuals in their sustainability goals.</p>
          </div>
        </div>
      </div>
      </>
    );
  }
}