window.addEventListener('load',function(){
    let str;
    const search = document.querySelector('.search-btn');
    const searchText = document.querySelector('input');
    const info = document.querySelectorAll('li');
    const image = document.querySelector('img');
    searchText.addEventListener('change',(event)=>{
        str = event.target.value;
        let arr = str.split(' ');
        if(arr[0] == '' ){
            arr.shift();
        }
        else if(arr[arr.length-1] == ''){
            arr.pop();
        }
        str = arr.join('+');
        console.log(str);
    })
    search.addEventListener('click',()=>{
        
        searchText.value = '';
        const results = document.querySelector('.results');
        results.style.opacity = 1;
        const api = `http://www.omdbapi.com/?t=${str}&apikey=5ff6a785`;
        fetch(api)
    .then(resp=>resp.json())
    .then(data => {
        console.log(data);
        info[0].textContent = `Name : ${data.Title}`;
        info[1].textContent =`Country : ${data.Country}`;
        info[2].textContent =`Genre :${data.Genre}`;
        info[3].textContent =`imdb : ${data.imdbRating}`;
        info[4].textContent =`Plot : ${data.Plot}`;
        image.src = `${data.Poster}`;
    })
    })
})