import {
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const content = [
  {
    name: "Youtube Video Description",
    icon: FaYoutube,
    des: "An AI tool that generates Youtube video description based on the title of the video.",
    aiPrompt:
      "Give me a youtube video description based on given video description",
    slug: "youtube-video-description",
    form: [
      {
        label: "Youtube video description title",
        field: "input",
        name: "jake",
        required: true,
      },
      {
        label: "Enter Youtube video description",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hashtags",
    des: "An AI tool that generates Instagram hashtags based on your post.",
    icon: FaInstagram,
    catogory: "Instagram",
    aiPrompt: "Give me some good Instagram hashtags based on given post",
    slug: "generate-instagram-hashtags",
    form: [
      {
        label: "Enter Your Post niche",
        field: "input",
        name: "jake",
        required: true,
      },
      {
        label: "Enter Post Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Tiktok hashtags",
    des: "An AI tool that generates Tiktok Topic based on your post.",
    catogory: "Tiktok",
    icon: FaTiktok,
    aiPrompt: "Give me some good Tiktok hashtags based on given post",
    slug: "generate-tiktok-hashtags",
    form: [
      {
        label: "Enter Your Post niche",
        field: "input",
        name: "jake",
        required: true,
      },
      {
        label: "Enter Post Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Post Description",
    des: "An AI tool that generates LinkedIn Post idea based on your given description.",
    icon: FaLinkedin,
    catogory: "LinkedIn",
    aiPrompt: "Give me a LinkedIn post description based on given description",
    slug: "generate-linkedin-post",
    form: [
      {
        label: "Enter Your Post niche",
        field: "input",
        name: "jake",
        required: true,
      },
      {
        label: "Enter Post Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Tweet",
    des: "An AI tool that generates Tweet based on your given description.",
    icon: FaTwitter,
    catogory: "LinkedIn",
    aiPrompt:
      "Give me 280 characters of tweet example based on given description and outline the topic",
    slug: "generate-tweet",
    form: [
      {
        label: "Enter Your Post niche",
        field: "input",
        name: "jake",
        required: true,
      },
      {
        label: "Enter Post Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];