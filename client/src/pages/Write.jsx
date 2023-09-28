import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [selectedFileName, setSelectedFileName] = useState("");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setSelectedFileName(selectedFile ? selectedFile.name : "");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Título del post"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>PUBLICAR</h1>

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={handleFileChange}
          />
          <label className="file" htmlFor="file">
            {selectedFileName || "Portada"}
          </label>
          <div className="buttons">
          <button
            type="button"
            onClick={() => {
              document.getElementById("file").click();
            }}
          >
            Seleccionar Portada
          </button>
          </div>
          
          <div className="buttons">
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categorías</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "categoria1"}
              name="cat"
              value="categoria1"
              id="categoria1"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="categoria1">CATEGORIA1</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "categoria2"}
              name="cat"
              value="categoria2"
              id="categoria2"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="categoria2">CATEGORIA2</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "categoria3"}
              name="cat"
              value="categoria3"
              id="categoria3"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="categoria3">CATEGORIA3</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "categoria4"}
              name="cat"
              value="categoria4"
              id="categoria4"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="categoria4">CATEGORIA4</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "categoria5"}
              name="cat"
              value="categoria5"
              id="categoria5"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="categoria5">CATEGORIA5</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "categoria6"}
              name="cat"
              value="categoria6"
              id="categoria6"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="categoria6">CATEGORIA6</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
