async function processing () {
    let downloadData = await fetchData("www.google.com");
    let file = await writeFile(downloadData);
    console.log("write await completed");
    let uploadResponse = await uploadData(file,"www.drive.google.com");
    console.log("uploading await completed");

}