import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import SearchForm from '../../components/SearchForm';
import GitHubAPI from '../../api/api';

import Header from '../../components/Header';

import { Container, DashboardContainer, Details, RepoDetails, ReposContainer, ReposHeader, SortContainer, SpaceDown, SpaceFollowers, SpaceName, UserInfo } from './styles.js';

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

    if (!user) {
      toast.error(`Nenhuma conta localizada com o GitHub Username: ${username}`)
    }

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

  return (
    <Container>
      <Header />
      <DashboardContainer>
        <h1>Dashboard</h1>
        <SearchForm onSearch={handleSearch} />
        {userRepos?.length > 0 && (
          <ReposContainer>
            <ReposHeader>
              <UserInfo>
                <Details>
                  <SpaceName>
                    <img src={userData.avatar_url} alt={userData.name} />
                    <p>Name: {userData.name}</p>
                  </SpaceName>
                  <p>Bio: {userData.bio}</p>
                  {userData.email && (<p>Email: {userData.email}</p>)}
                  <SpaceDown>
                    <SpaceFollowers>
                      <p>Followers: {userData.followers}</p>
                      <p>Following: {userData.following}</p>
                    </SpaceFollowers>
                    <SortContainer>
                      <label htmlFor="sortOrder">Sort by stars:</label>
                      <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                      </select>
                    </SortContainer>
                  </SpaceDown>
                </Details>
              </UserInfo>
            </ReposHeader>
            <ul>
              {userRepos.map((repo, index) => (
                <li key={repo.id}>
                  <Link to={`/dashboard/${repo.owner.login}/repos/${repo.name}`}>
                    {index + 1} - {repo.name} - Stars: {repo.stargazers_count}
                  </Link>
                </li>
              ))}
            </ul>
          </ReposContainer>
        )}
      </DashboardContainer>
    </Container>
  );
};

export default Dashboard;
