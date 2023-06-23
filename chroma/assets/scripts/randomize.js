// set lists and other variables to be used later
var listNormal = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16","c17"];
var listTainted = ["c18","c19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","c30","c31","c32","c33","c34"];
var listCustom = ["customc1","customc2","customc3","customc4","customc5","customc6","customc7","customc8","customc9","customc10","customc11","customc12","customc13","customc14","customc15","customc16","customc17","customc18","customc19","customc20"];
var characters = [];
var validCharacters = true;
var validGoals = true;
var validInputs = true;
var goals = [];
var timedGoals = [];
var challenges = [];

// random int function that gets used a lot
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// selecting arrays of all elements of certain classes/types
let charArray = document.querySelectorAll(".char");
let goalArray = document.querySelectorAll(".goal");
let timedGoalArray = document.querySelectorAll(".timedGoal");
let challengeArray = document.querySelectorAll(".challenge");
let labelArray = document.querySelectorAll("label");

// open options menu when clicking the options image
img_options.addEventListener("click", function(e) {
    updateOptionsSize();
    options1.style.pointerEvents = "initial";
    options1.style.opacity = 1;
});

// prevent weight values from being less than 0.1 or greater than 1
weightArray.forEach(function(elem) {
    elem.addEventListener("focusout", function(e) {
        if (elem.valueAsNumber >= 1) {
            elem.value = "1.0";
        } else if (elem.valueAsNumber < 0.1) {
            elem.value = "0.1";
        }
    });
});

// same as before but for boss weight values instead of characters
gWeightArray.forEach(function(elem) {
    elem.addEventListener("focusout", function(e) {
        if (elem.valueAsNumber >= 1) {
            elem.value = "1.0";
        } else if (elem.valueAsNumber < 0.1) {
            elem.value = "0.1";
        }
    });
});

