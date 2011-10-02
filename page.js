function go() {
	setTimeout(function() {
		document.onkeydown = null;
		location.href = "/";
	}, 20000); // 20s
}

chrome.extension.sendRequest({}, function (resp) {
	if (resp.on) go();
});

chrome.extension.onRequest.addListener(go);
