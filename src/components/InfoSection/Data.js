import car from "../../videos/product launch_solid II.png";
import piggybank from "../../videos/developer_outline I.png";
import services from "../../videos/team_solid III.png";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "EXPANSIVE SOLUTIONS",
  headline: "Harness the Power of a Robust Online Presence",
  description:
    "Seamlessly manage your online presence with our comprehensive services. From website development to social media strategies, we've got your digital needs covered.",
  buttonLabel: "Reach Out to Us",
  imgStart: true,
  img: piggybank,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};


export const homeObjTwo = {
  id: "whyus",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,

  topLine: "AMPLIFYING YOUR DIGITAL JOURNEY.",
  headline: "Tailored Solutions for Optimal Online Impact.",
  description:
    "Unlock exclusive digital solutions that include website development, social media management, and more, tailored to maximize your online impact.",
  li:"We make innovations meet strategies,", 
  li2: "Designs that transforms into a captivating experiences,",
  li3: "Every project is a journey of extraordinary possibilities.",
  buttonLabel: "Get started",
  imgStart: false,
  img: car,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "solutions",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Digital Marketing Strategies",
  headline: "Crafting your brand's success through targeted marketing solutions.",
  description:
    "From SEO to PPC, we deploy cutting-edge strategies to enhance your online visibility and drive sustainable growth.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: services,
  alt: "Papers",
  dark: false,
  primary: false,
  darkText: true,
};
