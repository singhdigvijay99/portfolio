const projects = [
    {
        title: "Peterson Lights & Harnesses",
        image: "images/peterson.png",
        url: "https://petersonlightsandharnesses.com/",
        category: "manufacturing",
        tags: ["WordPress", "WooCommerce", "Custom Theme"]
    },
    {
        title: "Westfield Steel",
        image: "images/westfield.png",
        url: "https://westfieldsteel.com/",
        category: "manufacturing",
        tags: ["WordPress", "Theme Development"]
    },
    {
        title: "Aspen Outdoor Designs",
        image: "images/aspen.png",
        url: "https://aspenoutdoordesigns.com/",
        category: "business",
        tags: ["WordPress"]
    },
    {
        title: "Thursday Pools",
        image: "images/thursdaypools.png",
        url: "https://thursdaypools.com/",
        category: "pool",
        tags: ["Calculator", "HubSpot", "Custom Theme"]
    },
    {
        title: "River Pools & Spas",
        image: "images/riverpools.png",
        url: "https://www.riverpoolsandspas.com/",
        category: "pool",
        tags: ["WordPress"]
    },
    {
        title: "MediaFuel",
        image: "images/mediafuel.png",
        url: "https://www.mediafuel.net/",
        category: "marketing",
        tags: ["WordPress"]
    },
    {
        title: "Salesvue",
        image: "images/salesvue.png",
        url: "https://salesvue.com/",
        category: "business",
        tags: ["WordPress"]
    },
    {
        title: "T2 Systems",
        image: "images/t2systems.png",
        url: "https://www.t2systems.com/",
        category: "enterprise",
        tags: ["WordPress"]
    },
    {
        title: "CoverCare",
        image: "images/covercare.png",
        url: "https://covercare.com/",
        category: "healthcare",
        tags: ["WordPress"]
    },
    {
        title: "Deveaus",
        image: "images/deveaus.png",
        url: "https://deveaus.com/",
        category: "business",
        tags: ["WordPress"]
    },
    {
        title: "RPM Real Estate",
        image: "images/rpm.png",
        url: "https://rpmrealestatecr.com/",
        category: "real-estate",
        tags: ["Elementor", "Booking"]
    },
    {
        title: "Trusted Leader 360",
        image: "images/trustedleader.png",
        url: "https://trustedleader360.com/certification/",
        category: "education",
        tags: ["Zoom API", "Payments"]
    },
    {
        title: "Mission Plastics North",
        image: "images/mission-plastics.png",
        url: "https://missionplasticsnorth.com/",
        category: "manufacturing",
        tags: ["WordPress"]
    },
    {
        title: "Vector Tool",
        image: "images/vector-tools.png",
        url: "https://vectortool.com/",
        category: "manufacturing",
        tags: ["WordPress"]
    },
    {
        title: "TW Products",
        image: "images/twsolutions.png",
        url: "https://twproducts.com/",
        category: "manufacturing",
        tags: ["WordPress"]
    },
    {
        title: "Rubico IT",
        image: "images/rubico.png",
        url: "https://rubicotech.in/",
        category: "agency",
        tags: ["Corporate"]
    },
    {
        title: "The Agency Guide",
        image: "images/the-agency-guide.png",
        url: "https://www.theagencyguide.com/",
        category: "marketing",
        tags: ["WordPress"]
    },
    {
        title: "Onit Painting",
        image: "images/onit-painting.png",
        url: "https://onitpainting.com/",
        category: "business",
        tags: ["WordPress"]
    },
    {
        title: "New Horizons Foundation",
        image: "images/nhf.png",
        url: "https://newhorizonsfoundation.com/",
        category: "non-profit",
        tags: ["Donation"]
    },
    {
        title: "Salimetrics",
        image: "images/salimetrics.png",
        url: "https://salimetrics.com/",
        category: "healthcare",
        tags: ["Enterprise"]
    },
    {
        title: "Paxster",
        image: "images/paxster.png",
        url: "https://paxster.no/",
        category: "automotive",
        tags: ["WordPress"]
    },
    {
        title: "Nepal Youth Foundation",
        image: "images/nepal.png",
        url: "https://nepalyouthfoundation.org/",
        category: "non-profit",
        tags: ["Donation"]
    },
    {
        title: "TBD Solutions",
        image: "images/tbd.png",
        url: "https://tbdsolutions.com/",
        category: "business",
        tags: ["WordPress"]
    },
    {
        title: "Govavia",
        image: "images/govavia.png",
        url: "https://govavia.com/",
        category: "government",
        tags: ["WordPress"]
    },
    {
        title: "Skin Therapy MD",
        image: "images/skintherapy.png",
        url: "https://skintherapymd.com/",
        category: "healthcare",
        tags: ["WordPress"]
    },
    {
        title: "Knowledge Services",
        image: "images/knowledge.png",
        url: "https://knowledgeservices.com/",
        category: "enterprise",
        tags: ["WordPress"]
    },
    {
        title: "RampXchange",
        image: "images/rampxchange.png",
        url: "https://rampxchange.com/",
        category: "business",
        tags: ["WordPress"]
    }
];

const grid = document.getElementById("projectsGrid");

function renderProjects(filter = "all") {

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    grid.innerHTML = filteredProjects.map(project => `
        <div class="project-card">

            <div class="project-image">
                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >
            </div>

            <div class="project-content">

                <h3>${project.title}</h3>

                <div class="project-tags">

                    ${project.tags.map(tag => `
                        <span>${tag}</span>
                    `).join("")}

                </div>

                <a
                    href="${project.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                >
                    Visit Website →
                </a>

            </div>

        </div>
    `).join("");
}

renderProjects();

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderProjects(button.dataset.filter);

    });

});

