import "./App.css";
import Layout from "./components/layout.js";
import Profile from "./components/profile.js";
import RepoList from "./components/repo-list.js";
import Filters from "./components/filters.js";
import Search from "./components/search.js";
import { useState, useEffect } from "react";
import { getUser, getRepos } from "./services/users";
import { useParams } from "react-router-dom";
import Modal from "./modal";

function App() {
  const params = useParams();
  let username = params.user;
  if (!username) {
    username = "leonidasesteban";
  }
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [modal, setModal] = useState([false]);

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
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters />
      <RepoList repoList={repos} />
      <Search setModal={setModal}/>
    </Layout>
  );
}

export default App;
