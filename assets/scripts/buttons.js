presetRebirth.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        elem.checked = false;
    });
    c1.checked = true;
    c2.checked = true;
    c3.checked = true;
    c4.checked = true;
    c5.checked = true;
    c6.checked = true;
    c7.checked = true;
    c8.checked = true;
    c9.checked = true;
    c10.checked = true;
    c11.checked = true;

    g1.checked = true;
    g2.checked = true;
    g3.checked = true;
    g4.checked = false;
    g5.checked = false;
    g6.checked = false;
    g7.checked = false;

    t1.checked = true;
    t2.checked = false;

    completionCheck.checked = false;
});

presetAfterbirth.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        elem.checked = false;
    });
    c1.checked = true;
    c2.checked = true;
    c3.checked = true;
    c4.checked = true;
    c5.checked = true;
    c6.checked = true;
    c7.checked = true;
    c8.checked = true;
    c9.checked = true;
    c10.checked = true;
    c11.checked = true;
    c12.checked = true;
    c13.checked = true;

    g1.checked = true;
    g2.checked = true;
    g3.checked = true;
    g4.checked = true;
    g5.checked = false;
    g6.checked = false;
    g7.checked = false;

    t1.checked = true;
    t2.checked = true;

    completionCheck.checked = false;
});

presetAntibirth.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        elem.checked = false;
    });
    c1.checked = true;
    c2.checked = true;
    c3.checked = true;
    c4.checked = true;
    c5.checked = true;
    c6.checked = true;
    c7.checked = true;
    c8.checked = true;
    c9.checked = true;
    c10.checked = true;
    c11.checked = true;
    c16.checked = true;
    c17.checked = true;

    g1.checked = true;
    g2.checked = true;
    g3.checked = true;
    g4.checked = false;
    g5.checked = false;
    g6.checked = true;
    g7.checked = false;

    t1.checked = true;
    t2.checked = false;

    completionCheck.checked = false;
});

presetAfterbirthPlus.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        elem.checked = false;
    });
    c1.checked = true;
    c2.checked = true;
    c3.checked = true;
    c4.checked = true;
    c5.checked = true;
    c6.checked = true;
    c7.checked = true;
    c8.checked = true;
    c9.checked = true;
    c10.checked = true;
    c11.checked = true;
    c12.checked = true;
    c13.checked = true;
    c14.checked = true;
    c15.checked = true;

    g1.checked = true;
    g2.checked = true;
    g3.checked = true;
    g4.checked = true;
    g5.checked = true;
    g6.checked = false;
    g7.checked = false;

    t1.checked = true;
    t2.checked = true;

    completionCheck.checked = false;
});

presetRepentance.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        elem.checked = true;
    });

    g1.checked = true;
    g2.checked = true;
    g3.checked = true;
    g4.checked = true;
    g5.checked = true;
    g6.checked = true;
    g7.checked = true;

    t1.checked = true;
    t2.checked = true;

    completionCheck.checked = false;
});

