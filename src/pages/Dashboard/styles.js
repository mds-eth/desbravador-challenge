import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DashboardContainer = styled.div`
  width: 880px;
  padding: 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 40px 0px;
  background-color: #2b2b2b;
  margin-top: 60px 0px;

  h1, h2 {
    text-align: center;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    input {
      width: 100%;
      max-width: 650px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 10px;
      max-height: 40px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      max-height: 40px;
    }
  }

  @media(max-width: 680px){
    width: 90%;
    padding: 0px 10px;
  }
`

export const ReposContainer = styled.div`
  margin-top: 20px;

  select{
    margin-bottom: 10px;
    padding: 5px;
  }

  select {
    margin-bottom: 10px;
    padding: 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`

export const ReposHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`
export const SpaceName = styled.div`
  display: flex;
  align-items: center;

  img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
`

export const SpaceDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SpaceFollowers = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const RepoDetails = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`