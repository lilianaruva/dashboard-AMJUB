import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";

const UpdateDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newVigency, setNewVigency] = useState("");

  // Manejo de carga de archivo PDF
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Por favor, seleccione un archivo PDF válido.");
    }
  };

  // Manejo de cambio de fecha de vigencia
  const handleDateChange = (event) => {
    setNewVigency(event.target.value);
  };

  // Formato de fecha DD/MM/AAAA
  const formatDate = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  // Generar PDF con nueva fecha de vigencia
  const updatePDF = async () => {
    if (!selectedFile || !newVigency) {
      alert("Debe seleccionar un archivo PDF y una nueva fecha de vigencia.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(selectedFile);

    fileReader.onload = async () => {
      try {
        const pdfData = fileReader.result;

        // Cargar el PDF original
        const pdfDoc = await PDFDocument.load(pdfData);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // Dibujar rectángulo para ocultar la fecha anterior
        firstPage.drawRectangle({
          x: 620,
          y: 50, // Ajusta según sea necesario
          width: 550,
          height: 120,
          color: rgb(0.184, 0.612, 0.678),
        });

        // Agregar nueva fecha de vigencia
        firstPage.drawText(`VIGENCIA: ${formatDate(newVigency)}`, {
          x: 640,
          y: 100, // Ajusta según sea necesario
          size: 45,
          color: rgb(1, 1, 1), // Blanco
        });

        // Guardar PDF actualizado
        const modifiedPdfBytes = await pdfDoc.save();
        const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });

        // Descargar el archivo
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "credencial_actualizada.pdf";
        link.click();
      } catch (error) {
        console.error("Error al actualizar el PDF:", error);
        alert("Ocurrió un error al procesar el PDF.");
      }
    };
  };

  return (
    <div className="modal-container" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
      <h2>Actualizar Fecha de Vigencia</h2>
      
      <label>Seleccionar PDF:</label>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      <label>Seleccionar nueva vigencia:</label>
      <input type="date" onChange={handleDateChange} />

      <button onClick={updatePDF} disabled={!selectedFile || !newVigency}>
        Actualizar PDF
      </button>
    </div>
  );
};

export default UpdateDocument;