import * as React from "react"

export const myStory = [
   <div className="my-story-paragraphs" key="1">My name is Iskak. I am a full stack engineer who loves both frontend and backend development. I often find myself absorbed in my projects when facing new challenges, and excited when I solve them. I'm fascinated with libraries like <span>React</span> for frontend development and <span>Redux</span> for state management, and web frameworks like <span>Express (Node.js)</span> for backend. I’m eager to also learn languages such as <span>TypeScript, Python, C#, C++,</span> and new frameworks like <span>GraphQL</span> and more. </div>,

   <div className="my-story-paragraphs" key="2">I first encountered the magic of computers while in high school in Kyrgyzstan, where I was born and raised. I enjoyed seeing what I typed appear on the screen, and wondered how it worked. I wanted to go to a computing or tech field after high school, but lack of resources forced me elsewhere. I graduated in 2003 from the two-year general law program of Kyrgyz Economic University, but shortly afterward I realized that law was not the field where I wanted to build my career. My quest for the right profession continued. I graduated from the General Accounting program of Kyrgyz Russian Slavic University in 2011, relocated for a time to Kazakhstan, then Russia, and arrived in the United States in 2013. Having lived in four countries in the last 10 years, I found that mobile applications like Google Maps, Google Translator and CityMapper helped me assimilate, especially in the U.S., which further fueled my interest in computing. By then, I knew that apps were based on a combination of algorithms, data structures, and logic. But I wanted to know more. So when I heard about coding bootcamps, I decided to take a chance and prepared to enroll in one.</div>,

   <div className="my-story-paragraphs" key="3">In September 2019, I started self-directed online courses with Udemy in <span>HTML, CSS</span>  and <span>JavaScript,</span> and wrote my very first line of code, which displayed 'Hello, world!'. Excited and encouraged to learn more, I entered Fullstack Academy bootcamp six months later. In my first week, I felt completely overwhelmed. But I was determined not to give up. In April 2020, I was assigned my first solo project to build a single-page application. I was nervous but as my project progressed, my confidence grew. Each challenge made me learn something new about how an object-relational database system works, how React and Redux and other libraries work, and what’s happening with them behind the scenes. In the bootcamp’s final six weeks, I completed three full-stack projects and learned more about coding with <span>Express, PostgreSQL, React</span> and <span>Redux,</span> and new technologies like <span>React-Native, Expo.io</span> and <span>Chart.js,</span> while working in immersive paired and team environments. As a developer, I am excited to bring my experience and knowledge to a work environment where I can learn even more about coding and improve my skills.</div>
]

export const hobbies = [
    <div key="1"><div>When I am not coding, I’m trying new recipes, reading articles from my favorite publications, or enjoying my favorite sports.</div>
    <div >When I was child I learned cooking from my mom and sister. They told me that it would always be a practical skill to be independent. Upon arrival in the USA, I have discovered so many cuisines such as Mexican, Indian, Italian, Thai and of course American, and each of them was so delicious that it triggered a desire to learn to cook them myself. I started watching some videos and taught myself how to cook many of the dishes I tried. I call Gordon Ramsay and Jamie Oliver my virtual mentors. I cook at least five times a week and truly enjoy it.</div></div>,
    <div key="3">I also enjoy reading articles about news, travel, sports, science, technology, the entertainment industry, and more. I believe it is important to stay informed and to gain new knowledge. I particularly like reading the articles of BBC News, The Guardian, The Independent, and National Geographic Magazine.</div>,
    <div key="4">I also have a love for sports, especially tennis and figure skating. I am fascinated by the strength and resilience of most athletes like young figure skaters Alysa Liu, Kamila Valieva, and Rika Kihira, who are able to execute triple-axels and quad jumps, or tennis players like Serena Williams and Roger Federer who keep playing professional tennis in their late 30s and 40s while staying among the top 10 players. But I do not just watch sports. For me, staying physically active is also important. Working out at the gym and running are part of my weekly routine, and I would like to learn to play tennis, too.</div>
]

export const projects = [
    {
        name: "Mixifyer",
        img: "image-mixifyer",
        date: "October 2020 - November 2020",
        description: "Mixifyer is an e-commerce application that allows users to create their own account, add their favorite drinks to their shopping cart, edit their shopping cart, and place their order using credit/debit card payment.",
        bulletPoints: {
            one: "My scope of work for this project included",
            two: "-Designing and implementing a persistent user’s shopping cart page to see the items in the cart and to change quantities and delete them from the cart anytime.",
            three: "-Creating an Admin-user page with functionality to have access to all users’ information, to add or remove inventory, or to change inventory information, such as cost, in stock etc."
        },
        tools: "['Express', 'PostgreSQL', 'Sequelize', 'React', 'Redux', 'Stripe API']",
        gitHub: 'https://github.com/Mixifyer/Mixifyer',
        link: "https://mixifyer.herokuapp.com",
        class: "mixifyer",
        id: 1,
    },
    {
        name: "eBudget",
        img: "image-eBudget",
        date: "October 2020 - November 2020",
        description: "Financial planning web application to create a personal budget. It allows the user to quickly see their spending habits by category, compare spending between months, and set desired spending limits.",
        bulletPoints: {
            one: "This project involved",
            two: "-Building functionality to establish a persistent connection to the user's bank account through Plaid API and to fetch the user’s bank account activity including transfers, payments and spending.",
            three: "-Incorporating doughnut and bar charts functionality to display monthly and yearly spending using Chart.js."
        },
        tools: "['Express', 'PostgreSQL', 'React', 'Redux', 'React-Redux', 'ChartJS', 'Plaid API']",
        gitHub: 'https://github.com/Iskak83/eBudget',
        link: "https://ebudget-fsa2020.herokuapp.com",
        class: "eBudget",
        id: 2,


    },
    {
        name: "ColourFinder",
        img: "image-colourFinder",
        date: "October 2020 - November 2020",
        description: "ColourFinder is an app to identify the name and hex code of colors from a selected picture from a device's local storage or from a picture taken with the device’s camera. It is an especially helpful tool for designers and developers wanting to capture any color they encounter and use it in their projects.",
        bulletPoints: {
            one: "",
            two: "",
            three: ""
        },
        tools: "['React-Native', 'Clariffi API']",
        gitHub: 'https://github.com/Iskak83/ColourFinder',
        link: "https://expo.io/@iskak/projects/colour-finder",
        class: "colourFinder",
        id: 3,

    },
]
export const education = [
    {
        name: "Fullstack Academy",
        address: "New York, NY",
        date: "March 2020 - August 2020",
        degree: "Certificate in Full Stack Web Development, Software Engineering Immersive",
        class: "image-fsa",
        id: 1
    },
    {
        name: "Kyrgyz Russian Slavic University",
        address: "Bishkek, Kyrgyzstan",
        date: "September 2005 - July 2011",
        degree: "Economics | Accounting",
        class: "image-krsu",
        id: 2
    },
{
        name: "Kyrgyz National University",
        address: "Bishkek, Kyrgyzstan",
        date: "September 2003 - July 2005",
        degree: "Mathematics",
        class: "image-knu",
        id: 3
    },
    {
        name: "Kyrgyz Economic University",
        address: "Bishkek, Kyrgyzstan",
        date: "September 2001 - July 2003",
        degree: "General Law",
        class: "image-keu",
        id: 4
    }
]

