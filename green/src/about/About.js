import React from 'react';
import '../Styles/About.css';

export default function About() {
  return (<>
    <div className="aboutPage">
      <div className="page-header">
        <div className = "about-page-title">
        <h1>About</h1>
        </div>


        <div className = "section">
        <h2>What is LEED?</h2>
        <p>
        <strong>LEED </strong> stands for <strong>Leadership in Energy and Environmental Design </strong>. It is the world's most widely used green building rating system. LEED aims to improve building and construction project 
        performance across seven areas of environmental and human health. LEED certified 
        buildings can help reduce pollution and outdoor air quality by reducing smog. 
        They can also help save energy, water, and coal, and divert waste.
        </p>
        </div>

        <div className="section">
        <h2>Who created LEED?</h2>
        <p>
        <strong>LEED </strong> was developed by the non-profit U.S. Green Building Council (USGBC). This 
        group aims to create a set of rating systems for the design, construction, 
        operation, and maintenance of green buildings, homes, and neighborhoods, 
        which aims to help building owners and operators be environmentally responsible and use resources.
        </p>
      </div>


      <div className="section">
        <h2>Why does LEED matter?</h2>
        <div className="subsection">
          <h3>For Companies:</h3>
          <ul>
            <li>
              <strong>Environmental Responsibility:</strong> Demonstrating a commitment to sustainability and environmental responsibility is not only ethically sound but also aligns with the growing global concern for climate change and resource conservation. LEED certification signifies a company's dedication to reducing its environmental footprint.
            </li>
            <li>
              <strong>Cost Savings:</strong> LEED-certified buildings are designed and constructed with a focus on energy efficiency, water conservation, and waste reduction. These initiatives often lead to lower utility bills, reduced operational costs, and long-term financial savings, making LEED a financially sound choice for businesses.
            </li>
            <li>
              <strong>Healthier Work Environments:</strong> LEED buildings prioritize indoor air quality, natural lighting, and comfortable workspaces, contributing to improved employee health and well-being. Companies benefit from higher employee productivity, reduced absenteeism, and better talent retention as a result.
            </li>
            <li>
              <strong>Marketability and Brand Enhancement:</strong> LEED certification is a recognizable symbol of a company's commitment to sustainability. It can differentiate your business in the marketplace, attract environmentally conscious customers and investors, and enhance your brand image. It may also open up new business opportunities, especially in industries where sustainability is a key concern.
            </li>
            <li>
              <strong>Regulatory Compliance:</strong> In many regions, governments and local authorities are implementing stricter environmental regulations and standards. Achieving LEED certification can help companies stay compliant with these evolving regulations and avoid potential fines or penalties for non-compliance.
            </li>
          </ul>
        </div>
        <div className="subsection">
          <h3>For the Public:</h3>
          <ul>
            <li>
              <strong>Environmental Benefits:</strong> LEED promotes sustainable and environmentally responsible building practices. Buildings certified under LEED use fewer resources, reduce energy consumption, and generate less pollution, leading to a healthier environment for everyone. This helps mitigate the impact of climate change and preserves natural resources.
            </li>
            <li>
              <strong>Health and Well-being:</strong> LEED-certified buildings often provide a healthier and more comfortable indoor environment for occupants. This can lead to improved indoor air quality, better lighting, and access to outdoor spaces, contributing to the well-being of those who live or work in these buildings.
            </li>
            <li>
              <strong>Cost Savings:</strong> LEED buildings are designed to be energy-efficient and resource-efficient, which can result in lower utility bills for occupants. This can help reduce the financial burden on individuals and businesses.
            </li>
            <li>
              <strong>Market Value and Resale Potential:</strong> LEED certification can increase the market value of a property. Studies have shown that LEED-certified buildings tend to have higher resale values and can attract more tenants, making them financially attractive investments.
            </li>
            <li>
              <strong>Job Creation:</strong> The green building industry, including LEED, creates jobs in areas such as construction, design, engineering, and manufacturing of green building materials and technologies. This benefits local economies and job seekers.
            </li>
            <li>
              <strong>Public Health:</strong> LEED encourages the use of materials and products that are healthier for both humans and the environment, reducing exposure to harmful chemicals and toxins.
            </li>
            <li>
              <strong>Government Incentives:</strong> Some governments offer incentives and tax breaks for LEED-certified projects. This can lead to cost savings for taxpayers and can encourage more sustainable construction practices.
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>The Problems</h2>
        <div className="subsection">
          <h3>Project Owners/Developers:</h3>
          <ul>
            <li>
              <strong>Financial Constraints:</strong> Project owners may face challenges due to the initial costs associated with implementing LEED requirements, which can sometimes be higher than traditional building methods.
            </li>
            <li>
              <strong>Return on Investment Concerns:</strong> Owners may question the ROI of green building practices and LEED certification in terms of property value and operational savings.
            </li>
          </ul>
        </div>
        <div className="subsection">
          <h3>Architects and Design Teams:</h3>
          <ul>
            <li>
              <strong>Complexity and Learning Curve:</strong> Design professionals may struggle with the complexity of LEED documentation and the learning curve associated with integrating sustainable design principles.
            </li>
            <li>
              <strong>Balancing Aesthetics and Sustainability:</strong> Architects often need to find a balance between achieving LEED requirements and maintaining the architectural aesthetics and functionality of a building.
            </li>
          </ul>
        </div>
        <div className="subsection">
          <h3>Contractors and Construction Teams:</h3>
          <ul>
            <li>
              <strong>Construction Costs:</strong> Contractors may face challenges related to increased construction costs associated with green building materials and technologies.
            </li>
            <li>
              <strong>Scheduling:</strong> Implementing LEED requirements can affect project schedules due to the need for additional coordination and installation of sustainable features.
            </li>
          </ul>
        </div>
        <div className="subsection">
          <h3>Engineers and Consultants:</h3>
          <ul>
            <li>
              <strong>Technical Expertise:</strong> Engineers and sustainability consultants may need to develop specialized expertise in sustainable building practices and technologies to effectively support LEED projects.
            </li>
            <li>
              <strong>Meeting Energy and Environmental Performance Targets:</strong> Engineers are responsible for ensuring that building systems meet LEED requirements for energy efficiency, indoor air quality, and other environmental factors.
            </li>
          </ul>
        </div>
        <div className="subsection">
          <h3>Tenants and Occupants:</h3>
          <ul>
            <li>
              <strong>Indoor Environmental Quality:</strong> Tenants may experience challenges related to indoor environmental quality if LEED certification does not effectively address their comfort, health, and well-being needs.
            </li>
            <li>
              <strong>Utility Costs:</strong> While LEED-certified buildings aim to reduce operational costs, tenants may still face concerns about utility expenses.
            </li>
          </ul>
        </div>
    </div>


      </div>
    </div>
    </>
);
}


