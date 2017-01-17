# nk-md
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![js-standard-style][standard-image]][standard-url]

Preview markdown files in a separate window. Markdown is formatted exactly the
same as on Enki. Based on [vmd](https://github.com/yoshuawuyts/vmd).

[Features](#features) | [Installation](#installation) | [Usage](#usage) | [Examples](#examples) | [Command-line options](#options)

![screenshot](https://raw.githubusercontent.com/enkidevs/nk-md/master/docs/insight_screenshot.png)

## Features

 - **Enki style:** The markdown content is rendered as close to the way it's
   rendered on Enki as possible.

 - **File watching:** Local files opened in vmd are watched for changes and the
   viewer will automatically update when a file has been changed. This makes it
   ideal for writing documents in your favorite text editor and get a live
   preview.

 - **Standard input:** View any markdown text from other programs by piping
   another program's output in to vmd. Check out the [examples](#examples) for
   cool use cases.

 - **Drag & Drop:** Drag files from your file browser or desktop on to a vmd
   window and render it. Hold the `Shift` key while dropping to open the file
   in a new window.

 - **Navigation:** Navigate within linked sections in a document, open relative
   links to other documents in the same window or in a new one (`shift-click`),
   and always be able to go back in the history. And open links to directories
   in your file manager and external links in your default browser.

 - **Clipboard:** Copy links and local file paths to the clipboard, and even
   copy images in binary format to paste them in to your image editing
   software.

## Installation

```bash
$ npm install -g nk-md
```

Or download an executable from the [release page](https://github.com/enkidevs/nk-md/releases)

## Usage

```
nk-md [FILE] [OPTIONS]
```

If no FILE is provided it will try to read from standard input.

### Examples

Read a file from disk:

```sh
$ nk-md DOCUMENT.md
```

It reads from `stdin` so you can pipe markdown text in to it:

```sh
$ cat README.md | nk-md
```

### Options

 - `-v, --version`: Display the version number.

 - `--versions`: Display version numbers of different internal components such
   as Electron.

 - `-h, --help`: Display usage instructions.

 - `-d, --devtools`: Open with the developer tools open.

 - `-z, --zoom=NUM`: Set a zoom factor to make the content larger or smaller.
   For example `--zoom=1.25`

 - `--styles-main=FILE`: Provide a custom CSS file to display the content.

 - `--styles-extra=FILE`: Provide a custom CSS file to do additional styling.
   For example to override some CSS properties fr the default style.

 - `--window-preservestate=false`: By default vmd preserves the window state
   for the next session, set this option to false to disable this.

## Authors

- [Mathieu Dutour](https://github.com/mathieudutour)

## License

[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/nk-md.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nk-md
[travis-image]: https://img.shields.io/travis/enkidevs/nk-md/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/enkidevs/nk-md
[downloads-image]: http://img.shields.io/npm/dm/nk-md.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/nk-md
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
