import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Article {
  id: string;
  title: string;
  publishedAt: string;
  image_url: string;
  summary: string;
  [key: string]: any;
}

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.error("Error fetching article details:", error));
  }, [id]);

  if (!article) {
    return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-sm">
            <img src={article.image_url} className="card-img-top" alt={article.title} />
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <p className="card-text">{article.summary}</p>
              <p className="card-text">
                <small className="text-muted">Published on: {new Date(article.publishedAt).toLocaleDateString()}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
