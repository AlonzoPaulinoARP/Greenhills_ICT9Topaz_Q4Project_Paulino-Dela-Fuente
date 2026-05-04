const imageInput = document.getElementById('image-input');
const profilePreview = document.getElementById('profile-preview');

imageInput.addEventListener('change', function() {
  const file = this.files[0]; // Get the selected file

  if (file) {
    const reader = new FileReader();

    // When the file is finished loading...
    reader.onload = function(e) {
      // Set the <img> src to the data URL of the local file
      profilePreview.src = e.target.result;
    }

    // Read the file as a Data URL (base64 string)
    reader.readAsDataURL(file);
  }
});

function change_password() {

    window.alert("Unavailable")
}