import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

export const SOCIAL_MEDIA = [
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/abutahermuhammad/",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    url: "https://github.com/abutahermuhammad",
  },
  {
    icon: <FaMediumM />,
    title: "Medium",
    url: "https://abutaher-muhammad.medium.com/",
  },
  {
    icon: <FaBehance />,
    title: "Behance",
    url: "https://www.behance.net/abut10812466",
  },
];

export const NAVBAR_ROUTES = [
  // {
  //     _id: 'NR001',
  //     title: 'Home',
  //     url: '/'
  // },
  // {
  //   _id: "NR002",
  //   title: "ABOUT",
  //   url: "/about",
  // },
  {
    _id: "NR003",
    title: "WORK",
    url: "/work",
  },
  {
    _id: "NR004",
    title: "BLOG",
    url: "/article",
  },
];