radioArray.forEach(function(elem) {
    elem.addEventListener("change", function(e) {
        if (e.target.checked && e.target.value == "1") {

            playerInfoSolo.style.opacity = "1";
            playerInfoSolo.style.pointerEvents = "initial";
            playerInfoDuo.style.opacity = "0";
            playerInfoDuo.style.pointerEvents = "none";
            playerInfoTrio.style.opacity = "0";
            playerInfoTrio.style.pointerEvents = "none";
            playerInfoQuad.style.opacity = "0";
            playerInfoQuad.style.pointerEvents = "none";
            numberPlayers = "1";

            if (completionCheck.checked) {
                markAsCompleteDiv.style.display = "block";
                img_options.style.margin = "0 auto";
            }

        } else if (e.target.checked && e.target.value == "2") {

            playerInfoSolo.style.opacity = "0";
            playerInfoSolo.style.pointerEvents = "none";
            playerInfoDuo.style.opacity = "1";
            playerInfoDuo.style.pointerEvents = "initial";
            playerInfoTrio.style.opacity = "0";
            playerInfoTrio.style.pointerEvents = "none";
            playerInfoQuad.style.opacity = "0";
            playerInfoQuad.style.pointerEvents = "none";
            numberPlayers = "2";

            markAsCompleteDiv.style.display = "none";
            img_options.style.margin = "1rem auto";

        } else if (e.target.checked && e.target.value == "3") {

            playerInfoSolo.style.opacity = "0";
            playerInfoSolo.style.pointerEvents = "none";
            playerInfoDuo.style.opacity = "0";
            playerInfoDuo.style.pointerEvents = "none";
            playerInfoTrio.style.opacity = "1";
            playerInfoTrio.style.pointerEvents = "initial";
            playerInfoQuad.style.opacity = "0";
            playerInfoQuad.style.pointerEvents = "none";
            numberPlayers = "3";

            markAsCompleteDiv.style.display = "none";
            img_options.style.margin = "1rem auto";

        } else if (e.target.checked && e.target.value == "4") {

            playerInfoSolo.style.opacity = "0";
            playerInfoSolo.style.pointerEvents = "none";
            playerInfoDuo.style.opacity = "0";
            playerInfoDuo.style.pointerEvents = "none";
            playerInfoTrio.style.opacity = "0";
            playerInfoTrio.style.pointerEvents = "none";
            playerInfoQuad.style.opacity = "1";
            playerInfoQuad.style.pointerEvents = "initial";
            numberPlayers = "4";

            markAsCompleteDiv.style.display = "none";
            img_options.style.margin = "1rem auto";

        }
    });
});

checkAllChar.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        elem.checked = true;
    });
});

checkNormalChar.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        if (listNormal.includes(elem.id)) {
            elem.checked = true;
        } else {
            elem.checked = false;
        }
    });
});

checkTaintedChar.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        if (listTainted.includes(elem.id)) {
            elem.checked = true;
        } else {
            elem.checked = false;
        }
    });
});

uncheckAllChar.addEventListener("click", function(e) {
    charArray.forEach(function(elem) {
        elem.checked = false;
    });
});

customShow.addEventListener("click", function(e) {
    customChars.style.display = "initial";
    customVisible = true;
});

customHide.addEventListener("click", function(e) {
    customChars.style.display = "none";
    customVisible = false;
});

weightShow.addEventListener("click", function(e) {
    wLabelArray.forEach(function(elem) {
        elem.style.display = "initial";
    });
    weightArray.forEach(function(elem) {
        elem.style.display = "initial";
    });
    weightVisible = true;
});

weightHide.addEventListener("click", function(e) {
    wLabelArray.forEach(function(elem) {
        elem.style.display = "none";
    });
    weightArray.forEach(function(elem) {
        elem.style.display = "none";
    });
    weightVisible = false;
});

weightReset.addEventListener("click", function(e) {
    weightArray.forEach(function(elem) {
        elem.value = "1.0";
    });
});

gWeightShow.addEventListener("click", function(e) {
    gWLabelArray.forEach(function(elem) {
        elem.style.display = "initial";
    });
    gWeightArray.forEach(function(elem) {
        elem.style.display = "initial";
    });
    gWeightVisible = true;
});

gWeightHide.addEventListener("click", function(e) {
    gWLabelArray.forEach(function(elem) {
        elem.style.display = "none";
    });
    gWeightArray.forEach(function(elem) {
        elem.style.display = "none";
    });
    gWeightVisible = false;
});

gWeightReset.addEventListener("click", function(e) {
    gWeightArray.forEach(function(elem) {
        elem.value = "1.0";
    });
});

