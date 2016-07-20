# ShortUrl-for-Github
A simple JS script to make short URL like link redirection possible on websites hosted on github. 

When sharing links to friends or something a personal shorturl is easier to remember as well.  
Using the github custom 404 page with some javascript, this script can redirect any keyword to any url.

Ex: 

    http://example.github.io/woof  => https://www.reddit.com/r/woof_irl/top/?sort=top&t=all

Live example:
[sohanchy.com/woof](http://sohanchy.com/woof) 
redirects to =>  
[https://www.reddit.com/r/woof_irl/top/?sort=top&t=all](https://www.reddit.com/r/woof_irl/top/?sort=top&t=all)

###How to use:
 - Download **404.html** file and **redirectorDB.js** or *clone this repo*.
 - **Replace** references to **sohanchy.com** in **404.html** with your **default fallback site**. The script will redirect to this site when short url is not found. You can the actual 404 page here as well.
 - Modify **redirectorDB.js** to your needs. Examples are given, just follow basic JS object syntax.
 - Upload to the master branch for a User/Organization Pages site, or to the gh-pages branch for a Project Pages site.


###Drawbacks
 - Just one minor drawback, you can not  use the default github 404 page,
   you have to either have a fallback website or use a custom 404 page.

####Created by: [Sohan Chowdhury](http://sohanchy.com)
####Contributors:
 - [thesabbir](https://github.com/thesabbir) - [Refactoring and cleanup](https://github.com/SohanChy/ShortURL-for-Github/pull/1)
