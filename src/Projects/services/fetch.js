require("dotenv").config();
const myKey = process.env.REACT_APP_GITHUB_API_KEY;

async function fetchRepos() {
  const Url = "https://api.github.com/users/saoma1/repos";
  const repos = await fetch(Url, {
    headers: {
      Authorization: `token ${myKey}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return repos;
}

async function createRepoObjects() {
  const repos = await fetchRepos();
  const repoObjects = [];
  await Promise.all(
    repos.map((repo) =>
      fetch(`https://api.github.com/repos/saoma1/${repo.name}/releases`, {
        headers: {
          Authorization: `token ${myKey}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length !== 0) {
            repoObjects.push({
              id: repo.id,
              name: repo.name,
              repoImgUrl: repo.homepage,
              repoDescription: repo.description,
              repoUrl: repo.html_url,
              repoPage: `https://sotiriosdimitriou.com/${repo.name}`,
            });
          }
        })
        .catch((error) => {
          // handle the error
        })
    )
  );
  return repoObjects;
}

async function createRepos() {
  const repos = await createRepoObjects();
  // console.log(repos);
  return repos;
}

export { createRepos };
