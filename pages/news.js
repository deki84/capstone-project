import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsList from '../components/NewsList';
import { useState, useEffect } from 'react';

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async (page) => {
      const response = await axios.get('/api/hello');
      setArticles(response.data);
    };
    getArticles();
  }, []);
  return (
    <>
      <CryptoNews>News</CryptoNews>
      <div>
        {articles.map((article) => {
          return (
            <NewsListStyling key={article.id}>
              <NewsList
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            </NewsListStyling>
          );
        })}
      </div>
    </>
  );
}

const NewsListStyling = styled.span`
  display: Flex;
  justify-content: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
`;

const CryptoNews = styled.h1`
  display: fixed;
  justify-content: center;
  margin: 0;
  padding: 70px;
`;
