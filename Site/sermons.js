const sermonContainer = document.getElementById('sermonsdiv')


function getSermons() {
    fetch('http://localhost:1337/sermons')
    .then((res) => res.json())
    .then((data) => {
        let output = ''
        data.forEach(function(sermon){
            output += `
                <div class="sermon-tiles">
                <h3>${sermon.Title}</h3>
                <h5>${sermon.Date}</h5>
                `
                let sermonFileURL = "http://localhost:1337" + sermon.File.url
                //console.log(sermonFileURL)
                output += `
                <audio controls>
                <source src=${sermonFileURL} type="audio/mpeg">
                </audio>
                </div>          
                `
                

          
        })
        sermonContainer.innerHTML = output
    })
}

getSermons()


