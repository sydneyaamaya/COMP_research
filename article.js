(() => {
	const title = new URLSearchParams(window.location.search).get("title");
	if (!title) {
		return;
	}

	document.title = `${title} - Daily News`;
	document.querySelector("#article-title").textContent = title;
})();
