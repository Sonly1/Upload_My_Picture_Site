document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('picture', fileInput.files[0]);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    const uploadStatus = document.getElementById('uploadStatus');

    if (response.ok) {
        uploadStatus.textContent = 'Upload successful!';
        uploadStatus.style.color = 'green';
    } else {
        uploadStatus.textContent = `Upload failed: ${result.message}`;
        uploadStatus.style.color = 'red';
    }
});