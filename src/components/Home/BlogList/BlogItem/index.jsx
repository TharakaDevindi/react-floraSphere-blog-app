import React from "react";
import './styles.css';
import Chip from "../../../common/Chip";
import { Link } from "react-router-dom";

const BlogItem = ({
    blog: {
      description,
      title,
      createdAt,
      authorName,
      authorAvatar,
      cover,
      category,
      id,
      pdfUrl, 
    },
  }) => {
    return (
      <div className='blogItem-wrap'>
        <img className='blogItem-cover' src={cover} alt='cover' />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogItem-desc'>{description}</p>
        <footer>
          <div className='blogItem-author'>
            <img src={authorAvatar} alt='avatar' />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
          <Link className='blogItem-link' to={`/blog/${id}`} pdfUrl={pdfUrl}>
            ➝
          </Link>
        </footer>
      </div>
    );
  };
  
  export default BlogItem;
  