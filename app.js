console.log("Let's get this party started!");

// 1. Select all inputs buttons and img divs.
//const searchForm = document.getElementsByClassName('search-meme');
const inputValue = document.getElementById('search-meme');
const submitButton = document.getElementsByClassName('submit-meme');
const removeButton = document.getElementsByClassName('remove-memes');
const imgDiv = document.querySelector('.images')
// 2. Make a event listener so that when button is submited it does whats in the next function
// 3. Create a asycn function that gets from the api
// 4. Make sure the function has params that has a api key and a search term 
// 5. console.log the response from the api to make sure its working.
async function getData() {
    let searchTerm = inputValue.value
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q : searchTerm,
            api_key : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(res);
}

function makeMeme (gifData) {
    
    const newImg = document.createElement('img');
    newImg.src = gifData.images.original.url;
    imgDiv.appendChild(newImg)
}

const btn = document.querySelector(".submit-meme");
btn.addEventListener('click', makeMeme)
// 6. Grab a gif from reponse data
// 7. create a img element in the div that the images should be in
// 8. Append the giv from reponse data variable to the img inside the div.
// 9. Add event listener to the remove button that when clicked it 
// 10. make function that has the remove method in the dom.