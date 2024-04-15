//Mock data representing e-learning courses information grouped by topics

import fraudPrevention from "../assets/fraud_prevention.png";
import itSecurity from "../assets/it_security.png";
import dataProtection from "../assets/data_protection.png";
import wphg from "../assets/wphg.png";

export const mockData = [
  {
    courseGroup: "Money Laundering and Fraud Prevention",
    image: fraudPrevention,
    courses: [
      {
        title:
          "Intensification of money laundering prevention - private customer advice",
        duration: "30min",
        progress: 3,
        text: "-",
      },
      {
        title:
          "Basic Training - Prevention of Money Laundering and Terrorist Financing (V3.0)",
        duration: "44min",
        progress: 0,
        text: "-",
      },
      {
        title:
          "Advanced Training - Prevention of Money Laundering and Terrorist Financing (V3.0)",
        duration: "22min",
        progress: 0,
        text: "-",
      },
    ],
  },
  {
    courseGroup: "IT security and information security",
    image: itSecurity,
    courses: [
      {
        title: "IT security basics (V1.01.3)",
        duration: "40min",
        progress: 0,
        text: "March 14, 2024",
      },
      {
        title: "Basic training IT security and information security (V1.0)",
        duration: "60min",
        progress: 3,
        text: "-",
      },
      {
        title: "Advanced Training IT Security and Information Security (V1.1)",
        duration: "29min",
        progress: 0,
        text: "-",
      },
    ],
  },
  {
    courseGroup: "Data Protection",
    image: dataProtection,
    courses: [
      {
        title: "Basic training data protection (V2.0)",
        duration: "0min",
        progress: 0,
        text: "-",
      },
      {
        title: "Privacy Basics (V1.00.2)",
        duration: "40min",
        progress: 0,
        text: "-",
      },
      {
        title: "In-depth training on data protection (V1.0)",
        duration: "51min",
        progress: 0,
        text: "-",
      },
      {
        title: "Privacy Basics 1.0",
        duration: "40min",
        progress: 3,
        text: "-",
      },
    ],
  },
  {
    courseGroup: "WpHG-Compliance",
    image: wphg,
    courses: [
      {
        title: "WpHG compliance basics (V1.00.3)",
        duration: "30min",
        progress: 0,
        text: "-",
      },
      {
        title: "In-depth WpHG -sales representative (V1.00.2)",
        duration: "30min",
        progress: 0,
        text: "-",
      },
    ],
  },
];
