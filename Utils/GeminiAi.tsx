/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};


export const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
                { text: "Job Positon: Full Stack Developer, Job Description: React, Angular, Mongo, Postgr, MySql, Years of Experience:4, Depending on this information please give me 6 interview questions with answers in Json Format, Give Question and Answers as Field is required in Json and sometimes mix with general life questions" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n[\n  {\n    \"Question\": \"Describe your experience working with React and Angular. What are the key differences and similarities between these two frameworks?\",\n    \"Answer\": \"I have [number] years of experience with both React and Angular. I've built [mention some projects] using these frameworks. Key differences include: \\n\\n* **Component Architecture:** React focuses on a component-based architecture, while Angular employs a more directive-based approach. \\n* **Data Binding:** React uses unidirectional data flow, while Angular uses bidirectional data binding. \\n* **Learning Curve:** React generally has a lower entry barrier, while Angular might require more initial setup and understanding.\\n\\nSimilarities include: \\n\\n* **Both are powerful:** Both frameworks provide robust tools for building complex web applications. \\n* **Large communities:** Both have active communities and extensive documentation.\"\n  },\n  {\n    \"Question\": \"Explain how you would approach building a REST API using Node.js and MongoDB. What considerations would you make for database design and security?\",\n    \"Question\": \"I would approach building a REST API using Node.js and MongoDB in the following way: \\n\\n* **Database Design:** I would model my data in a way that reflects the relationships between entities. I would also consider normalization to avoid data redundancy. \\n* **Security:** I would implement security measures such as authentication and authorization to restrict access to sensitive data. I would also utilize HTTPS to encrypt communication. \\n* **Data Validation:** I would validate incoming data to ensure it meets expected formats and types. \\n* **Error Handling:** I would implement proper error handling and logging to track potential issues. \\n* **Testing:** I would write comprehensive unit tests to ensure the API functions correctly. \\n* **Documentation:** I would create clear documentation to explain how to use the API.\"\n  },\n  {\n    \"Question\": \"What is your preferred approach to handling database migrations when working with PostgreSQL and MySQL?\",\n    \"Answer\": \"I prefer using database migration tools like [mention tools like Flyway, Liquibase, etc.]. These tools help automate the process of applying changes to the database schema while maintaining a clear history of all migrations. \\n\\nKey benefits include: \\n\\n* **Version Control:** It's easy to track changes and revert to previous versions if necessary. \\n* **Collaboration:** Multiple developers can work on migrations without conflicting with each other. \\n* **Testing:** It's easier to write automated tests for migrations to ensure data consistency.\"\n  },\n  {\n    \"Question\": \"Describe a time you encountered a complex technical challenge while developing an application. How did you approach troubleshooting and resolving the issue?\",\n    \"Answer\": \"In one project, I encountered an issue where performance was significantly degraded under high load. We used [mention the relevant technologies]. After analyzing the logs and profiling the application, I discovered that the database queries were becoming inefficient due to [explain the root cause]. I resolved the issue by [explain the solution implemented, e.g., optimizing database indexes, optimizing queries, etc.]. I learned the importance of [mention the lesson learned, e.g., performance testing, proper database design, etc.]. This experience helped me gain a better understanding of [mention the technical area involved].\" \n  },\n  {\n    \"Question\": \"What are your thoughts on the future of web development? What technologies or trends are you most excited about?\",\n    \"Answer\": \"I believe the future of web development will be driven by trends such as: \\n\\n* **Progressive Web Apps (PWAs):** PWAs offer a native-like experience on mobile devices. \\n* **Serverless Computing:** Serverless architectures provide scalability and cost efficiency. \\n* **Artificial Intelligence (AI) and Machine Learning:** AI-powered features will enhance user experiences. \\n* **Emerging Technologies:** I am particularly excited about the potential of [mention specific technologies that interest you, e.g., WebAssembly, WebXR, etc.].\"\n  },\n  {\n    \"Question\": \"Tell me about a time you had to work as part of a team on a complex project. What role did you play, and what challenges did you encounter?\",\n    \"Answer\": \"In one project, I was part of a team developing a [mention the project]. My role was [mention your role, e.g., front-end development, API design, etc.]. We faced challenges such as [mention the challenges, e.g., tight deadlines, communication issues, etc.]. I played a key role in [mention your contribution, e.g., resolving technical issues, coordinating with other teams, etc.]. This experience taught me the importance of [mention the lessons learned, e.g., effective communication, teamwork, problem-solving, etc.].\"\n  }\n]\n```\n\n**Explanation:**\n\n* **Technical Questions:** These questions assess the candidate's practical knowledge and experience with specific technologies mentioned in the job description (React, Angular, MongoDB, PostgreSQL, MySQL). \n* **Problem-Solving:** The question about encountering a technical challenge focuses on their troubleshooting skills and how they approach complex situations.\n* **Teamwork:** The question about working in a team assesses their ability to collaborate and handle challenges in a group setting.\n* **Future Trends:** This question helps understand their awareness of evolving technologies and their interest in staying up-to-date. \n\nRemember to tailor the questions further based on the specific requirements of your position and the candidate's background. You can also ask follow-up questions based on their answers to gain deeper insights. \n" },
            ],
        },
    ],
});


