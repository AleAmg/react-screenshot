import Image from "./Image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Pdf = () => {
  const exportPDF = () => {
    const input = document.getElementById("App-pdf");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canva) => {
      const imgWidth = 208;
      const imgHeight = (canva.height * imgWidth) / canva.width;
      const imgData = canva.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <div className="container">
      <header id="App-pdf" className="App-header">
        <Image name="pdf" />
      </header>
      <button onClick={() => exportPDF()}>PDF</button>
    </div>
  );
};

export default Pdf;
