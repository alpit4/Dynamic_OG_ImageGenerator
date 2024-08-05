import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const TITLE_MAX_LENGTH = 50;
const CONTENT_MAX_LENGTH = 300;

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleGenerateOGImage = () => {
    if (!title || !content || !image) {
      alert("Please fill in all the fields.");
      return;
    }
    if (title.length > TITLE_MAX_LENGTH) {
      alert(`Title cannot exceed ${TITLE_MAX_LENGTH} characters.`);
      return;
    }
    if (content.length > CONTENT_MAX_LENGTH) {
      alert(`Content cannot exceed ${CONTENT_MAX_LENGTH} characters.`);
      return;
    }
    navigate("/post", { state: { title, content, image } });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create a Post</h1>
        <form className="post-form">
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input type="file" onChange={handleImageUpload} />
          </div>
        </form>
        <button className="generate-button" onClick={handleGenerateOGImage}>
          Generate OG Image
        </button>
      </header>
    </div>
  );
}

export default App;
