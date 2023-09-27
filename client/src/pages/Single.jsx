import React from 'react'
import Edit from "../img/icon_edit.png"
import Delete from "../img/icon_delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <div className="info">
                        <span>Rafael</span>
                        <p>Publicado ayer</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="Editar post" />
                        </Link>
                        <img src={Delete} alt="Eliminar post" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate quaerat dolor inventore quasi, impedit quas officia reiciendis. Voluptatem rerum itaque quisquam, ad dolorum quis impedit vel odit non ipsa.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ratione adipisci at obcaecati autem nisi exercitationem numquam, aliquam nobis, vitae, aut vero laudantium dolorum saepe porro! Repellendus possimus quisquam veritatis.</p>
            </div>
            <Menu></Menu>
        </div>
    )
}

export default Single