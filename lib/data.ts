import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'bhosale.hemant5241@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Hemant, I am reaching out to you because...'
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Hemant5241' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/hemant-bhosale' }
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react-native.svg',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        }
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.svg',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.svg',
        },
        {
            name: 'Three.js',
            icon: '/logo/threejs.svg',
        },
        {
            name: 'Netlify',
            icon: '/logo/netlify.svg',
        }
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Shiro.ai',
        slug: 'shiro-ai',
        techStack: ["React", "FastAPI", "PostgreSQL", "ChromaDB", "Celery", "Redis"],
        thumbnail: '/shiro.ai.gif',
        longThumbnail: '/shiro.ai.gif',
        images: ['/shiro.ai.gif'],
        sourceCode: 'https://github.com/Hemant5241/shiro.ai',
        year: 2026,
        description: `Graph-Augmented RAG Platform for Personalized Learning and Active Recall<br/><br/>An intelligent study platform leveraging Graph-Augmented RAG to convert static study materials into interactive quizzes, spaced-repetition flashcards, and epistemic mind maps.<br/><br/>Shiro.ai replaces passive reading with active recall tools. By extracting semantic concepts and relationships, it builds interactive 3D knowledge graphs from uploaded documents and videos.<br/><br/>The platform features a focused Pomodoro study room, active recall scratchpads, automated podcast generation, and Feynman technique evaluation to pinpoint logical gaps in user understanding.<br/><br/>A high-performance pipeline offloads heavy text processing and audio synthesis to background workers, ensuring a fast, responsive user experience on a sleek bento-grid dashboard.`,
        role: `Full-Stack · AI/ML Engineering`,
    },

    {
        title: 'Nike Zone',
        slug: 'nike-zone',
        techStack: ["React Native", "Tailwind CSS", "Framer Motion", "REACT ROUTER DOM"],
        thumbnail: '/nike.png',
        longThumbnail: '/nike.gif',
        images: ['/nike.png', '/nike.gif'],
        liveUrl: 'https://nike-shoe-zone.vercel.app',
        sourceCode: 'https://github.com/Hemant5241/nike-zone',
        year: 2024,
        description: `Nike Zone - A UX/UI Redesign<br/><br/>An immersive e-commerce experience featuring advanced filters, interactive 360-degree product views, and personalized recommendations. <br/><br/>This project involved a complete UX/UI overhaul of the Nike Zone website, focusing on enhancing the user journey from discovery.`,
        role: `UI/UX Design · Product Design`,
    },
    {
        title: 'You Type',
        slug: 'you-type',
        techStack: ["React", "Node.js", "Express", "MongoDB", "Zustand", "Tailwind"],
        thumbnail: '/youtype.png',
        longThumbnail: '/youtype.gif',
        images: ['/youtype.png', '/youtype.gif'],
        sourceCode: 'https://github.com/Hemant5241/you-type',
        year: 2026,
        description: `Full-Stack Minimalist Typing Platform<br/><br/>A minimalist typing speed test application featuring live WPM/accuracy analysis, user progress tracking, and performance analytics dashboards.<br/><br/>Traditional typing tests are cluttered. You Type provides a distraction-free, dark-themed interface focused entirely on flow, allowing users to measure raw speed without visual noise.<br/><br/>The application calculates character correctness, errors, and real-time words-per-minute (WPM) on 30-second intervals, saving performance data to a secure database via JSON Web Token authentication.<br/><br/>Historical progression is tracked and visualized through line and bar charts using Recharts, giving users a clear path to build muscle memory and analyze typing habits over time.`,
        role: `Full-Stack Engineering`,
    },
    {
        title: 'Consulting Finance',
        slug: 'consulting-finance',
        techStack: ["HTML5", "CSS3", "SCSS", "JavaScript", "jQuery"],
        thumbnail: '/quantica-tech-innovations.png',
        longThumbnail: '/quantica-tech-innovations.gif',
        images: ['/quantica-tech-innovations.png', '/quantica-tech-innovations.gif'],
        liveUrl: 'https://quantica-tech-innovations.netlify.app',
        sourceCode: 'https://github.com/Hemant5241/Quantica-Tech-Innovations',
        year: 2024,
        description: `Quantica Tech Innovations<br/><br/>A fully responsive, highly customizable website tailored for the modern corporate world and tech startups.<br/><br/>This project provides a robust foundation for building professional portfolios, agency websites, and corporate landing pages.<br/><br/>The site features a clean aesthetic, subtle animations, sticky navigation, and a strong visual hierarchy.<br/><br/>Built with a highly maintainable SASS preprocessor structure for easy theme customization and deployed seamlessly to Netlify.`,
        role: `Front-End Engineering`,
    },
    {
        title: 'PORTFOLIO - 02',
        slug: 'hemant-portfolio',
        techStack: ["Next.js", "TypeScript", "GSAP", "Lenis", "Tailwind", "Canvas API"],
        thumbnail: '/portfolio.png',
        longThumbnail: '/portfolio.gif',
        images: ['/portfolio.png', '/portfolio.gif'],
        sourceCode: 'https://github.com/Hemant5241/hemant-portfolio',
        year: 2026,
        description: `This portfolio<br/><br/>The site you're looking at right now. Built to feel like something. Built to mean something. Kept raw.<br/><br/>The cobbler's shoes. Every developer's portfolio is a statement about what they value — and most of them say nothing, because they play it safe.<br/><br/>The design language comes from Ray Gun magazine, underground zines, and street culture editorial: oversized type that bleeds off the edge, halftone grain across the surface, text that collides with imagery instead of sitting politely beside it.<br/><br/>Under the hood: Next.js App Router, GSAP with ScrollTrigger and SplitText driving every animation, Lenis for smooth scroll synced to GSAP's ticker, and a Canvas 2D waveform controller that ties the scroll narrative together. The grain texture is a 10-frame animated SVG cycling at 0.8 seconds. Built raw. Shipped with intent.`,
        role: `Design · Engineering`,
    },
    {
        title: 'THIS PORTFOLIO',
        slug: 'this-portfolio',
        techStack: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
        liveUrl: 'https://hemantbhosale.netlify.app',
        thumbnail: '/portfolio-2.png',
        longThumbnail: '/portfolio-2.png',
        images: ['/portfolio-2.png'],
        sourceCode: 'https://github.com/Hemant5241/portfolio-2.0-main',
        year: 2026,
        description: `This portfolio<br/><br/>The current, upgraded version of my personal portfolio. Built with a focus on high performance, modern design aesthetics, and smooth animations.<br/><br/>Features a clean UI and seamless page transitions, heavily utilizing Next.js for fast routing, combined with Tailwind CSS for styling and GSAP for micro-interactions and scroll animations.`,
        role: `Design · Engineering`,
    }
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer(Team Lead)',
        company: 'UptoSkills',
        duration: 'Jan 2026 - April 2026',
    },
    {
        title: 'Junior Full Stack Developer',
        company: 'FireFist Soutions',
        duration: 'May 2025 - Nov 2025',
    }
];
