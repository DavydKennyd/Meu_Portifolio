const apiKey = '162f76918acb4205884f7937002a915c';
const apiUrl = 'https://newsapi.org/v2/top-headlines';
const country = 'br';

fetch(`${apiUrl}?country=${country}&apiKey=${apiKey}`)
    .then(Response => Response.json())
    .then(data => {
        const newsConteiner = document.getElementById('news-conteiner');


        data.articles.forEach(article => {
            const articleElement = document.createElement('a');
            articleElement.href = article.url;
            articleElement.textContent = article.title;
            articleElement.classList.add('news-item');
            newsConteiner.appendChild(articleElement);
        });
    })
    .catch(error => console.error('Erro ao tentar obter notícias.', error));


