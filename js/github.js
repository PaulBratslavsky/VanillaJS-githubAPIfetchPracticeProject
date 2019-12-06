console.log('Hello from GtiHub.js');

class GitHubAPI {

    constructor() {
        this.clientId       = '152daa88e00400a83b15';
        this.clientSecret   = 'bc0934779abfe4bc3c179ad3d733796370d4ac7b';
        this.repos_count    = 5;
        this.repos_sort     = 'created: asc';
    }

    async getUserAndRepos(user) {

        const userUrl = `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
        const reposUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`;


        const profileResponse = await fetch(userUrl);
        const profile = await profileResponse.json();

        const reposResponse = await fetch(reposUrl);
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        };

    }
}
