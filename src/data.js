import myCompany from './images/my-company.png';
import blackjack from './images/blackjack.png';
import grocery from './images/Grocery Bud.png';
import expenses from './images/expense tracker app.png';
import menu from './images/Menu.png';
import tabs from './images/Tabs.png';
import movies from './images/Movies.png';
import camps from './images/Camps.png';
import gym from './images/Gym.png';
import gym2 from './images/Gym2.png';
import todo from './images/todo.png';
import car from './images/car-rental.png';
import auth from './images/auth.png';
import crm from './images/CRM.png';

export const projects = [
    {
        id: "1",
        name: "Bussiness Site",
        link: "https://sakisdev103.github.io/Business-Site/",
        img: myCompany,
        description: "This used to be my company's website, i made it using html, css and javascript. In the website you will some features my company used to offer to clients as well as well as contact form that was fully working.",
        technologies: ["Html", "Css", "Javascript"]
    },
    {
        id: "2",
        name: "BlackJack",
        link: "https://sakisdev103.github.io/Blackjack/",
        img: blackjack,
        description: "The famous blackjack game into a fully working website, this was one of many projects that helped me understand javascript in action. The website has a very simple design cause the main goal was to improve my javascript skills.",
        technologies: ["Html", "Css", "Javascript"]
    },
    {
        id: "3",
        name: "Grocery",
        link: "https://sakisdev103.github.io/Grocery-App/",
        img: grocery,
        description: "One more amazing project that helped me undestand javascript and it's features. Even though it's minimal website it is using some advanced javascript. The user can add products to his list, delete or edit them. The list can been saved to local storage.",
        technologies: ["Html", "Css", "Javascript"]
    },
    {
        id: "4",
        name: "Expense Tracker",
        link: "https://sakisdev103.github.io/Expences-App/",
        img: expenses,
        description: "One of the first projects i worked using react framework. This project helped me undestand the fundamentals of react how it's working. The user can an income or an expence and check his balance, furthermore, he can edit / delete items. The items are stored in local storage",
        technologies: ["Html", "Css", "Javascript", "React"]
    },
    {
        id: "5",
        name: "Movies",
        link: "https://sakisdev103.github.io/Movie-App/",
        img: movies,
        description: "Another react application, which his goal was to understand react concepts and also working with api calls. The user can search for movies / series and a wide variety will be appeared on his screen, displaying info about each movie. The website is fully responsive as well as mobile friendly.",
        technologies: ["Html", "Css", "Javascript", "React"]
    },
    {
        id: "6",
        name: "Camps",
        link: "https://sakisdev103.github.io/Camps-App/",
        img: camps,
        description: "A multi page website which had many goals, the first goal was to transform the design into a fully responsive website, second goal was to add functionallity, i did it using react. They are many react features in this website, like react router, useEffect, useState. To explain that the application does, the user can see a wide variety o camps, search using the search bar, add this own, click in the camp of his choise to see more information about it and read comments from other users, the user can also add his own comments in the camp of his choise.",
        technologies: ["Html", "Css", "Javascript", "React"]
    },
    {
        id: "7",
        name: "Gym",
        link: "https://sakisdev103.github.io/Gym-App/",
        img: gym,
        description: "In this project i had a lot of fun building it, it combines learning and solving a problem. To begin with, i like going to the gym a lot and i wanted to track my performance in each exersice over time, so i decided to build an application to solve my problem. I took the data for each exersice fetching an api, then i made a form in which i can upload my data. The data is stored in local storage and it is been displayed in the main page of the application. ",
        technologies: ["Html", "Css", "Javascript", "React"]
    },
    {
        id: "8",
        name: "Todo",
        link: "https://sakisdev103.github.io/Todo-List/",
        img: todo,
        description: "A very simple website with minimal design which i built using react. The user can add things to do or remove them from their list.",
        technologies: ["Html", "Css", "Javascript", "React"]
    },
    {
        id: "9",
        name: "Menu",
        link: "https://sakisdev103.github.io/Menu/",
        img: menu,
        description: "One of my first projects using javascript to display data dynamic. The user can see a variety of products and information about them, he can also select only one category of products to be displayed",
        technologies: ["Html", "Css", "Javascript"]
    },
    {
        id: "10",
        name: "Tabs",
        link: "https://sakisdev103.github.io/Tabs/",
        img: tabs,
        description: "A very simple javascript project in which user can see different content by clicking in each tab.",
        technologies: ["Html", "Css", "Javascript"]
    },
    {
        id: "11",
        name: "Car Rental",
        link: "http://sakisdev103.infinityfreeapp.com/Car_Rental/",
        img: car,
        description: "A very usefull project which helped me understand the backend of a website. The design is very simple, althouth it is fully responsive and mobile friendly. In this project i implemented many daily features that they are often used in eshop websites. The project includes login / registration page, dynamic orders based on client id, dynamic product display based on availability and fully scalable admin panel which includes diagraph, add products or edit / delete them from the list. In the admin panel , the user can also see the contact list.",
        technologies: ["Html", "Css", "Javascript", "PHP", "MySql"]
    },
    {
        id: "12",
        name: "CRM",
        link: "http://sakisdev103.infinityfreeapp.com/CRM/",
        img: crm,
        description: "In this project main goal was to work with the backend. The project as it says is a customer managment. You can see all the clients and their info and then edit their info or even delete them.",
        technologies: ["Html", "Css", "Javascript", "PHP", "MySql"]
    },
    {
        id: "13",
        name: "Auth System",
        link: "http://sakisdev103.infinityfreeapp.com/User_Auth_System/",
        img: auth,
        description: "An authetication system, built with backend services, you can login if you have an existing account or create a new one.",
        technologies: ["Html", "Css", "Javascript", "PHP", "MySql"]
    },
    {
        id: "14",
        name: "Gym Tracker",
        link: "http://sakisdev103.infinityfreeapp.com/Gym-Tracker/",
        img: gym2,
        description: "Just like the other gym application, althouth in this one the data it's been stored in a database rather than local storage.",
        technologies: ["Html", "Css", "Javascript", "PHP", "MySql"]
    },
]