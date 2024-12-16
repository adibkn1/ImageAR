document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('#ar-scene');
    const cameraFeed = document.querySelector('#camera-feed');
  
    // Function to start AR
    function startAR() {
      console.log('Requesting camera access...');
      
      // Request camera access with constraints to use the rear camera
      navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { exact: 'environment' } // This specifies the rear camera
        }
      })
      .then(stream => {
        console.log('Camera access granted.');
  
        // Set the camera feed to the video element
        cameraFeed.srcObject = stream;
  
        // Ensure the AR scene is loaded
        if (scene && scene.hasLoaded) {
          console.log('AR scene loaded, entering VR/AR mode.');
          scene.enterVR(); // Enter AR mode
        } else {
          console.error('AR scene not loaded yet.');
        }
      })
      .catch(err => {
        console.error('Camera access denied:', err);
      });
    }
  
    // Start AR when the page loads
    startAR();
  });
  