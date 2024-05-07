import html2canvas from "html2canvas-pro";

export function downloadDivAsPNG(divId: string, name?: string) {
  const divToDownload = document.getElementById(`${divId}`);
  if (!divToDownload) {
    console.error("No div with id", divId);
    return;
  }

  html2canvas(divToDownload, {
    backgroundColor: null,
    scale: 1,
    logging: false,
  }).then((canvas) => {
    // Convert canvas to PNG image data URL
    const imageDataURL = canvas.toDataURL("image/png");

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = imageDataURL;
    downloadLink.download = name ? `${name}.png` : "My-icon.png"; // Set the file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
}
