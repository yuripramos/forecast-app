# Forecast App

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## :octocat: Getting Started

This code challenge was made focusing on the architecture of high scalable projects. The App itself is small, but is 100% ready to get as big as possible

:heavy_check_mark: Styled-Components

:heavy_check_mark: Webpack

:heavy_check_mark: React-16

:heavy_check_mark: Cross-Browser Solution! (even for MS Edge)

:heavy_check_mark: High Scale Svg Icons Workflow

:heavy_check_mark: Reusable High scale Modal

:heavy_check_mark: Reverse Proxy


Made with :heart: and Redux-zero.

## :fire: Why Redux-zero as a state manager?

[Redux-zero](https://github.com/redux-zero/redux-zero) is a lightweight state container based on Redux.
I would like to share 3 arguments to choose redux-zero over redux.

1. Is lighter(less than 1kb) than redux and in projects that are not necessarily high usage of reducers, it helps to focus on what is important.
2. I participated in the conception of this lib, made mostly by an ex-coworker.
3. I'm currently focusing my career in leadership and share knowledge that I've learned across these years, so would be
   an honor gives a presentation about this amazing library.

More about Redux-zero [here](https://medium.com/@matheusml/introducing-redux-zero-bea42214c7ee)

## :fire: Why Reverse Proxy?
  Due to security issues of [DarkskyAPI](https://darksky.net/dev/docs/faq) they throw CORS error from localhost, so it's necessary to workaround this. To avoid wasting time settig-up a node+express reverse proxy server in cases like that I use this reverse proxy [service](https://thingproxy.freeboard.io/fetch). (not acessible link)

## :cloud: Installation

```sh
git clone https://github.com/madewithlove/technical-assignment-front-end-engineer-yuripramos
cd technical-assignment-front-end-engineer-yuripramos
npm install or yarn install
npm run start
access http://localhost:3002
```

**Requires node >= 8.9.3**

## Tests

- % stmts = 91.46%
- % Branch = 71.43%
- % funcs = 92.98%
- % Lines = 91.46%

- Average ~= **86.8%**

## Roadmap

**Release 0.1** (current) - First release of the app

**Release 0.2** - Refining UI/UX

**Release 0.3** - Improvements in mobile devices screens

## :exclamation: Credits

Yuri Ramos

## :scroll: License

MIT
