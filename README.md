# MJML Starter Base

## Introduction

Starter base for Email templating with Gulp, MJML and Nunjucks. It has a Gulp-powered build system with these features:

- [MJML](https://mjml.io/) engine
- Partials and templates with [Nunjucks](https://mozilla.github.io/nunjucks/)
- Inject data with YAML
- Built-in BrowserSync server
- MJML default templates (Basic and Newsletter)

## Installation

### Requirements
- [NodeJS](https://nodejs.org/en/) (6 or greater)
- [Git](https://git-scm.com/)

Now clone this repository

```bash
git clone https://github.com/jpagano/mjml-starter-base mjml-starter-base
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd mjml-starter-base
npm install
```

## Usage

Finally, run npm start to run Gulp. Your finished templates will be created in a folder called dist, viewables at this URL:

```bash
npm start
```

```bash
http://localhost:8000
```

## TODO
- [ ] HTML minifier and beautifier
- [ ] Image compression