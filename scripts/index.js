const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search a');
console.log(searchInput);
searchInput.style.display = 'none';
if(searchInput.value == ''){
    searchBtn.addEventListener('click',()=>{
        searchInput.style.display = 'inline-block';
    })
}