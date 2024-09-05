import React, { useEffect, useState } from 'react';

interface Article {
  id: string;
  title: string;
  publishedAt: string;
  imageUrl: string;
  summary: string;
  [key: string]: any;
}

import SingleArticle from './SingleArticle';

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      {articles.map(article => (
        <SingleArticle key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;