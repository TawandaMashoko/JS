const url = "./health_article.json";

const articlesDiv = document.getElementById("articles");
const loadBtn = document.getElementById("loadArticlesBtn");

loadBtn.addEventListener("click", fetchAndRenderArticles);

function fetchAndRenderArticles() {
  // Optional: clear old content
  articlesDiv.innerHTML = "";
  loadBtn.disabled = true;
  loadBtn.textContent = "Loading...";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";

  xhr.onload = function () {
    loadBtn.disabled = false;
    loadBtn.textContent = "Load Articles";

    if (xhr.status !== 200) {
      articlesDiv.textContent = "Failed to load articles. Status: " + xhr.status;
      return;
    }

    // If responseType='json', xhr.response is already an object (in most browsers).
    // But just in case, fallback to parsing responseText:
    const data = xhr.response || JSON.parse(xhr.responseText);

    const articles = data.articles || [];
    renderArticles(articles);
  };

  xhr.onerror = function () {
    loadBtn.disabled = false;
    loadBtn.textContent = "Load Articles";
    articlesDiv.textContent = "Network error while loading articles.";
  };

  xhr.send();
}

function renderArticles(articles) {
  articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    const title = document.createElement("h2");
    title.textContent = article.title;

    const description = document.createElement("p");
    description.textContent = article.description;

    const waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve:";

    const waysList = document.createElement("ul");
    article.ways_to_achieve.forEach((way) => {
      const li = document.createElement("li");
      li.textContent = way;
      waysList.appendChild(li);
    });

    const benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits:";

    const benefitsList = document.createElement("ul");
    article.benefits.forEach((benefit) => {
      const li = document.createElement("li");
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
}
