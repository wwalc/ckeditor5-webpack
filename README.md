## CKEditor 5 &ndash; webpack example

This is a dummy project which shows how to bundle CKEditor 5 with webpack (version 2).

### Quick start

1. Create a bundle:
    <pre>
    npm install
    npm run bundle</pre>
2. Open index.html in your browser.

### Official webpack support

Follow https://github.com/ckeditor/ckeditor5/issues/139 to stay up to date.

### About this project

This is not an official documentation. It is a mere mix of webpack configuration used by [ckeditor5.github.io](https://github.com/CKEditor5/ckeditor5.github.io) with 
code posted by Ilya Semenov in [this comment](https://github.com/ckeditor/ckeditor5/issues/139#issuecomment-276876222), which I'm currently using for playing with CKEditor 5.
 
The created bundle consists of two files: `build/css/styles.css` and `build/js/app.bundle.js`. 
If you would like to build everything into a single file, check the webpack config of [ckeditor5.github.io](https://github.com/CKEditor5/ckeditor5.github.io).  



