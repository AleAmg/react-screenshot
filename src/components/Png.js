import Image from "./Image";
import html2canvas from "html2canvas";

const Png = () => {
  const exportPNG = () => {
    const input = document.getElementById("App-png");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canva) => {
      let enlace = document.createElement("a");
      enlace.download = "download.png";
      enlace.href = canva.toDataURL("image/png");
      enlace.click();
    });
  };
  return (
    <div className="container">
      <header id="App-png" className="App-header">
        <Image name="png" />
      </header>
      <button onClick={() => exportPNG()}>PNG</button>
    </div>
  );
};

export default Png;
