const axios = require('axios');

module.exports = {
  getRepoList: async (userName) => {
    let repoList = [];
    const url = `https://api.github.com/users/${userName}/repos`;
    const {data: res} = await axios.get(url);
    res.forEach(x => {
      repoList.push({
        name: x.name,
        url: x.clone_url,
      });
    })
    return repoList;
  }
}
