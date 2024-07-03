import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import GitHubAPI from '../../api/api';
import './styles.css';

const Dashboard = () => {

  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSearch = async (username) => {

    const [user, repos] = await Promise.all([
      await GitHubAPI.getUserDetails(username),
      await GitHubAPI.getUserRepos(username)
    ]);

    setUserData(user || []);

    setUserRepos(sortRepos(repos, 'desc') || []);
  };

  const handleRepoClick = async (repo) => {
    if (selectedRepo && selectedRepo.id === repo.id) {
      return setSelectedRepo(null);
    }

    const repoDetails = await GitHubAPI.getRepoDetails(repo.full_name);

    setSelectedRepo({
      ...repo,
      details: repoDetails
    });
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

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <SearchForm onSearch={handleSearch} />
      {userRepos?.length > 0 ? (
        <div className="repos-container">
          <div className="repos-header">
            <div className="user-info">
              <div className='details'>
                <div className="space-name">
                  <img src={userData.avatar_url} alt={userData.name} />
                  <p>Name: {userData.name}</p>
                </div>
                <p>Bio: {userData.bio}</p>
                {userData.email && (<p>Email: {userData.email}</p>)}
                <div className="space-down">
                  <div className="space-followers">
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                  </div>
                  <div className="sort-container">
                    <label htmlFor="sortOrder">Sort by stars:</label>
                    <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                      <option value="desc">Descending</option>
                      <option value="asc">Ascending</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul>
            {userRepos.map((repo, index) => (
              <li key={repo.id}>
                <div onClick={() => handleRepoClick(repo)}>
                  {index + 1} - {repo.name} - Stars: {repo.stargazers_count}
                </div>
                {selectedRepo && selectedRepo.id === repo.id && selectedRepo.details && (
                  <div className="repo-details">
                    <p>Name: {selectedRepo.details.name}</p>
                    <p>Description: {selectedRepo.details.description}</p>
                    <p>Stars: {selectedRepo.details.stargazers_count}</p>
                    <a href={selectedRepo.details.html_url} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>Nenhum usuário localizado</h1>
      )}
    </div>
  );
};

export default Dashboard;
