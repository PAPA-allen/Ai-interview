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

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
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
                { text: "Job Position: Full Stack Developer, Job description: React, Nodejs, Angular, Mysql, Years of Experience:4 , Depends on the information give me 5 interview questions with answers in Json Format, Give Question and Answers as Field in JSON and on every last question add a general standard question " },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n[\n  {\n    \"Question\": \"Describe your experience building a web application using React and Node.js. What challenges did you face and how did you overcome them?\",\n    \"Answer\": \"I have extensive experience building web applications using React for the front-end and Node.js for the back-end. In a recent project, I built a real-time chat application. One challenge was managing state and data synchronization between multiple users. I solved this by using a combination of Redux for global state management and Socket.IO for real-time communication. I also faced challenges with optimizing performance for large amounts of user data. I addressed this by implementing server-side rendering and caching strategies.\"\n  },\n  {\n    \"Question\": \"Explain the difference between Angular and React. What are the pros and cons of each framework?\",\n    \"Answer\": \"Angular and React are both popular JavaScript frameworks for building user interfaces. Angular is a comprehensive framework that offers a complete solution with features like dependency injection, data binding, and routing. React, on the other hand, is a library focused on building reusable components. Angular provides a more structured and opinionated approach, which can be beneficial for large projects. However, it can be more complex to learn. React offers more flexibility and allows developers to choose their own libraries and tools, but it requires more decision-making and potentially more code.\"\n  },\n  {\n    \"Question\": \"How do you handle data persistence in your web applications? What are some of the database technologies you are familiar with?\",\n    \"Answer\": \"I use different approaches for data persistence depending on the project requirements. For simple applications, I might use local storage or IndexedDB. For more complex applications, I rely on relational databases like MySQL or PostgreSQL. I'm also familiar with NoSQL databases like MongoDB for scenarios where I need scalability and flexibility. My expertise in SQL and NoSQL databases allows me to choose the best technology for each project and effectively manage data.\"\n  },\n  {\n    \"Question\": \"Describe a time you had to debug a complex issue in a web application. What steps did you take to identify and resolve the problem?\",\n    \"Answer\": \"In a recent project, I encountered an issue where a specific API endpoint was returning incorrect data. I started by carefully analyzing the logs and network requests to identify the source of the error. I then debugged the relevant code sections using browser developer tools and a debugger. Through a combination of these techniques, I discovered a logic error in the API code that was causing the incorrect data. I corrected the error and verified that the endpoint was working correctly.\"\n  },\n  {\n    \"Question\": \"What are some of the latest trends in web development that you are interested in exploring? How do you stay updated with the latest technologies?\",\n    \"Answer\": \"I am always eager to learn about emerging technologies and trends in web development. I'm particularly interested in areas like serverless computing, GraphQL, and progressive web apps. I stay updated by attending industry conferences, reading technical blogs and articles, and participating in online communities. I also actively contribute to open-source projects to gain practical experience with new technologies.\"\n  },\n  {\n    \"Question\": \"Can you tell me about a project you are particularly proud of and why?\",\n    \"Answer\": \"I'm very proud of my work on a recent project where I built a dynamic e-commerce platform using React, Node.js, and MySQL. I was responsible for designing and developing the entire front-end and back-end infrastructure, including user authentication, product management, and payment processing. I implemented a clean and scalable architecture that allowed for easy expansion and future updates. The project was a success, exceeding user expectations and achieving significant growth in sales.\"\n  }\n]\n```" },
            ],
        },
    ],
});

