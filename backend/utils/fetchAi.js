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

Software Support Engineer, WordPress Developer
Golf Nations, Remote, US
July 2023 - Present
Administered and enhanced a WordPress multisite network, supporting 15 U.S. Golf Associations by delivering seamless functionality, boosting site uptime by 25%, and optimizing performance across all sites.  
Designed and coded custom WordPress pages, plugins, and features, tailoring solutions to client specifications, increasing user engagement by 15%, and improving site usability.  
Configured and optimized DNS settings via Cloudflare, strengthening security protocols, accelerating load times by 20%, and ensuring reliable domain performance.  
Updated and secured WordPress core, plugins, and themes across 15 sites, reducing vulnerabilities by 30% and maintaining compatibility with the latest standards.  
Integrated and maintained an Angular application within the WordPress ecosystem, developing reusable Angular components that enhanced functionality and improved front-end performance by 10%.  
Implemented jQuery solutions to create dynamic front-end interactions, streamlining user workflows and enhancing interactivity across the WordPress platform.  
Built and maintained API integrations, modifying the WordPress REST API and a Propel-based API, ensuring 99% data accuracy and enabling seamless interoperability between systems.  
Responded to customer requests by developing new features, fixing bugs, and onboarding 5+ new clients, achieving a 95% satisfaction rate and driving platform improvements. 

Technical Support Engineer
App Academy, Remote, US
May 2020 - July 2023
Provided technical support via Zendesk, phone, and helpdesk, resolving 40+ weekly tickets with clear, user-focused solutions.
Built custom Salesforce dashboards for the sales team, boosting productivity by 35%.  
Maintained Outreach.io CRM with Salesforce integration, streamlining workflows for 200+ accounts.  
Created Zendesk automations to triage and route tickets, slashing response times by 20% and enhancing customer support efficiency.  
Wrote 50+ internal and customer-facing documents, reducing onboarding time by 25%.  
Analyzed MSSQL data for actionable insights, supporting C-level decisions.  
Designed email marketing automations for 20,000+ leads, increasing conversions by 15%.  
Developed automation workflows, cutting manual tasks by 30%.  
High School Chemistry Teacher
Holland ISD, Holland, TX
August 2012 - May 2020

Taught 6 sections of chemistry to 150+ students annually.
Developed and implemented yearly science curriculum.
Fostered a classroom environment for high-level learning.

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

    const pdfPath = path.join(__dirname, "Drew-Griffin-Resume-Wordpress-Developer.pdf"); // Path to the PDF file
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
                  filename: "Drew-Griffin-Resume-Wordpress-Developer.pdf",
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
