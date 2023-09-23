import {
  shopifyLogo,
  slackLogo,
  googleLogo,
  dropdownLogo,
  atlassianLogo,
} from "../assets";

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
