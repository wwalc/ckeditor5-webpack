/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classic';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

ClassicEditor.create( document.querySelector( '#editor' ), {
	plugins: [
		Autoformat,
		Bold,
		Clipboard,
		Enter,
		Heading,
		Image,
		ImageStyle,
		ImageToolbar,
		Italic,
		Link,
		List,
		Paragraph,
		Typing,
		Undo
	],
	toolbar: [ 'headings', 'bold', 'italic', 'link', 'unlink', 'bulletedList', 'numberedList', 'undo', 'redo' ]
} );
