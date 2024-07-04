import React from 'react';

import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';

import SearchForm from '@components/SearchForm';
import Header from '@components/Header';

import { useGitHubContext } from '@contexts/GitHubContext';

import {
  Container,
  DashboardContainer,
  Details,
  ReposContainer,
  ReposHeader,
  SortContainer,
  SpaceDown,
  SpaceFollowers,
  SpaceName,
  UserInfo
} from './styles';

const Dashboard = () => {

  const {
    loading,
    userData,
    userRepos,
    sortOrder,
    handleRepoClick,
    handleSortChange,
    handleSearchUserGitHub
  } = useGitHubContext();

  return (
    <Container>
      <Header />
      <DashboardContainer>
        <h1>Dashboard</h1>
        <SearchForm onSearch={handleSearchUserGitHub} />
        {loading ? (
          <Skeleton count={5} />
        ) : (
          userRepos?.length > 0 && (
            <ReposContainer>
              <ReposHeader>
                <UserInfo>
                  <Details>
                    <SpaceName>
                      <img src={userData?.avatar_url} alt={userData?.name} />
                      <p>Name: {userData?.name || '---'}</p>
                    </SpaceName>
                    <p>Bio: {userData?.bio || '---'}</p>
                    {userData?.email && (<p>Email: {userData?.email || '---'}</p>)}
                    <SpaceDown>
                      <SpaceFollowers>
                        <p>Followers: {userData?.followers || '---'}</p>
                        <p>Following: {userData?.following || '---'}</p>
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
                    <Link
                      to={`/dashboard/${repo.owner.login}/repos/${repo.name}`}
                      onClick={() => handleRepoClick(repo.name)}
                    >
                      {index + 1} - {repo.name} - Stars: {repo.stargazers_count}
                    </Link>
                  </li>
                ))}
              </ul>
            </ReposContainer>
          )
        )}
      </DashboardContainer>
    </Container>
  );
};

export default Dashboard;
