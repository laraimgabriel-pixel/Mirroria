/* =========================================================
   MIRRORA AI — INTERACTIVE SYSTEM
   Fictional cinematic transformation simulation
   ========================================================= */


/* =========================================================
   OPEN STUDIO
   ========================================================= */

function openStudio() {

    const studio = document.getElementById("studio");

    if (studio) {

        studio.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   TECHNOLOGY SECTION
   ========================================================= */

function showTechnology() {

    const technology =
        document.getElementById("technology");

    if (technology) {

        technology.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   SIMULATED MEDIA UPLOAD
   ========================================================= */

function simulateUpload() {

    const mediaFile =
        document.getElementById("mediaFile");

    const uploadZone =
        document.querySelector(".upload-zone");

    if (!mediaFile || !uploadZone) {
        return;
    }


    uploadZone.innerHTML = `
        <div class="upload-icon">
            ✓
        </div>

        <strong>
            MEDIA LOADED
        </strong>

        <span>
            VISUAL ANALYSIS READY
        </span>

        <small>
            source_media_01
        </small>
    `;


    mediaFile.style.display = "flex";


    addConsoleMessage(
        "MEDIA",
        "Source media loaded successfully."
    );

}


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

function addConsoleMessage(type, message) {

    const consoleOutput =
        document.getElementById("consoleOutput");

    if (!consoleOutput) {
        return;
    }


    const line =
        document.createElement("div");


    line.innerHTML = `
        <span>[${type}]</span>
        ${message}
    `;


    consoleOutput.appendChild(line);


    consoleOutput.scrollTop =
        consoleOutput.scrollHeight;

}


/* =========================================================
   PROGRESS BAR
   ========================================================= */

function updateProgress(value) {

    const progressBar =
        document.getElementById("consoleProgress");

    const progressText =
        document.getElementById("progressText");


    if (progressBar) {

        progressBar.style.width =
            value + "%";

    }


    if (progressText) {

        progressText.textContent =
            value + "%";

    }

}


/* =========================================================
   ANALYSIS STATUS
   ========================================================= */

function updateAnalysisStatus(text) {

    const status =
        document.getElementById("analysisStatus");

    if (status) {

        status.textContent = text;

    }

}


/* =========================================================
   TRANSFORMATION SIMULATION
   ========================================================= */

function runTransformation() {

    const targetFace =
        document.getElementById("targetFace");

    const button =
        document.querySelector(".transform-button");


    if (!targetFace || !button) {
        return;
    }


    /* Prevent multiple simulations */

    if (
        button.dataset.processing === "true"
    ) {

        return;

    }


    button.dataset.processing = "true";


    button.disabled = true;


    button.innerHTML = `
        PROCESSING
        <span>✦</span>
    `;


    updateProgress(0);

    updateAnalysisStatus("PROCESSING");


    addConsoleMessage(
        "SYSTEM",
        "Transformation simulation initiated."
    );


    /* =====================================================
       STEP 1 — FACE DETECTION
       ===================================================== */

    setTimeout(() => {

        updateProgress(15);

        addConsoleMessage(
            "VISION",
            "Facial reference detected."
        );

    }, 500);


    /* =====================================================
       STEP 2 — FACIAL MAPPING
       ===================================================== */

    setTimeout(() => {

        updateProgress(32);

        addConsoleMessage(
            "MAPPING",
            "Facial landmarks mapped for preview."
        );

    }, 1100);


    /* =====================================================
       STEP 3 — EXPRESSION ANALYSIS
       ===================================================== */

    setTimeout(() => {

        updateProgress(49);

        addConsoleMessage(
            "EXPRESSION",
            "Expression movement analyzed."
        );

    }, 1700);


    /* =====================================================
       STEP 4 — LIGHTING
       ===================================================== */

    setTimeout(() => {

        updateProgress(66);

        addConsoleMessage(
            "LIGHTING",
            "Scene lighting adaptation simulated."
        );

    }, 2300);


    /* =====================================================
       STEP 5 — FRAME CONSISTENCY
       ===================================================== */

    setTimeout(() => {

        updateProgress(82);

        addConsoleMessage(
            "FRAME",
            "Temporal frame alignment simulated."
        );

    }, 2900);


    /* =====================================================
       VISUAL TRANSFORMATION EFFECT
       ===================================================== */

    setTimeout(() => {

        targetFace.classList.remove(
            "transforming"
        );


        /* Force browser to restart animation */

        void targetFace.offsetWidth;


        targetFace.classList.add(
            "transforming"
        );


        addConsoleMessage(
            "MIRRORA",
            "Synthetic visual preview generated."
        );


    }, 3200);


    /* =====================================================
       FINAL RESULT
       ===================================================== */

    setTimeout(() => {

        updateProgress(100);

        updateAnalysisStatus("COMPLETE");


        addConsoleMessage(
            "SYSTEM",
            "Preview transformation complete."
        );


        addConsoleMessage(
            "NOTICE",
            "Result shown is a fictional cinematic simulation."
        );


        button.innerHTML = `
            RUN AGAIN
            <span>↻</span>
        `;


        button.disabled = false;

        button.dataset.processing = "false";


    }, 3900);

}


/* =========================================================
   NAVIGATION ACTIVE STATE
   ========================================================= */

const navigationLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


navigationLinks.forEach(link => {

    link.addEventListener(
        "click",
        function () {

            navigationLinks.forEach(
                item => {

                    item.style.color =
                        "#777b8e";

                }
            );


            this.style.color =
                "#bd83ff";

        }
    );

});


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateProgress(0);


        addConsoleMessage(
            "SYSTEM",
            "MIRRORA Vision System initialized."
        );


        addConsoleMessage(
            "SYSTEM",
            "Workspace ready."
        );

    }
);