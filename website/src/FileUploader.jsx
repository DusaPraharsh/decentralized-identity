import React, { useState } from 'react';

function FileUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleUpload = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.status === 200) {
        console.log('File uploaded successfully!');
      } else {
        console.log('File upload failed!');
      }
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUploader;
