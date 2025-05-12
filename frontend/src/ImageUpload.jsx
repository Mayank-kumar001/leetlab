import React, { useState } from 'react';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', file); // 'image' should match your backend field name

    try {
      const res = await fetch('http://localhost:8080/api/v1/auth/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('Upload successful');
      } else {
        const errorText = await res.text();
        setStatus(`Upload failed: ${errorText}`);
      }
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Image Upload Test</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" style={{ width: '200px', marginTop: '1rem' }} />}
      <br />
      <button onClick={handleUpload} style={{ marginTop: '1rem' }}>Upload</button>
      <p>{status}</p>
    </div>
  );
};

export default ImageUpload;
