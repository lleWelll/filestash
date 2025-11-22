document.addEventListener("DOMContentLoaded", function () {
    console.log("Starting");
    const cat = document.getElementById("cat");
    if (!cat) {
        console.log("NULL!!");
        return;
    }

    cat.innerHTML = `
        <div id="hide-behind" class="background-color"></div>
        <svg width="221" height="215" viewBox="0 0 221 215" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92.2917 202.413C77.7917 202.413 52.2916 190.413 44.2917 184.413C36.2917 178.413 27.1882 167.937 21.2917 157.913C16.2917 149.413 12.7035 140.413 11.2917 124.413C10.0541 110.387 12.7917 91.4131 18.7917 80.9131" stroke="#FDD320" stroke-width="22"/>
            <path d="M23.7917 68.9131C29.7917 58.913 51.6407 40.5413 60.3022 36.7493C68.9638 32.9573 82.9743 28.789 94.7917 28.4131C108.292 27.9836 117.771 29.63 133.792 35.4131C147.835 40.4825 168.792 59.5513 174.292 68.9131" stroke="#2C4371" stroke-width="22"/>
            <path d="M179.292 80.4131C185.792 91.4131 187.666 117.058 186.292 126.413C184.918 135.768 183.235 147.192 177.292 157.413C170.502 169.089 162.686 177.891 149.292 188.413C137.551 197.636 116.292 203.413 105.292 203.413" stroke="#2F67FF" stroke-width="22"/>
        </svg>
    `;
    console.log("preloader override LOADED");
});