// close options menu
optionsClose.addEventListener("click", function(e) {
    
    validCharacters = 0;
    validGoals = false;
    validInputs = true;

    // uncheck characters that are fully completed if "Only generate runs that haven't already been completed" is true
    if (completionCheck.checked) {
        for (i = 1; i <= 34; i++) {
            var fullyComplete = 0;
            let completionArray = document.querySelectorAll(".completion-c" + i);
            completionArray.forEach(function(elem) {
                if (elem.checked) {
                    fullyComplete++;
                }
            });

            if (fullyComplete == 9) {
                charArray.forEach(function(elem) {
                    if (elem.id == "c" + i) {
                        elem.checked = false;
                    }
                });
            }
        }
    }

    // increase validCharacters by 1 for each selected character to prevent trying to use the randomizer without enough characters selected
    charArray.forEach(function(elem) {
        if (elem.checked) {
            validCharacters++;
        }
    });

    // prevent options from being closed without at least 1 goal selected
    goalArray.forEach(function(elem) {
        if (elem.checked) {
            validGoals = true;
        }
    });

    // if custom characters are enabled, make sure that names are not empty (and weights, if enabled)
    // to do: find a better way to do this?
    if (customCheck.checked) {
        if (customc1.checked) {
            if (customn1.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw1.value == "") {
                validInputs = false;
            }
        }
        if (customc2.checked) {
            if (customn2.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw2.value == "") {
                validInputs = false;
            }
        }
        if (customc3.checked) {
            if (customn3.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw3.value == "") {
                validInputs = false;
            }
        }
        if (customc4.checked) {
            if (customn4.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw4.value == "") {
                validInputs = false;
            }
        }
        if (customc5.checked) {
            if (customn5.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw5.value == "") {
                validInputs = false;
            }
        }
        if (customc5.checked) {
            if (customn5.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw5.value == "") {
                validInputs = false;
            }
        }
        if (customc6.checked) {
            if (customn6.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw6.value == "") {
                validInputs = false;
            }
        }
        if (customc7.checked) {
            if (customn7.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw7.value == "") {
                validInputs = false;
            }
        }
        if (customc8.checked) {
            if (customn8.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw8.value == "") {
                validInputs = false;
            }
        }
        if (customc9.checked) {
            if (customn9.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw9.value == "") {
                validInputs = false;
            }
        }
        if (customc10.checked) {
            if (customn10.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw10.value == "") {
                validInputs = false;
            }
        }
        if (customc11.checked) {
            if (customn11.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw11.value == "") {
                validInputs = false;
            }
        }
        if (customc12.checked) {
            if (customn12.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw12.value == "") {
                validInputs = false;
            }
        }
        if (customc13.checked) {
            if (customn13.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw13.value == "") {
                validInputs = false;
            }
        }
        if (customc14.checked) {
            if (customn14.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw14.value == "") {
                validInputs = false;
            }
        }
        if (customc15.checked) {
            if (customn15.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw15.value == "") {
                validInputs = false;
            }
        }
        if (customc16.checked) {
            if (customn16.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw16.value == "") {
                validInputs = false;
            }
        }
        if (customc17.checked) {
            if (customn17.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw17.value == "") {
                validInputs = false;
            }
        }
        if (customc18.checked) {
            if (customn18.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw18.value == "") {
                validInputs = false;
            }
        }
        if (customc19.checked) {
            if (customn19.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw19.value == "") {
                validInputs = false;
            }
        }
        if (customc20.checked) {
            if (customn20.value == "") {
                validInputs = false;
            }
            if (weightVisible && customw20.value == "") {
                validInputs = false;
            }
        }
    }

    // either close the options menu and set storage, or display an alert on why the options will not close
    if (numberPlayers == "2" && duplicateCheck.checked) {
        if (validCharacters >= 2 && validGoals && validInputs) {
            options1.style.pointerEvents = "none";
            options1.style.opacity = 0;
            setStorage();
        } else if (validCharacters < 2 && !validGoals && !validInputs && completionCheck.checked) {
            alert("At least two characters and one objective must be checked. \nCharacters that are already fully complete are automatically unchecked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters < 2 && !validGoals && !validInputs) {
            alert("At least two characters and one objective must be checked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters < 2 && validGoals && validInputs && completionCheck.checked) {
            alert("At least two characters must be checked. \nCharacters that are already fully complete are automatically unchecked.");
        } else if (validCharacters < 2 && validGoals && validInputs) {
            alert("At least two characters must be checked.");
        } else if (validCharacters >= 2 && !validGoals && validInputs) {
            alert("At least one objective must be checked.");
        } else if (validCharacters >= 2 && !validGoals && !validInputs) {
            alert("At least one objective must be checked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters >= 2 && validGoals && !validInputs) {
            alert("Input fields for character weights or custom character names cannot be blank.");
        }else {
            alert("Something went wrong.");
        }
    } else if (numberPlayers == "3" && duplicateCheck.checked) {
        if (validCharacters >= 3 && validGoals && validInputs) {
            options1.style.pointerEvents = "none";
            options1.style.opacity = 0;
            setStorage();
        } else if (validCharacters < 3 && !validGoals && !validInputs && completionCheck.checked) {
            alert("At least three characters and one objective must be checked. \nCharacters that are already fully complete are automatically unchecked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters < 3 && !validGoals && !validInputs) {
            alert("At least three characters and one objective must be checked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters < 3 && validGoals && validInputs && completionCheck.checked) {
            alert("At least three characters must be checked. \nCharacters that are already fully complete are automatically unchecked.");
        } else if (validCharacters < 3 && validGoals && validInputs) {
            alert("At least three characters must be checked.");
        } else if (validCharacters >= 3 && !validGoals && validInputs) {
            alert("At least one objective must be checked.");
        } else if (validCharacters >= 3 && !validGoals && !validInputs) {
            alert("At least one objective must be checked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters >= 3 && validGoals && !validInputs) {
            alert("Input fields for character weights or custom character names cannot be blank.");
        }else {
            alert("Something went wrong.");
        }
    } else if (numberPlayers == "4" && duplicateCheck.checked) {
        if (validCharacters >= 4 && validGoals && validInputs) {
            options1.style.pointerEvents = "none";
            options1.style.opacity = 0;
            setStorage();
        } else if (validCharacters < 4 && !validGoals && !validInputs && completionCheck.checked) {
            alert("At least four characters and one objective must be checked. \nCharacters that are already fully complete are automatically unchecked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters < 4 && !validGoals && !validInputs) {
            alert("At least four characters and one objective must be checked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters < 4 && validGoals && validInputs && completionCheck.checked) {
            alert("At least four characters must be checked. \nCharacters that are already fully complete are automatically unchecked.");
        } else if (validCharacters < 4 && validGoals && validInputs) {
            alert("At least four characters must be checked.");
        } else if (validCharacters >= 4 && !validGoals && validInputs) {
            alert("At least one objective must be checked.");
        } else if (validCharacters >= 4 && !validGoals && !validInputs) {
            alert("At least one objective must be checked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters >= 4 && validGoals && !validInputs) {
            alert("Input fields for character weights or custom character names cannot be blank.");
        }else {
            alert("Something went wrong.");
        }
    } else {
        if (validCharacters >= 1 && validGoals && validInputs) {
            options1.style.pointerEvents = "none";
            options1.style.opacity = 0;
            setStorage();
        } else if (validCharacters < 1 && !validGoals && !validInputs && completionCheck.checked) {
            alert("At least one character and objective must be checked. \nCharacters that are already fully complete are automatically unchecked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters < 1 && !validGoals && !validInputs) {
            alert("At least one character and objective must be checked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters < 1 && validGoals && validInputs && completionCheck.checked) {
            alert("At least one character must be checked. \nCharacters that are already fully complete are automatically unchecked.");
        } else if (validCharacters < 1 && validGoals && validInputs) {
            alert("At least one character must be checked.");
        } else if (validCharacters >= 1 && !validGoals && validInputs) {
            alert("At least one objective must be checked.");
        } else if (validCharacters >= 1 && !validGoals && !validInputs) {
            alert("At least one objective must be checked. \nInput fields for character weights or custom character names cannot be blank.");
        } else if (validCharacters >= 1 && validGoals && !validInputs) {
            alert("Input fields for character weights or custom character names cannot be blank.");
        }else {
            alert("Something went wrong.");
        }
    }

});

// used to prevent the user from clicking the randomize button before it finishes displaying all images
var currentlyRandomizing = false;

// the whole randomize function
img_randomize.addEventListener("click", function(e) {

    if (currentlyRandomizing == false) {

        currentlyRandomizing = true;

        // set the images/text to be invisible until the randomizer finishes running
        img_charSolo.style.opacity = 0;
        img_nameSolo.style.opacity = 0;
        img_charDuo1.style.opacity = 0;
        img_nameDuo1.style.opacity = 0;
        img_charDuo2.style.opacity = 0;
        img_nameDuo2.style.opacity = 0;
        img_charTrio1.style.opacity = 0;
        img_nameTrio1.style.opacity = 0;
        img_charTrio2.style.opacity = 0;
        img_nameTrio2.style.opacity = 0;
        img_charTrio3.style.opacity = 0;
        img_nameTrio3.style.opacity = 0;
        img_charQuad1.style.opacity = 0;
        img_charQuad2.style.opacity = 0;
        img_charQuad3.style.opacity = 0;
        img_charQuad4.style.opacity = 0;
        img_randomize.style.opacity = 0;
        img_randomize.style.cursor = "progress";
        img_obj1.style.opacity = 0;
        img_obj2.style.opacity = 0;
        challengeContainer.style.opacity = 0;
        customTextSolo.style.opacity = 0;
        customTextDuo1.style.opacity = 0;
        customTextDuo2.style.opacity = 0;
        customTextTrio1.style.opacity = 0;
        customTextTrio2.style.opacity = 0;
        customTextTrio3.style.opacity = 0;
        customTextQuad1.style.opacity = 0;
        customTextQuad2.style.opacity = 0;
        customTextQuad3.style.opacity = 0;
        customTextQuad4.style.opacity = 0;

        img_simpleCharSolo.style.opacity = 0;
        img_simpleNameSolo.style.opacity = 0;
        img_simpleCharMulti1.style.opacity = 0;
        img_simpleCharMulti2.style.opacity = 0;
        img_simpleCharMulti3.style.opacity = 0;
        img_simpleCharMulti4.style.opacity = 0;
        img_simpleGoal1.style.opacity = 0;
        img_simpleGoal2.style.opacity = 0;
        img_simplePlus.style.opacity = 0;
        simpleChallengeContainer.style.opacity = 0;

        img_simpleCharSoloB.style.opacity = 0;
        img_simpleNameSoloB.style.opacity = 0;
        img_simpleCharMulti1B.style.opacity = 0;
        img_simpleCharMulti2B.style.opacity = 0;
        img_simpleCharMulti3B.style.opacity = 0;
        img_simpleCharMulti4B.style.opacity = 0;
        img_simpleGoal1B.style.opacity = 0;
        img_simpleGoal2B.style.opacity = 0;
        img_simplePlusB.style.opacity = 0;
        simpleChallengeContainerB.style.opacity = 0;

        // create an array for the characters
        characters = [];
        // run through every input type in the charArray
        charArray.forEach(function(elem) {
            // no custom characters
            if (elem.checked && !elem.classList.contains("custom")) {
                // if weights are enabled, add duplicates of the same character to make them more (or less) likely to be chosen
                if (weightVisible) {
                    // get weight value by reading the id of the current character in the array
                    var weightValue = document.getElementById("w" + elem.id.split("c")[1]).valueAsNumber;
                    for (i = 0; i < (weightValue * 10); i++) {
                        characters.push(elem.id);
                    }
                // if weights are not enabled, add the character to the array a single time
                } else {
                    characters.push(elem.id);
                }
            // yes custom characters
            } else if (elem.checked && elem.classList.contains("custom")) {
                if (customCheck.checked) {
                    // if weights are enabled, add duplicates of the same character to make them more (or less) likely to be chosen
                    if (weightVisible) {
                        // get weight value by reading the id of the current character in the array
                        var weightValue = document.getElementById("customw" + elem.id.split("c")[2]).valueAsNumber;
                        for (i = 0; i < (weightValue * 10); i++) {
                            characters.push(elem.id);
                        }
                    // if weights are not enabled, add the character to the array a single time
                    } else {
                        characters.push(elem.id);
                    }
                }
            }
        });

        // create an array for the goals
        goals = [];
        // run through every input type in the goalArray
        goalArray.forEach(function(elem) {
            if (elem.checked) {
                // if weights are enabled, add duplicates of the same goal to make them more (or less) likely to be chosen
                if (gWeightVisible) {
                    var gWeightValue = document.getElementById("gw" + elem.id.split("g")[1]).valueAsNumber;
                    for (i = 0; i < (gWeightValue * 10); i++) {
                        goals.push(elem.id);
                    }
                // if weights are not enabled, add the goal to the array a single time
                } else {
                    goals.push(elem.id);
                }
            }
        });

        // create an array for the challenges
        challenges = [];
        // run through every input type in the challengeArray
        challengeArray.forEach(function(elem) {
            if (elem.checked) {
                // add the challenge to the array a single time
                challenges.push(elem.id);
            }
        })

        // check if timed goals are enabled
        if (timedCheck.checked) {
            // create an array for timed goals
            timedGoals = [];
            timedGoalArray.forEach(function(elem) {
                if (elem.checked) {
                    // add the timed goal to the array a single time
                    timedGoals.push(elem.id);
                }
            });
        }

        // choose the character (1 player)
        if (characters.length != 0 && numberPlayers == "1") {

            // set charMax to length of array - 1 (since it starts at 0)
            var charMax = characters.length - 1;
            // select a character using randomInt function
            var selected = randomInt(0, charMax);

            var name1;
            // get name of character, either from the normal list or custom names
            labelArray.forEach(function(elem) {
                if (elem.htmlFor == characters[selected]) {
                    name1 = elem.innerHTML;
                }
            });
            if (listCustom.includes(characters[selected])) {
                name1 = document.getElementById("customn" + characters[selected].split("c")[2]).value;
            }
            finalChar.innerHTML = name1;

            // if "Only generate runs that haven't already been completed" is true, prevent certain objectives from being selected by removing them from the arrays
            if (completionCheck.checked) {
                let completionArray = document.querySelectorAll(".completion-" + characters[selected]);
                completionArray.forEach(function(elem) {
                    if (elem.checked) {
                        if (gWeightVisible) {
                            while(goals.includes(elem.id.split("_")[2])) {
                                goals.splice(goals.indexOf(elem.id.split("_")[2]), 1);
                            }
                        } else {
                            if(goals.includes(elem.id.split("_")[2])) {
                                goals.splice(goals.indexOf(elem.id.split("_")[2]), 1);
                            }
                        }
                        if(timedGoals.includes(elem.id.split("_")[2])) {
                            timedGoals.splice(timedGoals.indexOf(elem.id.split("_")[2]), 1);
                        }
                    }
                });
            }

            // set character images/names
            if (goals.length != 0) {
                if (!listCustom.includes(characters[selected])) {
                    // set character image and name
                    img_charSolo.src = "assets/img/" + characters[selected] + ".png";
                    img_simpleCharSolo.src = "assets/img/" + characters[selected] + ".png";
                    img_simpleCharSoloB.src = "assets/img/" + characters[selected] + ".png";
                    img_nameSolo.src = "assets/img/" + characters[selected] + "_name.png";
                    img_simpleNameSolo.src = "assets/img/" + characters[selected] + "_name.png";
                    img_simpleNameSoloB.src = "assets/img/" + characters[selected] + "_name.png";

                    // change page background depending on if character is tainted or not
                    if (listNormal.includes(characters[selected])) {
                        img_page.src = "assets/img/page_blood.png";
                    } else if (listTainted.includes(characters[selected])) {
                        img_page.src = "assets/img/page_alt_blood.png";
                    }
                    customTextSolo.innerHTML = "";
                    simpleCustom.innerHTML = "";
                    simpleCustomB.innerHTML = "";
                } else {
                    var customName = document.getElementById("customn" + characters[selected].split("c")[2]).value;
                    // hide images normally used, use custom character text instead
                    img_charSolo.src = "";
                    img_simpleCharSolo.src = "";
                    img_simpleCharSoloB.src = "";
                    img_nameSolo.src = "";
                    img_simpleNameSolo.src = "";
                    img_simpleNameSoloB.src = "";
                    customTextSolo.innerHTML = "<p>Custom Character:</p><p>"+ customName +"</p>";
                    finalChar.innerHTML = customName;
                    simpleCustom.innerHTML = customName;
                    simpleCustomB.innerHTML = customName;
                }
                img_simpleCharMulti1.src = "";
                img_simpleCharMulti2.src = "";
                img_simpleCharMulti3.src = "";
                img_simpleCharMulti4.src = "";
                img_simpleCharMulti1B.src = "";
                img_simpleCharMulti2B.src = "";
                img_simpleCharMulti3B.src = "";
                img_simpleCharMulti4B.src = "";
            } else {
                // default to a ? symbol if something goes wrong
                img_charSolo.src = "assets/img/questionmark.png";
                img_simpleCharSolo.src = "assets/img/questionmark.png";
                img_simpleCharSoloB.src = "assets/img/questionmark.png";
                img_nameSolo.src = "";
                img_simpleNameSolo.src = "";
                img_simpleCharMulti1.src = "";
                img_simpleCharMulti2.src = "";
                img_simpleCharMulti3.src = "";
                img_simpleCharMulti4.src = "";
                img_simpleNameSoloB.src = "";
                img_simpleCharMulti1B.src = "";
                img_simpleCharMulti2B.src = "";
                img_simpleCharMulti3B.src = "";
                img_simpleCharMulti4B.src = "";
                customTextSolo.innerHTML = "";
                simpleCustom.innerHTML = "";
                simpleCustomB.innerHTML = "";
            }

        // choose a character (2 players)
        } else if (characters.length != 0 && numberPlayers == "2") {

            // set charMax to length of array - 1 (since it starts at 0)
            var charMax = characters.length - 1;
            // select character for player 1 using randomInt function
            var selected1 = randomInt(0, charMax);
            var char1 = characters[selected1];
            var char2;

            // if "Don't let multiple players get the same character" is checked, remove the character that was chosen for player 1 from the pool, then choose for player 2
            if (duplicateCheck.checked) {
                characters.splice(characters.indexOf(char1), 1);
                charMax = characters.length - 1;
                var selected2 = randomInt(0, charMax);
                char2 = characters[selected2];
            // else just pick any character for player 2
            } else {
                var selected2 = randomInt(0, charMax);
                char2 = characters[selected2];
            }

            var name1;
            var name2;
            // get names of characters, either from the normal list or custom names
            labelArray.forEach(function(elem) {

                if (elem.htmlFor == char1) {
                    name1 = elem.innerHTML;
                }
                if (elem.htmlFor == char2) {
                    name2 = elem.innerHTML;
                }
            });

            if (listCustom.includes(char1)) {
                name1 = document.getElementById("customn" + char1.split("c")[2]).value;
            }
            if (listCustom.includes(char2)) {
                name2 = document.getElementById("customn" + char2.split("c")[2]).value;
            }

            finalChar.innerHTML = name1 + " & " + name2;

            // set character images/names
            if (goals.length != 0) {
                simpleCustom.innerHTML = "";
                simpleCustomB.innerHTML = "";
                // set player 1
                if (!listCustom.includes(char1)) {
                    img_charDuo1.src = "assets/img/" + char1 + ".png";
                    img_simpleCharMulti1.src = "assets/img/" + char1 + ".png";
                    img_simpleCharMulti1B.src = "assets/img/" + char1 + ".png";
                    img_nameDuo1.src = "assets/img/" + char1 + "_name.png";
                    customTextDuo1.innerHTML = "";
                // or hide images and use custom text
                } else {
                    img_charDuo1.src = "";
                    img_simpleCharMulti1.src = "";
                    img_simpleCharMulti1B.src = "";
                    img_nameDuo1.src = "";
                    customTextDuo1.innerHTML = "<p>Custom:</p><p>"+ name1 +"</p>";
                    simpleCustom.innerHTML = "<p>P1: "+ name1 +"</p>";
                    simpleCustomB.innerHTML = "<p>P1: "+ name1 +"</p>";
                }
                // set player 2
                if (!listCustom.includes(char2)) {
                    img_charDuo2.src = "assets/img/" + char2 + ".png";
                    img_simpleCharMulti2.src = "assets/img/" + char2 + ".png";
                    img_simpleCharMulti2B.src = "assets/img/" + char2 + ".png";
                    img_nameDuo2.src = "assets/img/" + char2 + "_name.png";
                    customTextDuo2.innerHTML = "";
                // or hide images and use custom text
                } else {
                    img_charDuo2.src = "";
                    img_simpleCharMulti2.src = "";
                    img_simpleCharMulti2B.src = "";
                    img_nameDuo2.src = "";
                    customTextDuo2.innerHTML = "<p>Custom:</p><p>"+ name2 +"</p>";
                    if (simpleCustom.innerHTML != "") {
                        simpleCustom.innerHTML = "<p>" + simpleCustom.innerText + ", P2: " + name2 + "</p>";
                    } else {
                        simpleCustom.innerHTML = "<p>P2: "+ name2 +"</p>";
                    }
                    if (simpleCustomB.innerHTML != "") {
                        simpleCustomB.innerHTML = "<p>" + simpleCustomB.innerText + ", P2: " + name2 + "</p>";
                    } else {
                        simpleCustomB.innerHTML = "<p>P2: "+ name2 +"</p>";
                    }
                }

                // change page background depending on if character is tainted or not
                if (listNormal.includes(char1) && listNormal.includes(char2)) {
                    img_page.src = "assets/img/page_blood.png";
                } else if (listTainted.includes(char1) && listTainted.includes(char2)) {
                    img_page.src = "assets/img/page_alt_blood.png";
                }

                img_simpleCharMulti3.src = "";
                img_simpleCharMulti4.src = "";
                img_simpleCharSolo.src = "";
                img_simpleNameSolo.src = "";
                img_simpleCharMulti3B.src = "";
                img_simpleCharMulti4B.src = "";
                img_simpleCharSoloB.src = "";
                img_simpleNameSoloB.src = "";

            } else {
                // default to a ? symbol if something goes wrong
                img_charDuo1.src = "assets/img/questionmark.png";
                img_nameDuo1.src = "";
                img_charDuo2.src = "assets/img/questionmark.png";
                img_nameDuo2.src = "";
                img_simpleCharMulti1.src = "";
                img_simpleCharMulti2.src = "";
                img_simpleCharMulti3.src = "";
                img_simpleCharMulti4.src = "";
                img_simpleCharMulti1B.src = "";
                img_simpleCharMulti2B.src = "";
                img_simpleCharMulti3B.src = "";
                img_simpleCharMulti4B.src = "";
                customTextDuo1.innerHTML = "";
                customTextDuo2.innerHTML = "";
                simpleCustom.innerHTML = "";
                simpleCustomB.innerHTML = "";
                console.log(characters);
                console.log(goals);
            }

        // choose a character (3 players)
        } else if (characters.length != 0 && numberPlayers == "3") {

            // set charMax to length of array - 1 (since it starts at 0)
            var charMax = characters.length - 1;
            // select character for player 1 using randomInt function
            var selected1 = randomInt(0, charMax);
            var char1 = characters[selected1];
            var char2;
            var char3;

            // if "Don't let multiple players get the same character" is checked, remove the character that was chosen for player 1 from the pool, then choose for player 2 and 3
            if (duplicateCheck.checked) {
                characters.splice(characters.indexOf(char1), 1);
                charMax = characters.length - 1;
                var selected2 = randomInt(0, charMax);
                char2 = characters[selected2];
                characters.splice(characters.indexOf(char2), 1);
                charMax = characters.length - 1;
                var selected3 = randomInt(0, charMax);
                char3 = characters[selected3];
            // else just pick any character for player 2 and 3
            } else {
                var selected2 = randomInt(0, charMax);
                char2 = characters[selected2];
                var selected3 = randomInt(0, charMax);
                char3 = characters[selected3];
            }

            var name1;
            var name2;
            var name3;
            // get names of characters, either from the normal list or custom names
            labelArray.forEach(function(elem) {
                if (elem.htmlFor == char1) {
                    name1 = elem.innerHTML;
                }
                if (elem.htmlFor == char2) {
                    name2 = elem.innerHTML;
                }
                if (elem.htmlFor == char3) {
                    name3 = elem.innerHTML;
                }
            });

            if (listCustom.includes(char1)) {
                name1 = document.getElementById("customn" + char1.split("c")[2]).value;
            }
            if (listCustom.includes(char2)) {
                name2 = document.getElementById("customn" + char2.split("c")[2]).value;
            }
            if (listCustom.includes(char3)) {
                name3 = document.getElementById("customn" + char3.split("c")[2]).value;
            }

            finalChar.innerHTML = name1 + ", " + name2 + ", " + name3;

            // set character images/names
            if (goals.length != 0) {
                simpleCustom.innerHTML = "";
                simpleCustomB.innerHTML = "";
                // set player 1
                if (!listCustom.includes(char1)) {
                    img_charTrio1.src = "assets/img/" + char1 + ".png";
                    img_simpleCharMulti1.src = "assets/img/" + char1 + ".png";
                    img_simpleCharMulti1B.src = "assets/img/" + char1 + ".png";
                    img_nameTrio1.src = "assets/img/" + char1 + "_name.png";
                    customTextTrio1.innerHTML = "";
                // or hide images and use custom text
                } else {
                    img_charTrio1.src = "";
                    img_simpleCharMulti1.src = "";
                    img_simpleCharMulti1B.src = "";
                    img_nameTrio1.src = "";
                    customTextTrio1.innerHTML = "<p>Custom:</p><p>"+ name1 +"</p>";
                    simpleCustom.innerHTML = "<p>P1: "+ name1 +"</p>";
                    simpleCustomB.innerHTML = "<p>P1: "+ name1 +"</p>";
                }
                // set player 2
                if (!listCustom.includes(char2)) {
                    img_charTrio2.src = "assets/img/" + char2 + ".png";
                    img_simpleCharMulti2.src = "assets/img/" + char2 + ".png";
                    img_simpleCharMulti2B.src = "assets/img/" + char2 + ".png";
                    img_nameTrio2.src = "assets/img/" + char2 + "_name.png";
                    customTextTrio2.innerHTML = "";
                // or hide images and use custom text
                } else {
                    img_charTrio2.src = "";
                    img_simpleCharMulti2.src = "";
                    img_simpleCharMulti2B.src = "";
                    img_nameTrio2.src = "";
                    customTextTrio2.innerHTML = "<p>Custom:</p><p>"+ name2 +"</p>";
                    if (simpleCustom.innerHTML != "") {
                        simpleCustom.innerHTML = "<p>" + simpleCustom.innerText + ", P2: " + name2 + "</p>";
                    } else {
                        simpleCustom.innerHTML = "<p>P2: "+ name2 +"</p>";
                    }
                    if (simpleCustomB.innerHTML != "") {
                        simpleCustomB.innerHTML = "<p>" + simpleCustomB.innerText + ", P2: " + name2 + "</p>";
                    } else {
                        simpleCustomB.innerHTML = "<p>P2: "+ name2 +"</p>";
                    }
                }
                // set player 3
                if (!listCustom.includes(char3)) {
                    img_charTrio3.src = "assets/img/" + char3 + ".png";
                    img_simpleCharMulti3.src = "assets/img/" + char3 + ".png";
                    img_simpleCharMulti3B.src = "assets/img/" + char3 + ".png";
                    img_nameTrio3.src = "assets/img/" + char3 + "_name.png";
                    customTextTrio3.innerHTML = "";
                // or hide images and use custom text
                } else {
                    img_charTrio3.src = "";
                    img_simpleCharMulti3.src = "";
                    img_simpleCharMulti3B.src = "";
                    img_nameTrio3.src = "";
                    customTextTrio3.innerHTML = "<p>Custom:</p><p>"+ name3 +"</p>";
                    if (simpleCustom.innerHTML != "") {
                        simpleCustom.innerHTML = "<p>" + simpleCustom.innerText + ", P3: " + name3 + "</p>";
                    } else {
                        simpleCustom.innerHTML = "<p>P3: "+ name3 +"</p>";
                    }
                    if (simpleCustomB.innerHTML != "") {
                        simpleCustomB.innerHTML = "<p>" + simpleCustomB.innerText + ", P3: " + name3 + "</p>";
                    } else {
                        simpleCustomB.innerHTML = "<p>P3: "+ name3 +"</p>";
                    }
                }

                // change page background depending on if character is tainted or not
                if (listNormal.includes(char1) && listNormal.includes(char2) && listNormal.includes(char3)) {
                    img_page.src = "assets/img/page_blood.png";
                } else if (listTainted.includes(char1) && listTainted.includes(char2) && listTainted.includes(char3)) {
                    img_page.src = "assets/img/page_alt_blood.png";
                }

                img_simpleCharMulti4.src = "";
                img_simpleCharSolo.src = "";
                img_simpleNameSolo.src = "";
                img_simpleCharMulti4B.src = "";
                img_simpleCharSoloB.src = "";
                img_simpleNameSoloB.src = "";

            } else {
                // default to a ? symbol if something goes wrong
                img_charTrio1.src = "assets/img/questionmark.png";
                img_nameTrio1.src = "";
                img_charTrio2.src = "assets/img/questionmark.png";
                img_nameTrio2.src = "";
                img_charTrio3.src = "assets/img/questionmark.png";
                img_nameTrio3.src = "";
                img_simpleCharMulti1.src = "";
                img_simpleCharMulti2.src = "";
                img_simpleCharMulti3.src = "";
                img_simpleCharMulti4.src = "";
                img_simpleCharMulti1B.src = "";
                img_simpleCharMulti2B.src = "";
                img_simpleCharMulti3B.src = "";
                img_simpleCharMulti4B.src = "";
                customTextTrio1.innerHTML = "";
                customTextTrio2.innerHTML = "";
                customTextTrio3.innerHTML = "";
                simpleCustom.innerHTML = "";
                simpleCustomB.innerHTML = "";
                console.log(characters);
                console.log(goals);
            }

        // choose a character (4 players)
        } else if (characters.length != 0 && numberPlayers == "4") {

            // set charMax to length of array - 1 (since it starts at 0)
            var charMax = characters.length - 1;
            // select character for player 1 using randomInt function
            var selected1 = randomInt(0, charMax);
            var char1 = characters[selected1];
            var char2;
            var char3;
            var char4;

            // if "Don't let multiple players get the same character" is checked, remove the character that was chosen for player 1 from the pool, then choose for player 2 and 3 and 4
            if (duplicateCheck.checked) {
                characters.splice(characters.indexOf(char1), 1);
                charMax = characters.length - 1;
                var selected2 = randomInt(0, charMax);
                char2 = characters[selected2];
                characters.splice(characters.indexOf(char2), 1);
                charMax = characters.length - 1;
                var selected3 = randomInt(0, charMax);
                char3 = characters[selected3];
                characters.splice(characters.indexOf(char3), 1);
                charMax = characters.length - 1;
                var selected4 = randomInt(0, charMax);
                char4 = characters[selected4];
            // else just pick any character for player 2 and 3 and 4
            } else {
                var selected2 = randomInt(0, charMax);
                char2 = characters[selected2];
                var selected3 = randomInt(0, charMax);
                char3 = characters[selected3];
                var selected4 = randomInt(0, charMax);
                char4 = characters[selected4];
            }

            var name1;
            var name2;
            var name3;
            var name4;
            // get names of characters, either from the normal list or custom names
            labelArray.forEach(function(elem) {
                if (elem.htmlFor == char1) {
                    name1 = elem.innerHTML;
                }
                if (elem.htmlFor == char2) {
                    name2 = elem.innerHTML;
                }
                if (elem.htmlFor == char3) {
                    name3 = elem.innerHTML;
                }
                if (elem.htmlFor == char4) {
                    name4 = elem.innerHTML;
                }
            });

            if (listCustom.includes(char1)) {
                name1 = document.getElementById("customn" + char1.split("c")[2]).value;
            }
            if (listCustom.includes(char2)) {
                name2 = document.getElementById("customn" + char2.split("c")[2]).value;
            }
            if (listCustom.includes(char3)) {
                name3 = document.getElementById("customn" + char3.split("c")[2]).value;
            }
            if (listCustom.includes(char4)) {
                name4 = document.getElementById("customn" + char4.split("c")[2]).value;
            }

            finalChar.innerHTML = name1 + ", " + name2 + ", " + name3 + ", " + name4;

            // set character images/names
            if (goals.length != 0) {
                simpleCustom.innerHTML = "";
                simpleCustomB.innerHTML = "";
                // set player 1
                if (!listCustom.includes(char1)) {
                    img_charQuad1.src = "assets/img/" + char1 + ".png";
                    img_simpleCharMulti1.src = "assets/img/" + char1 + ".png";
                    img_simpleCharMulti1B.src = "assets/img/" + char1 + ".png";
                    customTextQuad1.innerHTML = "";
                // or hide image and use custom text
                } else {
                    img_charQuad1.src = "";
                    img_simpleCharMulti1.src = "";
                    img_simpleCharMulti1B.src = "";
                    customTextQuad1.innerHTML = "<p>Custom:</p><p>"+ name1 +"</p>";
                    simpleCustom.innerHTML = "<p>P1: "+ name1 +"</p>";
                    simpleCustomB.innerHTML = "<p>P1: "+ name1 +"</p>";
                }
                // set player 2
                if (!listCustom.includes(char2)) {
                    img_charQuad2.src = "assets/img/" + char2 + ".png";
                    img_simpleCharMulti2.src = "assets/img/" + char2 + ".png";
                    img_simpleCharMulti2B.src = "assets/img/" + char2 + ".png";
                    customTextQuad2.innerHTML = "";
                // or hide image and use custom text
                } else {
                    img_charQuad2.src = "";
                    img_simpleCharMulti2.src = "";
                    img_simpleCharMulti2B.src = "";
                    customTextQuad2.innerHTML = "<p>Custom:</p><p>"+ name2 +"</p>";
                    if (simpleCustom.innerHTML != "") {
                        simpleCustom.innerHTML = "<p>" + simpleCustom.innerText + ", P2: " + name2 + "</p>";
                    } else {
                        simpleCustom.innerHTML = "<p>P2: "+ name2 +"</p>";
                    }
                    if (simpleCustomB.innerHTML != "") {
                        simpleCustomB.innerHTML = "<p>" + simpleCustomB.innerText + ", P2: " + name2 + "</p>";
                    } else {
                        simpleCustomB.innerHTML = "<p>P2: "+ name2 +"</p>";
                    }
                }
                // set player 3
                if (!listCustom.includes(char3)) {
                    img_charQuad3.src = "assets/img/" + char3 + ".png";
                    img_simpleCharMulti3.src = "assets/img/" + char3 + ".png";
                    img_simpleCharMulti3B.src = "assets/img/" + char3 + ".png";
                    customTextQuad3.innerHTML = "";
                // or hide image and use custom text
                } else {
                    img_charQuad3.src = "";
                    img_simpleCharMulti3.src = "";
                    img_simpleCharMulti3B.src = "";
                    customTextQuad3.innerHTML = "<p>Custom:</p><p>"+ name3 +"</p>";
                    if (simpleCustom.innerHTML != "") {
                        simpleCustom.innerHTML = "<p>" + simpleCustom.innerText + ", P3: " + name3 + "</p>";
                    } else {
                        simpleCustom.innerHTML = "<p>P3: "+ name3 +"</p>";
                    }
                    if (simpleCustomB.innerHTML != "") {
                        simpleCustomB.innerHTML = "<p>" + simpleCustomB.innerText + ", P3: " + name3 + "</p>";
                    } else {
                        simpleCustomB.innerHTML = "<p>P3: "+ name3 +"</p>";
                    }
                }
                // set player 4
                if (!listCustom.includes(char4)) {
                    img_charQuad4.src = "assets/img/" + char4 + ".png";
                    img_simpleCharMulti4.src = "assets/img/" + char4 + ".png";
                    img_simpleCharMulti4B.src = "assets/img/" + char4 + ".png";
                    customTextQuad4.innerHTML = "";
                // or hide image and use custom text
                } else {
                    img_charQuad4.src = "";
                    img_simpleCharMulti4.src = "";
                    img_simpleCharMulti4B.src = "";
                    customTextQuad4.innerHTML = "<p>Custom:</p><p>"+ name4 +"</p>";
                    if (simpleCustom.innerHTML != "") {
                        simpleCustom.innerHTML = "<p>" + simpleCustom.innerText + ", P4: " + name4 + "</p>";
                    } else {
                        simpleCustom.innerHTML = "<p>P4: "+ name4 +"</p>";
                    }
                    if (simpleCustomB.innerHTML != "") {
                        simpleCustomB.innerHTML = "<p>" + simpleCustomB.innerText + ", P4: " + name4 + "</p>";
                    } else {
                        simpleCustomB.innerHTML = "<p>P4: "+ name4 +"</p>";
                    }
                }

                // change page background depending on if character is tainted or not
                if (listNormal.includes(char1) && listNormal.includes(char2) && listNormal.includes(char3) && listNormal.includes(char4)) {
                    img_page.src = "assets/img/page_blood.png";
                } else if (listTainted.includes(char1) && listTainted.includes(char2) && listTainted.includes(char3) && listTainted.includes(char4)) {
                    img_page.src = "assets/img/page_alt_blood.png";
                }

                img_simpleCharSolo.src = "";
                img_simpleNameSolo.src = "";
                img_simpleCharSoloB.src = "";
                img_simpleNameSoloB.src = "";

            } else {
                // default to a ? symbol if something goes wrong
                img_charQuad1.src = "assets/img/questionmark.png";
                img_charQuad2.src = "assets/img/questionmark.png";
                img_charQuad3.src = "assets/img/questionmark.png";
                img_charQuad4.src = "assets/img/questionmark.png";
                img_simpleCharMulti1.src = "";
                img_simpleCharMulti2.src = "";
                img_simpleCharMulti3.src = "";
                img_simpleCharMulti4.src = "";
                img_simpleCharMulti1B.src = "";
                img_simpleCharMulti2B.src = "";
                img_simpleCharMulti3B.src = "";
                img_simpleCharMulti4B.src = "";
                customTextQuad1.innerHTML = "";
                customTextQuad2.innerHTML = "";
                customTextQuad3.innerHTML = "";
                customTextQuad4.innerHTML = "";
                simpleCustom.innerHTML = "";
                simpleCustomB.innerHTML = "";
                console.log(characters);
                console.log(goals);
            }

        }

        // choose a goal
        if (goals.length != 0) {

            var timedRoll = randomInt(0, 100);
            var finalTimed = "";

            // if timed goals are enabled, choose one
            if (timedCheck.checked) {

                // set timedMax to length of array - 1 (since it starts at 0)
                var timedMax = timedGoals.length - 1;
                var selected = randomInt(0, timedMax);

                // use the user chosen chance to decide whether or not to add a timed objective
                // get name of timed goal in finalTimed
                if (timedRoll <= parseInt(timedChance.value)) {
                    labelArray.forEach(function(elem) {
                        if (elem.htmlFor == timedGoals[selected]) {
                            finalTimed = elem.innerHTML.split(">")[1];
                        }
                    });
                }

            }

            // set goalMax to length of array - 1 (since it starts at 0)
            var goalMax = goals.length - 1;
            var selected = randomInt(0, goalMax);
            var finalObj = "";

            // get name of goal in finalObj
            labelArray.forEach(function(elem) {
                if (elem.htmlFor == goals[selected]) {
                    finalObj = elem.innerHTML.split(">")[1];
                }
            });

            // set images depending on which goal is chosen
            // if Ultra Greed, ignore any timed objectives
            if (finalObj == "Ultra Greed") {
                finalGoal.innerHTML = "Defeat: " + finalObj;
                img_obj1.src = "assets/img/g4.png";
                img_obj2.style.display = "none";
                img_simpleGoal1.src = "assets/img/g4.png";
                img_simpleGoal2.src = "";
                img_simplePlus.src = "";
                img_simpleGoal1B.src = "assets/img/g4.png";
                img_simpleGoal2B.src = "";
                img_simplePlusB.src = "";
            // if Mother or The Beast, ignore Hush but allow Boss Rush
            } else if ((finalObj == "Mother") || (finalObj == "The Beast")) {
                if (finalTimed == "Boss Rush") {
                    finalGoal.innerHTML = "Defeat: Boss Rush + " + finalObj;
                    img_obj1.src = "assets/img/g8.png";
                    img_obj2.src = "assets/img/" + goals[selected] + ".png";
                    img_obj2.style.display = "initial";
                    img_simpleGoal1.src = "assets/img/g8.png";
                    img_simpleGoal2.src = "assets/img/" + goals[selected] + ".png";
                    img_simplePlus.src = "assets/img/plus.png";
                    img_simpleGoal1B.src = "assets/img/g8.png";
                    img_simpleGoal2B.src = "assets/img/" + goals[selected] + ".png";
                    img_simplePlusB.src = "assets/img/plus.png";
                } else {
                    img_obj1.src = "assets/img/" + goals[selected] + ".png";
                    img_obj2.style.display = "none";
                    img_simpleGoal1.src = "assets/img/" + goals[selected] + ".png";
                    img_simpleGoal2.src = "";
                    img_simplePlus.src = "";
                    img_simpleGoal1B.src = "assets/img/" + goals[selected] + ".png";
                    img_simpleGoal2B.src = "";
                    img_simplePlusB.src = "";
                    finalGoal.innerHTML = "Defeat: " + finalObj;
                }
            // else, allow any goal and timed goal together
            } else if (finalTimed != "") {
                finalGoal.innerHTML = "Defeat: " + finalTimed + " + " + finalObj;
                if (finalTimed == "Boss Rush") {
                    img_obj1.src = "assets/img/g8.png";
                    img_simpleGoal1.src = "assets/img/g8.png";
                    img_simpleGoal1B.src = "assets/img/g8.png";
                } else if (finalTimed == "Hush") {
                    img_obj1.src = "assets/img/g9.png";
                    img_simpleGoal1.src = "assets/img/g9.png";
                    img_simpleGoal1B.src = "assets/img/g9.png";
                }
                img_obj2.src = "assets/img/" + goals[selected] + ".png";
                img_obj2.style.display = "initial";
                img_simpleGoal2.src = "assets/img/" + goals[selected] + ".png";
                img_simplePlus.src = "assets/img/plus.png";
                img_simpleGoal2B.src = "assets/img/" + goals[selected] + ".png";
                img_simplePlusB.src = "assets/img/plus.png";
            // else, goal but no timed goal
            } else {
                finalGoal.innerHTML = "Defeat: " + finalObj;
                img_obj1.src = "assets/img/" + goals[selected] + ".png";
                img_obj2.style.display = "none";
                img_simpleGoal1.src = "assets/img/" + goals[selected] + ".png";
                img_simpleGoal2.src = "";
                img_simplePlus.src = "";
                img_simpleGoal1B.src = "assets/img/" + goals[selected] + ".png";
                img_simpleGoal2B.src = "";
                img_simplePlusB.src = "";
            }

        }

        // if any extra challenges are enabled, add them
        if (challenges.length != 0) {

            // if goal is Mother, remove "Travel down Repentance's alternate path"
            if (finalObj == "Mother") {
                if (challenges.includes("ch10")) {
                    challenges.splice(challenges.indexOf("ch10"), 1);
                }
            }

            // if goal is Ultra Greed, remove "No shops," "Travel down Repentance's alternate path," and "Skip all treasure rooms until a planetarium appears"
            if (finalObj == "Ultra Greed") {
                if (challenges.includes("ch6")) {
                    challenges.splice(challenges.indexOf("ch6"), 1);
                }
                if (challenges.includes("ch10")) {
                    challenges.splice(challenges.indexOf("ch10"), 1);
                }
                if (challenges.includes("ch11")) {
                    challenges.splice(challenges.indexOf("ch11"), 1);
                }
            }

            // if goal is Mega Satan, remove "No angel rooms"
            if (finalObj == "Mega Satan") {
                if (challenges.includes("ch9")) {
                    challenges.splice(challenges.indexOf("ch9"), 1);
                }
            }

            // set challengeMax to length of array - 1 (since it starts at 0)
            var challengeMax = challenges.length - 1;
            var challenges2 = [];
            var challenges3 = [];

            // if "Guarantee at least 1 additional challenge?" is checked, add one regardless of chance
            if (challengeCheck.checked && challenges2.length == 0) {
                var selected = randomInt(0, challengeMax);
                if (!challenges2.includes(challenges[selected])) {
                    challenges2.push(challenges[selected]);
                    challenges.splice(selected, 1);
                }
            }

            // add other challenges with the user's chance
            for (i = 0; i <= challengeMax; i++) {
                var number = randomInt(0, 100);
                if (number < challengeChance.value) {
                    challenges2.push(challenges[i]);
                    //challenges.splice(i, 1);
                }
            }

            challengeContainer.innerHTML = "";
            simpleChallengeContainer.innerHTML = "";
            simpleChallengeContainerB.innerHTML = "";

            img_simpleChallenges.src = "";
            img_simpleChallengesB.src = "";

            for (i = 0; i < challenges2.length; i++) {
                labelArray.forEach(function(elem) {
                    if (elem.htmlFor == challenges2[i]) {
                        // create a third array with the names of the challenges rather than ids
                        challenges3.push(elem.innerHTML.split(">")[1]);
                    }
                });
                if (challenges2[i] != undefined) {
                    // create the image elements of each challenge
                    challengeContainer.appendChild(document.createElement("img"));
                    challengeContainer.lastChild.src = "assets/img/" + challenges2[i] + ".png";
                    challengeContainer.lastChild.style.width = challengeContainer.lastChild.naturalWidth * spriteSizeX + "px";
                    simpleChallengeContainer.appendChild(document.createElement("img"));
                    simpleChallengeContainer.lastChild.src = "assets/img/" + challenges2[i] + ".png";
                    simpleChallengeContainer.lastChild.style.width = simpleChallengeContainer.lastChild.naturalWidth * spriteSizeX + "px";
                    img_simpleChallenges.src = "assets/img/challenges.png";
                    simpleChallengeContainerB.appendChild(document.createElement("img"));
                    simpleChallengeContainerB.lastChild.src = "assets/img/" + challenges2[i] + ".png";
                    simpleChallengeContainerB.lastChild.style.width = simpleChallengeContainerB.lastChild.naturalWidth * spriteSizeX + "px";
                    img_simpleChallengesB.src = "assets/img/challenges.png";
                }

            }

            // use the names of the challenges in challenges3
            if (challenges3.length != 0) {
                finalChallenge.innerHTML = "Challenges:<br>" + challenges3.join(",<br>");
            } else {
                finalChallenge.innerHTML = "";
            }

        } else {
            challengeContainer.innerHTML = "";
        }

        // wait before making images visible and making the randomizer usable again
        setTimeout(function(e) {
            updateSpriteSize();
            img_charSolo.style.opacity = 1;
            img_nameSolo.style.opacity = 1;
            img_charDuo1.style.opacity = 1;
            img_nameDuo1.style.opacity = 1;
            img_charDuo2.style.opacity = 1;
            img_nameDuo2.style.opacity = 1;
            img_charTrio1.style.opacity = 1;
            img_nameTrio1.style.opacity = 1;
            img_charTrio2.style.opacity = 1;
            img_nameTrio2.style.opacity = 1;
            img_charTrio3.style.opacity = 1;
            img_nameTrio3.style.opacity = 1;
            img_charQuad1.style.opacity = 1;
            img_charQuad2.style.opacity = 1;
            img_charQuad3.style.opacity = 1;
            img_charQuad4.style.opacity = 1;
            img_randomize.style.opacity = 1;
            img_randomize.style.cursor = "pointer";
            img_obj1.style.opacity = 1;
            img_obj2.style.opacity = 1;
            challengeContainer.style.opacity = 1;
            customTextSolo.style.opacity = 1;
            customTextDuo1.style.opacity = 1;
            customTextDuo2.style.opacity = 1;
            customTextTrio1.style.opacity = 1;
            customTextTrio2.style.opacity = 1;
            customTextTrio3.style.opacity = 1;
            customTextQuad1.style.opacity = 1;
            customTextQuad2.style.opacity = 1;
            customTextQuad3.style.opacity = 1;
            customTextQuad4.style.opacity = 1;

            img_simpleCharSolo.style.opacity = 1;
            img_simpleNameSolo.style.opacity = 1;
            img_simpleCharMulti1.style.opacity = 1;
            img_simpleCharMulti2.style.opacity = 1;
            img_simpleCharMulti3.style.opacity = 1;
            img_simpleCharMulti4.style.opacity = 1;
            img_simpleGoal1.style.opacity = 1;
            img_simpleGoal2.style.opacity = 1;
            img_simplePlus.style.opacity = 1;
            simpleChallengeContainer.style.opacity = 1;

            img_simpleCharSoloB.style.opacity = 1;
            img_simpleNameSoloB.style.opacity = 1;
            img_simpleCharMulti1B.style.opacity = 1;
            img_simpleCharMulti2B.style.opacity = 1;
            img_simpleCharMulti3B.style.opacity = 1;
            img_simpleCharMulti4B.style.opacity = 1;
            img_simpleGoal1B.style.opacity = 1;
            img_simpleGoal2B.style.opacity = 1;
            img_simplePlusB.style.opacity = 1;
            simpleChallengeContainerB.style.opacity = 1;

            currentlyRandomizing = false;
        }, 100);

    }

});

// save current settings to file
const downloadToFile = (content, filename, contentType) => {

    const a = document.createElement("a");
    const file = new Blob([content],  {type: contentType});

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);

};

saveFile.addEventListener("click", function(e) {

    downloadToFile(JSON.stringify(localStorage, null, 2), "isaac-settings.json", "application/json")

});

// load current settings from file
var tempObj = {};

function loadStorageFromFile() {

    c1.checked = (tempObj.c1 == "true");
    c2.checked = (tempObj.c2 == "true");
    c3.checked = (tempObj.c3 == "true");
    c4.checked = (tempObj.c4 == "true");
    c5.checked = (tempObj.c5 == "true");
    c6.checked = (tempObj.c6 == "true");
    c7.checked = (tempObj.c7 == "true");
    c8.checked = (tempObj.c8 == "true");
    c9.checked = (tempObj.c9 == "true");
    c10.checked = (tempObj.c10 == "true");
    c11.checked = (tempObj.c11 == "true");
    c12.checked = (tempObj.c12 == "true");
    c13.checked = (tempObj.c13 == "true");
    c14.checked = (tempObj.c14 == "true");
    c15.checked = (tempObj.c15 == "true");
    c16.checked = (tempObj.c16 == "true");
    c17.checked = (tempObj.c17 == "true");
    c18.checked = (tempObj.c18 == "true");
    c19.checked = (tempObj.c19 == "true");
    c20.checked = (tempObj.c20 == "true");
    c21.checked = (tempObj.c21 == "true");
    c22.checked = (tempObj.c22 == "true");
    c23.checked = (tempObj.c23 == "true");
    c24.checked = (tempObj.c24 == "true");
    c25.checked = (tempObj.c25 == "true");
    c26.checked = (tempObj.c26 == "true");
    c27.checked = (tempObj.c27 == "true");
    c28.checked = (tempObj.c28 == "true");
    c29.checked = (tempObj.c29 == "true");
    c30.checked = (tempObj.c30 == "true");
    c31.checked = (tempObj.c31 == "true");
    c32.checked = (tempObj.c32 == "true");
    c33.checked = (tempObj.c33 == "true");
    c34.checked = (tempObj.c34 == "true");

    w1.value = tempObj.w1;
    w2.value = tempObj.w2;
    w3.value = tempObj.w3;
    w4.value = tempObj.w4;
    w5.value = tempObj.w5;
    w6.value = tempObj.w6;
    w7.value = tempObj.w7;
    w8.value = tempObj.w8;
    w9.value = tempObj.w9;
    w10.value = tempObj.w10;
    w11.value = tempObj.w11;
    w12.value = tempObj.w12;
    w13.value = tempObj.w13;
    w14.value = tempObj.w14;
    w15.value = tempObj.w15;
    w16.value = tempObj.w16;
    w17.value = tempObj.w17;
    w18.value = tempObj.w18;
    w19.value = tempObj.w19;
    w20.value = tempObj.w20;
    w21.value = tempObj.w21;
    w22.value = tempObj.w22;
    w23.value = tempObj.w23;
    w24.value = tempObj.w24;
    w25.value = tempObj.w25;
    w26.value = tempObj.w26;
    w27.value = tempObj.w27;
    w28.value = tempObj.w28;
    w29.value = tempObj.w29;
    w30.value = tempObj.w30;
    w31.value = tempObj.w31;
    w32.value = tempObj.w32;
    w33.value = tempObj.w33;
    w34.value = tempObj.w34;

    if (tempObj.weightVisible == "true") {
        wLabelArray.forEach(function(elem) {
            elem.style.display = "initial";
        });
        weightArray.forEach(function(elem) {
            elem.style.display = "initial";
        });
        weightVisible = true;
    } else if (tempObj.weightVisible == "false") {
        wLabelArray.forEach(function(elem) {
            elem.style.display = "none";
        });
        weightArray.forEach(function(elem) {
            elem.style.display = "none";
        });
        weightVisible = false;
    }

    if (tempObj.customCheck == "true") {
        customInputArray.forEach(function(elem) {
            elem.disabled = false;
        });
    } else if (tempObj.customCheck == "false") {
        customInputArray.forEach(function(elem) {
            elem.disabled = true;
        });
    }

    customCheck.checked = (tempObj.customCheck == "true");

    if (tempObj.customVisible == "true") {
        customChars.style.display = "initial";
    } else if (tempObj.customVisible == "false") {
        customChars.style.display = "none";
    }

    customc1.checked = (tempObj.customc1 == "true");
    customn1.value = tempObj.customn1;
    customw1.value = tempObj.customw1;
    customc2.checked = (tempObj.customc2 == "true");
    customn2.value = tempObj.customn2;
    customw2.value = tempObj.customw2;
    customc3.checked = (tempObj.customc3 == "true");
    customn3.value = tempObj.customn3;
    customw3.value = tempObj.customw3;
    customc4.checked = (tempObj.customc4 == "true");
    customn4.value = tempObj.customn4;
    customw4.value = tempObj.customw4;
    customc5.checked = (tempObj.customc5 == "true");
    customn5.value = tempObj.customn5;
    customw5.value = tempObj.customw5;
    customc6.checked = (tempObj.customc6 == "true");
    customn6.value = tempObj.customn6;
    customw6.value = tempObj.customw6;
    customc7.checked = (tempObj.customc7 == "true");
    customn7.value = tempObj.customn7;
    customw7.value = tempObj.customw7;
    customc8.checked = (tempObj.customc8 == "true");
    customn8.value = tempObj.customn8;
    customw8.value = tempObj.customw8;
    customc9.checked = (tempObj.customc9 == "true");
    customn9.value = tempObj.customn9;
    customw9.value = tempObj.customw9;
    customc10.checked = (tempObj.customc10 == "true");
    customn10.value = tempObj.customn10;
    customw10.value = tempObj.customw10;
    customc11.checked = (tempObj.customc11 == "true");
    customn11.value = tempObj.customn11;
    customw11.value = tempObj.customw11;
    customc12.checked = (tempObj.customc12 == "true");
    customn12.value = tempObj.customn12;
    customw12.value = tempObj.customw12;
    customc13.checked = (tempObj.customc13 == "true");
    customn13.value = tempObj.customn13;
    customw13.value = tempObj.customw13;
    customc14.checked = (tempObj.customc14 == "true");
    customn14.value = tempObj.customn14;
    customw14.value = tempObj.customw14;
    customc15.checked = (tempObj.customc15 == "true");
    customn15.value = tempObj.customn15;
    customw15.value = tempObj.customw15;
    customc16.checked = (tempObj.customc16 == "true");
    customn16.value = tempObj.customn16;
    customw16.value = tempObj.customw16;
    customc17.checked = (tempObj.customc17 == "true");
    customn17.value = tempObj.customn17;
    customw17.value = tempObj.customw17;
    customc18.checked = (tempObj.customc18 == "true");
    customn18.value = tempObj.customn18;
    customw18.value = tempObj.customw18;
    customc19.checked = (tempObj.customc19 == "true");
    customn19.value = tempObj.customn19;
    customw19.value = tempObj.customw19;
    customc20.checked = (tempObj.customc20 == "true");
    customn20.value = tempObj.customn20;
    customw20.value = tempObj.customw20;

    g1.checked = (tempObj.g1 == "true");
    g2.checked = (tempObj.g2 == "true");
    g3.checked = (tempObj.g3 == "true");
    g4.checked = (tempObj.g4 == "true");
    g5.checked = (tempObj.g5 == "true");
    g6.checked = (tempObj.g6 == "true");
    g7.checked = (tempObj.g7 == "true");

    gw1.value = tempObj.gw1;
    gw2.value = tempObj.gw2;
    gw3.value = tempObj.gw3;
    gw4.value = tempObj.gw4;
    gw5.value = tempObj.gw5;
    gw6.value = tempObj.gw6;
    gw7.value = tempObj.gw7;

    if (tempObj.gWeightVisible == "true") {
        gWLabelArray.forEach(function(elem) {
            elem.style.display = "initial";
        });
        gWeightArray.forEach(function(elem) {
            elem.style.display = "initial";
        });
        gWeightVisible = true;
    } else if (tempObj.gWeightVisible == "false") {
        gWLabelArray.forEach(function(elem) {
            elem.style.display = "none";
        });
        gWeightArray.forEach(function(elem) {
            elem.style.display = "none";
        });
        gWeightVisible = false;
    }

    timedCheck.checked = (tempObj.timedCheck == "true");

    if (tempObj.timedCheck == "false") {
        t1.checked = false;
        t1.disabled = true;
        t2.checked = false;
        t2.disabled = true;
        timedChance.disabled = true;
    }

    timedChance.value = tempObj.timedChance;

    t1.checked = (tempObj.t1 == "true");
    t2.checked = (tempObj.t2 == "true");

    challengeCheck.checked = (tempObj.challengeCheck == "true");
    challengeChance.value = tempObj.challengeChance;

    ch1.checked = (tempObj.ch1 == "true");
    ch2.checked = (tempObj.ch2 == "true");
    ch3.checked = (tempObj.ch3 == "true");
    ch4.checked = (tempObj.ch4 == "true");
    ch5.checked = (tempObj.ch5 == "true");
    ch6.checked = (tempObj.ch6 == "true");
    ch7.checked = (tempObj.ch7 == "true");
    ch8.checked = (tempObj.ch8 == "true");
    ch9.checked = (tempObj.ch9 == "true");
    ch10.checked = (tempObj.ch10 == "true");
    ch11.checked = (tempObj.ch11 == "true");
    ch12.checked = (tempObj.ch12 == "true");


    c_c1_g1.checked = (tempObj.c_c1_g1 == "true");
    c_c1_g2.checked = (tempObj.c_c1_g2 == "true");
    c_c1_g3.checked = (tempObj.c_c1_g3 == "true");
    c_c1_g4.checked = (tempObj.c_c1_g4 == "true");
    c_c1_g5.checked = (tempObj.c_c1_g5 == "true");
    c_c1_g6.checked = (tempObj.c_c1_g6 == "true");
    c_c1_g7.checked = (tempObj.c_c1_g7 == "true");
    c_c1_t1.checked = (tempObj.c_c1_t1 == "true");
    c_c1_t2.checked = (tempObj.c_c1_t2 == "true");
    
    c_c2_g1.checked = (tempObj.c_c2_g1 == "true");
    c_c2_g2.checked = (tempObj.c_c2_g2 == "true");
    c_c2_g3.checked = (tempObj.c_c2_g3 == "true");
    c_c2_g4.checked = (tempObj.c_c2_g4 == "true");
    c_c2_g5.checked = (tempObj.c_c2_g5 == "true");
    c_c2_g6.checked = (tempObj.c_c2_g6 == "true");
    c_c2_g7.checked = (tempObj.c_c2_g7 == "true");
    c_c2_t1.checked = (tempObj.c_c2_t1 == "true");
    c_c2_t2.checked = (tempObj.c_c2_t2 == "true");
    
    c_c3_g1.checked = (tempObj.c_c3_g1 == "true");
    c_c3_g2.checked = (tempObj.c_c3_g2 == "true");
    c_c3_g3.checked = (tempObj.c_c3_g3 == "true");
    c_c3_g4.checked = (tempObj.c_c3_g4 == "true");
    c_c3_g5.checked = (tempObj.c_c3_g5 == "true");
    c_c3_g6.checked = (tempObj.c_c3_g6 == "true");
    c_c3_g7.checked = (tempObj.c_c3_g7 == "true");
    c_c3_t1.checked = (tempObj.c_c3_t1 == "true");
    c_c3_t2.checked = (tempObj.c_c3_t2 == "true");
    
    c_c4_g1.checked = (tempObj.c_c4_g1 == "true");
    c_c4_g2.checked = (tempObj.c_c4_g2 == "true");
    c_c4_g3.checked = (tempObj.c_c4_g3 == "true");
    c_c4_g4.checked = (tempObj.c_c4_g4 == "true");
    c_c4_g5.checked = (tempObj.c_c4_g5 == "true");
    c_c4_g6.checked = (tempObj.c_c4_g6 == "true");
    c_c4_g7.checked = (tempObj.c_c4_g7 == "true");
    c_c4_t1.checked = (tempObj.c_c4_t1 == "true");
    c_c4_t2.checked = (tempObj.c_c4_t2 == "true");
    
    c_c5_g1.checked = (tempObj.c_c5_g1 == "true");
    c_c5_g2.checked = (tempObj.c_c5_g2 == "true");
    c_c5_g3.checked = (tempObj.c_c5_g3 == "true");
    c_c5_g4.checked = (tempObj.c_c5_g4 == "true");
    c_c5_g5.checked = (tempObj.c_c5_g5 == "true");
    c_c5_g6.checked = (tempObj.c_c5_g6 == "true");
    c_c5_g7.checked = (tempObj.c_c5_g7 == "true");
    c_c5_t1.checked = (tempObj.c_c5_t1 == "true");
    c_c5_t2.checked = (tempObj.c_c5_t2 == "true");
    
    c_c6_g1.checked = (tempObj.c_c6_g1 == "true");
    c_c6_g2.checked = (tempObj.c_c6_g2 == "true");
    c_c6_g3.checked = (tempObj.c_c6_g3 == "true");
    c_c6_g4.checked = (tempObj.c_c6_g4 == "true");
    c_c6_g5.checked = (tempObj.c_c6_g5 == "true");
    c_c6_g6.checked = (tempObj.c_c6_g6 == "true");
    c_c6_g7.checked = (tempObj.c_c6_g7 == "true");
    c_c6_t1.checked = (tempObj.c_c6_t1 == "true");
    c_c6_t2.checked = (tempObj.c_c6_t2 == "true");
    
    c_c7_g1.checked = (tempObj.c_c7_g1 == "true");
    c_c7_g2.checked = (tempObj.c_c7_g2 == "true");
    c_c7_g3.checked = (tempObj.c_c7_g3 == "true");
    c_c7_g4.checked = (tempObj.c_c7_g4 == "true");
    c_c7_g5.checked = (tempObj.c_c7_g5 == "true");
    c_c7_g6.checked = (tempObj.c_c7_g6 == "true");
    c_c7_g7.checked = (tempObj.c_c7_g7 == "true");
    c_c7_t1.checked = (tempObj.c_c7_t1 == "true");
    c_c7_t2.checked = (tempObj.c_c7_t2 == "true");
    
    c_c8_g1.checked = (tempObj.c_c8_g1 == "true");
    c_c8_g2.checked = (tempObj.c_c8_g2 == "true");
    c_c8_g3.checked = (tempObj.c_c8_g3 == "true");
    c_c8_g4.checked = (tempObj.c_c8_g4 == "true");
    c_c8_g5.checked = (tempObj.c_c8_g5 == "true");
    c_c8_g6.checked = (tempObj.c_c8_g6 == "true");
    c_c8_g7.checked = (tempObj.c_c8_g7 == "true");
    c_c8_t1.checked = (tempObj.c_c8_t1 == "true");
    c_c8_t2.checked = (tempObj.c_c8_t2 == "true");
    
    c_c9_g1.checked = (tempObj.c_c9_g1 == "true");
    c_c9_g2.checked = (tempObj.c_c9_g2 == "true");
    c_c9_g3.checked = (tempObj.c_c9_g3 == "true");
    c_c9_g4.checked = (tempObj.c_c9_g4 == "true");
    c_c9_g5.checked = (tempObj.c_c9_g5 == "true");
    c_c9_g6.checked = (tempObj.c_c9_g6 == "true");
    c_c9_g7.checked = (tempObj.c_c9_g7 == "true");
    c_c9_t1.checked = (tempObj.c_c9_t1 == "true");
    c_c9_t2.checked = (tempObj.c_c9_t2 == "true");
    
    c_c10_g1.checked = (tempObj.c_c10_g1 == "true");
    c_c10_g2.checked = (tempObj.c_c10_g2 == "true");
    c_c10_g3.checked = (tempObj.c_c10_g3 == "true");
    c_c10_g4.checked = (tempObj.c_c10_g4 == "true");
    c_c10_g5.checked = (tempObj.c_c10_g5 == "true");
    c_c10_g6.checked = (tempObj.c_c10_g6 == "true");
    c_c10_g7.checked = (tempObj.c_c10_g7 == "true");
    c_c10_t1.checked = (tempObj.c_c10_t1 == "true");
    c_c10_t2.checked = (tempObj.c_c10_t2 == "true");
    
    c_c11_g1.checked = (tempObj.c_c11_g1 == "true");
    c_c11_g2.checked = (tempObj.c_c11_g2 == "true");
    c_c11_g3.checked = (tempObj.c_c11_g3 == "true");
    c_c11_g4.checked = (tempObj.c_c11_g4 == "true");
    c_c11_g5.checked = (tempObj.c_c11_g5 == "true");
    c_c11_g6.checked = (tempObj.c_c11_g6 == "true");
    c_c11_g7.checked = (tempObj.c_c11_g7 == "true");
    c_c11_t1.checked = (tempObj.c_c11_t1 == "true");
    c_c11_t2.checked = (tempObj.c_c11_t2 == "true");
    
    c_c12_g1.checked = (tempObj.c_c12_g1 == "true");
    c_c12_g2.checked = (tempObj.c_c12_g2 == "true");
    c_c12_g3.checked = (tempObj.c_c12_g3 == "true");
    c_c12_g4.checked = (tempObj.c_c12_g4 == "true");
    c_c12_g5.checked = (tempObj.c_c12_g5 == "true");
    c_c12_g6.checked = (tempObj.c_c12_g6 == "true");
    c_c12_g7.checked = (tempObj.c_c12_g7 == "true");
    c_c12_t1.checked = (tempObj.c_c12_t1 == "true");
    c_c12_t2.checked = (tempObj.c_c12_t2 == "true");
    
    c_c13_g1.checked = (tempObj.c_c13_g1 == "true");
    c_c13_g2.checked = (tempObj.c_c13_g2 == "true");
    c_c13_g3.checked = (tempObj.c_c13_g3 == "true");
    c_c13_g4.checked = (tempObj.c_c13_g4 == "true");
    c_c13_g5.checked = (tempObj.c_c13_g5 == "true");
    c_c13_g6.checked = (tempObj.c_c13_g6 == "true");
    c_c13_g7.checked = (tempObj.c_c13_g7 == "true");
    c_c13_t1.checked = (tempObj.c_c13_t1 == "true");
    c_c13_t2.checked = (tempObj.c_c13_t2 == "true");
    
    c_c14_g1.checked = (tempObj.c_c14_g1 == "true");
    c_c14_g2.checked = (tempObj.c_c14_g2 == "true");
    c_c14_g3.checked = (tempObj.c_c14_g3 == "true");
    c_c14_g4.checked = (tempObj.c_c14_g4 == "true");
    c_c14_g5.checked = (tempObj.c_c14_g5 == "true");
    c_c14_g6.checked = (tempObj.c_c14_g6 == "true");
    c_c14_g7.checked = (tempObj.c_c14_g7 == "true");
    c_c14_t1.checked = (tempObj.c_c14_t1 == "true");
    c_c14_t2.checked = (tempObj.c_c14_t2 == "true");
    
    c_c15_g1.checked = (tempObj.c_c15_g1 == "true");
    c_c15_g2.checked = (tempObj.c_c15_g2 == "true");
    c_c15_g3.checked = (tempObj.c_c15_g3 == "true");
    c_c15_g4.checked = (tempObj.c_c15_g4 == "true");
    c_c15_g5.checked = (tempObj.c_c15_g5 == "true");
    c_c15_g6.checked = (tempObj.c_c15_g6 == "true");
    c_c15_g7.checked = (tempObj.c_c15_g7 == "true");
    c_c15_t1.checked = (tempObj.c_c15_t1 == "true");
    c_c15_t2.checked = (tempObj.c_c15_t2 == "true");
    
    c_c16_g1.checked = (tempObj.c_c16_g1 == "true");
    c_c16_g2.checked = (tempObj.c_c16_g2 == "true");
    c_c16_g3.checked = (tempObj.c_c16_g3 == "true");
    c_c16_g4.checked = (tempObj.c_c16_g4 == "true");
    c_c16_g5.checked = (tempObj.c_c16_g5 == "true");
    c_c16_g6.checked = (tempObj.c_c16_g6 == "true");
    c_c16_g7.checked = (tempObj.c_c16_g7 == "true");
    c_c16_t1.checked = (tempObj.c_c16_t1 == "true");
    c_c16_t2.checked = (tempObj.c_c16_t2 == "true");
    
    c_c17_g1.checked = (tempObj.c_c17_g1 == "true");
    c_c17_g2.checked = (tempObj.c_c17_g2 == "true");
    c_c17_g3.checked = (tempObj.c_c17_g3 == "true");
    c_c17_g4.checked = (tempObj.c_c17_g4 == "true");
    c_c17_g5.checked = (tempObj.c_c17_g5 == "true");
    c_c17_g6.checked = (tempObj.c_c17_g6 == "true");
    c_c17_g7.checked = (tempObj.c_c17_g7 == "true");
    c_c17_t1.checked = (tempObj.c_c17_t1 == "true");
    c_c17_t2.checked = (tempObj.c_c17_t2 == "true");
    
    c_c18_g1.checked = (tempObj.c_c18_g1 == "true");
    c_c18_g2.checked = (tempObj.c_c18_g2 == "true");
    c_c18_g3.checked = (tempObj.c_c18_g3 == "true");
    c_c18_g4.checked = (tempObj.c_c18_g4 == "true");
    c_c18_g5.checked = (tempObj.c_c18_g5 == "true");
    c_c18_g6.checked = (tempObj.c_c18_g6 == "true");
    c_c18_g7.checked = (tempObj.c_c18_g7 == "true");
    c_c18_t1.checked = (tempObj.c_c18_t1 == "true");
    c_c18_t2.checked = (tempObj.c_c18_t2 == "true");
    
    c_c19_g1.checked = (tempObj.c_c19_g1 == "true");
    c_c19_g2.checked = (tempObj.c_c19_g2 == "true");
    c_c19_g3.checked = (tempObj.c_c19_g3 == "true");
    c_c19_g4.checked = (tempObj.c_c19_g4 == "true");
    c_c19_g5.checked = (tempObj.c_c19_g5 == "true");
    c_c19_g6.checked = (tempObj.c_c19_g6 == "true");
    c_c19_g7.checked = (tempObj.c_c19_g7 == "true");
    c_c19_t1.checked = (tempObj.c_c19_t1 == "true");
    c_c19_t2.checked = (tempObj.c_c19_t2 == "true");
    
    c_c20_g1.checked = (tempObj.c_c20_g1 == "true");
    c_c20_g2.checked = (tempObj.c_c20_g2 == "true");
    c_c20_g3.checked = (tempObj.c_c20_g3 == "true");
    c_c20_g4.checked = (tempObj.c_c20_g4 == "true");
    c_c20_g5.checked = (tempObj.c_c20_g5 == "true");
    c_c20_g6.checked = (tempObj.c_c20_g6 == "true");
    c_c20_g7.checked = (tempObj.c_c20_g7 == "true");
    c_c20_t1.checked = (tempObj.c_c20_t1 == "true");
    c_c20_t2.checked = (tempObj.c_c20_t2 == "true");
    
    c_c21_g1.checked = (tempObj.c_c21_g1 == "true");
    c_c21_g2.checked = (tempObj.c_c21_g2 == "true");
    c_c21_g3.checked = (tempObj.c_c21_g3 == "true");
    c_c21_g4.checked = (tempObj.c_c21_g4 == "true");
    c_c21_g5.checked = (tempObj.c_c21_g5 == "true");
    c_c21_g6.checked = (tempObj.c_c21_g6 == "true");
    c_c21_g7.checked = (tempObj.c_c21_g7 == "true");
    c_c21_t1.checked = (tempObj.c_c21_t1 == "true");
    c_c21_t2.checked = (tempObj.c_c21_t2 == "true");
    
    c_c22_g1.checked = (tempObj.c_c22_g1 == "true");
    c_c22_g2.checked = (tempObj.c_c22_g2 == "true");
    c_c22_g3.checked = (tempObj.c_c22_g3 == "true");
    c_c22_g4.checked = (tempObj.c_c22_g4 == "true");
    c_c22_g5.checked = (tempObj.c_c22_g5 == "true");
    c_c22_g6.checked = (tempObj.c_c22_g6 == "true");
    c_c22_g7.checked = (tempObj.c_c22_g7 == "true");
    c_c22_t1.checked = (tempObj.c_c22_t1 == "true");
    c_c22_t2.checked = (tempObj.c_c22_t2 == "true");
    
    c_c23_g1.checked = (tempObj.c_c23_g1 == "true");
    c_c23_g2.checked = (tempObj.c_c23_g2 == "true");
    c_c23_g3.checked = (tempObj.c_c23_g3 == "true");
    c_c23_g4.checked = (tempObj.c_c23_g4 == "true");
    c_c23_g5.checked = (tempObj.c_c23_g5 == "true");
    c_c23_g6.checked = (tempObj.c_c23_g6 == "true");
    c_c23_g7.checked = (tempObj.c_c23_g7 == "true");
    c_c23_t1.checked = (tempObj.c_c23_t1 == "true");
    c_c23_t2.checked = (tempObj.c_c23_t2 == "true");
    
    c_c24_g1.checked = (tempObj.c_c24_g1 == "true");
    c_c24_g2.checked = (tempObj.c_c24_g2 == "true");
    c_c24_g3.checked = (tempObj.c_c24_g3 == "true");
    c_c24_g4.checked = (tempObj.c_c24_g4 == "true");
    c_c24_g5.checked = (tempObj.c_c24_g5 == "true");
    c_c24_g6.checked = (tempObj.c_c24_g6 == "true");
    c_c24_g7.checked = (tempObj.c_c24_g7 == "true");
    c_c24_t1.checked = (tempObj.c_c24_t1 == "true");
    c_c24_t2.checked = (tempObj.c_c24_t2 == "true");
    
    c_c25_g1.checked = (tempObj.c_c25_g1 == "true");
    c_c25_g2.checked = (tempObj.c_c25_g2 == "true");
    c_c25_g3.checked = (tempObj.c_c25_g3 == "true");
    c_c25_g4.checked = (tempObj.c_c25_g4 == "true");
    c_c25_g5.checked = (tempObj.c_c25_g5 == "true");
    c_c25_g6.checked = (tempObj.c_c25_g6 == "true");
    c_c25_g7.checked = (tempObj.c_c25_g7 == "true");
    c_c25_t1.checked = (tempObj.c_c25_t1 == "true");
    c_c25_t2.checked = (tempObj.c_c25_t2 == "true");
    
    c_c26_g1.checked = (tempObj.c_c26_g1 == "true");
    c_c26_g2.checked = (tempObj.c_c26_g2 == "true");
    c_c26_g3.checked = (tempObj.c_c26_g3 == "true");
    c_c26_g4.checked = (tempObj.c_c26_g4 == "true");
    c_c26_g5.checked = (tempObj.c_c26_g5 == "true");
    c_c26_g6.checked = (tempObj.c_c26_g6 == "true");
    c_c26_g7.checked = (tempObj.c_c26_g7 == "true");
    c_c26_t1.checked = (tempObj.c_c26_t1 == "true");
    c_c26_t2.checked = (tempObj.c_c26_t2 == "true");
    
    c_c27_g1.checked = (tempObj.c_c27_g1 == "true");
    c_c27_g2.checked = (tempObj.c_c27_g2 == "true");
    c_c27_g3.checked = (tempObj.c_c27_g3 == "true");
    c_c27_g4.checked = (tempObj.c_c27_g4 == "true");
    c_c27_g5.checked = (tempObj.c_c27_g5 == "true");
    c_c27_g6.checked = (tempObj.c_c27_g6 == "true");
    c_c27_g7.checked = (tempObj.c_c27_g7 == "true");
    c_c27_t1.checked = (tempObj.c_c27_t1 == "true");
    c_c27_t2.checked = (tempObj.c_c27_t2 == "true");
    
    c_c28_g1.checked = (tempObj.c_c28_g1 == "true");
    c_c28_g2.checked = (tempObj.c_c28_g2 == "true");
    c_c28_g3.checked = (tempObj.c_c28_g3 == "true");
    c_c28_g4.checked = (tempObj.c_c28_g4 == "true");
    c_c28_g5.checked = (tempObj.c_c28_g5 == "true");
    c_c28_g6.checked = (tempObj.c_c28_g6 == "true");
    c_c28_g7.checked = (tempObj.c_c28_g7 == "true");
    c_c28_t1.checked = (tempObj.c_c28_t1 == "true");
    c_c28_t2.checked = (tempObj.c_c28_t2 == "true");
    
    c_c29_g1.checked = (tempObj.c_c29_g1 == "true");
    c_c29_g2.checked = (tempObj.c_c29_g2 == "true");
    c_c29_g3.checked = (tempObj.c_c29_g3 == "true");
    c_c29_g4.checked = (tempObj.c_c29_g4 == "true");
    c_c29_g5.checked = (tempObj.c_c29_g5 == "true");
    c_c29_g6.checked = (tempObj.c_c29_g6 == "true");
    c_c29_g7.checked = (tempObj.c_c29_g7 == "true");
    c_c29_t1.checked = (tempObj.c_c29_t1 == "true");
    c_c29_t2.checked = (tempObj.c_c29_t2 == "true");
    
    c_c30_g1.checked = (tempObj.c_c30_g1 == "true");
    c_c30_g2.checked = (tempObj.c_c30_g2 == "true");
    c_c30_g3.checked = (tempObj.c_c30_g3 == "true");
    c_c30_g4.checked = (tempObj.c_c30_g4 == "true");
    c_c30_g5.checked = (tempObj.c_c30_g5 == "true");
    c_c30_g6.checked = (tempObj.c_c30_g6 == "true");
    c_c30_g7.checked = (tempObj.c_c30_g7 == "true");
    c_c30_t1.checked = (tempObj.c_c30_t1 == "true");
    c_c30_t2.checked = (tempObj.c_c30_t2 == "true");
    
    c_c31_g1.checked = (tempObj.c_c31_g1 == "true");
    c_c31_g2.checked = (tempObj.c_c31_g2 == "true");
    c_c31_g3.checked = (tempObj.c_c31_g3 == "true");
    c_c31_g4.checked = (tempObj.c_c31_g4 == "true");
    c_c31_g5.checked = (tempObj.c_c31_g5 == "true");
    c_c31_g6.checked = (tempObj.c_c31_g6 == "true");
    c_c31_g7.checked = (tempObj.c_c31_g7 == "true");
    c_c31_t1.checked = (tempObj.c_c31_t1 == "true");
    c_c31_t2.checked = (tempObj.c_c31_t2 == "true");
    
    c_c32_g1.checked = (tempObj.c_c32_g1 == "true");
    c_c32_g2.checked = (tempObj.c_c32_g2 == "true");
    c_c32_g3.checked = (tempObj.c_c32_g3 == "true");
    c_c32_g4.checked = (tempObj.c_c32_g4 == "true");
    c_c32_g5.checked = (tempObj.c_c32_g5 == "true");
    c_c32_g6.checked = (tempObj.c_c32_g6 == "true");
    c_c32_g7.checked = (tempObj.c_c32_g7 == "true");
    c_c32_t1.checked = (tempObj.c_c32_t1 == "true");
    c_c32_t2.checked = (tempObj.c_c32_t2 == "true");
    
    c_c33_g1.checked = (tempObj.c_c33_g1 == "true");
    c_c33_g2.checked = (tempObj.c_c33_g2 == "true");
    c_c33_g3.checked = (tempObj.c_c33_g3 == "true");
    c_c33_g4.checked = (tempObj.c_c33_g4 == "true");
    c_c33_g5.checked = (tempObj.c_c33_g5 == "true");
    c_c33_g6.checked = (tempObj.c_c33_g6 == "true");
    c_c33_g7.checked = (tempObj.c_c33_g7 == "true");
    c_c33_t1.checked = (tempObj.c_c33_t1 == "true");
    c_c33_t2.checked = (tempObj.c_c33_t2 == "true");
    
    c_c34_g1.checked = (tempObj.c_c34_g1 == "true");
    c_c34_g2.checked = (tempObj.c_c34_g2 == "true");
    c_c34_g3.checked = (tempObj.c_c34_g3 == "true");
    c_c34_g4.checked = (tempObj.c_c34_g4 == "true");
    c_c34_g5.checked = (tempObj.c_c34_g5 == "true");
    c_c34_g6.checked = (tempObj.c_c34_g6 == "true");
    c_c34_g7.checked = (tempObj.c_c34_g7 == "true");
    c_c34_t1.checked = (tempObj.c_c34_t1 == "true");
    c_c34_t2.checked = (tempObj.c_c34_t2 == "true");

    completionCheck.checked = (tempObj.completionCheck == "true");

}

function loadFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(){
        if (settingsFile.value.split(".").pop() == "json") {
            tempObj = JSON.parse(reader.result);
            loadStorageFromFile();
            fileResult.innerHTML = "Success!";
            fileResult.style.color = "green";
        } else {
            fileResult.innerHTML = "Invalid file type.";
            fileResult.style.color = "red";
        }
    };
}

// mark current settings as complete (only visible if "Only generate runs that haven't already been completed" is true)
markAsCompleteDiv.addEventListener("click", function(e) {
    // prevent anything from happening if the button somehow appears when players is > 1
    if(numberPlayers != "1") {
        alert("This can only be done when the number of players is set to 1.");
    // prevent anything from happening if the randomizer hasn't actually been used yet
    } else if (img_charSolo.src.split("img/")[1].split(".")[0] == "questionmark") {
        alert("No character or objectives have been selected yet.");
    } else {

        // get the ids of the character and objectives
        var markChar = img_charSolo.src.split("img/")[1].split(".")[0];
        var markObj1 = img_obj1.src.split("img/")[1].split(".")[0];
        if (img_obj2.style.display == "initial"){
            var markObj2 = img_obj2.src.split("img/")[1].split(".")[0];
        }

        // workaround for timed objectives bc i made them different from the other objectives in id but not in image name for some reason
        if (markObj1 == "g8") {
            var markObj1 = "t1";
        } else if (markObj1 == "g9"){
            var markObj1 = "t2";
        }

        // marking the objectives as complete
        document.getElementById("c_" + markChar + "_" + markObj1).checked = true;
        if (img_obj2.style.display == "initial"){
            document.getElementById("c_" + markChar + "_" + markObj2).checked = true;
        }
        setStorage();
        
        // get character name
        // workaround for J&E so that it properly displays the & symbol instead of &amp;
        if (markChar == "c17") {
            var markCharTxt = "Jacob & Esau";
        } else {
            var markCharTxt = document.getElementById("" + markChar).labels[0].innerHTML;
        }

        // get objective name(s)
        // workaround for timed objectives again
        if (img_obj2.style.display == "initial") {
            if (markObj1 == "t1") {
                var markObj1Txt = "Boss Rush";
            } else if (markObj1 == "t2"){
                var markObj1Txt = "Hush";
            }
            var markObj2Txt = document.getElementById("" + markObj2).labels[0].innerHTML.split(">")[1];
        } else {
            var markObj1Txt = document.getElementById("" + markObj1).labels[0].innerHTML.split(">")[1];
        }

    }
});