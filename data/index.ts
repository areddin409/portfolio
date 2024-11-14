export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" }
]

export const gridItems = [
  {
    id: 1,
    title:
      "I transform complex technical challenges into elegant solutions through collaborative development",

    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg", // Keeping the earth/laptop image
    spareImg: ""
  },
  {
    id: 2,
    title: "Experience working with distributed teams",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "", // Keeping the globe visual theme
    spareImg: ""
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg"
  },
  {
    id: 5,
    title: "Currently architecting scalable web solutions",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg", // Keeping the code visual
    spareImg: "/grid.svg"
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: ""
  }
]

export const projects = [
  {
    id: 1,
    title: "Lexamica Landing Page",
    des: "A modern, performant landing page built with React and TypeScript, featuring ThreeJS animations and dynamic content management. Implemented responsive design and optimized load times with Next.js, resulting in a 95+ Lighthouse score.",

    img: "/Lexamica_preview.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://www.lexamica.com",
    cardTitle: "/lexamica.com"
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com"
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com"
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com"
  }
]

export const testimonials = [
  {
    quote:
      "Andrew's leadership on our SaaS platform was exceptional. His technical expertise in Next.js and React, combined with his strategic thinking, helped us build a system that processes millions in transactions flawlessly. His ability to understand our business needs and translate them into technical solutions was invaluable.",
    name: "Jonanthan Taylor",
    title: "CTO, Lexamica"
  },
  {
    quote:
      "During his time at NextStep, Andrew pioneered our VR training program for military applications, showing remarkable innovation and technical skill. His ability to bridge the gap between complex military requirements and cutting-edge technology resulted in a transformative training solution. His work set new standards for our development practices.",
    name: "Britton Scritchfield",
    title: "Director - PEC"
  },
  {
    quote:
      "Andrew's expertise in ETL and DevOps transformed our data management processes. His implementation of automated workflows significantly improved our efficiency and data accuracy. He has a rare combination of technical depth and clear communication that makes him an exceptional engineer to work with.",
    name: "Chris Richard",
    title: "Senior Developer, Merkle"
  },
  {
    quote:
      "Andrew's work on our CRM system for the Army National Guard demonstrated his ability to deliver mission-critical solutions. His attention to detail and commitment to excellence ensured that our systems met the highest standards of reliability and security. He's an asset to any development team.",
    name: "Caleb Trachet",
    title: "Supervisor, NextStep Technology"
  }
]
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg"
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg"
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg"
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg"
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg"
  }
]

export const workExperience = [
  {
    id: 1,
    title: "Lead Front End Engineer - Lexamica",
    desc: "Led development of attorney referral platform serving 400+ law firms, implementing automated fee-sharing system processing $1M+ monthly transactions. Architected scalable solutions using Next.js, TypeScript, and AWS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  },
  {
    id: 2,
    title: "Software Engineer - NextStep Technology",
    desc: "Pioneered company's first VR training program for military applications while maintaining mission-critical CRM systems for the Army National Guard. Led full VR development lifecycle.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg"
  },
  {
    id: 3,
    title: "Developer Analyst - Merkle",
    desc: "Managed ETL transformations and DevOps processes, contributing to data-driven customer experiences and cloud architecture initiatives. Supported ML/AI projects.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg"
  },
  {
    id: 4,
    title: "Fire Controlman - US Navy",
    desc: "Managed complex combat systems maintenance and troubleshooting, overseeing equipment valued at $1M+. Led mission-critical system operations and maintenance teams.",
    className: "md:col-span-2",
    thumbnail: "/navy.png"
  }
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.github.com/areddin409"
  },
  // {
  //   id: 2,
  //   img: "/twit.svg"
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/andrew-reddin/"
  }
]
