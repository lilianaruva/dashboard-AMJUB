import { useState } from "react";
import Form from "../../features/credentials/components/form";
import UpdateDocument from "../../features/credentials/components/updateDocument";
import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import './style.scss'

const Credentials = () => {
    const [create, setCreate] = useState<boolean>(false);

    return (
        <div className="Credentials">
            <div className='navBtn'>
                <button title='Actualizar Credencial' className={`${create ? '' : 'active'}`} onClick={() => setCreate(false)}><MdEdit /> Actualizar</button>
                <button title='Crear Crendecial' className={`${create ? 'active' : ''}`} onClick={() => setCreate(true)}><IoMdAdd /> Crear</button>
            </div>
            {
                create ? <Form /> : <UpdateDocument />
            }
        </div>

    )
}

export default Credentials