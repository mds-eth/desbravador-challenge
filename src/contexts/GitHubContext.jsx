import { createContext, useContext, useState } from 'react';

const GitHubContext = createContext();

import { toast } from 'react-toastify';

import GitHubAPI from '../api/api';

export const GitHubProvider = ({ children }) => {

  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  const [selectedRepo, setSelectedRepo] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');

  const [loading, setLoading] = useState(false);

  const handleSearchUserGitHub = async (userName) => {

    setLoading(true);

    const [user, repos] = await Promise.all([
      await GitHubAPI.getUserDetails(userName),
      await GitHubAPI.getUserRepos(userName)
    ]);

    setUserData(user || []);

    if (!user) {
      toast.error(`Nenhuma conta localizada com o GitHub Username: ${userName}`)
    }

    setLoading(false);
    setUserName(userName);
    setUserRepos(sortRepos(repos, 'desc') || []);
  };

  const handleSortChange = async (event) => {

    const newOrder = event.target.value;
    setSortOrder(newOrder);

    if (userData) {
      const repos = await GitHubAPI.getUserRepos(userData.login);
      const sortedRepos = sortRepos(repos, newOrder);
      setUserRepos(sortedRepos);
      setSelectedRepo(null);
    }
  };

  const sortRepos = (repos, order) => {
    return repos?.sort((a, b) => {
      if (order === 'asc') {
        return a.stargazers_count - b.stargazers_count;
      }
      return b.stargazers_count - a.stargazers_count;
    });
  };

  const handleRepoClick = (repoName) => {
    setSelectedRepo(userRepos.find((repo) => repo.name === repoName) || null);
  };

  return (
    <GitHubContext.Provider value={{
      loading,
      userData,
      userRepos,
      sortOrder,
      selectedRepo,
      userName,
      handleRepoClick,
      handleSortChange,
      setUserRepos,
      handleSearchUserGitHub
    }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHubContext = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error('useGitHubContext must be used within a GitHubProvider');
  }
  return context;
};