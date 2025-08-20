# portafolio

> My glorious Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Adding Articles

Articles are written in [Markdown](https://www.markdownguide.org/) files located in the `content/articles` directory.
Each markdown file automatically becomes an article and can be accessed at `/articles/<filename>`.
Create a new file like `my-post.md` with front matter:

```markdown
---
title: My Post
description: Short summary
---

Your content here.
```

Run the development server with `npm run dev` to see the new article.
