import myCompany from "./images/my-company.png";
import grocery from "./images/Grocery Bud.png";
import expenses from "./images/expense tracker app.png";
import movies from "./images/Movies.png";
import camps from "./images/Camps.png";
import gym2 from "./images/Gym2.png";
import car from "./images/car-rental.png";
import timeseries from "./images/Timeseries.png";
import markdown from "./images/Markdown.png";
import weather from "./images/Weather.png";
import hotels from "./images/Hotels.png";
import news from "./images/News-App.png";

export const projects = [
  {
    id: "12",
    name: "Hotels",
    link: "https://thanosdev.com/Hotels_App/",
    img: hotels,
    description:
      "A replica of the Booking. The user can select the place that he wants to visit and filter the data based on filters. The application was build using booking's api.",
    technologies: ["HTML", "BOOTSTRAP", "JAVASCRIPT", "REACT"],
  },
  {
    id: "3",
    name: "Weather",
    link: "https://thanosdev.com/AgroApps_Weather_App/",
    img: weather,
    description:
      "A simple, modern, responsive and elegant weather application that displays weather information about a specific location(Thessaloniki). The data is provided in api folder and more specific in weatherAPI.json file. The user can select to see information about current weather, today's weather or a date in the near future.",
    technologies: ["HTML", "BOOTSTRAP", "JAVASCRIPT", "REACT"],
  },
  {
    id: "1",
    name: "Markdown",
    link: "https://thanosdev.com/Markdown/",
    img: markdown,
    description:
      "The Markdown App is a simple app which helps write documentation. You can make changes in editor and see the results live on your screen.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  },
  {
    id: "13",
    name: "News",
    link: "https://thanosdev.com/News/",
    img: news,
    description:
      "A simple, modern, responsive and elegant news application. The user can see the latest news.",
    technologies: ["HTML", "MATERIAL UI", "JAVASCRIPT", "REACT"],
  },
  {
    id: "2",
    name: "Timeseries Visualization",
    link: "https://thanosdev.com/Timeseries_Data_Visualization/",
    img: timeseries,
    description:
      "A very simple web application in vue. The application displays data in table and in chart based on user's selected dates.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "VUE"],
  },
  {
    id: "4",
    name: "Business Site",
    link: "https://thanosdev.com/Business_Site/",
    img: myCompany,
    description:
      "A simple application to demonstrate a fully working business website with a wide variety of features and technologies.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: "5",
    name: "Gym Tracker",
    link: "https://thanosdev.com/Gym_Tracker/",
    img: gym2,
    description:
      "In this project you can track your performance in each exersice over time, you can select some pre built exersice or you can add your own.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
  },
  {
    id: "6",
    name: "Car Rental",
    link: "https://thanosdev.com/Car_Rental/",
    img: car,
    description:
      "The design is very simple, althouth it is fully responsive and mobile friendly. The project includes login / registration page, dynamic orders based on client id, dynamic product display based on availability and fully scalable admin panel which includes diagraph, add products or edit / delete them from the list. In the admin panel , the user can also see the contact list.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
  },
  {
    id: "7",
    name: "Movies",
    link: "https://thanosdev.com/Movies_App/",
    img: movies,
    description:
      "Developed with REACTJS. The user can search for movies / series and data will be displayed on his screen. The application is fully responsive as well as mobile friendly.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  },
  {
    id: "8",
    name: "Camps",
    link: "https://thanosdev.com/Camps-App/",
    img: camps,
    description:
      "In this application the user can see a wide variety of camps, search using the search bar, add his own, select the camp of his choise to see more information about it and read comments from other users, the user can also add his own comments in the camp of his choise.",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  },
  {
    id: "9",
    name: "Expense Tracker",
    link: "https://thanosdev.com/Expense_Tracker/",
    img: expenses,
    description:
      "The user can add an income or an expence and check his balance, furthermore, he can edit / delete items. The items are stored in local storage",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  },
  {
    id: "10",
    name: "Grocery",
    link: "https://thanosdev.com/Grocery_App/",
    img: grocery,
    description:
      "Developed using advanced javascript, despite the simplicity of the design. The user can add products to his list, delete or edit them.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
  },
];
