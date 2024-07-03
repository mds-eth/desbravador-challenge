import axios from 'axios';

class GitHubAPI {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.github.com',
    });
  }

  async getUserDetails(username) {
    try {
      const response = await this.api.get(`/users/${username}`);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async getUserRepos(username) {
    try {
      const response = await this.api.get(`/users/${username}/repos`);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async getRepoDetails(fullName) {
    try {
      const response = await this.api.get(`/repos/${fullName}`);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

export default new GitHubAPI();
