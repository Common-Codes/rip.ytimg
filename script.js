window.onload = function(){
    const image = document.getElementById("image");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const src = fragment.get('vid');

    if(src != null){
        image.innerHTML = `<img src="https://i.ytimg.com/vi/${src}/hqdefault.jpg" style="border-radius: 4px; width: 100%;">`
    } else{
        window.alert('no vid specified')
    }
}
