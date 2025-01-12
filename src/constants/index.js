import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = 'I am a passionate full stack developer with a knack for crafting robust and \
scalable web applications, with 4 years of hands-on experience, I have honed my skills in front-end \
technologies like React.js and HTML,CSS as well as back-end technologies like Python, django, FastAPI, AI/ML, MySQL, PostgreSQL\
and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.';

export const ABOUT_TEXT = 'I am a dedicated and versatile full stack developer with a passion for \
creating efficient and user-friendly web applications. With 4 years of professional experience, \
I have worked with a variety of technologies, including Python, django, FastAPI, AI/ML, React.js, MySQL, PostgreSQL, \
and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has\
evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in \
collaborative environments and enjoy solving complex problems to deliver high-quality solutions.\
Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.';

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Software Engineer ",
    company: "freelancer.",
    description: `Developed a Real State project for inquiry about the Real state property. I created\
    a chatbot for inquiry about the company and property and I also work for data manipilation and data visualization`,
    technologies: ["Python", "Django","llm(langchain)","OpenAI","Pandas","Numpy","matplotlib","docker", "Mongodb"],
  },
  {
    year: "2021 - 2022",
    role: "Software Engineer",
    company: "appboxer",
    description: `Designed and developed API for web applications using Django and Django-rest-framework.\
     Worked closely with backend developers to develope API.`,
    technologies: ["Python","django","django-rest-framework","celery","docker","aws","postgres","postman","git"],
  },
  {
    year: "2021 - 2022",
    role: "Software Engineer",
    company: "Chetu,Inc",
    description: `Developed and maintained paymentgatway applications using ,Python, /
    FstAPI and MySQL. Designed and implemented RESTful APIs for data communication. Collaborated /
    with cross-functional teams to deliver high-quality software products on schedule. I also worked as a \
    fullstack developer for create e-commerce webapplication`,
    technologies: ["Python", "FastAPI","django","react.js","MySQL","postgress","git"],
  },
  {
    year: "20018 - 2020",
    role: "Software Engineer",
    company: "techmarvrl.com",
    description: `Contributed to the development of web applications using Python, django, MySQL. \
    Managed databases and implemented data storage solutions using MySQL. Worked closely with product \
    managers to prioritize features and enhancements.`,
    technologies: ["Python", "Django","MySQL","git"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, \
      and user authentication.",
    technologies: ["Python","Django","React","HTML", "CSS","Postgres","git"],
  },
  {
    title: "Payment Gatway",
    image: project2,
    description:
      "An application for create payment gatway, with features such as create merchant,preauth,auth,\
      balance Inquiry,batch file and many more and progress tracking.",
    technologies: ["Python", "FastAPI", "MySQL","git"],
  },
  {
    title: "Events Sheduler",
    image: project4,
    description:
      "A platform for Scheduling Events and creating the listing for fitness related events. There are \
      three types of users one is businessman second one is trainer and thired one is customer\
      where Businessman can hire trainer and trainer create the listing for schedul the events and \
      customer can book the events according to time and price and participate the events.",

    technologies: ["Python", "Django", "Django-rest-framework", "Celery", "Postgres","Docker","Postman","git"],
  },

  {
    title: "Real state",
    image: project3,
    description:
      "I created Real State project for Inquiry about the Property where user can see the price according\
      to location and size of the project they can also find the price on the basis of sqaure fit.I worked \
      on data cleaning, data manipulation and data visualization. I worked to create a chatbot to ask any \
      query about the Company and Property",
    technologies: ["Python","Django","Numpy","Pandas",,"matplotlib","llm(langchain)","OpenAI","React","MongoDb","git"],
  },
  
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A Personal Portfolio Website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  
];

export const CONTACT = {
  address: "Noida,UP,Bharat",
  phoneNo: "+91 9211261727 ",
  email: "anu.coding.classes@gmail.com",
};