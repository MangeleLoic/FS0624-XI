import React, { useEffect, useState } from 'react';
import SingleArticle from './SingleArticle';
import 'bootstrap/dist/css/bootstrap.min.css'; 

interface Article {
  id: string;
  title: string;
  published_at: string;
  image_url: string;
  summary: string;
  [key: string]: any;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setArticles(data);
        } else if (data && data.results && Array.isArray(data.results)) {
          setArticles(data.results);
        } else {
          console.error('Unexpected data format:', data);
          setError('Unexpected data format');
        }
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setError('Error fetching articles');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {articles.length > 0 ? (
          articles.map(article => (
            <div key={article.id} className="col-md-4 mb-4">
              <SingleArticle article={article} />
            </div>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
