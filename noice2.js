var repoPercent = 0;
function openUserRepo (username)    {
    var repoName = [];
    const request = new XMLHttpRequest();
    request.open('GET', `https://api.github.com/users/${username}/repos`, true)
    
    let repoPercent = []
    request.onload = function () {
    var data = JSON.parse(this.response);

    var statusHTML = '';3
    $.each(data, function(i, status) {
        if (status.language == 'HTML' || status.language == 'CSS' || status.language == 'JavaScript') {
            repoName.push(status.name);
            statusHTML += '<tr>';
            statusHTML += '<td>' + status.id + '</td>';
            statusHTML += '<td>' + status.name + '</td>';
            statusHTML += '<td><a target="_blank" href="' + status.html_url + '">' + status.html_url + '</a></td>';
            statusHTML += '<td>' + status.language + '</td>';
            statusHTML += '</tr>';
        }
        window.repoName = repoName
    });
    $('tbody').html(statusHTML);
    }
    // Request
    request.send();
}



//function testRepo (username, repoNameList, iterator) {
//   var request = new XMLHttpRequest()
//    var repoUseCase = repoNameList[iterator];
//    request.open('GET', `https://api.github.com/repos/${username}/${repoUseCase}/languages`, true)
//    request.onload = function() {
//    var data2 = JSON.parse(this.response);
//    repoPercent.push(data2.JavaScript);
//    }
//    request.send();
//}
//
//let repoName = [];
//testRepo('anishthota12', window.repoName, 0);




const gitHubForm = document.getElementById('gitHubForm');

gitHubForm.addEventListener('submit', (e) => {
    
    e.preventDefault();

    let usernameInput = document.getElementById('usernameInput');

    let gitHubUsername = usernameInput.value;          

    openUserRepo(gitHubUsername);

})