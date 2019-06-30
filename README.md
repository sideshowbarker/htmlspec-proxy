To create a proxy for https://html.spec.whatwg.org/:

```
git clone https://github.com/sideshowbarker/htmlspec-proxy.git
cd htmlspec-proxy
npm install
heroku create
git push heroku master
```

After running those commands, you’ll end up with an HTML-spec proxy running
at, e.g., https://radiant-reaches-60358.herokuapp.com/
