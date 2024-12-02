const resultsDiv = document.getElementById('results')
const userFilter = document.getElementById('filter')
const listItems = []

async function getData() {
    const api = "https://randomuser.me/api?results=50"

    //console.log(api)
    
    const res = await fetch(api)
    const {results} = await res.json()

    console.log(results)

    // clear results

    resultsDiv.innerHTML = ``

    results.forEach(user => {

        const li = document.createElement('li')
        li.classList.add(
            'flex', 'p-4', 'hover:bg-gray-100', 'items-center', 
            'border-b', 'border-[#eee]', 'last-of-type:border-0'
        )

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}"
                    class="rounded-full object-cover w-12 h-12">
            <div id="user-info" class="ml-2">
                <h4 class="mr-4">${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        
        resultsDiv.appendChild(li)
    });
}

function filterData(query) {
    const lowerQuery = query.toLowerCase()
    listItems.forEach(item => {
        const lowerItem = item.innerText.toLowerCase()
        if (lowerItem.includes(lowerQuery)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    });

}

userFilter.addEventListener('input', (e) => filterData(
    e.target.value
));

getData();


