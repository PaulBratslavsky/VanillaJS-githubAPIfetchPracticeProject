console.log('Hello from Ui.js');

class UI {

    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        console.log(user, "FROM UI");
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <a href="${user.html_url}" target="_blank"><img style="display: block;" class="img-fluid mb-2" src="${user.avatar_url}" alt="Image of ${user.name}"></a>
                        <a href="${user.html_url}" target="_blank" class="btn btn-danger btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-warning">Followers: ${user.followers}</span>
                        <span class="badge badge-danger">Following: ${user.following}</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${(user.company !== null || user.company === '' ) ? user.company : 'None listed'  }</li>
                            <li class="list-group-item">Website: ${(user.blog !== '') ? `<a href="${user.blog}" target="_blank">${user.blog}</a>` : 'None listed'  }</li>
                            <li class="list-group-item">Location: ${(user.location !== null || user.location === '' ) ? user.location : 'None listed'  }</li>
                            <li class="list-group-item">Member Since: ${new Date(user.created_at)}</li>

                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos">Repos will go here</div>
        `;
    }

    showRepos(repos) {
        console.log(repos, "Repos UI");
        let output = '';

        repos.forEach( repo => {
            console.log(repo.name, "from loop");
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blanl">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-warning">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output Repos
        document.getElementById('repos').innerHTML = output;;
        

    };

    clearProfile() {
        this.profile.innerHTML = '';
        console.log("CLEAR PROFILE");
    }

    showAlert(message, classNames) {
        // Clear Previous Alerts
        this.clearAlert();
        // Create Div
        const div = document.createElement('div');
        div.className = classNames;
        
        // Add Text
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector('.searchContainer');
        
        // Get Search Box
        const search = document.querySelector('.search');

        // Insert Alert
        container.insertBefore(div, search);

        console.log('User not found!');

        setTimeout(() => this.clearAlert(), 2000)
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        
        if (currentAlert) {
            currentAlert.remove();
        }

    }

}