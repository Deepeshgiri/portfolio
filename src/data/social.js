// Social media data structure - ready for API integration
export const socialData = {
  linkedin: {
    name: "Deepesh Kumar Giri",
    headline: "Full Stack Developer | SDE at Pinnaclo EduCare | Node.js • React • Angular Expert",
    summary: "Passionate Full Stack Developer with 4+ years of experience building scalable web applications. Currently working as SDE at Pinnaclo EduCare, specializing in Node.js, React, Angular, and cloud technologies. Active contributor to open-source projects with 15+ GitHub repositories.",
    url: "https://www.linkedin.com/in/deepesh-giri/",
    connections: "500+",
    location: "Sangrur, Punjab, India"
  },
  
  instagram: {
    username: "_deepesh_giri",
    url: "https://www.instagram.com/_deepesh_giri/",
    bio: "Full Stack Developer 💻 | Tech Enthusiast 🚀 | Code • Create • Innovate",
    posts: [
      {
        id: 1,
        image: "/images/programming.jpg",
        caption: "Working on exciting new projects! #coding #webdev #react",
        likes: 45,
        date: "2024-01-15"
      },
      {
        id: 2,
        image: "/images/side1.jpg",
        caption: "Another day, another commit 🚀 #developer #nodejs #javascript",
        likes: 32,
        date: "2024-01-10"
      },
      {
        id: 3,
        image: "/images/sidepic.jpg",
        caption: "Building the future, one line of code at a time ⚡ #fullstack #programming",
        likes: 28,
        date: "2024-01-05"
      }
    ],
    followers: 250,
    following: 180
  },
  
  facebook: {
    name: "Deepesh Kumar Giri",
    url: "https://www.facebook.com/profile.php?id=100006703937621",
    bio: "Software Development Engineer passionate about creating innovative web solutions",
    location: "Sangrur, Punjab",
    work: "SDE at Pinnaclo EduCare",
    education: "BTech Computer Science - MRSPTU",
    friends: 500,
    posts: [
      {
        id: 1,
        content: "Excited to share my latest project - a full-stack food ordering platform built with MERN stack! 🚀",
        likes: 25,
        comments: 8,
        date: "2024-01-12"
      },
      {
        id: 2,
        content: "Just completed another milestone in my development journey. Always learning, always growing! 💻",
        likes: 18,
        comments: 5,
        date: "2024-01-08"
      }
    ]
  },
  
  github: {
    username: "Deepeshgiri",
    url: "https://github.com/Deepeshgiri",
    bio: "Full Stack Developer | Node.js • React • Angular • MongoDB",
    repositories: 15,
    followers: 25,
    following: 30,
    contributions: 150,
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
    topRepos: [
      {
        name: "food-order-frontend",
        description: "React-based food ordering platform with modern UI",
        stars: 5,
        language: "JavaScript",
        url: "https://github.com/Deepeshgiri/food-order-frontend"
      },
      {
        name: "food-order-backend",
        description: "Node.js backend for food ordering system with MongoDB",
        stars: 3,
        language: "JavaScript",
        url: "https://github.com/Deepeshgiri/food-order-backend"
      },
      {
        name: "chat-app",
        description: "Real-time chat application using Socket.io",
        stars: 4,
        language: "JavaScript",
        url: "https://github.com/Deepeshgiri/chat-app"
      }
    ]
  }
};

// API integration functions (ready for future implementation)
export const fetchLinkedInProfile = async () => {
  // TODO: Implement LinkedIn API integration
  return socialData.linkedin;
};

export const fetchInstagramPosts = async () => {
  // TODO: Implement Instagram Basic Display API
  return socialData.instagram.posts;
};

export const fetchFacebookProfile = async () => {
  // TODO: Implement Facebook Graph API
  return socialData.facebook;
};

export const fetchGitHubStats = async () => {
  // TODO: Implement GitHub API integration
  return socialData.github;
};