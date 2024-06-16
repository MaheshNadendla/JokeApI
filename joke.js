const jokeContainer= document.querySelector('.JokeMessege');
const btn = document.querySelector('.Submit');
const url= "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky?type=single";

let getJoke=()=>
{
    btn.classList.remove("Opacity");
    fetch(url).then(data => data.json()).then(item => 
    {
            jokeContainer.textContent=`${item.joke}`;
            
            jokeContainer.classList.add("Opacity");
        }
    );

}

btn.addEventListener('click',getJoke);