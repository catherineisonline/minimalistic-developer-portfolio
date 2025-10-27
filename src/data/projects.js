import urlShortener from "../assets/images/portfolio/urlShortener.png";
import Edgy from "../assets/images/portfolio/Edgy.jpeg";
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";

const projectsData = [
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "https://restful-countries.vercel.app/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: "url-shortener",
    img: urlShortener,
    name: "URL Shortener",
    stack: ["< HTML5 />", "< CSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://catherineisonline.github.io/url-shortening-api-frontendmentor/",
    source: "https://github.com/catherineisonline/url-shortening-api-frontendmentor",
    description:
      "The goal of this landing page challenge is integration with the shrtcode URL shortening API and playing with browser storage. The challenge is to integrate with the shrtcode API to create shortened URLs and display them like in the designs. You can use any JavaScript framework/library on the front-end such as React or Vue. You also have complete control over which packages you use to do things like make HTTP requests or style your project.",
  },
  {
    id: "bankist",
    img: Bankist,
    name: "Bankist",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/catherineisonline/bankist",
    description:
      "Bankist is a fictional online bank and its goal is to practice DOM manipulation and user interaction. Bankist has an option to log in to the account and use different functionalities, almost like in an actual bank! By logging into your account you can transfer money to another account, take a loan or delete the account. Please check README for login info.",
  },
  {
    id: "edgy",
    img: Edgy,
    name: "Edgy",
    stack: ["< Tailwind />", "< React.js />", "< Express.js />", "< Airtable API />", "< Google ReCaptcha />"],
    src: "https://catherineisonline.github.io/edgy/",
    source: "https://github.com/catherineisonline/edgy",
    description:
      "Edgy - is a social media marketing agency that offers Instagram growth services to businesses and beginner influencers. The website includes prices, a contact form, a blog, a careers page, and more.",
  },
];

export { projectsData };
