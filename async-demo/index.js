console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

//promise approach
// getUser(1)
// .then(user => getRepositories(user.gitHubUsername))
// .then(repos => getCommits(repos[0]))
// .then(commits => console.log(commits))
// .catch(err => console.log(err.message));


//async and await approach
async function displayCommits() {

    try {  
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
    
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message);
    }

};

displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
          }, 2000);
    });

}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            //resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('nothing ava'));
          }, 2000);
    });

}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          }, 2000);

    });

}



















// console.log('Before');

//     getUser(1, getRepositories);

// console.log('After');

// function getRepositories(user) {
//     getRepositories(user.gitHubUsername, getCommits)
// }

// function getCommits(repos) {
//     getCommits(repo, displayCommits);
// }

// function displayCommits(commits) {
//     console.log(commits);
// }

// //Callbacks 

// //Promisies 

// //Async/Await

// function getUser(id, callback) {
//     setTimeout( () => {
//         console.log('READING USER FROM db...');
//         callback({ id: id, gitHubUsername: 'shalen'});
//     }, 2000);
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//     callback(['repo1', 'repo2','repo3']);   
//     }, 2000);
// }