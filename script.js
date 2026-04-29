window.onload = function(){
    const imageContainer = document.getElementById("image_container");
    const params = new URLSearchParams(window.location.search.slice(1));
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const src = params.get('vid') ?? fragment.get('vid');

    if(src != null){
        const img = document.createElement('img');
        img.style.cssText = 'border-radius: 6px; width: 100%;'
        
        img.onload = function() {
            if(img.naturalWidth == 120) {
                img.src = `https://i.ytimg.com/vi/${src}/mqdefault.jpg`
            }
        }
        img.src = `https://i.ytimg.com/vi/${src}/maxresdefault.jpg`;
        imageContainer.appendChild(img);
    } else{
        imageContainer.innerHTML = `<p>This <b>thing</b> gets thumbnails from yt videos using the i.ytimg.com domain's /vi endpoint.</p><p>Append "/?vid={videoId}" where {videoId} is the ID of a video.<br><h2>Example usage:</h2><p>"youtube.com/watch?v=_XnhRzRFbLU" turns into "common-codes.github.io/rip.ytimg/?vid=_XnhRzRFbLU".<br><b>PLEASE NOTE:</b> Most times you will have to refresh the tab!</p>`;
    }
}
