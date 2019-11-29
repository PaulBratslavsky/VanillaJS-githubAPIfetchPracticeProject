console.log('Hello from App.js');

// INIT CLASS
const http      = new GitHubAPI();
const showUI    = new UI();

/***********************************************
    APP FUNCTIONS
***********************************************/

(() => {

    // SEARCH INPUT
    const searchUser = document.getElementById('searchUser');
    searchUser.addEventListener('keyup', handleSearchUser);

    // FUNCTIONS
    function handleSearchUser(e) {
        const searchTerm = e.target.value;

        if (searchTerm !== '') {
            
            http.getUser(searchTerm)
                .then( result => {

                    const message       = 'User not found!';
                    const classNames    = 'alert alert-danger';
                    
                    if (result.profile.message === 'Not Found') {
                        showUI.showAlert(message, classNames);
                    } else {
                        showUI.showProfile(result.profile);
                    } 

                })
                .catch( error => console.error(error, "ERROR"));
            console.log('making a fetch call');
        } else {
            showUI.clearProfile();
        }

    }

})();

/***********************************************
    HELPER FUNCTIONS
***********************************************/
