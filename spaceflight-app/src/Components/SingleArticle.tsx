import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Article {
  id: string;
  title: string;
  publishedAt: string;
  image_url: string;
  summary: string;
  [key: string]: any;
}

interface SingleArticleProps {
  article: Article;
}

const SingleArticle: React.FC<SingleArticleProps> = ({ article }) => {
  return (
    <div className="card h-100">
      <Link to={`/articles/${article.id}`}>
        <img src={article.image_url} className="card-img-top" alt={article.title} />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.summary}</p>
          <p className="card-text">
            <small className="text-muted">{new Date(article.publishedAt).toLocaleDateString()}</small>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleArticle;
