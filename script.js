window.onload = function(){
    const image = document.getElementById("image");
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const src = fragment.get('vid');

    if(src != null){
        image.innerHTML = `<img src="https://i.ytimg.com/vi/${src}/hqdefault.jpg" style="border-radius: 4px; width: 100%;">`;
    } else{
        image.innerHTML = `<p>This <b>thing</b> gets thumbnails from yt videos using the i.ytimg.com domain's /vi endpoint.</p><p>Append "/#vid={videoId}" where {videoId} is the ID of a video.<br><h2>Example usage:</h2><p>"youtube.com/watch?v=_XnhRzRFbLU" turns into "common-codes.github.io/rip.ytimg/#vid=_XnhRzRFbLU".<br><b>PLEASE NOTE:</b> Most times you will have to refresh the tab!</p>`;
    }
}
