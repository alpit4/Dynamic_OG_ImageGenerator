import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { toPng } from "html-to-image";
import "./PostPage.css";

const PostPage = () => {
  const location = useLocation();
  const { title, content, image } = location.state;
  const postRef = useRef();

  useEffect(() => {
    const generateOGImage = async () => {
      try {
        const dataUrl = await toPng(postRef.current);
        console.log(dataUrl);
      } catch (error) {
        console.error("Error generating image:", error);
      }
    };

    generateOGImage();
  }, []);

  return (
    <div className="post-page">
      <div className="post-card" ref={postRef}>
        <div className="post-header">
          <div className="post-icon">
            <img
              src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
              alt="Reddit"
            />
          </div>
          <div className="post-details">
            <h2>{title}</h2>
            <p>From the developersIndia community on Reddit</p>
          </div>
        </div>
        <div className="post-content">
          <p>{content}</p>
          {image && <img src={image} alt="Post" />}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
