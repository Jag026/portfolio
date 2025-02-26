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

Full-stack Developer, Test Automation Engineer
Golf Nations (current role)
Drove the development and launch of new features for the application, encompassing both backend/API enhancements and front-end updates, thereby expanding the app’s functionality and improving user engagement.
Played a pivotal role in enhancing user experience and system performance by implementing critical bug fixes across the application’s UI, API, and server layers, significantly improving stability and customer satisfaction.
Took ownership of development projects and maintenance of the production application, showcasing expertise in both front-end and back-end technologies, including PHP, Propel, MySQL for the backend/API; Angular (TypeScript) and PHP for the front-end; with deployment on NGINX servers hosted on AWS.
Led the integration of DataDog monitoring tools, enabling real-time tracking of system performance and swiftly identifying and addressing potential issues, which resulted in a marked reduction in downtime and improved reliability.
Responded adeptly to tier 2 and tier 3 customer support queries, diagnosing and resolving complex bugs, which enhanced customer trust and retention by ensuring a seamless user experience.
Designed and implemented a comprehensive regression test suite using TestCafe, facilitating the automation of testing processes. This initiative significantly improved release efficiency and ensured high-quality deployments by rigorously validating new features and updates against existing functionalities.
Demonstrated exceptional problem-solving skills and a keen eye for detail in identifying and rectifying errors, contributing to the continuous improvement of the application and supporting the achievement of strategic business objectives.

Technical Support and Automation Manager
App Academy
Designed and implemented the company’s CRM infrastructure, setting up Outreach.io and integrating it seamlessly with Salesforce to streamline sales and customer management.
Developed and optimized email marketing automations and campaigns, enabling personalized outreach and follow-ups based on customer behavior and application data.
Created a dynamic frontend sales dashboard, enhancing productivity and providing real-time insights that boosted sales associates’ efficiency.
Built custom automation workflows tailored to different customer segments, leveraging application data to enhance engagement and improve conversion rates.
Provided expert technical support through help desk software, phone calls, and screen shares, ensuring customers received prompt and effective solutions.
Authored and maintained comprehensive internal and customer-facing documentation, improving onboarding, troubleshooting efficiency, and internal knowledge sharing.
Utilized advanced MSSQL queries to analyze company data, uncover insights, and drive strategic decision-making.
Automated key sales and support processes, reducing manual workload and increasing team efficiency through workflow optimizations.


Web Developer
Crusayder United
Developed and maintained WordPress websites, implementing custom themes and plugins to meet client needs.
Utilized HTML, JavaScript, and jQuery to enhance site interactivity and user experience.
Managed website updates, including WordPress core, plugins, and themes, ensuring security and stability.
Troubleshot and resolved front-end and back-end issues, optimizing site performance.
Assisted clients with feature requests, bug fixes, and general site maintenance.

Holland ISD, Round Rock ISD
High school Physics and Chemistry Teacher
`

const about = `
  Is a hardworking individual who loves watching sports, especially the Dallas Cowboys, although he wishes they would
  have better seasons. His personal interests include reading books, spending time outside, programming, barbecuing. His favorite topics include
  science, economics, and history.
`

const fetchAi = async(message) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {"role": "system", "content": `You are an AI assistant for a people with this work resume: ${resume}, your response should be in the 3rd person, the people's name is Drew, use he for pronouns`},
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
      {"role": "system", "content": `You are an AI assistant for a people with this about me: ${about}, your response should be in the 3rd person, the people's name is Drew, use he for pronouns`},
      {"role": "user", "content": `Using the provided "about me", send a response to this message: ${message}`},
    ],
  });

  console.log(completion.choices[0].message)
  return completion.choices[0].message;
}

function sendResume(name, email) {
  const client = new MailtrapClient({ endpoint: mailtrapEndpoint, token: mailtrapToken });

  const sender = {
    email: "raven@teachersaideacademy.com",
    name: "Raven",
  };


  const recipients = [
    {
      email: email,
    }
  ];

    const pdfPath = path.join(__dirname, "Drew Griffin, Fullstack Developer.pdf"); // Path to the PDF file
    const pdfData = fs.readFileSync(pdfPath); // Read the PDF file
    const pdfBase64 = pdfData.toString("base64"); // Convert to Base64
  client
      .send({
        from: sender,
        to: recipients,
        subject: "Requested Resume",
        text: "Requested Resume",
          attachments: [
              {
                  content: pdfBase64, // Base64-encoded PDF file
                  filename: "Drew Griffin, Fullstack Developer.pdf",
                  type: "application/pdf",
                  disposition: "attachment",
              },
          ],
        html: `
                <div>
                    <div style="display: block; max-width: 600px;" class="main">
                      <p>Hey ${name},</p>
                      <p>Please see Drew's attached resume.</p>
                      <p>Thanks,</p>
                      <p>Raven</p>
                 </div>
              `,
        category: "Resume",
      })
      .then(console.log, console.error)
      .then(() => {
        return "success"
      });

}

function sendMessage(name, email, message) {
    const client = new MailtrapClient({ endpoint: mailtrapEndpoint, token: mailtrapToken });

    const sender = {
        email: "raven@teachersaideacademy.com",
        name: "Raven",
    };


    const recipients = [
        {
            email: 'drew.griffin.dev@gmail.com',
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
                      <p>${name}</p>
                      <p>${email}</p>
                      <p>${message}</p>
                 </div>
              `,
            category: "Resume",
        })
        .then(console.log, console.error)
        .then(() => {
            return "success"
        });

}
module.exports = { fetchAi, fetchAiAbout, sendResume, sendMessage };
