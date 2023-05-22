# googleslide-comme-stream-develop

## Getting Started

First, run the development server:

```bash
yarn dev
```

This page mimics the presentation and user tools of GoogleSlide to develop chrome extensions for [this repository](https://github.com/swfz/chrome-extension-google-slide-usertool-comment-stream/)


## chrome extension development

- manifest.json

```diff
   },
   "content_scripts": [
     {
-      "matches": ["https://docs.google.com/presentation/d/*/edit"],
+      "matches": ["http://localhost:3000/*"],
       "match_about_blank": true,
```


