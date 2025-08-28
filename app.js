document.getElementById('ping').addEventListener("click", function(){
    document.getElementById('out').textContent= "JS is working";
})


// Helper file (sw - service worker)
// runs in the background, seperate from the main page
// offline performance, overall performance, push notfications
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(()=> console.log('service Worker registered. '))
    .catch(err => console.log('sw registration failed', err))
}