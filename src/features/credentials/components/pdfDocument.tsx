import React from "react";
import jsPDF from "jspdf";
import background1 from "../assets/superior.png";
import background2 from "../assets/posterior.png";
const PDFDocument = ({ form }) => {
  const generatePDF = () => {
    const doc = new jsPDF({
      unit: "px",
      format: [900, 1627],
    });

    // Agrega el contenido a cada página del documento
    const pageWidth = doc.internal.pageSize.getWidth(); // Ancho de la página
    const pageHeight = doc.internal.pageSize.getHeight(); // Alto de la página

    doc.addImage(background1, "JPEG", 0, 0, pageWidth, pageHeight);

    //profile foto
    const reader = new FileReader();
    reader.onload = function (e) {
      doc.addImage(e.target.result, "JPEG", 260, 150, 406, 535);
      addTextToPDF(doc, pageWidth, pageHeight);
    };
    reader.readAsDataURL(form.image);
    //doc.addImage(form.image, "JPEG", 260, 150, 406, 535);
  };

  const addTextToPDF = (doc, pageWidth, pageHeight) => {
    doc.setTextColor("#FFFFFF");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(53);
    doc.text(
      `${form?.name} ${form?.lastname} ${form?.lastname2}`,
      450,
      1413.933,
      null,
      null,
      "center"
    );
    doc.setFont("helvetica", "normal");
    doc.setFontSize(50);
    doc.text(form?.role, 450.841, 1477.05, null, null, "center");
    doc.setFontSize(45);
    doc.text(
      `VIGENCIA: ${form?.vigency}`,
      669.567,
      1574.871,
      null,
      null,
      "center"
    );
    doc.addPage();
    doc.addImage(background2, "JPEG", 0, 0, pageWidth, pageHeight);
    doc.setFontSize(43);
    doc.text(
      `FECHA DE JUBILACIÓN: ${form?.retiree}`,
      450.209,
      1494.663,
      null,
      null,
      "center"
    );
    doc.text(
      `ASOCIADO DESDE: ${form?.from}`,
      450.209,
      1550.871,
      null,
      null,
      "center"
    );

    doc.save(`credencial_${form?.name}-${form?.lastname}.pdf`);
  };

  return <button onClick={generatePDF}>Generar PDF</button>;
};

export default PDFDocument;
