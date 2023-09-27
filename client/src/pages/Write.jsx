import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');

    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder='Title' />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{ display: "none" }} type="file" name="" id="file" />
                    <label className="file" htmlFor="file">Subir imagen</label>
                    <div className="buttons">
                        <button>Guardar como borrador</button>
                        <button>Actualizar blog</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Categoría del blog</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="CATEGORIA1" id="categoria1" />
                        <label htmlFor="categoria1">CATEGORÍA1</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="CATEGORIA2" id="categoria2" />
                        <label htmlFor="categoria2">CATEGORÍA1</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="CATEGORIA3" id="categoria3" />
                        <label htmlFor="categoria3">CATEGORÍA1</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="CATEGORIA4" id="categoria4" />
                        <label htmlFor="categoria4">CATEGORÍA1</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="CATEGORIA5" id="categoria5" />
                        <label htmlFor="categoria5">CATEGORÍA1</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write