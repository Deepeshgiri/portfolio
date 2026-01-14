import axios from 'axios';

// GitHub API service
export const fetchGitHubData = async (username = 'Deepeshgiri') => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      axios.get(`https://api.github.com/users/${username}`),
      axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
    ]);

    const user = userResponse.data;
    const repos = reposResponse.data;

    const languages = {};
    const topRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3)
      .map(repo => ({
        name: repo.name,
        description: repo.description || 'No description available',
        stars: repo.stargazers_count,
        language: repo.language,
        url: repo.html_url
      }));

    repos.forEach(repo => {
      if (repo.language && !repo.fork) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    return {
      username: user.login,
      name: user.name || user.login,
      bio: user.bio || 'Full Stack Developer',
      url: user.html_url,
      avatar: user.avatar_url,
      repositories: user.public_repos,
      followers: user.followers,
      following: user.following,
      location: user.location,
      company: user.company,
      languages: Object.keys(languages).slice(0, 5),
      topRepos,
      createdAt: user.created_at
    };
  } catch (error) {
    console.error('GitHub API Error:', error);
    return null;
  }
};

export const fetchLinkedInData = async () => {
  return {
    name: "Deepesh Kumar Giri",
    headline: "Full Stack Developer | SDE at Pinnaclo EduCare",
    url: "https://www.linkedin.com/in/deepesh-giri/",
    connections: "500+",
    location: "Sangrur, Punjab, India"
  };
};