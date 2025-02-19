const { Configuration, OpenAIApi } = require("openai")
const { api_key } = require('../config/index.js');
const OpenAI = require("openai");
const { MailtrapClient } = require("mailtrap");
const { mailtrapToken, mailtrapEndpoint } = require('../config/index.js');
const fs= require("fs");
const path = require("path");
const openai = new OpenAI({
  apiKey: api_key}
);
const resume = `
Automation and Performance Test Engineer, Full-stack developer

Golf Nations  July 2023 - Current

Spearheaded the implementation of comprehensive testing strategies, including functional, regression, and performance testing, to enhance application stability and user experience.
Managed and tracked testing tasks, bug reports, and feature requests using Jira, ensuring efficient workflow organization, prioritization, and resolution of issues within agile development cycles.
Designed and maintained an extensive automated regression test suite using TestCafe, ensuring consistent validation of new features and preventing regressions in existing functionality.
Led the integration of DataDog monitoring tools, enabling real-time tracking of system performance and proactively identifying issues, reducing downtime and improving reliability.
Maintained comprehensive log monitoring for all five production servers, production API, and database, tracking key metrics such as storage availability, CPU usage, network traffic (in/out) to detect and resolve system issues proactively.
Conducted load and performance testing using JMeter, simulating high-traffic scenarios to assess system scalability, optimize response times, and prevent performance bottlenecks.
Developed and executed test plans using Tricentis, ensuring structured and efficient test coverage for critical application features.
Utilized JetBrain’s HTTP client to create and execute HTTP requests for testing APIs, streamlining API validation and request debugging.
Implemented automated API testing to validate backend services, ensuring seamless communication between microservices and enhancing system robustness.
Managed and streamlined the CI/CD pipeline, integrating automated tests at various stages to catch defects early and improve deployment efficiency.
Debugged API requests and responses using an integrated debugger, identifying issues in backend logic, inspecting request payloads, and optimizing API performance.
Diagnosed and resolved complex bugs by collaborating with developers, management teams, and customer support, improving overall application quality and user trust.
Orchestrated cross-browser testing to ensure UI consistency across different platforms and devices, enhancing accessibility and user experience.
Designed and executed end-to-end testing strategies covering UI, API, and server layers to ensure seamless application functionality across multiple components.

Applications Engineer
App Academy Nov 2020 - July 2023

Developed and executed test cases to validate the functionality and performance of sales tools, ensuring a seamless user experience for sales associates.
Conducted manual and automated testing on the custom frontend dashboard, identifying and resolving UI/UX issues to optimize usability and efficiency.
Tested and validated CRM integrations, ensuring data integrity and smooth workflows within Outreach.io to support sales operations.
Collaborated closely with the Sales team, delivering impactful tools and solutions to enhance productivity and drive sales.
Created an intuitive frontend dashboard exclusively for sales associates, resulting in a substantial increase in their daily output.
Provided exceptional hands-on product support to customers via help desk software, phone calls, and screen shares, establishing myself as a trusted expert in product knowledge.
Authored and contributed to comprehensive internal and customer-facing documentation, significantly improving team processes and ensuring seamless communication.
Successfully managed the setup and maintenance of the sales CRM Outreach.io, optimizing sales workflows and facilitating smooth customer interactions.
Leveraged advanced MSSQL querying techniques to perform in-depth analysis of company data, uncovering valuable insights that directly influenced strategic business decisions.


Web Developer (Contract)
Crusayder United June 2019 - Oct 2020

Developed and maintained WordPress websites, implementing custom themes and plugins to meet client needs.
Utilized HTML, JavaScript, and jQuery to enhance site interactivity and user experience.
Managed website updates, including WordPress core, plugins, and themes, ensuring security and stability.
Troubleshot and resolved front-end and back-end issues, optimizing site performance.
Assisted clients with feature requests, bug fixes, and general site maintenance.


Holland ISD, Round Rock ISD
High school Physics and Chemistry Teacher August 2012 - May 2020
`

const about = `
  Is a hardworking individual who loves watching sports, especially the Dallas Cowboys, although he wishes they would
  have better seasons. His personal interests include reading books, spending time outside, programming, barbecuing, lifting weights,
  and has a personal interest in all things business. He's the type of person that pushes himself to the limit, including activities
  like running in 10 degree weather, taking cold plunges and swimming great distances underwater while holding his breath.
`

const fetchAi = async(message) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {"role": "system", "content": `You are an AI assistant for a people with this work resume: ${resume}, your response should be in the 3rd person, the people's name is Dave, use he for pronouns`},
      {"role": "user", "content": `Using the provided resume, send a response to this message: ${message}`},
    ],
  });

  console.log(completion.choices[0].message)
  return completion.choices[0].message;
}

const fetchAiAbout = async(message) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {"role": "system", "content": `You are an AI assistant for a people with this about me: ${about}, your response should be in the 3rd person, the people's name is Dave, use he for pronouns`},
      {"role": "user", "content": `Using the provided "about me", send a response to this message: ${message}`},
    ],
  });

  console.log(completion.choices[0].message)
  return completion.choices[0].message;
}

function sendResume(email) {
  const client = new MailtrapClient({ endpoint: mailtrapEndpoint, token: mailtrapToken });

  const sender = {
    email: "raven@teachersaideacademy.com",
    name: "Mailtrap Test",
  };


  const recipients = [
    {
      email: email,
    }
  ];

    const pdfPath = path.join(__dirname, "Drew-Griffin-Automation-And-Performance-Test-Engineer.pdf"); // Path to the PDF file
    const pdfData = fs.readFileSync(pdfPath); // Read the PDF file
    const pdfBase64 = pdfData.toString("base64"); // Convert to Base64
  client
      .send({
        from: sender,
        to: recipients,
        subject: "resume",
        text: "New Needs Solution Form Submission",
          attachments: [
              {
                  content: pdfBase64, // Base64-encoded PDF file
                  filename: "Drew Griffin, Automation And Performance Test Engineer.pdf",
                  type: "application/pdf",
                  disposition: "attachment",
              },
          ],
        html: `
                <div>
                    <div style="display: block; margin: auto; max-width: 600px;" class="main">
                      <p>New Needs Solution Form Has Been Submitted:</p>
                      <p>Please see attached resume.</p>
                 </div>
              `,
        category: "Integration Test",
      })
      .then(console.log, console.error)
      .then(() => {
        return "success"
      });

}

function sendMessage(message) {
    const client = new MailtrapClient({ endpoint: mailtrapEndpoint, token: mailtrapToken });

    const sender = {
        email: "raven@teachersaideacademy.com",
        name: "Mailtrap Test",
    };


    const recipients = [
        {
            email: "drew.griffin.dev@gmail.com",
        }
    ];

    client
        .send({
            from: sender,
            to: recipients,
            subject: "New message from Portfolio Chatbot",
            text: "New message from Portfolio Chatbot",
            html: `
                <div>
                    <div style="display: block; margin: auto; max-width: 600px;" class="main">
                      <p>Hey my man, you got this message from a recruiter:</p>
                      <p>${message}</p>
                 </div>
              `,
            category: "Integration Test",
        })
        .then(console.log, console.error)
        .then(() => {
            return "success"
        });

}
module.exports = { fetchAi, fetchAiAbout, sendResume, sendMessage };
