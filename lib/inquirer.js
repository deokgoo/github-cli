const inquirer = require('inquirer');

module.exports = {
  askUserName: () => {
    const questions = [
      {
        name: 'userName',
        type: 'input',
        message: 'Enter your GitHub username or e-mail address:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
    ];
    return inquirer.prompt(questions);
  },
  askRepoList: async (repos) => {
    let cloneRepo = '';
    const repoList = repos.map(x => x.name);
    const questions = [
      {
        name: 'selectRepo',
        type: 'list',
        message: 'which do you want clone',
        choices: repoList,
      }
    ]
    const {selectRepo} = await inquirer.prompt(questions);
    repos.forEach(x => {
      if(x.name === selectRepo) {
        cloneRepo = x;
      }
    });
    return cloneRepo;
  }
};