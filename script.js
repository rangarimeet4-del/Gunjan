/* =========================================
   COMPUTER HARDWARE INFORMATION
   B.Sc. Computer Science Project
   Content based on PPT
   ========================================= */


/* =========================================
   MODAL ELEMENTS
   ========================================= */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalIcon = document.getElementById("modalIcon");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalPoints = document.getElementById("modalPoints");


/* =========================================
   OPEN MODAL
   ========================================= */

function openModal(type) {

    if (!modal) return;

    /* =========================
       CPU / PROCESSOR
       ========================= */

    if (type === "cpu") {

        modalIcon.innerHTML = "🧠";

        modalCategory.innerHTML = "PROCESSING";

        modalTitle.innerHTML = "CPU / Processor";

        modalDescription.innerHTML =
            "CPU is the primary processing unit of a computer. It executes instructions, performs calculations and coordinates many computer operations.";

        modalPoints.innerHTML = `
            <ul>
                <li>Examples: Intel Core, AMD Ryzen, Apple Silicon</li>
            </ul>
        `;
    }


    /* =========================
       MOTHERBOARD
       ========================= */

    else if (type === "motherboard") {

        modalIcon.innerHTML = "🔌";

        modalCategory.innerHTML = "MAIN CIRCUIT BOARD";

        modalTitle.innerHTML = "Motherboard";

        modalDescription.innerHTML =
            "The motherboard is the main circuit board that connects the CPU, RAM, storage, graphics and other hardware.";

        modalPoints.innerHTML = `
            <ul>
                <li>CPU socket</li>
                <li>RAM slots</li>
                <li>Expansion slots</li>
                <li>Chipset</li>
                <li>Connectors</li>
            </ul>
        `;
    }


    /* =========================
       RAM
       ========================= */

    else if (type === "ram") {

        modalIcon.innerHTML = "💾";

        modalCategory.innerHTML = "MEMORY";

        modalTitle.innerHTML = "RAM";

        modalDescription.innerHTML =
            "RAM is high-speed temporary memory. More RAM generally allows more active data and applications to be readily available.";

        modalPoints.innerHTML = `
            <ul>
                <li>Common generations: DDR4 and DDR5</li>
            </ul>
        `;
    }


    /* =========================
       HDD
       ========================= */

    else if (type === "hdd") {

        modalIcon.innerHTML = "💿";

        modalCategory.innerHTML = "STORAGE";

        modalTitle.innerHTML = "HDD";

        modalDescription.innerHTML =
            "HDD stores data magnetically on spinning platters.";

        modalPoints.innerHTML = `
            <ul>
                <li>Used where high storage capacity is needed at lower cost.</li>
                <li>Used for documents, media, backups and operating-system storage.</li>
            </ul>
        `;
    }


    /* =========================
       SSD
       ========================= */

    else if (type === "ssd") {

        modalIcon.innerHTML = "⚡";

        modalCategory.innerHTML = "STORAGE";

        modalTitle.innerHTML = "SSD";

        modalDescription.innerHTML =
            "SSD uses flash memory and has no moving platters. It is generally faster for booting and application loading than HDD.";

        modalPoints.innerHTML = `
            <ul>
                <li>Types: SATA SSD and NVMe SSD</li>
            </ul>
        `;
    }


    /* =========================
       GPU
       ========================= */

    else if (type === "gpu") {

        modalIcon.innerHTML = "🎮";

        modalCategory.innerHTML = "GRAPHICS PROCESSING";

        modalTitle.innerHTML = "GPU";

        modalDescription.innerHTML =
            "A GPU is designed to process graphics and parallel workloads. Dedicated GPUs are common in gaming, 3D design, video editing and AI workloads.";

        modalPoints.innerHTML = `
            <ul>
                <li>A graphics card may include GPU, VRAM, cooling and display connectors.</li>
            </ul>
        `;
    }


    /* =========================
       PSU
       ========================= */

    else if (type === "psu") {

        modalIcon.innerHTML = "🔋";

        modalCategory.innerHTML = "POWER";

        modalTitle.innerHTML = "Power Supply Unit (PSU)";

        modalDescription.innerHTML =
            "The PSU converts electrical power into regulated voltages required by computer components and distributes power through cables.";

        modalPoints.innerHTML = `
            <ul>
                <li>A suitable PSU should match the system's power requirements and connectors.</li>
            </ul>
        `;
    }


    /* =========================
       CPU CABINET / CASE
       ========================= */

    else if (type === "case") {

        modalIcon.innerHTML = "🖥️";

        modalCategory.innerHTML = "CASE";

        modalTitle.innerHTML = "CPU Cabinet / Case";

        modalDescription.innerHTML =
            "The case protects internal components and supports airflow, cable management, fans and expansion hardware.";

        modalPoints.innerHTML = `
            <ul>
                <li>Case sizes include Mini-ITX, Micro-ATX and ATX-oriented designs.</li>
            </ul>
        `;
    }


    /* =========================================
       SHOW MODAL
       ========================================= */

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE MODAL
   ========================================= */

function closeModal() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "auto";
}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================= */

if (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeModal();
        }

    });
}


/* =========================================
   CLOSE MODAL WITH ESCAPE KEY
   ========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================
   SEARCH FUNCTION
   ========================================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(function (card) {

            const text = card.innerText.toLowerCase();

            if (text.includes(searchValue)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}


/* =========================================
   CATEGORY FILTER
   ========================================= */

const categoryFilter = document.getElementById("categoryFilter");

if (categoryFilter) {

    categoryFilter.addEventListener("change", function () {

        const selectedCategory =
            categoryFilter.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(function (card) {

            if (selectedCategory === "all") {

                card.style.display = "";

                return;
            }

            const category =
                card.getAttribute("data-category");

            if (
                category &&
                category.toLowerCase() === selectedCategory
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}