var currentRadius = 25


        function setOmega(value) {
            const iframe = document.getElementById("sim");
            iframe.contentWindow.postMessage({ omega: Number(value) }, "*");

            const omegaNumBox = document.getElementById("numberBoxOmega")
            omegaNumBox.value = value

            const velocityNumBox = document.getElementById("numberBoxVelocity")
            velocityNumBox.value = value * currentRadius
        }
        
        function setTanVel(value) {
            const iframe = document.getElementById("sim");
            iframe.contentWindow.postMessage({ omega: Number(value / currentRadius) }, "*");

            const velocityNumBox = document.getElementById("numberBoxVelocity")
            velocityNumBox.value = value

            const omegaNumBox = document.getElementById("numberBoxOmega")
            omegaNumBox.value = value / currentRadius

            console.log(value / currentRadius)
        }

        function setMass(value) {
            const iframe = document.getElementById("sim");
            iframe.contentWindow.postMessage({ mass: Number(value) }, "*");
            const massNumberBox = document.getElementById("numberBoxMass")
            massNumberBox.value = value
        }

        function setRadius(value) {
            const iframe = document.getElementById("sim");
            iframe.contentWindow.postMessage({ radius: Number(value) }, "*");
            const radiusNumberBox = document.getElementById("numberBoxRadius")
            radiusNumberBox.value = value
            currentRadius = value
            console.log("radius changed", currentRadius)
        }

        function setTrackerAmount(value) {
            const iframe = document.getElementById("sim");
            iframe.contentWindow.postMessage({ trackerAmount: Number(value) }, "*");
            const trackerAmountBox = document.getElementById("numberBoxTracker")
            trackerAmountBox.value = value
        }

        function setGravity(value) {
            const iframe = document.getElementById("sim2");
            iframe.contentWindow.postMessage({ G: Number(value) }, "*");
            const gravityNumberBox = document.getElementById("numberBoxGravity")
            gravityNumberBox.value = value
        }

        function setOrbitalVelocityOn(value) {
            const checkbox = document.getElementById("orbitVelocityCheckbox")
            const iframe = document.getElementById("sim2");
            iframe.contentWindow.postMessage({ OrbitOn: Boolean(checkbox.checked) }, "*");
        }

        function setGravitationalVelocityOn(value) {
            const checkbox = document.getElementById("gravityCheckbox")
            const iframe = document.getElementById("sim2");
            iframe.contentWindow.postMessage({ GravOn: Boolean(checkbox.checked) }, "*");
        }

        function setCreateTrackers(value) {
            const checkbox = document.getElementById("createTrackerCheckbox")
            const iframe = document.getElementById("sim2");
            iframe.contentWindow.postMessage({ TrackersOn: Boolean(checkbox.checked) }, "*");
        }

        function setDeleteTrackers(value) {
            const checkbox = document.getElementById("deleteTrackerCheckbox")
            const iframe = document.getElementById("sim2");
            iframe.contentWindow.postMessage({ DeleteTrackersOn: Boolean(checkbox.checked) }, "*");
        }

        function createNewObjectInSim() {
            const colorSelect = document.getElementById("colorSelect").value;
            const shapeSelect = document.getElementById("shapeSelect").value;
            const sizeX = parseFloat(document.getElementById("sizeX").value);
            const sizeY = parseFloat(document.getElementById("sizeY").value);
            const sizeZ = parseFloat(document.getElementById("sizeZ").value);
            const posX = parseFloat(document.getElementById("posX").value);
            const posY = parseFloat(document.getElementById("posY").value);
            const posZ = parseFloat(document.getElementById("posZ").value);

            // Map color names to GlowScript color objects
            const colorMap = {
                "red": "red",
                "green": "green",
                "blue": "blue",
                "cyan": "cyan",
                "yellow": "yellow",
                "magenta": "magenta",
                "white": "white",
                "orange": "orange"
            };

            const iframe = document.getElementById("sim2");
            iframe.contentWindow.postMessage({
                objColor: colorMap[colorSelect],
                objShape: shapeSelect,
                objSize: { x: sizeX, y: sizeY, z: sizeZ },
                objPosition: { x: posX, y: posY, z: posZ }
            }, "*");

            //alert("Object created! Check the simulation.");
        }