(function (w) {
	'use strict';

	if (typeof w.hljs === 'undefined') {
		console.error('highlight.js not detected!');
	} else {
		w.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
		w.hljs.lineNumbersBlock = lineNumbersBlock;
	}

	function initLineNumbersOnLoad () {
		w.addEventListener('load', function () {
			try {
				var blocks = document.querySelectorAll('code.hljs');

				for (var i in blocks) {
					if (blocks.hasOwnProperty(i)) {
						lineNumbersBlock(blocks[i]);
					}
				}
			} catch (e) {
				console.error('LineNumbers error: ', e);
			}
		});
	}

	function lineNumbersBlock (element) {
		if (typeof element !== 'object') return;

		var parent = element.parentNode;
		var lines = element.textContent.split(/\r\n|\r|\n/).length;

		if (lines > 1) {
			var ln = [];
			for (var i = 1; i <= lines; i++) ln.push(i);

			var linesPanel = document.createElement('code');
			linesPanel.className = 'hljs hljs-line-numbers';
			linesPanel.style.float = 'left';
			linesPanel.textContent = ln.join('\n');

			parent.insertBefore(linesPanel, element);
		}
	}
}(window));