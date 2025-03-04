import { useState } from "react";
import PDFDocument from "./pdfDocument";

const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
};

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        lastname: "",
        lastname2: "",
        role: "Asociado",
        vigency: "",
        retiree: "",
        from: "",
        image: null,
    });

    const roles = [
        "Asociado",
        "Presidente de Mesa Directiva",
        "Presidente de la Asamblea General",
        "Tesorero",
        "Vice-Presidente de Mesa Directiva",
        "Secretario de la Asamblea General",
        "Secretario de Mesa Directiva",
        "Vocal Regional",
        "Comisario",
    ];

    // Handle input change of user form
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        let updatedValue = value;

        if (["name", "lastname", "lastname2"].includes(name)) {
            updatedValue = value.toUpperCase();
        }

        setUser((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));
    };

    const handleDateChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({
            ...prev,
            [name]: formatDate(value),
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setUser((prev) => ({
            ...prev,
            image: file,
        }));
    };

    return (
        <div className="modal-container">
            <label>Nombre</label>
            <input value={user.name} name="name" type="text" onChange={handleInputChange} />

            <div className="lastname-row">
                <div className="item">
                    <label>Apellido Paterno</label>
                    <input value={user.lastname} name="lastname" type="text" onChange={handleInputChange} />
                </div>
                <div className="item">
                    <label>Apellido Materno</label>
                    <input value={user.lastname2} name="lastname2" type="text" onChange={handleInputChange} />
                </div>
            </div>
            <label>Role</label>
            <select value={user.role} name="role" onChange={handleInputChange}>
                {roles.map((r) => (
                    <option key={r} value={r}>
                        {r}
                    </option>
                ))}
            </select>
            <label>Jubilado desde:</label>
            <input
                type="date"
                name="retiree"
                onChange={handleDateChange}
                placeholder="DD/MM/AAAA"
            />

            <label>Vigencia</label>
            <input
                type="date"
                name="vigency"
                onChange={handleDateChange}
                placeholder="DD/MM/AAAA"
            />

            <label>Asociado desde</label>
            <input
                type="date"
                name="from"
                onChange={handleDateChange}
                placeholder="DD/MM/AAAA"
            />

            <label>Foto</label>
            <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <PDFDocument form={user} />
        </div>
    );
};

export default Form;
