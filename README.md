# Right Consents Documentation

This repository contains the github page for the Right Consents documentation. It is built using Jekyll and Docusaurus.

## Jekyll

Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more.

### Prerequisites

Jekyll requires the following:

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Instructions 

1. Install all prerequisites.
2. Install the jekyll and bundler gems.
```bash
gem install jekyll bundler
```

3. Build the site and make it available on a local server.
```bash
bundle exec jekyll serve
```

Browse to http://localhost:4000

## Docusaurus

Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation, leveraging the full power of React to make your site interactive. It provides out-of-the-box documentation features but can be used to create any kind of site (personal website, product, blog, marketing landing pages, etc).

We use Docusaurus to build the technical and API documentations pages.

### Prerequisites

Docusaurus requires the following:

- Node version >= 16.0.0
- npm

### Launch docusaurus locally

1. Install all prerequisites.
2. Go to the `api-doc` directory.
3. Install the docusaurus and dependencies.
```bash
npm install
``` 
4. Launch the docusaurus server.
```bash
npm run start
```
5. Browse to http://localhost:3000

### Build docusaurus static site

1. Go to the root directory.
2. Build the docusaurus static site and copy the files to the `_docusaurus` directory using the following npm script:
```bash
npm run build-docs
```
