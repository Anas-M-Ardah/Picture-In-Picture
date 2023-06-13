const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Propt the user to select a media screen and it passes that to the video element then play
async function selectMediaScreen(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        console.log(error);
    }
}

button.addEventListener("click", async ()=>{
    //Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Resest Button
    button.disabled = false;
});

// on Load
selectMediaScreen();