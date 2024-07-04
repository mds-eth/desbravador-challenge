import React from 'react';

import { useNavigate } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa";

import Header from '@components/Header/index';
import Tooltip from '@components/Tooltip';

import { useGitHubContext } from '@contexts/GitHubContext';

import {
  Container,
  DashboardContainer,
  Details,
  HeaderRepoDetails,
  RepoDetailsComponent,
  ReposContainer,
  ReposHeader,
  SpaceDown,
  SpaceFollowers,
  SpaceName,
  UserInfo
} from './styles';

const RepoDetails = () => {

  const navigate = useNavigate();

  const { userData, selectedRepo } = useGitHubContext();

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  return (
    <Container>
      <Header />
      <DashboardContainer>
        <HeaderRepoDetails>
          <Tooltip content="Voltar">
            <FaArrowLeft onClick={handleBackClick} style={{ cursor: 'pointer' }} />
          </Tooltip>
          <h1>Repo Details</h1>
          <div />
        </HeaderRepoDetails>
        <ReposContainer>
          <ReposHeader>
            <UserInfo>
              <Details>
                <SpaceName>
                  {userData && <img src={userData?.avatar_url} alt={userData?.name} />}
                  <p>Name: {userData?.name || '---'}</p>
                </SpaceName>
                <p>Bio: {userData?.bio || '---'}</p>
                {userData?.email && <p>Email: {userData?.email}</p>}
                <SpaceDown>
                  <SpaceFollowers>
                    <p>Followers: {userData?.followers || '---'}</p>
                    <p>Following: {userData?.following || '---'}</p>
                  </SpaceFollowers>
                </SpaceDown>
              </Details>
            </UserInfo>
          </ReposHeader>
          {selectedRepo ? (
            <RepoDetailsComponent>
              <p>Repository Name: {selectedRepo?.name}</p>
              <p>Language: {selectedRepo?.language}</p>
              <p>Description: {selectedRepo?.description}</p>
              <p>Stars: {selectedRepo?.stargazers_count}</p>
              <a href={selectedRepo?.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </RepoDetailsComponent>
          ) : (
            <h2>Nenhum repositório localizado.</h2>
          )}
        </ReposContainer>
      </DashboardContainer>
    </Container>
  );
};

export default RepoDetails;
