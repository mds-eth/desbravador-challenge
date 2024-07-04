import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GitHubAPI from '../../api/api.js';
import Header from '../../components/Header/index.jsx';
import './styles.js';
import { Container, DashboardContainer, Details, RepoDetailsComponent, ReposContainer, ReposHeader, SortContainer, SpaceDown, SpaceFollowers, SpaceName, UserInfo } from './styles.js';

const RepoDetails = () => {

  const { username, repoName } = useParams();
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const user = await GitHubAPI.getUserDetails(username);
        setUserData(user || {});

        const repoDetails = await GitHubAPI.getRepoDetails(repoName);
        setSelectedRepo(repoDetails || null);
      } catch (error) {
        toast.error(`Erro ao buscar dados: ${error.message}`);
      }
    };

    fetchData();
  }, [username, repoName, sortOrder]);

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
        <h1>Repo Details</h1>
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
            {selectedRepo && (
              <RepoDetailsComponent>
                <p>Name: {selectedRepo.name}</p>
                <p>Language: {selectedRepo.language}</p>
                <p>Description: {selectedRepo.description}</p>
                <p>Stars: {selectedRepo.stargazers_count}</p>
                <a href={selectedRepo.html_url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </RepoDetailsComponent>
            )}
          </ReposContainer>
        )}
      </DashboardContainer>
    </Container>
  );
};

export default RepoDetails;
