const url = 'https://rickandmortyapi.com/api/character';

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let container = document.getElementById('container');

        data.results.forEach(item => {
           
            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container'); 

           
            let text = document.createElement('p');
            text.textContent = item.name;
            imgContainer.appendChild(text);

          
            let img = document.createElement('img');
            img.src = item.image;
            imgContainer.appendChild(img);

           
            container.appendChild(imgContainer);
        });
    })
 