# yt-url-cleaner
Cleans YouTube URLs from trackers automatically.

# Features:
- turns youtu.be links into youtube.com (YouTube does this automatically but seeing as it's local it's faster)
- removes `si`, `feature` and `is`, `utm-x` URL paramaters for privacy

that's mostly it...

# Why (just why)
I was sending YouTube video links to my friends, and I got *very* quickly annoyed at the fact that YouTube wanted these trackers in the URL (not like they already have enough trackers on their website already), and youtu.be links are suuuuuuper annoying, since they take quite a while to redirect. So, I built YTURLCleaner for this exact reason.

# How
It uses a single service worker in the background with some simple regex. Nothing too fancy or interesting here, but it's functional I guess. I built this in half an hour sooooo
