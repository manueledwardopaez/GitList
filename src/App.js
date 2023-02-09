import "./App.css";
import Layout from "./components/layout.js";
import Profile from "./components/profile.js";
import RepoList from "./components/repo-list.js";
import Filters from "./components/filters.js";
import Search from "./components/search.js";
import { useState, useEffect } from "react";
import { getUser, getRepos } from "./services/users";
import { useParams } from "react-router-dom";

function App() {
  const params = useParams();
  let username = params.user;
  if (!username) {
    username = "leonidasesteban";
  }
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No lo encontramos");
        return;
      }
      setUser(data);
    });

    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log("No lo encontramos");
        return;
      }
      setRepos(data);
    });
  });
  return (
    <Layout>
      <Profile {...user} />
      <Filters />
      <RepoList repoList={repos} />
      <Search />
    </Layout>
  );
}

export default App;