customCheck.addEventListener("click", function(e) {
    if (!customCheck.checked) {
        customInputArray.forEach(function(elem) {
            elem.disabled = true;
        });
    } else {
        customInputArray.forEach(function(elem) {
            elem.disabled = false;
        });
    }
});


checkAllGoal.addEventListener("click", function(e) {
    timedCheck.checked = true;
    timedChance.disabled = false;
    t1.checked = true;
    t1.disabled = false;
    t2.checked = true;
    t2.disabled = false;
    goalArray.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllGoal.addEventListener("click", function(e) {
    timedCheck.checked = false;
    timedChance.disabled = true;
    t1.checked = false;
    t1.disabled = true;
    t2.checked = false;
    t2.disabled = true;
    goalArray.forEach(function(elem) {
        elem.checked = false;
    });
});

timedCheck.addEventListener("change", function(e) {

    if (!timedCheck.checked) {
        t1.checked = false;
        t1.disabled = true;
        t2.checked = false;
        t2.disabled = true;
        timedChance.disabled = true;
    } else {
        t1.disabled = false;
        t2.disabled = false;
        timedChance.disabled = false;
    }

});


checkAllChallenge.addEventListener("click", function(e) {
    challengeArray.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllChallenge.addEventListener("click", function(e) {
    challengeArray.forEach(function(elem) {
        elem.checked = false;
    });
});

completionCheck.addEventListener("click", function(e) {
    if (completionCheck.checked) {
        markAsCompleteDiv.style.display = "block";
        img_options.style.margin = "0 auto";
    } else if (!completionCheck.checked) {
        markAsCompleteDiv.style.display = "none";
        img_options.style.margin = "1rem auto";
    }
});

showCompletion.addEventListener("click", function(e) {
    completion.style.display = "initial";
});

hideCompletion.addEventListener("click", function(e) {
    completion.style.display = "none";
});

let c1Array = document.querySelectorAll(".completion-c1");
let c2Array = document.querySelectorAll(".completion-c2");
let c3Array = document.querySelectorAll(".completion-c3");
let c4Array = document.querySelectorAll(".completion-c4");
let c5Array = document.querySelectorAll(".completion-c5");
let c6Array = document.querySelectorAll(".completion-c6");
let c7Array = document.querySelectorAll(".completion-c7");
let c8Array = document.querySelectorAll(".completion-c8");
let c9Array = document.querySelectorAll(".completion-c9");
let c10Array = document.querySelectorAll(".completion-c10");
let c11Array = document.querySelectorAll(".completion-c11");
let c12Array = document.querySelectorAll(".completion-c12");
let c13Array = document.querySelectorAll(".completion-c13");
let c14Array = document.querySelectorAll(".completion-c14");
let c15Array = document.querySelectorAll(".completion-c15");
let c16Array = document.querySelectorAll(".completion-c16");
let c17Array = document.querySelectorAll(".completion-c17");
let c18Array = document.querySelectorAll(".completion-c18");
let c19Array = document.querySelectorAll(".completion-c19");
let c20Array = document.querySelectorAll(".completion-c20");
let c21Array = document.querySelectorAll(".completion-c21");
let c22Array = document.querySelectorAll(".completion-c22");
let c23Array = document.querySelectorAll(".completion-c23");
let c24Array = document.querySelectorAll(".completion-c24");
let c25Array = document.querySelectorAll(".completion-c25");
let c26Array = document.querySelectorAll(".completion-c26");
let c27Array = document.querySelectorAll(".completion-c27");
let c28Array = document.querySelectorAll(".completion-c28");
let c29Array = document.querySelectorAll(".completion-c29");
let c30Array = document.querySelectorAll(".completion-c30");
let c31Array = document.querySelectorAll(".completion-c31");
let c32Array = document.querySelectorAll(".completion-c32");
let c33Array = document.querySelectorAll(".completion-c33");
let c34Array = document.querySelectorAll(".completion-c34");


checkAllC1.addEventListener("click", function(e) {
    c1Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC1.addEventListener("click", function(e) {
    c1Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC2.addEventListener("click", function(e) {
    c2Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC2.addEventListener("click", function(e) {
    c2Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC3.addEventListener("click", function(e) {
    c3Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC3.addEventListener("click", function(e) {
    c3Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC4.addEventListener("click", function(e) {
    c4Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC4.addEventListener("click", function(e) {
    c4Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC5.addEventListener("click", function(e) {
    c5Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC5.addEventListener("click", function(e) {
    c5Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC6.addEventListener("click", function(e) {
    c6Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC6.addEventListener("click", function(e) {
    c6Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC7.addEventListener("click", function(e) {
    c7Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC7.addEventListener("click", function(e) {
    c7Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC8.addEventListener("click", function(e) {
    c8Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC8.addEventListener("click", function(e) {
    c8Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC9.addEventListener("click", function(e) {
    c9Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC9.addEventListener("click", function(e) {
    c9Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC10.addEventListener("click", function(e) {
    c10Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC10.addEventListener("click", function(e) {
    c10Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC11.addEventListener("click", function(e) {
    c11Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC11.addEventListener("click", function(e) {
    c11Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC12.addEventListener("click", function(e) {
    c12Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC12.addEventListener("click", function(e) {
    c12Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC13.addEventListener("click", function(e) {
    c13Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC13.addEventListener("click", function(e) {
    c13Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC14.addEventListener("click", function(e) {
    c14Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC14.addEventListener("click", function(e) {
    c14Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC15.addEventListener("click", function(e) {
    c15Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC15.addEventListener("click", function(e) {
    c15Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC16.addEventListener("click", function(e) {
    c16Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC16.addEventListener("click", function(e) {
    c16Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC17.addEventListener("click", function(e) {
    c17Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC17.addEventListener("click", function(e) {
    c17Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC18.addEventListener("click", function(e) {
    c18Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC18.addEventListener("click", function(e) {
    c18Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC19.addEventListener("click", function(e) {
    c19Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC19.addEventListener("click", function(e) {
    c19Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC20.addEventListener("click", function(e) {
    c20Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC20.addEventListener("click", function(e) {
    c20Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC21.addEventListener("click", function(e) {
    c21Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC21.addEventListener("click", function(e) {
    c21Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC22.addEventListener("click", function(e) {
    c22Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC22.addEventListener("click", function(e) {
    c22Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC23.addEventListener("click", function(e) {
    c23Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC23.addEventListener("click", function(e) {
    c23Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC24.addEventListener("click", function(e) {
    c24Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC24.addEventListener("click", function(e) {
    c24Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC25.addEventListener("click", function(e) {
    c25Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC25.addEventListener("click", function(e) {
    c25Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC26.addEventListener("click", function(e) {
    c26Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC26.addEventListener("click", function(e) {
    c26Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC27.addEventListener("click", function(e) {
    c27Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC27.addEventListener("click", function(e) {
    c27Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC28.addEventListener("click", function(e) {
    c28Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC28.addEventListener("click", function(e) {
    c28Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC29.addEventListener("click", function(e) {
    c29Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC29.addEventListener("click", function(e) {
    c29Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC30.addEventListener("click", function(e) {
    c30Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC30.addEventListener("click", function(e) {
    c30Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC31.addEventListener("click", function(e) {
    c31Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC31.addEventListener("click", function(e) {
    c31Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC32.addEventListener("click", function(e) {
    c32Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC32.addEventListener("click", function(e) {
    c32Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC33.addEventListener("click", function(e) {
    c33Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC33.addEventListener("click", function(e) {
    c33Array.forEach(function(elem) {
        elem.checked = false;
    });
});

checkAllC34.addEventListener("click", function(e) {
    c34Array.forEach(function(elem) {
        elem.checked = true;
    });
});

uncheckAllC34.addEventListener("click", function(e) {
    c34Array.forEach(function(elem) {
        elem.checked = false;
    });
});