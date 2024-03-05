import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import axios from 'axios';
import './index.css';

const BlogItemDetails = () => {
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getBlogItemData = async () => {
      try {
        const response = await axios.get(`https://apis.ccbp.in/blogs/${id}`);
        const data = response.data;
        const updatedData = {
          title: data.title,
          imageUrl: data.image_url,
          content: data.content,
          avatarUrl: data.avatar_url,
          author: data.author,
        };
        setBlogData(updatedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setIsLoading(false);
      }
    };

    getBlogItemData();
  }, [id]);

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;

    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  return (
    <div className="blog-container">
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        renderBlogItemDetails()
      )}
    </div>
  );
};

export default BlogItemDetails;
