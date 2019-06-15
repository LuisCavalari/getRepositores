   const inputName = document.getElementById('search')
        const repositoriesList = document.getElementById('repositoriesList')

        inputName.onclick = searchByUser;

        function searchByUser() {
            let name = document.getElementById('name').value;
            loadRespositories(name);
        }

        async function loadRespositories(name) {
            addLoadingGif();
            let response = await fetch(`https://api.github.com/users/${name}/repos`);
            let json = await response.json();
            console.log(json)
            addRespositoriesToPage(json);

        }
        function addLoadingGif() {
            let gif = document.getElementById('gif')
            gif.style.display = "block";
        }
        function addRespositoriesToPage(repositories) {
            clearList();
            for (repositorie of repositories) {
                let repElement = document.createElement('li');
                repElement.innerHTML = repositorie.name
                repositoriesList.appendChild(repElement);
            }
        }
        function clearList() {
            repositoriesList.innerHTML = '';
            let gif = document.getElementById('gif')
            gif.style.display = "none"
        }
