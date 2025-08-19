export interface Project {
  title: string;
  desc: string;
  viewPost?: string;
  preview?: string;
  tech_stacks: string[];
  repo_url: string;
  live_demo?: string;
  role: string;
  achievements: string;
  screenshots?: string[];
  category: string;
  status?: string;
  section: "web2" | "web3";
  features?: string[];
}

export const projects: Project[] = [
  {
    title: "IntrRaCLI",
    desc: "A CLI File Explorer with Rust using Crossterm and Ratatui, with directory navigation and file content preview.",
    tech_stacks: ["Rust", "Crossterm", "Ratatui", "WalkDir"],
    repo_url: "https://github.com/BiMalxMe/IntrRaCLI",
    role: "CLI Tool Dev",
    achievements: "Implemented directory traversal and file preview in a TUI.",
    category: "CLI Tool",
    status: "Completed",
    section: "web2",
    viewPost: "https://www.linkedin.com/posts/bimalxme_rustlang-terminalui-tui-activity-7334488841136857088-kp4M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI",
    features: ["Copy files", "Delete files", "Create files", "Rename files", "Navigate directories"],
  },
  {
    title: "AI Text-to-Image Generator",
    desc: "An interactive web app that generates images from user-provided text prompts using state-of-the-art AI models integrated via API.",
    viewPost: "Built an AI-powered Text-to-Image Generator with FastAPI backend and Next.js frontend! Create stunning images from simple text prompts. #AI #FullStack #Nextjs",
    tech_stacks: [
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Clerk",
      "Hugging Face API",
      "Docker",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT Authentication",
      "React-Toastify",
      "Paypal"
    ],
    repo_url: "https://github.com/BiMalxMe/TextToImage-SaaS",
    live_demo: "https://bimalxgenerate.vercel.app",
    role: "Full-Stack Dev",
    achievements: "Developed a full-stack AI-powered image generator with user authentication, image caching, and multi-model support.",
    category: "AI & Web Application",
    status: "Completed",
    section: "web2",
    features: [
      "Text-to-image generation",
      "FastAPI backend",
      "Next.js frontend",
      "User authentication",
      "Image caching",
      "Multiple model support"
    ]
  },
  {
    title: "Medium",
    desc: "A Full Stack Project Made for sharing data across the platform without any unease",
    tech_stacks: ["Nodejs","Postgres", "Cloudflare", "React", "Tailwind"],
    repo_url: "https://github.com/BiMalxMe/Medium-Full-Stack",
    role: "Full Stack Dev",
    achievements: "Implemented blog creation, sharing, and communication features.",
    category: "Web App",
    status: "Completed",
    section: "web2",
    features: ["Make Blogs", "Share Blog", "Communicate"],
    live_demo: "https://bimalxmedium.vercel.app/",
    viewPost: "https://www.linkedin.com/posts/bimalxme_github-bimalxmetexttoimage-saas-activity-7317131411314868224-GWtA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "The paytm project",
    desc: "A Full Stack Project Made Transferring Demo Money Throughout the WebApp",
    tech_stacks: ["Nodejs", "Mongoose", "React", "Tailwind","zod"],
    repo_url: "https://github.com/BiMalxMe/The-paytm-project",
    role: "Full Stack Dev",
    achievements: "Implemented safe transaction Handling failing errors.",
    category: "Web App",
    status: "Completed",
    section: "web2",
    features: ["Create Account", "Transfer Money", "ACID"],
  },
  {
    title: "URL Shortener",
    desc: "Developed a high-performance URL shortener with a REST API backend using Node.js, Express, and Redis, featuring Base62 encoding for short URLs.",
    tech_stacks: [
      "Node.js",
      "Express",
      "Redis",
      "TypeScript",
      "Base62 Encoding",
      "Vercel"
    ],
    repo_url: "https://github.com/BiMalxMe/urlShortner",
    role: "Full-Stack Dev",
    achievements: "Creation",
    category: "Backend / DevOps",
    status: "Completed",
    section: "web2",
    features: [
      "Base62 short URLs",
      "Redis storage",
      "REST API",
      "Stateless backend",
      "Simple frontend",
      "Vercel deploy"
    ],
    live_demo: "https://bimalxshorten.vercel.app",
    viewPost: "https://www.linkedin.com/posts/bimalxme_redis-web3-developertools-activity-7346172046390837248-x69C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "Rust Learning Collection",
    desc: "A collection of Rust command-line tools and learning experiments to explore core Rust concepts like ownership, lifetimes, async processing, and terminal UI.",
    tech_stacks: [
      "Rust",
      "chrono",
      "tokio",
      "ratatui",
      "crossterm"
    ],
    repo_url: "https://github.com/BiMalxMe/Rust",
    role: "Rust Dev",
    achievements: "Creation",
    category: "CLI / Learning Tools",
    status: "Completed",
    section: "web2",
    features: [
      "Date-difference calculator using `chrono`",
      "To-do CLI with add, list, complete tasks",
      "Async log generator using `tokio` for concurrent file writes",
      "Math quiz with timer and random operations",
      "TUI todo viewer with live updates using `ratatui` & `crossterm`"
    ],
  },
  {
    title: "Basic Chat Site",
    desc: "A Full Stack Project Made for chatting with people in a good UI",
    tech_stacks: ["Nodejs","Websockets", "Typescript", "React", "Tailwind","zod"],
    repo_url: "https://github.com/BiMalxMe/BasicChatSite",
    role: "Full Stack Dev",
    achievements: "Implement Cross platform Chatting",
    category: "Web App",
    status: "Completed",
    section: "web2",
    features: ["Create Room", " Chat", "Cache"],
  },
  {
    title: "Second Brain ",
    desc: "A Full Stack Project Made for storing the link of social media for remebering",
    tech_stacks: ["Nodejs","Mongoose", "Typescript", "React", "Tailwind","zod","jwt"],
    repo_url: "https://github.com/BiMalxMe/SecondBrainApp",
    role: "Full Stack Dev",
    achievements: "Storing",
    category: "Web App",
    status: "Completed",
    section: "web2",
    features: ["Copy Link", " Add in This page", "See in future"],
  },
  {
    title: "Decentralized Uptime Monitoring (Uptime Analyser)",
    desc: "A backend hub coordinating decentralized validators to monitor website uptime via WebSockets, cryptographic authentication, and secure results logging.",
    tech_stacks: [
      "Bun runtime",
      "TypeScript",
      "WebSocket",
      "PostgreSQL",
      "Prisma ORM",
      "TweetNaCl",
      "@solana/web3.js",
      "Clerk",
      "Monorepo"
    ],   
    repo_url: "https://github.com/BiMalxMe/DecentralizedUptime",
    role: "Backend & Blockchain Dev",
    achievements: "Uptime",
    category: "Web3 / Blockchain",
    section: "web3",
    features: [
      "WebSocket validator nodes",
      "Signature-based auth",
      "TweetNaCl & Solana verification",
      "Bun + TypeScript backend",
      "PostgreSQL + Prisma ORM",
      "Real-time hub coordination"
    ],
    viewPost: "https://www.linkedin.com/posts/bimalxme_decentralized-web3-infrastructure-activity-7361036134396624896-o-Vh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "Solana Staking dApp",
    desc: "A decentralized staking application on Solana that enables users to stake tokens, earn rewards, and manage their stakes securely.",
    tech_stacks: ["Rust","Anchor", "Solana", "Tailwind", "Phantom","Nodejs"],
    repo_url: "https://github.com/BiMalxMe/Stake-Program",
    role: "Web3 Dev",
    achievements: "Staking",
    category: "Web3 / Blockchain",
    status: "Completed",
    section: "web3",
    features: [
      "Stake and unstake SOL tokens",
      "Earn real-time rewards",
      "Phantom wallet integration",
      "Secure Solana smart contracts with Anchor",
      "User-friendly frontend",
      "Responsive design with Tailwind CSS",
      "Deployed on Solana devnet"
    ],
    live_demo: "https://bimalxstake.vercel.app",
    viewPost: "https://www.linkedin.com/posts/bimalxme_solana-web3-blockchain-activity-7354422661982081024-Ru6E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "Crowdfunding dApp",
    desc: "A crowdfunding dApp on Solana allowing users to create campaigns and contribute funds securely and transparently on-chain.",
    tech_stacks: ["Rust","Anchor", "Solana", "Tailwind", "Phantom","Nodejs"],
    repo_url: "https://github.com/BiMalxMe/CrowdFunding-Dapp",
    role: "Web3 Dev",
    achievements: "Funding",
    category: "Web3 / Blockchain",
    status: "Completed",
    section: "web3",
    features: [
      "Solana smart contracts with Anchor",
      "Create and fund campaigns",
      "Wallet integration with Phantom",
      "Real-time campaign updates",
      "Next frontend with Tailwind CSS",
      "Deployed on Solana devnet"
    ],
    live_demo: "https://bimalxfund.vercel.app",
    viewPost: "https://www.linkedin.com/posts/bimalxme_solana-web3-blockchain-activity-7357710542129532928-Uf48?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "Solana Token Vesting dApp",
    desc: "A token vesting platform on Solana that manages gradual token releases to beneficiaries securely via smart contracts.",
    tech_stacks: ["Rust","Anchor", "Solana", "Tailwind", "Phantom","Nodejs"],
    repo_url: "https://github.com/BiMalxMe/Token-Vesting",
    role: "Web3 Dev",
    achievements: "Vesting",
    category: "Web3 / Blockchain",
    status: "Completed",
    section: "web3",
    features: [
      "Create and manage vesting schedules",
      "Automatic token release over time",
      "Phantom wallet integration",
      "Smart contracts built with Anchor",
      "Clean Next frontend with Tailwind CSS",
      "Real-time vesting status ",
      "Deployed on Solana localnet"
    ],
    viewPost: "https://www.linkedin.com/posts/bimalxme_solana-web3-blockchain-activity-7360642197249032192-Yioz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "Solana CPI Wrapper with Native Counter Program",
    desc: "Built a Solana program using Anchor that acts as a CPI (Cross-Program Invocation) wrapper around a native Solana counter program, enabling increment, doubling, and halving of a counter via secure on-chain instructions.",
    tech_stacks: [
      "Rust",
      "Anchor Framework",
      "Solana",
      "Borsh Serialization",
      "Solana Program Library (SPL)",
      "Solana CLI & Devnet",
      "TypeScript (for frontend integration)"
    ],    
    repo_url: "https://github.com/BiMalxMe/ProxyCPI",
    role: "Web3 Dev",
    achievements: "Staking",
    category: "Web3 / Blockchain",
    status: "Completed",
    section: "web3",
    features: [
      "CPI calls to native Solana program",
      "Init, double, half counter ops",
      "Account creation & rent exempt",
      "Borsh serialization",
      "Anchor error handling",
      "Devnet ready & tested"
    ],
  },
  {
    title: "Solana Voting dApp",
    desc: "A decentralized voting platform on Solana allowing users to create polls and securely cast votes with transparent results.",
    tech_stacks: ["Rust","Anchor", "Solana", "Tailwind", "Phantom","Nodejs","Blinks"],
    repo_url: "https://github.com/BiMalxMe/Voting-Dapp",
    role: "Web3 Dev",
    achievements: "Staking",
    category: "Web3 / Blockchain",
    status: "Completed",
    section: "web3",
    features: [
      "Create and manage polls",
      "Secure, transparent on-chain voting",
      "Phantom wallet authentication",
      "Smart contracts developed with Anchor",
      "Next frontend with Tailwind CSS",
      "Real-time vote tally and results",
      "Built using Blinks framework for streamlined Solana dev",
      "Deployed on Solana devnet"
    ],
    viewPost: "https://www.linkedin.com/posts/bimalxme_solana-solana-anchorlang-activity-7349349231352029185-Cc2T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "Solana Cloud Wallet",
    desc: "Developed a cloud-based Solana wallet that generates keypairs, stores private keys in MongoDB, and signs transactions server-side for secure, headless interactions with the Solana devnet.",
    tech_stacks: [
      "Node.js",
      "Express",
      "MongoDB",
      "Solana Web3.js",
      "Alchemy",
      "Docker"
    ],    
    repo_url: "https://github.com/BiMalxMe/SOLCloudWallet",
    role: "Web3 ClientSide Dev",
    achievements: "Creation",
    category: "Web3 / Blockchain",
    status: "Completed",
    section: "web3",
    features: [
      "Generates Solana keypairs server-side",
      "Stores private keys securely in MongoDB",
      "Signs transactions without frontend wallet integration",
      "Validates and broadcasts transactions via REST APIs",
      "Built with Alchemy for Devnet access",
      "Dockerized backend with MongoDB instance"
    ],
    viewPost: "https://www.linkedin.com/posts/bimalxme_solana-blockchaindevelopment-web3-activity-7342479464729092096-a1tu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "TokenLaunchpad",
    desc: "Developed a user-friendly Solana-based token launchpad that enables users to mint custom SPL tokens with metadata and mint them directly to their wallet without using the CLI.",
    tech_stacks: [
      "Solana Web3.js",
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    repo_url: "https://github.com/BiMalxMe/TokenLaunchpad",
    role: "Web3 ClientSide Dev",
    achievements: "Creation",
    category: "Web3 / Blockchain",
    status: "Completed",
    section: "web3",
    features: [
      "Create SPL tokens ",
      "Customize token name, symbol, and metadata URI",
      "Instantly mint tokens to user wallet",
      "Built with React and Solana Web3.js",
      "No CLI required for token creation",
      "Deployed on Solana Devnet"
    ],
    viewPost: "https://www.linkedin.com/posts/bimalxme_solana-blockchain-web3-activity-7338112787061071875-ELVk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "Solana Coin Flip Game",
    desc: "A client-side Solana coin flip demo where users connect a wallet on Devnet, place bets, and play with animated flips and win/loss payouts.",
    tech_stacks: [
      "React",
      "Solana Wallet Adapter",
      "Solana Web3.js",
      "Tailwind CSS",
      "Axios"
    ],
    repo_url: "https://github.com/BiMalxMe/Solana-CoinFlip-Game",
    live_demo: "https://bimalxflip.vercel.app",
    role: "Full Stack Dev",
    achievements: "Creation",
    category: "Web3 / Blockchain",
    status: "Completed",
    section: "web3",
    features: [
      "Connect Phantom & Solflare wallets",
      "Fetch SOL balance from Devnet",
      "Place simulated bets (0.1–1 SOL)",
      "Animated coin flip with random result",
      "Payout calculation with 0.3% platform fee",
      "React UI styled with TailwindCSS"
    ],
    viewPost: "https://www.linkedin.com/posts/bimalxme_solana-web3-blockchain-activity-7345822503149137921-dHKQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFTpivIBeq93-Nbc3ptFIQbb-4JdPUXjQiI"
  },
  {
    title: "The-Python: Data Analysis & Python Projects Series",
    desc: "A Python series where I learned data analysis with Numpy, Pandas, Matplotlib, and Seaborn, then built real projects like a desktop Todo app, web scrapers, and automation tools. Everything is organized in easy-to-follow Jupyter notebooks and Python scripts, making it practical and beginner-friendly.",
    tech_stacks: [
      "Python",
      "Jupyter Notebook",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "SQL",
      "Tkinter",
      "BeautifulSoup",
      "Requests"
    ],
    repo_url: "https://github.com/BiMalxMe/The-Python",
    role: "Python Dev",
    achievements: "Learning",
    category: "Learning / Data Analysis / Python Apps",
    status: "Completed",
    section: "web2",
    features: [
      "7-day structured Python learning",
      "Covers Numpy, Pandas, Matplotlib, Seaborn",
      "SQL basics & data viz projects",
      "Tkinter Todo desktop app",
      "Web scraping with BeautifulSoup & Requests",
      "Automation tools & Python utilities",
      "Jupyter Notebooks & scripts for easy learning"
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/BiMalxMe",
    icon: "Github",
  },
  {
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/bimal-chalise-52a114339/",
    icon: "Linkedin",
  },
  {
    name: "Twitter",
    url: "https://x.com/BiMalxMe",
    icon: "Twitter",
  },
  {
    name: "Email",
    url: "mailto:journeyxbimal@gmail.com",
    icon: "Mail",
  }
];