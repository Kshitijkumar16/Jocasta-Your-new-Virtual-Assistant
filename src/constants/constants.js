import {
  shopifyLogo,
  slackLogo,
  googleLogo,
  dropdownLogo,
  atlassianLogo,
} from "../assets";
import { blog1, blog2, blog3, blog4, blog6, blog7 } from "../assets";

import { instagram, facebook, twitter } from "../assets";

export const navLinks = [
  { key: "1", href: "#home", label: "Meet Jocasta" },
  { key: "4", href: "#contact-us", label: "Use Cases" },
  { key: "6", href: "#contact-us", label: "Get your VA" },
  { key: "7", href: "#contact-us", label: "Contact Us" },
];

export const brands = [
  { key: "1", img: shopifyLogo, label: "Shopify-logo" },
  { key: "2", img: slackLogo, label: "Slack-logo" },
  { key: "3", img: googleLogo, label: "Google-logo" },
  { key: "4", img: dropdownLogo, label: "Dropdown-logo" },
  { key: "5", img: atlassianLogo, label: "Atlassian-logo" },
];

export const socialMedia = [
  { key: "1", img: facebook, label: "facebook-logo" },
  { key: "2", img: instagram, label: "instagram-logo" },
  { key: "3", img: twitter, label: "twitter-logo" },
];

export const footerLinks = [
  {
    title: "Links",
    links: [
      { name: "Home", link: "/" },
      { name: "Overons", link: "/" },
      { name: "Products", link: "/" },
      { name: "Get Jocasta", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@jocasta.com", link: "mailto:customer@jocasta.com" },
      { name: "0712-123-234", link: "tel:0712212343" },
    ],
  },
];

export const griddata = [
  {
    key: "1",
    label: "AI-Powered Virtual Assistant",
    data: "Jocasta is your intelligent virtual assistant, constantly learning and adapting to your preferences. It understands your needs, making every interaction personalized and efficient.",
  },

  {
    key: "2",
    label: "AR/VR Integration",
    data: "Jocasta seamlessly integrates with augmented and virtual reality, enhancing your experiences. It takes you on immersive journeys, unlocking endless possibilities in AR and VR.",
  },

  {
    key: "3",
    label: "Seamless Connectivity",
    data: "Jocasta syncs effortlessly across your devices, ensuring a consistent user experience. Start a task on one device and continue seamlessly on another, without disruptions.",
  },

  {
    key: "4",
    label: "Natural Speech Understanding",
    data: "Interact with Jocasra naturally, just like talking to a human. It comprehends context, nuances, and colloquial language, making interactions effortless and intuitive.",
  },
];

export const featureData = [
  {
    key: "1",
    label: "Adaptive Intelligence",
    data: "Jocasta learns and evolves alongside its users, understanding their preferences, habits, and needs. This adaptability ensures that Jocasta becomes increasingly helpful and personalized over time, making it an invaluable digital companion.",
  },
  {
    key: "2",
    label: "Immersive AR/VR Experiences",
    data: "Jocasta seamlessly integrates with augmented and virtual reality technologies. Whether you're exploring augmented worlds or diving into virtual realms, Jocasta is a game-changer.",
  },
  {
    key: "3",
    label: "Effortless Natural Interaction",
    data: "Interacting with Jocasta is a breeze. Its natural language understanding allows users to communicate with it just like they would with a human. No more rigid commands or complicated instructions.",
  },
];

export const blogData = [
  {
    key: "1",
    title: "The Rise of AI Assistants: Jocasta Leading the Way",
    description:
      "Dive into the evolution of AI assistants and how Jocasta is at the forefront of this technological revolution. Explore its adaptive intelligence, seamless connectivity, and the impact it's making across various industries.",
    date: "Sep 10, 2023",
    IMG: blog1,
  },
  {
    key: "2",
    title: "Unlocking the Power of Natural Language Understanding with Jocasta",
    description:
      "In this article, we delve deep into Jocasta's natural language understanding capabilities. Learn how it comprehends context, nuances, and colloquial language, making interactions with AI more intuitive and user-friendly.",
    date: "Sep 15, 2023",
    IMG: blog2,
  },
  {
    key: "3",
    title: "Enhancing Education: Jocasta's Role in AR/VR-Based Learning",
    description:
      "Discover the educational transformation brought about by Jocasta's integration with AR/VR technology. Explore how it's making learning more engaging, immersive, and accessible for students of all ages.",
    date: "Sep 20, 2023",
    IMG: blog3,
  },
  {
    key: "4",
    title: "Jocasta in Healthcare: Revolutionizing Patient Care",
    description:
      "Explore Jocasta's applications in the healthcare sector. From assisting medical professionals with diagnostics to providing patients with personalized health information, see how Jocasta is making a difference in healthcare.",
    date: "Sep 25, 2023",
    IMG: blog4,
  },
  // {
  //   key: "5",
  //   title:
  //     "The Future of Entertainment: Jocasta and the AR/VR Entertainment Revolution",
  //   description:
  //     "Take a journey into the world of entertainment and how Jocasta is shaping the future of gaming, virtual experiences, and content creation in augmented and virtual reality.",
  //   date: "Sep 30, 2023",
  //   IMG: blog7,
  // },
];

export const mainblog = [
  {
    key: "6",
    title:
      "The Business Advantage: How Jocasta Boosts Productivity and Efficiency",
    description:
      "Learn how Jocasta is transforming the way businesses operate. Discover its role in streamlining workflows, automating tasks, and enhancing productivity across industries, from startups to established enterprises.",
    date: "Oct 5, 2023",
    IMG: blog6,
  },
];
