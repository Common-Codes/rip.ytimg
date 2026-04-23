# rip.ytimg
Because YouTube made thumbnails incredibly hard to find in inspect element.

## What it does
- Uses i.ytimg.com to get a video thumnail, by default at 720p
- Falls back, gracefully, to a 180p version (because the i.ytimg.com API is actually backwards compatible)
- Supports both hash (**#**) and query (**?**) params for passing the video ID

Or, as [@TallerThanShort](https://github.com/TallerThanShort) would put it,
> "This **thing** gets thumbnails from YouTube videos using the i.ytimg.com domain's `/vi` endpoint."

## Usage
- Copy a YouTube video link, i.e "[youtube.com/watch?v=_XnhRzRFbLU](https://youtube.com/watch?v=_XnhRzRFbLU)"
- Go to [rip.ytimg](https://common-codes.github.io/rip.ytimg)
- Paste the video ID (the "**_XnhRzRFbLU**" part, in our case) at the end of the URL after `?vid=`, making the full URL [https://common-codes.github.io/rip.ytimg?vid=_XnhRzRFbLU](https://common-codes.github.io/rip.ytimg?vid=_XnhRzRFbLU)
- Congrats, you've got the video thumbnail

#### Notes
- This project:
- - Originally used 360p previews only
- - Originally relied on manual refreshes and [hash fragment identifiers](https://developer.mozilla.org/en-US/docs/Web/API/URL/hash)
- - Is believed to have been created as part of a (self) preservation initiative
- - Is used by researches and by myself ([@jodri-code](https://github.com/jodri-code)) to reverse image search (amongst other things)
