import * as React from "react"

export const myStory = [
   <div className="my-story-paragraphs" key="1">
        My name is Vasyl. I am a full stack engineer who loves both frontend and backend development. I often find myself absorbed in my projects when facing new challenges, and excited when I solve them. I'm fascinated with libraries like <span>React</span> for frontend development and <span>Redux</span> for state management, and web frameworks like <span>Express (Node.js)</span> for backend. I’m eager to also learn languages such as <span>TypeScript, Python, Java</span> and new frameworks like <span>GraphQL</span> and more.
   </div>,
   <div className="my-story-paragraphs" key="2">
        I was born in Ukraine, Europe, graduated from University with a bachelor’s degree in finance and economics. After graduation I had worked in the Raiffeisen Bank as a loan officer/analyst and increased the bank credit portfolio by an amount of 4.5 million UAH within a period of 3 years. After I relocated to the United States, I found that mobile applications like Google Maps, Google Translator and CityMapper helped me assimilate, which further fueled my interest in computing. Software development has become my passion. That passion carried me through my work in the customer service field. I was always checking for the latest news in tech, especially in the financial field due to my professional experience. I’d found these online courses for beginners (“GraceHopper” and “Udemy”) and completed them. It was almost magic to be able to make a computer do whatever you want just by typing those little symbols. I'd become very curious about what is behind that magic. My curiosity led me to “Fullstack Academy” and now I aim to continue my path of becoming a successful software developer. I am excited to bring my experience and knowledge to a work environment where I can learn even more about coding, translate my skills into value for an organization,  and continue to grow along with the company.
   </div>
]

export const hobbies = [
    <div key="1">
        When I am not coding, I’m studying and playing with my son, planning a new jorney, or reading articles and watching videos about electric cars.
    </div>,
    <div key="2">
        My son was born on January 1st at 12:00am, exactly when dazzling ball descended down a pole on Times Square. He is the first child in NYC, born in 2015. That was the the biggest wonder of my life, and my best New Year wish. So when I have free time, I love to spend it with Maxim. Eventually, I would like him to become a software engineer (and he's making some good progress on that).
    </div>,
    <div key="3">
        I love travelling. I have not been to so many countries and places, like those travel bloggers. But those few spots, that I had been to, awoke great desire to see more and more beautiful places on the Earth. The best jorney of my life so far was definitely Italy, and especially Rome and Florence. While walking on those ancient streets, I could feel the scent of history in the air: gladiators fight at Colloseum, Leonardo Da Vinci painting his 'Mona Lisa' in Florence, cardinal's conclave in Sistine Chapel. I was also much impressed with Egyptian pyramids, Niagara Falls, ancient european city Krakow. But there are certainly so many places to visit!
    </div>,
    <div key="4">
        I also enjoy reading articles and watching videos about electric cars and renuable energy sources. I love Tesla as a inspirational company and its products. The company is a pioneer in car electrification. Its importance and influance is not even properly evaluated yet. I believe in importance of renewable sources of energy, as a chance for our kids and future generations to have clean air and water.
    </div>
]

export const projects = [
    {
        id: 1,
        name: "eBudget",
        img: "image-eBudget",
        date: "July 2020 - August 2020",
        description: "Financial planning web application to create a personal budget. It allows the user to quickly see their spending habits by category, compare spending between months, and set desired spending limits.",
        bulletPoints: {
            one: "- Built functionality to establish a persistent connection to user’s bank account through Plaid API",
            two: "- Collaborated with a team of three developers in a remote environment using best practices of pair programming.",
            three: "- Developed single-page application using React-Redux for frontend, Express and PostgreSQL for backend, Charts.js and Materialize CSS for styling."
        },
        tools: "['Express', 'PostgreSQL', 'React', 'Redux', 'React-Redux', 'ChartJS', 'Plaid API']",
        gitHub: 'https://github.com/vasylsemak/eBudget',
        class: "eBudget",
    },
    {
        id: 2,
        name: "ChugMugs",
        img: "image-chugMugs",
        date: "June 2020",
        description: "An E-commerce website selling Mugs developed by Fullstack Academy senior students!",
        bulletPoints: {
            one: "- Implemented Redux actions, thunks, and reducers for displaying all products as well as a single product in the browser; used CRUD paradigm",
            two: "- Applied CSS Flexbox and Bootstrap styling to some parts of the application",
            three: ""
        },
        tools: "['React', 'Redux', 'Express', 'Sequelize', 'Postgres']",
        gitHub: 'https://github.com/vasylsemak/ChugMugs',
        class: "chugMugs",
    },
    {
        id: 3,
        name: "Daily Planner",
        img: "image-daily",
        date: "June 2020",
        description: "An organizer app that helps to increase productivity by planning daily tasks.",
        bulletPoints: {
            one: "- Implemented Redux actions, thunks, and reducers for displaying all products as well as a single product in the browser; used CRUD paradigm",
            two: "- Applied CSS Flexbox and Bootstrap styling to some parts of the application",
            three: ""
        },
        tools: "['MongoDB', 'EJS', 'Express']",
        gitHub: 'https://github.com/vasylsemak/Daily-planner',
        class: "daily"
    },
]

export const education = [
    {
        id: 1,
        name: "Fullstack Academy",
        address: "New York, NY",
        date: "March 2020 - August 2020",
        degree: "Certificate in Full Stack Web Development, Software Engineering Immersive",
        class: "image-fsa"
    },
    {
        id: 2,
        name: "Kingsborough Community College",
        address: "Brooklyn, NY",
        date: "March 2009 - February 2010",
        degree: "ESL",
        class: "image-kcc"
    },
    {
        id: 3,
        name: "Ternopil National Economic University",
        address: "Ternopil, Ukraine",
        date: "September 2002 - May 2006",
        degree: " Bachelor in Finance",
        class: "image-tneu"
    }
]

