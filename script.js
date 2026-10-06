const signLinks = document.querySelectorAll(".sign-link");
const mapAreas = document.querySelectorAll(".map-area");
const mapGlows = document.querySelectorAll(".map-glow");


function activateLocation(location) {

    mapGlows.forEach(glow => {
        glow.classList.remove("active");
    });

    const glow = document.querySelector(
        `.${location}-glow`
    );

    if (glow) {
        glow.classList.add("active");
    }
}


/* =========================
   SIGNPOST HOVER
   ========================= */

signLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        const location =
            link.dataset.location;

        activateLocation(location);

    });


    link.addEventListener("mouseleave", () => {

        mapGlows.forEach(glow => {
            glow.classList.remove("active");
        });

    });

});


/* =========================
   MAP HOVER
   ========================= */

mapAreas.forEach(area => {

    area.addEventListener("mouseenter", () => {

        const location =
            area.dataset.location;

        activateLocation(location);

    });


    area.addEventListener("mouseleave", () => {

        mapGlows.forEach(glow => {
            glow.classList.remove("active");
        });

    });

});
