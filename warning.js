// Basic scrollable news page skeleton with a misinformation warning.
(() => {
	function buildNewsPage() {
		document.title = "Daily News";

		const style = document.createElement("style");
		style.textContent = `
			* { box-sizing: border-box; }
			body { margin: 0; background: #f2f4f7; color: #202833; font: 16px/1.5 Arial, sans-serif; }
			.news-header { background: #18345b; color: white; }
			.news-header-inner { max-width: 1000px; margin: auto; padding: 20px; }
			.news-header h1 { margin: 0 0 12px; font-size: 1.8rem; }
			.news-nav { display: flex; flex-wrap: wrap; gap: 20px; }
			.news-nav a { color: inherit; text-decoration: none; }
			.news-nav a:hover, .news-nav a:focus { text-decoration: underline; }
			.news-main { width: min(100% - 32px, 860px); margin: 28px auto; }
			.news-main h2 { margin: 0 0 18px; }
			.article-list { display: grid; gap: 18px; }
			.article-card { min-height: 210px; padding: 20px; background: white; border: 1px solid #dce2e9; border-radius: 8px; }
			.article-card { cursor: pointer; }
			.article-card:focus-visible { outline: 3px solid #18345b; outline-offset: 3px; }
			.article-card h3 { margin: 0 0 8px; font-size: 1.2rem; }
			.article-card p { margin: 0; color: #4d5c6b; }
			.misinformation-warning { margin: 0 0 12px; padding: 10px 12px; color: #000; background: #f0f0f0; border: 1px solid #000; border-radius: 5px; font-weight: 700; }
			.article-image { height: 115px; margin-bottom: 16px; background: #e8edf2; border-radius: 5px; }
			.placeholder-line { height: 12px; margin: 10px 0; background: #e8edf2; border-radius: 6px; }
			.placeholder-title { width: 68%; height: 16px; }
			.placeholder-summary { width: 42%; }
			.news-footer { padding: 24px; color: #697482; text-align: center; }
			@media (min-width: 640px) { .article-card { padding: 24px; } .article-image { height: 130px; } }
		`;
		document.head.appendChild(style);

		const page = document.createElement("div");
		page.innerHTML = `
			<header class="news-header">
				<div class="news-header-inner">
					<h1>Daily News</h1>
					<nav class="news-nav" aria-label="Main navigation">
						<a href="#latest">Latest</a>
						<a href="#world">World</a>
						<a href="#business">Business</a>
						<a href="#culture">Culture</a>
					</nav>
				</div>
			</header>
			<main class="news-main" id="latest">
				<h2>Latest stories</h2>
				<section class="article-list" aria-label="News articles"></section>
			</main>
			<footer class="news-footer">Daily News</footer>
		`;
		document.body.appendChild(page);

		const articles = page.querySelector(".article-list");
		const articleData = [
			{ title: "phone screens causing brain cancer", summary: "Experts assess the latest claims about screen exposure and long-term health risks.", flaggedAsMisinformation: true },
			{ title: "City opens new transit hub", summary: "Officials say the expanded station will ease congestion and improve commuter access." },
			{ title: "Market gains as tech shares rise", summary: "Investors respond to earnings optimism and stronger-than-expected consumer spending." },
			{ title: "Artists launch community mural project", summary: "Volunteers plan a vibrant public installation to celebrate neighborhood history." },
			{ title: "Local school adds robotics lab", summary: "Students will gain hands-on experience in coding, design, and engineering." },
			{ title: "Researchers track climate trends", summary: "New data highlights shifting weather patterns and rising regional temperatures." },
			{ title: "Small business sales rebound", summary: "Retailers report stronger foot traffic as consumer confidence improves over the quarter." },
			{ title: "New museum wing opens downtown", summary: "The expansion features rotating exhibits, lectures, and family-focused programming." },
			{ title: "Sports team signs promising rookie", summary: "Coaches say the young player brings speed, resilience, and high upside to the roster." },
			{ title: "Travel demand climbs for summer", summary: "Airlines and hotels expect a busy season as bookings accelerate across regions." }
		];

		articleData.forEach((articleInfo) => {
			const article = document.createElement("article");
			article.className = "article-card";
			article.setAttribute("aria-label", articleInfo.title);
			article.setAttribute("role", "link");
			article.tabIndex = 0;
			article.innerHTML = `
				<div class="article-image" aria-hidden="true"></div>
				${articleInfo.flaggedAsMisinformation ? '<p class="misinformation-warning" role="alert">warning: flagged as misinformation</p>' : ""}
				<h3>${articleInfo.title}</h3>
				<p>${articleInfo.summary}</p>
			`;
			const openArticle = () => {
				window.location.href = `article.html?title=${encodeURIComponent(articleInfo.title)}`;
			};
			article.addEventListener("click", openArticle);
			article.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openArticle();
				}
			});
			articles.appendChild(article);
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", buildNewsPage, { once: true });
	} else {
		buildNewsPage();
	}
})();