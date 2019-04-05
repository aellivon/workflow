/* 
    File handler utils.
 */


 /* 
    downloadPDFHanlder: Gets the blob from a request and
        downloads it.
 */
export function downloadFileHanlder(file: Blob, fileName: string){

    // Attach the blob to an anchor
    var anchhor = document.createElement("a");
    anchhor.href = URL.createObjectURL(file);

    // Define anchor as a downlodable type and click it.
    anchhor.download = fileName;
    anchhor.click();

 } 