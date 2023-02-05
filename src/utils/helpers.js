import JsPDF from "jspdf";
import html2canvas from "html2canvas";

export const htmlStringToPdf = async(htmlString) => {
    let iframe = document.createElement("iframe");
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);
    let iframedoc = iframe.contentDocument || iframe.contentWindow.document;
    iframedoc.body.innerHTML = htmlString;

    let canvas = await html2canvas(iframedoc.body, {});

    // Convert the iframe into a PNG image using canvas.
    let imgData = canvas.toDataURL("image/png");

    // Create a PDF document and add the image as a page.
    const doc = new JsPDF({
        // format: "a4",
        // unit: "mm",
    });
    doc.addImage(imgData, "PNG", 0, 0, 180, 500);

    // Get the file as blob output.
    let blob = doc.output("blob");

    // Remove the iframe from the document when the file is generated.
    document.body.removeChild(iframe);
    return blob;
};

// let htmlString = "<!DOCTYPE html><html><body><p><b>This text is bold</b></p><p><i>This text is italic</i></p><p>This is<sub> subscript</sub> and <sup>superscript</sup></p></body></html>";
// let pdfBlobOutput = await htmlStringToPdf(htmlString);

export const generateHTML = (html) => `<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

  <body>
    ${html}  
  </body>
</html>`;

const VPA = [
  '@ybl',
  '@ibl',
  '@axl',
  '@apl',
  '@paytm'
]