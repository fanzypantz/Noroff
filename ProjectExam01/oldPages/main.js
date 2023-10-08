
// Misc Functions
let boolToText = function (input) {
    if (input) {
        return "Yes"
    } else {
        return "No"
    }
};

let mapNumber = function (input, inMin, inMax, outMin, outMax) {
    return (input - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

let genericFadeIn = function (element, delay) {
    element.style.transition = 'opacity 1000ms ease-in-out ' + delay + 'ms';
    element.style.opacity = '1';
};

let animateHeader = function () {
    let logo = document.querySelector('.container-logo svg');
    let launchH2 = document.querySelector('#launch');
    let landH2 = document.querySelector('#land');
    let relaunchhH2 = document.querySelector('#relaunch');
    logo.style.opacity = '0';
    launchH2.style.opacity = '0';
    landH2.style.opacity = '0';
    relaunchhH2.style.opacity = '0';

    setTimeout(function () {
        genericFadeIn(logo, 500);
        genericFadeIn(launchH2, 1000);
        genericFadeIn(landH2, 1500);
        genericFadeIn(relaunchhH2, 2000);
    }, 500);
};

let indexModule = (function () {

    let initiate = function () {
        let galleryText = document.querySelectorAll('.container-gallery-text');
        let images = document.querySelectorAll('.image');
        const order = [
            [4, 2, 5, 3, 1],
            [1, 4, 2, 5, 3],
            [3, 1, 4, 2, 5],
            [5, 3, 1, 4, 2],
            [2, 5, 3, 1, 4],
        ]; // couldn't get this to work programmatically, shifting mutated the const array

        let galleryHover = function (e) {
            let id = parseInt(e.target.querySelector('.text').id.slice(-1));
            for (let i = 0; i < images.length; i++) {
                images[i].src = `images/gallery0${order[id-1][i]}.jpg`;
            }
        };

        for (let i = 0; i < galleryText.length; i++) {
            galleryText[i].addEventListener('mouseenter', galleryHover, false);
        }
    };

    return {
        initiate: initiate
    }

})();

let scrollModule = (function () {
    let currentFocus = 0;
    let currentSite = null;
    let isScrolling = false;
    let documentHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    let scrollInterval = null;
    let touchStartY = null;
    let touchDirection = 0;

    // Hardcoded scroll targets. In hindsight it would have been better to just name things better
    let scrollNames = [
        ['#header-index', '.history', '#hero01', '.gallery', '#hero02', '#index-cta', '#hero03', '#business'],
        ['#header-reusability', '#reflight-gallery', '#cores', '#first-landing' ],
        ['#header-rockets', '#falcon-9', '#falcon-heavy', '#falcon-1']
    ];

    let currentTitle = document.getElementsByTagName("title")[0].innerHTML;

    // Establish what site you are on
    if (currentTitle === "SpaceX - Space Exploration Technologies") {
        currentSite = 0;
    } else if (currentTitle === "SpaceX - Reusability") {
        currentSite = 1;
    } else if (currentTitle === "SpaceX - Rockets") {
        currentSite = 2;
    } else if (currentTitle === "SpaceX - Missions") {
        currentSite = 3;
    }

    // Set the height of the scrollbar based on height of the document.
    let initiateScrollBar = function () {
        if (currentSite === 3) {
            window.addEventListener('scroll', scroll, {passive: false});
            document.querySelector('#scroll').style.height = '50px';
        } else {
            window.addEventListener('wheel', scrollFunction, {passive: false});
            window.addEventListener("touchstart", touchStart, {passive: false});
            window.addEventListener("touchend", touchEnd, {passive: false});
            document.querySelector('#scroll').style.height = 1000 / (documentHeight / 1000) + "px";
            document.getElementsByTagName('body')[0].style.overflowY = "hidden";
            let allFadeElements = document.querySelectorAll('.fade'); // Enabling the fade animation only if JS is enabled
            for (let i = 0; i < allFadeElements.length; i++) {
                allFadeElements[i].style.opacity = '0'
            }
        }

    };

    // Calculate percentage the bar should be at based on its own height and the scrollbar.
    let scroll = function () {
        // calculate the percentage the scrollbar should be at while at a certain spot in the page
        let docE = document.documentElement;
        let scrollPercentage = (docE['scrollTop'] || document.body['scrollTop']) / ((docE['scrollHeight'] || document.body['scrollHeight']) - docE.clientHeight) * 100;
        let scrollbarHeight = window.innerHeight * 0.65; // corresponds to 65vh
        let scrollHeight = parseInt(document.querySelector('#scroll').style.height, 10);
        let scrollDiffPercentage = scrollHeight * (100/scrollbarHeight);
        let newPercentage = mapNumber(scrollPercentage, 0, 100, 0, (100 - scrollDiffPercentage) + 0.3);
        document.querySelector('#scroll').style.top = newPercentage + "%" // assign the new percentage to the scroll bar
    };

    let finishScroll = function () {
        isScrolling = false;
        clearInterval(scrollInterval);
    };

    let touchStart = function (e) {
        touchStartY = e.touches[0].clientY;
    };

    let touchEnd = function (e) {
        // Use the touchend cord - touchstard cord to determine direction of the swipe.
        let difference = touchStartY - e.changedTouches[0].clientY;
        if (difference > 100) {
            touchDirection = 1;
            scrollFunction(e);
        } else if ( difference < -100) {
            touchDirection = -1;
            scrollFunction(e);
        } else {
            touchDirection = 0;
        }
    };

    let fadeIn = function (element, query) {
        // fade in all the elements with a bigger and bigger delay
        let fadeElements = element.querySelectorAll(query);
        if (fadeElements !== undefined && fadeElements.length > 0) {
            for (let i = 0; i < fadeElements.length; i++) {
                fadeElements[i].style.transitionDelay = (250 * (i+1)) + "ms";
                fadeElements[i].style.opacity = '1';
            }
        }
    };

    // Use scrollIntoView as well as a tick function to scroll page and the custom scrollbar
    let scrollFunction = function (e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        let forward = function () {
            let focus = document.querySelector(scrollNames[currentSite][currentFocus + 1]);
            currentFocus = currentFocus + 1;
            return focus;
        };

        let backwards = function () {
            let focus = document.querySelector(scrollNames[currentSite][currentFocus - 1]);
            currentFocus = currentFocus - 1;
            return focus;
        };

        if (!isScrolling && currentFocus >= 0 ) {
            let nextElement = null;

            if (e.deltaY !== undefined && e.deltaY !== 0) {
                if (e.deltaY > 0 && currentFocus < (scrollNames[currentSite].length - 1)) {
                    nextElement = forward();
                } else if ( e.deltaY < 0 && currentFocus > 0 ) {
                    nextElement = backwards();
                } else {
                    return false; // Cancel scroll if no direction
                }
            } else {
                if (touchDirection === -1 && currentFocus > 0) {
                    nextElement = backwards();
                } else if (touchDirection === 1  && currentFocus < (scrollNames[currentSite].length - 1)) {
                    nextElement = forward();
                } else {
                    return false; // Cancel scroll if no direction
                }
            }

            if (!isScrolling) {
                isScrolling = true;

                if (isScrolling === true) {
                    nextElement.scrollIntoView({behavior: "smooth"});
                    scrollInterval = setInterval(scroll, 15); // 15ms seem to make a smooth enough animation
                    setTimeout(finishScroll, 500);
                    fadeIn(nextElement, '.fade');
                }
            }
        }
    };

    let getCurrentSite = function () {
        return currentSite;
    };

    return {
        initiateScrollBar: initiateScrollBar,
        getCurrentSite: getCurrentSite,
        fadeIn: fadeIn
    }

})();

let reusabilityModule = (function () {

    let cores = null;

    let createModal = function () {
        // Main info
        for (let i = 0; i < cores.length; i++) {
            let missions = ``;
            if (cores[i].missions !== undefined || cores[i].missions.length !== 0) {
                for (let j = 0; j < cores[i].missions.length; j++) {
                    missions += `                    
                        <div class="rocket-info">
                            <p>Mission ${j+1}</p>
                            <p>${cores[i].missions[j].name}</p>
                        </div>
                    `;
                }
            }

            document.querySelector("#cores").innerHTML += `
                <div id="${cores[i].core_serial}-modal" class="rocket-card" style="opacity: 0">
                    <h3>${cores[i].core_serial}</h3>            
                    <div class="rocket-info">
                        <p>Block Type</p>
                        <p>${cores[i].block}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Attempted ASDS Landings</p>
                        <p>${cores[i].asds_landings}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Attempted RTLS Landings</p>
                        <p>${cores[i].rtls_landings}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Water Landings</p>
                        <p>${boolToText(cores[i].water_landing)}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Current Status</p>
                        <p>${cores[i].status}</p>
                    </div>
                </div>
            `;

            document.querySelector(`#${cores[i].core_serial}-modal`).innerHTML += missions;
            document.querySelectorAll(`#core-${i+1} .core-title`)[0].innerHTML = cores[i].core_serial;
        }

        bindEvents();
    };

    let clickCard = function (event) {
        let targetName = event.target.parentElement.querySelector('.core-title').innerHTML;
        let target = document.querySelector(`#${targetName}-modal`);

        // target.style.top = event.clientY + 'px';
        // target.style.left = (event.clientX + 50) + 'px';
        target.style.display = 'block';
        target.style.opacity = '1';
    };

    let clickExit = function (e) {
        let target = null;
        if (e.target.classList.contains('rocket-card')) {
            target = e.target;
        } else {
            let currentTarget = e.target;
            while (!currentTarget.classList.contains('rocket-card')) { // All of this to get around the event bubbling
                currentTarget = currentTarget.parentElement;
            }
            target = currentTarget;
        }
        target.style.opacity = '0';
        setTimeout(function () {
            target.style.display = 'none';
        }, 100)
    };

    let bindEvents = function () {
        let coreCards = document.querySelectorAll('.core-card');
        let coreModals = document.querySelectorAll('.rocket-card');

        for (let i = 0; i < coreCards.length; i++) {
            coreCards[i].addEventListener('click', clickCard, false);
        }

        for (let i = 0; i < coreModals.length; i++) {
            coreModals[i].addEventListener('click', clickExit, false);
        }
    };

    let initiate = function () {
        fetch('https://api.spacexdata.com/v3/cores')
            .then(function(response) {
                return response.json();
            })
            .then(function (json) {
                cores = json.slice(-6); // only getting the last 6, could be changed into all with a gallery section instead
                createModal();
            })
            .catch(function (errors) {
                console.log(errors);
            });
    };

    return {
        initiate: initiate
    }

})();

let rocketModule = (function () {
    let rockets = null;

    let createCards = function () {
        for (let i = 0; i < rockets.length - 1; i++) {
            let currentRocket = null;
            let GTO = 0;

            if ( i === 0 ) {
                currentRocket = "falcon-1";
            } else if ( i === 1 ) {
                currentRocket = "falcon-9";
            } else {
                currentRocket = "falcon-heavy";
            }

            if ( rockets[i].payload_weights[1] !== undefined ) {
                GTO = rockets[i].payload_weights[1].kg;
            }

            // Main info
            document.querySelector(`#${currentRocket}`).innerHTML += `
                <div id="${currentRocket}-main" class="rocket-card main-card fade" style="opacity: 0">
                    <h3>${rockets[i].rocket_name}</h3>
                    <div class="rocket-info">
                        <p>Cost Per Launch</p>
                        <p>$${rockets[i].cost_per_launch}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Payload LEO</p>
                        <p>${rockets[i].payload_weights[0].kg}kg</p>
                    </div>
                    <div class="rocket-info">
                        <p>Payload GTO</p>
                        <p>${GTO}kg</p>
                    </div>                
                    <div class="rocket-info">
                        <p>Stages</p>
                        <p>${rockets[i].stages}</p>
                    </div>                                    
                    <div class="rocket-info">
                        <p>Diameter</p>
                        <p>${rockets[i].diameter.meters}m</p>
                    </div>                            
                    <div class="rocket-info">
                        <p>Height</p>
                        <p>${rockets[i].height.meters}m</p>
                    </div>
                    <div class="rocket-info">
                        <p>Success Rate</p>
                        <p>${rockets[i].success_rate_pct}%</p>
                    </div>
                    <div class="rocket-info">
                        <p>Operational</p>
                        <p>${boolToText(rockets[i].active)}</p>
                    </div>
                </div>
            `;

            // Rocket engines
            document.querySelector(`#${currentRocket}`).innerHTML += `
                <div id="${currentRocket}-engines" class="rocket-card">
                    <h3>${rockets[i].rocket_name} Engines</h3>
                    <div class="rocket-info">
                        <p>Type</p>
                        <p>${rockets[i].engines.type}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Version</p>
                        <p>${rockets[i].engines.version}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Number</p>
                        <p>${rockets[i].engines.number}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Propellant</p>
                        <p>${rockets[i].engines.propellant_2}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Thrust - Sea level</p>
                        <p>${rockets[i].engines.thrust_sea_level.kN}kN</p>
                    </div>
                    <div class="rocket-info">
                        <p>Thrust - Vacuum</p>
                        <p>${rockets[i].engines.thrust_vacuum.kN}kN</p>
                    </div>
                    <div class="rocket-info">
                        <p>Layout</p>
                        <p>${rockets[i].engines.layout}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Max engine loss</p>
                        <p>${rockets[i].engines.engine_loss_max}</p>
                    </div>
                </div>
            `;

            // Lower stage
            document.querySelector(`#${currentRocket}`).innerHTML += `
                <div id="${currentRocket}-lower-stage" class="rocket-card">
                    <h3>${rockets[i].rocket_name} First Stage</h3>
                    <div class="rocket-info">
                        <p>Engines</p>
                        <p>${rockets[i].first_stage.engines}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Burn time</p>
                        <p>${rockets[i].first_stage.burn_time_sec}sec</p>
                    </div>
                    <div class="rocket-info">
                        <p>Fuel amount</p>
                        <p>${rockets[i].first_stage.fuel_amount_tons}tons</p>
                    </div>
                    <div class="rocket-info">
                        <p>Reusable</p>
                        <p>${boolToText(rockets[i].first_stage.reusable)}</p>
                    </div>
                    
                    <div class="rocket-info">
                        <p>Thrust - Sea level</p>
                        <p>${rockets[i].first_stage.thrust_sea_level.kN}kN</p>
                    </div>
                    <div class="rocket-info">
                        <p>Thrust - Vacuum</p>
                        <p>${rockets[i].first_stage.thrust_vacuum.kN}kN</p>
                    </div>
                </div>
            `;

            // Upper stage
            document.querySelector(`#${currentRocket}`).innerHTML += `
                <div id="${currentRocket}-upper-stage" class="rocket-card">
                    <h3>${rockets[i].rocket_name} Second Stage</h3>
                    <div class="rocket-info">
                        <p>Engines</p>
                        <p>${rockets[i].second_stage.engines}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Burn time</p>
                        <p>${rockets[i].second_stage.burn_time_sec}sec</p>
                    </div>
                    <div class="rocket-info">
                        <p>Fuel amount</p>
                        <p>${rockets[i].second_stage.fuel_amount_tons}tons</p>
                    </div>                
                    <div class="rocket-info">
                        <p>Reusable</p>
                        <p>${boolToText(rockets[i].second_stage.reusable)}</p>
                    </div>
                    
                    <div class="rocket-info">
                        <p>Thrust</p>
                        <p>${rockets[i].second_stage.thrust.kN}kN</p>
                    </div>
                </div>
            `;

            // Rocket fairing
            document.querySelector(`#${currentRocket}`).innerHTML += `
                <div id="${currentRocket}-fairing" class="rocket-card">
                    <h3>${rockets[i].rocket_name} Composite Fairing</h3>
                    <div class="rocket-info">
                        <p>Diameter</p>
                        <p>${rockets[i].second_stage.payloads.composite_fairing.diameter.meters}m</p>
                    </div>
                    <div class="rocket-info">
                        <p>Height</p>
                        <p>${rockets[i].second_stage.payloads.composite_fairing.height.meters}m</p>
                    </div>
                </div>
            `;

            // Landing legs
            document.querySelector(`#${currentRocket}`).innerHTML += `
                <div id="${currentRocket}-landing-legs" class="rocket-card">
                    <h3>${rockets[i].rocket_name} Landing Legs</h3>
                    <div class="rocket-info">
                        <p>Number</p>
                        <p>${rockets[i].landing_legs.number}</p>
                    </div>
                    <div class="rocket-info">
                        <p>Material</p>
                        <p>${rockets[i].landing_legs.material}</p>
                    </div>
                </div>
            `;

        }

        // Dragon capsule

        fetch('https://api.spacexdata.com/v3/dragons/dragon1')
            .then(function(response) {
                return response.json();
            })
            .then(function (json) {
                let capsule = json;
                document.querySelector("#falcon-9").innerHTML += `
                    <div id="falcon-9-capsule" class="rocket-card">
                        <h3>${capsule.name}</h3>
                        <div class="rocket-info">
                            <p>Crew Capacity</p>
                            <p>${capsule.crew_capacity}</p>
                        </div>
                        <div class="rocket-info">
                            <p>Dry Mass</p>
                            <p>${capsule.dry_mass_kg}kg</p>
                        </div>
                        <div class="rocket-info">
                            <p>First Flight</p>
                            <p>${capsule.first_flight}</p>
                        </div>
                        <div class="rocket-info">
                            <p>Heat Shield Material</p>
                            <p>${capsule.heat_shield.material}</p>
                        </div>
                        <div class="rocket-info">
                            <p>Heat Shield Size</p>
                            <p>${capsule.heat_shield.size_meters}m</p>
                        </div>
                        <div class="rocket-info">
                            <p>Heat Shield Maximum temperature</p>
                            <p>${capsule.heat_shield.temp_degrees}</p>
                        </div>
                        <div class="rocket-info">
                            <p>Thruster</p>
                            <p>${capsule.thrusters[0].type}</p>
                        </div>
                        <div class="rocket-info">
                            <p>Thruster amount</p>
                            <p>${capsule.thrusters[0].amount}</p>
                        </div>
                        <div class="rocket-info">
                            <p>Payload Mass</p>
                            <p>${capsule.launch_payload_mass.kg}kg</p>
                        </div>
                        <div class="rocket-info">
                            <p>Payload Volume</p>
                            <p>${capsule.launch_payload_vol.cubic_meters}m2</p>
                        </div>
                        <div class="rocket-info">
                            <p>Return Payload Mass</p>
                            <p>${capsule.return_payload_mass.kg}kg</p>
                        </div>
                        <div class="rocket-info">
                            <p>Return Payload Volume</p>
                            <p>${capsule.return_payload_vol.cubic_meters}m2</p>
                        </div>                
                        <div class="rocket-info">
                            <p>Diameter</p>
                            <p>${capsule.diameter.meters}m</p>
                        </div>
                        <div class="rocket-info">
                            <p>Height</p>
                            <p>${capsule.height_w_trunk.meters}m</p>
                        </div>
                    </div>
                `;
                bindEvents();
            })
            .catch(function (errors) {
                console.log(errors);
            });

    };

    let toggleVisibility = function (element, event) {
        // Hide element if it has no "shown" class, else show the element and place it next to the cursor
        if (element.classList.contains('shown') && event.type === 'mouseleave') {
            element.style.opacity = '0';
            setTimeout(function () {
                element.style.display = 'none';
                element.classList.remove('shown');
            }, 100);
        } else {
            // If the cursor is close to the bottom of the screen change it up some.
            let yOffset = null;
            if (event.clientY > window.innerHeight - window.innerHeight * 0.2) { // If the cursor is in the bottom 20%
                yOffset = window.innerHeight * 0.2;
            } else {
                yOffset = 50;
            }
            element.classList.add('shown');
            element.style.display = 'block';
            element.style.top = (event.clientY - yOffset) + 'px';
            element.style.left = (event.clientX + 50) + 'px';
            element.style.opacity = '1';
        }
    };

    let hoverCard = function (e) {
        let event = e;
        let id = this.getAttribute("id");

        // Based on the id of the hovered element, select the right element and display/hide it
        switch (true) {
            case (id.includes("falcon-9")):
                switch (true) {
                    case (id.includes("third")):
                        toggleVisibility(document.querySelector('#falcon-9-fairing'), event);
                        break;
                    case (id.includes("upper")):
                        toggleVisibility(document.querySelector('#falcon-9-upper-stage'), event);
                        break;
                    case (id.includes("lower")):
                        toggleVisibility(document.querySelector('#falcon-9-lower-stage'), event);
                        break;
                    case (id.includes("landing")):
                        toggleVisibility(document.querySelector('#falcon-9-landing-legs'), event);
                        break;
                    case (id.includes("engine")):
                        toggleVisibility(document.querySelector('#falcon-9-engines'), event);
                        break;
                    case (id.includes("capsule")):
                        toggleVisibility(document.querySelector('#falcon-9-capsule'), event);
                        break;
                    default:
                }
                break;
            case (id.includes("falcon-heavy")):
                switch (true) {
                    case (id.includes("third")):
                        toggleVisibility(document.querySelector('#falcon-heavy-fairing'), event);
                        break;
                    case (id.includes("upper")):
                        toggleVisibility(document.querySelector('#falcon-heavy-upper-stage'), event);
                        break;
                    case (id.includes("lower")):
                        toggleVisibility(document.querySelector('#falcon-heavy-lower-stage'), event);
                        break;
                    case (id.includes("landing")):
                        toggleVisibility(document.querySelector('#falcon-heavy-landing-legs'), event);
                        break;
                    case (id.includes("engine")):
                        toggleVisibility(document.querySelector('#falcon-heavy-engines'), event);
                        break;
                    default:
                }
                break;
            default:
                switch (true) {
                    case (id.includes("upper")):
                        toggleVisibility(document.querySelector('#falcon-1-upper-stage'), event);
                        break;
                    case (id.includes("lower")):
                        toggleVisibility(document.querySelector('#falcon-1-lower-stage'), event);
                        break;
                    case (id.includes("engine")):
                        toggleVisibility(document.querySelector('#falcon-1-engines'), event);
                        break;
                    default:
                }
        }

    };

    let bindEvents = function () {
        let rocket_parts = document.querySelectorAll('.rocket-part');
        for (let i = 0; i < rocket_parts.length; i++) {
            rocket_parts[i].addEventListener('mouseenter', hoverCard, false);
            rocket_parts[i].addEventListener('mouseleave', hoverCard, false);
        }
    };

    let initiate = function () {
        fetch('https://api.spacexdata.com/v3/rockets')
            .then(function(response) {
                return response.json();
            })
            .then(function (json) {
                rockets = json;
                createCards();
            })
            .catch(function (errors) {
                console.log(errors);
            });
    };

    return {
        initiate: initiate
    }

})();

let missionModule = (function () {
    let missions = null;

    let createMissions = function () {

        // Misc formatting functions
        let missionId = function (missionId) {
            if (missionId === undefined || missionId.length === 0) {
                return 'No ID';
            } else {
                return missionId[0]
            }
        };

        let missionPatch = function (missionPatch) {
            if (missionPatch === null) {
                return "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png";
            } else {
                return missionPatch
            }
        };

        let missionDetails = function (mission) {
            let description = "";

            if (mission.details === null) {
                return "No details yet.";
            } else {
                description += `
                    <p>${mission.details}</p>
                `;
            }

            if ( mission.hasOwnProperty('launch_failure_details') ) {
                description += `
                    <p>Failure Details: ${mission.launch_failure_details.reason}</p>
                `;
            }

            return description
        };

        let missionSuccess = function (mission) {
            if (mission.launch_success !== null ) {
                if (mission.launch_success) {
                    return "Yes";
                } else {
                    return  "No"
                }
            } else {
                return "Not Launched"
            }
            // mission.launch_failure_details.reason
        };

        let createPayloads = function (payload) {
            let payloads = "";

            for (let i = 0; i < payload.length; i++) {
                payloads += `
                    <p>Type: ${payload[i].payload_type} ID: ${payload[i].payload_id}</p>
                `;
            }
            return payloads
        };

        for (let i = 0; i < missions.length; i++) {
            let mission = missions[i];
            let template = ``;

            template += `
                <div id="mission-${mission.flight_number}" class="container-mission">
                    <div class="mission-heading">
                        <img class="patch" src="${missionPatch(mission.links.mission_patch_small)}" alt="mission ${mission.mission_name} patch ">
                        <h3 class="mission-name">${mission.mission_name}</h3>
                    </div>                
                    <div class="mission-column">
                        <div class="mission-details">                    
                            <div class="mission-title">
                                <div class="container-title">
                                    <p>Mission ID</p>
                                    <p>${missionId(mission.mission_id)}</p>
                                </div>
                                <div class="container-title">
                                    <p>Successful Launch</p>
                                    <p>${missionSuccess(mission)}</p>
                                </div>
                                <div class="container-title">
                                    <p>Launch Date</p>
                                    <p>${new Date(mission.launch_date_unix * 1000).toISOString().slice(0, 19).replace('T', ' ')}</p>
                                </div>
                                <div class="container-title">
                                    <p>Rocket Used</p>
                                    <p>${mission.rocket.rocket_name}</p>
                                </div>
                                <div class="container-title">
                                    <p>Launch Site</p>
                                    <p>${mission.launch_site.site_name}</p>
                                </div>
                                <div class="container-title">
                                    <p>Video Link</p>
                                    <a href="${mission.links.video_link}" target="_blank">YouTube</a>
                                </div>
                            </div>
                            <p class="mission-description">${missionDetails(mission)}</p>
                        </div>
                        <div class="mission-payloads">
                            <div class="container-title">
                                <p>Payloads</p>
                            </div>
                            ${createPayloads(mission.rocket.second_stage.payloads)}
                        </div>
                    </div>
                    
                </div>
            `;

            document.querySelector("#missions").innerHTML += template;
        }
    };

    let initiate = function () {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(function(response) {
                return response.json();
            })
            .then(function (json) {
                missions = json;
                // console.table(missions);
                createMissions();
            })
            .catch(function (errors) {
                console.log(errors);
            });
    };

    return {
        initiate: initiate
    }

})();

let mobileModule = (function () {

    // Simple hide unhide mobile menu
    let toggleMenu = function (e) {
        let nav = document.querySelector('.nav');
        if (window.getComputedStyle(nav).display === 'none') {
            nav.style.display = 'block';
            nav.style.opacity = '1';
        } else {
            nav.style.opacity = '0';
            setTimeout(function () {
                nav.style.display = 'none';
            }, 500)
        }
    };

    let initiate = function () {
        document.querySelector('.mobile-menu').addEventListener('click', toggleMenu, false);
    };

    return {
        initiate: initiate
    }

})();

// Generic initial stuff

scrollModule.initiateScrollBar();
mobileModule.initiate();
animateHeader();

// Initiate the correct page's JS
if (scrollModule.getCurrentSite() === 0) {
    indexModule.initiate();
} else if (scrollModule.getCurrentSite() === 1) {
    reusabilityModule.initiate();
} else if (scrollModule.getCurrentSite() === 2) {
    rocketModule.initiate();
} else if (scrollModule.getCurrentSite() === 3) {
    missionModule.initiate();
}