/*import React, { Component } from "react";
import "../Styles/About.css"
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
  render() {
    return (<>
        <div className="aboutPage">
          <div className="page-header">
            <div className = "about-page-title">
            <h1>About</h1>
            </div>


            <div className = "section">
            <h2>What is LEED?</h2>
            <p>
            LEED stands for Leadership in Energy and Environmental Design. It is the world's most widely used green building rating system. LEED aims to improve building and construction project 
            performance across seven areas of environmental and human health. LEED certified 
            buildings can help reduce pollution and outdoor air quality by reducing smog. 
            They can also help save energy, water, and coal, and divert waste. 
            </p>
            </div>

            <div className="section">
            <h2>Who created LEED?</h2>
            <p>
            LEED was developed by the non-profit U.S. Green Building Council (USGBC). This 
            group aims to create a set of rating systems for the design, construction, 
            operation, and maintenance of green buildings, homes, and neighborhoods, 
            which aims to help building owners and operators be environmentally responsible and use resources 
            </p>
          </div>


          <div className = "section">
            <h2>Why does LEED matter?</h2>
            <p>
            Companies
Companies should care about LEED for several reasons:

Environmental Responsibility: Demonstrating a commitment to sustainability and environmental responsibility is not only ethically sound but also aligns with the growing global concern for climate change and resource conservation. LEED certification signifies a company's dedication to reducing its environmental footprint.
Cost Savings: LEED-certified buildings are designed and constructed with a focus on energy efficiency, water conservation, and waste reduction. These initiatives often lead to lower utility bills, reduced operational costs, and long-term financial savings, making LEED a financially sound choice for businesses.
Healthier Work Environments: LEED buildings prioritize indoor air quality, natural lighting, and comfortable workspaces, contributing to improved employee health and well-being. Companies benefit from higher employee productivity, reduced absenteeism, and better talent retention as a result.
Marketability and Brand Enhancement: LEED certification is a recognizable symbol of a company's commitment to sustainability. It can differentiate your business in the marketplace, attract environmentally conscious customers and investors, and enhance your brand image. It may also open up new business opportunities, especially in industries where sustainability is a key concern.
Regulatory Compliance: In many regions, governments and local authorities are implementing stricter environmental regulations and standards. Achieving LEED certification can help companies stay compliant with these evolving regulations and avoid potential fines or penalties for non-compliance.


Public
LEED (Leadership in Energy and Environmental Design) is important to the public for several reasons:

Environmental Benefits: LEED promotes sustainable and environmentally responsible building practices. Buildings certified under LEED use fewer resources, reduce energy consumption, and generate less pollution, leading to a healthier environment for everyone. This helps mitigate the impact of climate change and preserves natural resources.
Health and Well-being: LEED-certified buildings often provide a healthier and more comfortable indoor environment for occupants. This can lead to improved indoor air quality, better lighting, and access to outdoor spaces, contributing to the well-being of those who live or work in these buildings.
Cost Savings: LEED buildings are designed to be energy-efficient and resource-efficient, which can result in lower utility bills for occupants. This can help reduce the financial burden on individuals and businesses.
Market Value and Resale Potential: LEED certification can increase the market value of a property. Studies have shown that LEED-certified buildings tend to have higher resale values and can attract more tenants, making them financially attractive investments.
Job Creation: The green building industry, including LEED, creates jobs in areas such as construction, design, engineering, and manufacturing of green building materials and technologies. This benefits local economies and job seekers.
Public Health: LEED encourages the use of materials and products that are healthier for both humans and the environment, reducing exposure to harmful chemicals and toxins.
Government Incentives: Some governments offer incentives and tax breaks for LEED-certified projects. This can lead to cost savings for taxpayers and can encourage more sustainable construction practices.
            </p>        
          </div>


          <div className = "section">
            <h2>The Problems</h2>
            <p>
            Project Owners/Developers: 
Financial Constraints: Project owners may face challenges due to the initial costs associated with implementing LEED requirements, which can sometimes be higher than traditional building methods.
Return on Investment Concerns: Owners may question the ROI of green building practices and LEED certification in terms of property value and operational savings.
Architects and Design Teams: 
Complexity and Learning Curve: Design professionals may struggle with the complexity of LEED documentation and the learning curve associated with integrating sustainable design principles.
Balancing Aesthetics and Sustainability: Architects often need to find a balance between achieving LEED requirements and maintaining the architectural aesthetics and functionality of a building.
Contractors and Construction Teams: 
Construction Costs: Contractors may face challenges related to increased construction costs associated with green building materials and technologies.
Scheduling: Implementing LEED requirements can affect project schedules due to the need for additional coordination and installation of sustainable features.
Engineers and Consultants: 
Technical Expertise: Engineers and sustainability consultants may need to develop specialized expertise in sustainable building practices and technologies to effectively support LEED projects.
Meeting Energy and Environmental Performance Targets:  Engineers are responsible for ensuring that building systems meet LEED requirements for energy efficiency, indoor air quality, and other environmental factors.
Tenants and Occupants: 
Indoor Environmental Quality: Tenants may experience challenges related to indoor environmental quality if LEED certification does not effectively address their comfort, health, and well-being needs.
Utility Costs:  While LEED-certified buildings aim to reduce operational costs, tenants may still face concerns about utility expenses.

            </p>        
          </div>

          </div>
        </div>
        </>
    );
  }
}
*/