| Title     | Elections 2020                             |
| :-------- | :----------------------------------------- |
| Author(s) |                                            |
| Link      | https://rivalryissue.github.io/article     |

# Setup

Clone this repository, download `auth.json` file
[here](https://drive.google.com/drive/u/0/folders/1RTFhJ6MHC7nGNg3CtxiAAhgwd3-GBQwo),
and edit the Google doc [here](https://docs.google.com/document/d/1QNCE2-KXUPIEmYmUcUkPzxA7HsnZqeobjXVPM3EDAN0/edit?usp=sharing)
For the react team, you want to edit the `template/index.html` to include your
react project and edit the javascript in `src`. Don't touch the `index.html` in
`src`! That's automatically generated by the `template`.

Add your react code in `src/js` and the base styling is `src/css/base.scss`

Finally, everything is bundled together with [`parcel`](https://parceljs.org/).

# Running

`make dev` to start the dev server

`make fetch` to fetch the latest Google doc copy

`make build-prod` to build for production

`make gh-pages` to build for production, then deploy to the gh-pages branch (do not do without Parth's permission :) )
