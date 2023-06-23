// you're looking through my code, huh?
// well, if you're doing this then I can only assume you are also a web developer, or at least some other kind of software developer
// if i'm doing anything really stupid, can you tell me how to fix it? lmao
// except the localStorage thing, it's kind of annoying to store everything as a string but I can deal with it so whatever

jsErr.remove();
display.style.display = "block";
img_options.style.display = "block";
settingsFile.value = "";

chromaStyle0.checked = true;
chromaAlignLeft.checked = true;
chromaText.value = "FFFFFF";
chromaBG.value = "00FF00";

let wLabelArray = document.querySelectorAll(".weightLabel");
let weightArray = document.querySelectorAll(".weight");
var weightVisible = false;
let gWLabelArray = document.querySelectorAll(".gWeightLabel");
let gWeightArray = document.querySelectorAll(".gWeight");
var gWeightVisible = false;
let customInputArray = document.querySelectorAll(".customInput");
var customVisible = false;
let radioArray = document.querySelectorAll(".numPlayers");
var numberPlayers = "1";

function setStorage() {

    localStorage.clear();

    localStorage.setItem("a", "If you want to edit this, that's fine, but don't touch the 'version' entry or things will break");
    localStorage.setItem("version", "6");

    localStorage.setItem("numberPlayers", numberPlayers);

    localStorage.setItem("c1", c1.checked);
    localStorage.setItem("c2", c2.checked);
    localStorage.setItem("c3", c3.checked);
    localStorage.setItem("c4", c4.checked);
    localStorage.setItem("c5", c5.checked);
    localStorage.setItem("c6", c6.checked);
    localStorage.setItem("c7", c7.checked);
    localStorage.setItem("c8", c8.checked);
    localStorage.setItem("c9", c9.checked);
    localStorage.setItem("c10", c10.checked);
    localStorage.setItem("c11", c11.checked);
    localStorage.setItem("c12", c12.checked);
    localStorage.setItem("c13", c13.checked);
    localStorage.setItem("c14", c14.checked);
    localStorage.setItem("c15", c15.checked);
    localStorage.setItem("c16", c16.checked);
    localStorage.setItem("c17", c17.checked);
    localStorage.setItem("c18", c18.checked);
    localStorage.setItem("c19", c19.checked);
    localStorage.setItem("c20", c20.checked);
    localStorage.setItem("c21", c21.checked);
    localStorage.setItem("c22", c22.checked);
    localStorage.setItem("c23", c23.checked);
    localStorage.setItem("c24", c24.checked);
    localStorage.setItem("c25", c25.checked);
    localStorage.setItem("c26", c26.checked);
    localStorage.setItem("c27", c27.checked);
    localStorage.setItem("c28", c28.checked);
    localStorage.setItem("c29", c29.checked);
    localStorage.setItem("c30", c30.checked);
    localStorage.setItem("c31", c31.checked);
    localStorage.setItem("c32", c32.checked);
    localStorage.setItem("c33", c33.checked);
    localStorage.setItem("c34", c34.checked);

    localStorage.setItem("w1", w1.value);
    localStorage.setItem("w2", w2.value);
    localStorage.setItem("w3", w3.value);
    localStorage.setItem("w4", w4.value);
    localStorage.setItem("w5", w5.value);
    localStorage.setItem("w6", w6.value);
    localStorage.setItem("w7", w7.value);
    localStorage.setItem("w8", w8.value);
    localStorage.setItem("w9", w9.value);
    localStorage.setItem("w10", w10.value);
    localStorage.setItem("w11", w11.value);
    localStorage.setItem("w12", w12.value);
    localStorage.setItem("w13", w13.value);
    localStorage.setItem("w14", w14.value);
    localStorage.setItem("w15", w15.value);
    localStorage.setItem("w16", w16.value);
    localStorage.setItem("w17", w17.value);
    localStorage.setItem("w18", w18.value);
    localStorage.setItem("w19", w19.value);
    localStorage.setItem("w20", w20.value);
    localStorage.setItem("w21", w21.value);
    localStorage.setItem("w22", w22.value);
    localStorage.setItem("w23", w23.value);
    localStorage.setItem("w24", w24.value);
    localStorage.setItem("w25", w25.value);
    localStorage.setItem("w26", w26.value);
    localStorage.setItem("w27", w27.value);
    localStorage.setItem("w28", w28.value);
    localStorage.setItem("w29", w29.value);
    localStorage.setItem("w30", w30.value);
    localStorage.setItem("w31", w31.value);
    localStorage.setItem("w32", w32.value);
    localStorage.setItem("w33", w33.value);
    localStorage.setItem("w34", w34.value);

    localStorage.setItem("weightVisible", weightVisible);

    localStorage.setItem("customCheck", customCheck.checked);
    localStorage.setItem("customVisible", customVisible);

    localStorage.setItem("customc1", customc1.checked);
    localStorage.setItem("customn1", customn1.value);
    localStorage.setItem("customw1", customw1.value);
    localStorage.setItem("customc2", customc2.checked);
    localStorage.setItem("customn2", customn2.value);
    localStorage.setItem("customw2", customw2.value);
    localStorage.setItem("customc3", customc3.checked);
    localStorage.setItem("customn3", customn3.value);
    localStorage.setItem("customw3", customw3.value);
    localStorage.setItem("customc4", customc4.checked);
    localStorage.setItem("customn4", customn4.value);
    localStorage.setItem("customw4", customw4.value);
    localStorage.setItem("customc5", customc5.checked);
    localStorage.setItem("customn5", customn5.value);
    localStorage.setItem("customw5", customw5.value);
    localStorage.setItem("customc6", customc6.checked);
    localStorage.setItem("customn6", customn6.value);
    localStorage.setItem("customw6", customw6.value);
    localStorage.setItem("customc7", customc7.checked);
    localStorage.setItem("customn7", customn7.value);
    localStorage.setItem("customw7", customw7.value);
    localStorage.setItem("customc8", customc8.checked);
    localStorage.setItem("customn8", customn8.value);
    localStorage.setItem("customw8", customw8.value);
    localStorage.setItem("customc9", customc9.checked);
    localStorage.setItem("customn9", customn9.value);
    localStorage.setItem("customw9", customw9.value);
    localStorage.setItem("customc10", customc10.checked);
    localStorage.setItem("customn10", customn10.value);
    localStorage.setItem("customw10", customw10.value);
    localStorage.setItem("customc11", customc11.checked);
    localStorage.setItem("customn11", customn11.value);
    localStorage.setItem("customw11", customw11.value);
    localStorage.setItem("customc12", customc12.checked);
    localStorage.setItem("customn12", customn12.value);
    localStorage.setItem("customw12", customw12.value);
    localStorage.setItem("customc13", customc13.checked);
    localStorage.setItem("customn13", customn13.value);
    localStorage.setItem("customw13", customw13.value);
    localStorage.setItem("customc14", customc14.checked);
    localStorage.setItem("customn14", customn14.value);
    localStorage.setItem("customw14", customw14.value);
    localStorage.setItem("customc15", customc15.checked);
    localStorage.setItem("customn15", customn15.value);
    localStorage.setItem("customw15", customw15.value);
    localStorage.setItem("customc16", customc16.checked);
    localStorage.setItem("customn16", customn16.value);
    localStorage.setItem("customw16", customw16.value);
    localStorage.setItem("customc17", customc17.checked);
    localStorage.setItem("customn17", customn17.value);
    localStorage.setItem("customw17", customw17.value);
    localStorage.setItem("customc18", customc18.checked);
    localStorage.setItem("customn18", customn18.value);
    localStorage.setItem("customw18", customw18.value);
    localStorage.setItem("customc19", customc19.checked);
    localStorage.setItem("customn19", customn19.value);
    localStorage.setItem("customw19", customw19.value);
    localStorage.setItem("customc20", customc20.checked);
    localStorage.setItem("customn20", customn20.value);
    localStorage.setItem("customw20", customw20.value);

    localStorage.setItem("g1", g1.checked);
    localStorage.setItem("g2", g2.checked);
    localStorage.setItem("g3", g3.checked);
    localStorage.setItem("g4", g4.checked);
    localStorage.setItem("g5", g5.checked);
    localStorage.setItem("g6", g6.checked);
    localStorage.setItem("g7", g7.checked);

    localStorage.setItem("gw1", gw1.value);
    localStorage.setItem("gw2", gw2.value);
    localStorage.setItem("gw3", gw3.value);
    localStorage.setItem("gw4", gw4.value);
    localStorage.setItem("gw5", gw5.value);
    localStorage.setItem("gw6", gw6.value);
    localStorage.setItem("gw7", gw7.value);

    localStorage.setItem("gWeightVisible", gWeightVisible);

    localStorage.setItem("timedCheck", timedCheck.checked);
    localStorage.setItem("timedChance", timedChance.value);

    localStorage.setItem("t1", t1.checked);
    localStorage.setItem("t2", t2.checked);

    localStorage.setItem("challengeCheck", challengeCheck.checked);
    localStorage.setItem("challengeChance", challengeChance.value);

    localStorage.setItem("ch1", ch1.checked);
    localStorage.setItem("ch2", ch2.checked);
    localStorage.setItem("ch3", ch3.checked);
    localStorage.setItem("ch4", ch4.checked);
    localStorage.setItem("ch5", ch5.checked);
    localStorage.setItem("ch6", ch6.checked);
    localStorage.setItem("ch7", ch7.checked);
    localStorage.setItem("ch8", ch8.checked);
    localStorage.setItem("ch9", ch9.checked);
    localStorage.setItem("ch10", ch10.checked);
    localStorage.setItem("ch11", ch11.checked);
    localStorage.setItem("ch12", ch12.checked);


    localStorage.setItem("c_c1_g1", c_c1_g1.checked);
    localStorage.setItem("c_c1_g2", c_c1_g2.checked);
    localStorage.setItem("c_c1_g3", c_c1_g3.checked);
    localStorage.setItem("c_c1_g4", c_c1_g4.checked);
    localStorage.setItem("c_c1_g5", c_c1_g5.checked);
    localStorage.setItem("c_c1_g6", c_c1_g6.checked);
    localStorage.setItem("c_c1_g7", c_c1_g7.checked);
    localStorage.setItem("c_c1_t1", c_c1_t1.checked);
    localStorage.setItem("c_c1_t2", c_c1_t2.checked);
    
    localStorage.setItem("c_c2_g1", c_c2_g1.checked);
    localStorage.setItem("c_c2_g2", c_c2_g2.checked);
    localStorage.setItem("c_c2_g3", c_c2_g3.checked);
    localStorage.setItem("c_c2_g4", c_c2_g4.checked);
    localStorage.setItem("c_c2_g5", c_c2_g5.checked);
    localStorage.setItem("c_c2_g6", c_c2_g6.checked);
    localStorage.setItem("c_c2_g7", c_c2_g7.checked);
    localStorage.setItem("c_c2_t1", c_c2_t1.checked);
    localStorage.setItem("c_c2_t2", c_c2_t2.checked);
    
    localStorage.setItem("c_c3_g1", c_c3_g1.checked);
    localStorage.setItem("c_c3_g2", c_c3_g2.checked);
    localStorage.setItem("c_c3_g3", c_c3_g3.checked);
    localStorage.setItem("c_c3_g4", c_c3_g4.checked);
    localStorage.setItem("c_c3_g5", c_c3_g5.checked);
    localStorage.setItem("c_c3_g6", c_c3_g6.checked);
    localStorage.setItem("c_c3_g7", c_c3_g7.checked);
    localStorage.setItem("c_c3_t1", c_c3_t1.checked);
    localStorage.setItem("c_c3_t2", c_c3_t2.checked);
    
    localStorage.setItem("c_c4_g1", c_c4_g1.checked);
    localStorage.setItem("c_c4_g2", c_c4_g2.checked);
    localStorage.setItem("c_c4_g3", c_c4_g3.checked);
    localStorage.setItem("c_c4_g4", c_c4_g4.checked);
    localStorage.setItem("c_c4_g5", c_c4_g5.checked);
    localStorage.setItem("c_c4_g6", c_c4_g6.checked);
    localStorage.setItem("c_c4_g7", c_c4_g7.checked);
    localStorage.setItem("c_c4_t1", c_c4_t1.checked);
    localStorage.setItem("c_c4_t2", c_c4_t2.checked);
    
    localStorage.setItem("c_c5_g1", c_c5_g1.checked);
    localStorage.setItem("c_c5_g2", c_c5_g2.checked);
    localStorage.setItem("c_c5_g3", c_c5_g3.checked);
    localStorage.setItem("c_c5_g4", c_c5_g4.checked);
    localStorage.setItem("c_c5_g5", c_c5_g5.checked);
    localStorage.setItem("c_c5_g6", c_c5_g6.checked);
    localStorage.setItem("c_c5_g7", c_c5_g7.checked);
    localStorage.setItem("c_c5_t1", c_c5_t1.checked);
    localStorage.setItem("c_c5_t2", c_c5_t2.checked);
    
    localStorage.setItem("c_c6_g1", c_c6_g1.checked);
    localStorage.setItem("c_c6_g2", c_c6_g2.checked);
    localStorage.setItem("c_c6_g3", c_c6_g3.checked);
    localStorage.setItem("c_c6_g4", c_c6_g4.checked);
    localStorage.setItem("c_c6_g5", c_c6_g5.checked);
    localStorage.setItem("c_c6_g6", c_c6_g6.checked);
    localStorage.setItem("c_c6_g7", c_c6_g7.checked);
    localStorage.setItem("c_c6_t1", c_c6_t1.checked);
    localStorage.setItem("c_c6_t2", c_c6_t2.checked);
    
    localStorage.setItem("c_c7_g1", c_c7_g1.checked);
    localStorage.setItem("c_c7_g2", c_c7_g2.checked);
    localStorage.setItem("c_c7_g3", c_c7_g3.checked);
    localStorage.setItem("c_c7_g4", c_c7_g4.checked);
    localStorage.setItem("c_c7_g5", c_c7_g5.checked);
    localStorage.setItem("c_c7_g6", c_c7_g6.checked);
    localStorage.setItem("c_c7_g7", c_c7_g7.checked);
    localStorage.setItem("c_c7_t1", c_c7_t1.checked);
    localStorage.setItem("c_c7_t2", c_c7_t2.checked);
    
    localStorage.setItem("c_c8_g1", c_c8_g1.checked);
    localStorage.setItem("c_c8_g2", c_c8_g2.checked);
    localStorage.setItem("c_c8_g3", c_c8_g3.checked);
    localStorage.setItem("c_c8_g4", c_c8_g4.checked);
    localStorage.setItem("c_c8_g5", c_c8_g5.checked);
    localStorage.setItem("c_c8_g6", c_c8_g6.checked);
    localStorage.setItem("c_c8_g7", c_c8_g7.checked);
    localStorage.setItem("c_c8_t1", c_c8_t1.checked);
    localStorage.setItem("c_c8_t2", c_c8_t2.checked);
    
    localStorage.setItem("c_c9_g1", c_c9_g1.checked);
    localStorage.setItem("c_c9_g2", c_c9_g2.checked);
    localStorage.setItem("c_c9_g3", c_c9_g3.checked);
    localStorage.setItem("c_c9_g4", c_c9_g4.checked);
    localStorage.setItem("c_c9_g5", c_c9_g5.checked);
    localStorage.setItem("c_c9_g6", c_c9_g6.checked);
    localStorage.setItem("c_c9_g7", c_c9_g7.checked);
    localStorage.setItem("c_c9_t1", c_c9_t1.checked);
    localStorage.setItem("c_c9_t2", c_c9_t2.checked);
    
    localStorage.setItem("c_c10_g1", c_c10_g1.checked);
    localStorage.setItem("c_c10_g2", c_c10_g2.checked);
    localStorage.setItem("c_c10_g3", c_c10_g3.checked);
    localStorage.setItem("c_c10_g4", c_c10_g4.checked);
    localStorage.setItem("c_c10_g5", c_c10_g5.checked);
    localStorage.setItem("c_c10_g6", c_c10_g6.checked);
    localStorage.setItem("c_c10_g7", c_c10_g7.checked);
    localStorage.setItem("c_c10_t1", c_c10_t1.checked);
    localStorage.setItem("c_c10_t2", c_c10_t2.checked);
    
    localStorage.setItem("c_c11_g1", c_c11_g1.checked);
    localStorage.setItem("c_c11_g2", c_c11_g2.checked);
    localStorage.setItem("c_c11_g3", c_c11_g3.checked);
    localStorage.setItem("c_c11_g4", c_c11_g4.checked);
    localStorage.setItem("c_c11_g5", c_c11_g5.checked);
    localStorage.setItem("c_c11_g6", c_c11_g6.checked);
    localStorage.setItem("c_c11_g7", c_c11_g7.checked);
    localStorage.setItem("c_c11_t1", c_c11_t1.checked);
    localStorage.setItem("c_c11_t2", c_c11_t2.checked);
    
    localStorage.setItem("c_c12_g1", c_c12_g1.checked);
    localStorage.setItem("c_c12_g2", c_c12_g2.checked);
    localStorage.setItem("c_c12_g3", c_c12_g3.checked);
    localStorage.setItem("c_c12_g4", c_c12_g4.checked);
    localStorage.setItem("c_c12_g5", c_c12_g5.checked);
    localStorage.setItem("c_c12_g6", c_c12_g6.checked);
    localStorage.setItem("c_c12_g7", c_c12_g7.checked);
    localStorage.setItem("c_c12_t1", c_c12_t1.checked);
    localStorage.setItem("c_c12_t2", c_c12_t2.checked);
    
    localStorage.setItem("c_c13_g1", c_c13_g1.checked);
    localStorage.setItem("c_c13_g2", c_c13_g2.checked);
    localStorage.setItem("c_c13_g3", c_c13_g3.checked);
    localStorage.setItem("c_c13_g4", c_c13_g4.checked);
    localStorage.setItem("c_c13_g5", c_c13_g5.checked);
    localStorage.setItem("c_c13_g6", c_c13_g6.checked);
    localStorage.setItem("c_c13_g7", c_c13_g7.checked);
    localStorage.setItem("c_c13_t1", c_c13_t1.checked);
    localStorage.setItem("c_c13_t2", c_c13_t2.checked);
    
    localStorage.setItem("c_c14_g1", c_c14_g1.checked);
    localStorage.setItem("c_c14_g2", c_c14_g2.checked);
    localStorage.setItem("c_c14_g3", c_c14_g3.checked);
    localStorage.setItem("c_c14_g4", c_c14_g4.checked);
    localStorage.setItem("c_c14_g5", c_c14_g5.checked);
    localStorage.setItem("c_c14_g6", c_c14_g6.checked);
    localStorage.setItem("c_c14_g7", c_c14_g7.checked);
    localStorage.setItem("c_c14_t1", c_c14_t1.checked);
    localStorage.setItem("c_c14_t2", c_c14_t2.checked);
    
    localStorage.setItem("c_c15_g1", c_c15_g1.checked);
    localStorage.setItem("c_c15_g2", c_c15_g2.checked);
    localStorage.setItem("c_c15_g3", c_c15_g3.checked);
    localStorage.setItem("c_c15_g4", c_c15_g4.checked);
    localStorage.setItem("c_c15_g5", c_c15_g5.checked);
    localStorage.setItem("c_c15_g6", c_c15_g6.checked);
    localStorage.setItem("c_c15_g7", c_c15_g7.checked);
    localStorage.setItem("c_c15_t1", c_c15_t1.checked);
    localStorage.setItem("c_c15_t2", c_c15_t2.checked);
    
    localStorage.setItem("c_c16_g1", c_c16_g1.checked);
    localStorage.setItem("c_c16_g2", c_c16_g2.checked);
    localStorage.setItem("c_c16_g3", c_c16_g3.checked);
    localStorage.setItem("c_c16_g4", c_c16_g4.checked);
    localStorage.setItem("c_c16_g5", c_c16_g5.checked);
    localStorage.setItem("c_c16_g6", c_c16_g6.checked);
    localStorage.setItem("c_c16_g7", c_c16_g7.checked);
    localStorage.setItem("c_c16_t1", c_c16_t1.checked);
    localStorage.setItem("c_c16_t2", c_c16_t2.checked);
    
    localStorage.setItem("c_c17_g1", c_c17_g1.checked);
    localStorage.setItem("c_c17_g2", c_c17_g2.checked);
    localStorage.setItem("c_c17_g3", c_c17_g3.checked);
    localStorage.setItem("c_c17_g4", c_c17_g4.checked);
    localStorage.setItem("c_c17_g5", c_c17_g5.checked);
    localStorage.setItem("c_c17_g6", c_c17_g6.checked);
    localStorage.setItem("c_c17_g7", c_c17_g7.checked);
    localStorage.setItem("c_c17_t1", c_c17_t1.checked);
    localStorage.setItem("c_c17_t2", c_c17_t2.checked);
    
    localStorage.setItem("c_c18_g1", c_c18_g1.checked);
    localStorage.setItem("c_c18_g2", c_c18_g2.checked);
    localStorage.setItem("c_c18_g3", c_c18_g3.checked);
    localStorage.setItem("c_c18_g4", c_c18_g4.checked);
    localStorage.setItem("c_c18_g5", c_c18_g5.checked);
    localStorage.setItem("c_c18_g6", c_c18_g6.checked);
    localStorage.setItem("c_c18_g7", c_c18_g7.checked);
    localStorage.setItem("c_c18_t1", c_c18_t1.checked);
    localStorage.setItem("c_c18_t2", c_c18_t2.checked);
    
    localStorage.setItem("c_c19_g1", c_c19_g1.checked);
    localStorage.setItem("c_c19_g2", c_c19_g2.checked);
    localStorage.setItem("c_c19_g3", c_c19_g3.checked);
    localStorage.setItem("c_c19_g4", c_c19_g4.checked);
    localStorage.setItem("c_c19_g5", c_c19_g5.checked);
    localStorage.setItem("c_c19_g6", c_c19_g6.checked);
    localStorage.setItem("c_c19_g7", c_c19_g7.checked);
    localStorage.setItem("c_c19_t1", c_c19_t1.checked);
    localStorage.setItem("c_c19_t2", c_c19_t2.checked);
    
    localStorage.setItem("c_c20_g1", c_c20_g1.checked);
    localStorage.setItem("c_c20_g2", c_c20_g2.checked);
    localStorage.setItem("c_c20_g3", c_c20_g3.checked);
    localStorage.setItem("c_c20_g4", c_c20_g4.checked);
    localStorage.setItem("c_c20_g5", c_c20_g5.checked);
    localStorage.setItem("c_c20_g6", c_c20_g6.checked);
    localStorage.setItem("c_c20_g7", c_c20_g7.checked);
    localStorage.setItem("c_c20_t1", c_c20_t1.checked);
    localStorage.setItem("c_c20_t2", c_c20_t2.checked);
    
    localStorage.setItem("c_c21_g1", c_c21_g1.checked);
    localStorage.setItem("c_c21_g2", c_c21_g2.checked);
    localStorage.setItem("c_c21_g3", c_c21_g3.checked);
    localStorage.setItem("c_c21_g4", c_c21_g4.checked);
    localStorage.setItem("c_c21_g5", c_c21_g5.checked);
    localStorage.setItem("c_c21_g6", c_c21_g6.checked);
    localStorage.setItem("c_c21_g7", c_c21_g7.checked);
    localStorage.setItem("c_c21_t1", c_c21_t1.checked);
    localStorage.setItem("c_c21_t2", c_c21_t2.checked);
    
    localStorage.setItem("c_c22_g1", c_c22_g1.checked);
    localStorage.setItem("c_c22_g2", c_c22_g2.checked);
    localStorage.setItem("c_c22_g3", c_c22_g3.checked);
    localStorage.setItem("c_c22_g4", c_c22_g4.checked);
    localStorage.setItem("c_c22_g5", c_c22_g5.checked);
    localStorage.setItem("c_c22_g6", c_c22_g6.checked);
    localStorage.setItem("c_c22_g7", c_c22_g7.checked);
    localStorage.setItem("c_c22_t1", c_c22_t1.checked);
    localStorage.setItem("c_c22_t2", c_c22_t2.checked);
    
    localStorage.setItem("c_c23_g1", c_c23_g1.checked);
    localStorage.setItem("c_c23_g2", c_c23_g2.checked);
    localStorage.setItem("c_c23_g3", c_c23_g3.checked);
    localStorage.setItem("c_c23_g4", c_c23_g4.checked);
    localStorage.setItem("c_c23_g5", c_c23_g5.checked);
    localStorage.setItem("c_c23_g6", c_c23_g6.checked);
    localStorage.setItem("c_c23_g7", c_c23_g7.checked);
    localStorage.setItem("c_c23_t1", c_c23_t1.checked);
    localStorage.setItem("c_c23_t2", c_c23_t2.checked);
    
    localStorage.setItem("c_c24_g1", c_c24_g1.checked);
    localStorage.setItem("c_c24_g2", c_c24_g2.checked);
    localStorage.setItem("c_c24_g3", c_c24_g3.checked);
    localStorage.setItem("c_c24_g4", c_c24_g4.checked);
    localStorage.setItem("c_c24_g5", c_c24_g5.checked);
    localStorage.setItem("c_c24_g6", c_c24_g6.checked);
    localStorage.setItem("c_c24_g7", c_c24_g7.checked);
    localStorage.setItem("c_c24_t1", c_c24_t1.checked);
    localStorage.setItem("c_c24_t2", c_c24_t2.checked);
    
    localStorage.setItem("c_c25_g1", c_c25_g1.checked);
    localStorage.setItem("c_c25_g2", c_c25_g2.checked);
    localStorage.setItem("c_c25_g3", c_c25_g3.checked);
    localStorage.setItem("c_c25_g4", c_c25_g4.checked);
    localStorage.setItem("c_c25_g5", c_c25_g5.checked);
    localStorage.setItem("c_c25_g6", c_c25_g6.checked);
    localStorage.setItem("c_c25_g7", c_c25_g7.checked);
    localStorage.setItem("c_c25_t1", c_c25_t1.checked);
    localStorage.setItem("c_c25_t2", c_c25_t2.checked);
    
    localStorage.setItem("c_c26_g1", c_c26_g1.checked);
    localStorage.setItem("c_c26_g2", c_c26_g2.checked);
    localStorage.setItem("c_c26_g3", c_c26_g3.checked);
    localStorage.setItem("c_c26_g4", c_c26_g4.checked);
    localStorage.setItem("c_c26_g5", c_c26_g5.checked);
    localStorage.setItem("c_c26_g6", c_c26_g6.checked);
    localStorage.setItem("c_c26_g7", c_c26_g7.checked);
    localStorage.setItem("c_c26_t1", c_c26_t1.checked);
    localStorage.setItem("c_c26_t2", c_c26_t2.checked);
    
    localStorage.setItem("c_c27_g1", c_c27_g1.checked);
    localStorage.setItem("c_c27_g2", c_c27_g2.checked);
    localStorage.setItem("c_c27_g3", c_c27_g3.checked);
    localStorage.setItem("c_c27_g4", c_c27_g4.checked);
    localStorage.setItem("c_c27_g5", c_c27_g5.checked);
    localStorage.setItem("c_c27_g6", c_c27_g6.checked);
    localStorage.setItem("c_c27_g7", c_c27_g7.checked);
    localStorage.setItem("c_c27_t1", c_c27_t1.checked);
    localStorage.setItem("c_c27_t2", c_c27_t2.checked);
    
    localStorage.setItem("c_c28_g1", c_c28_g1.checked);
    localStorage.setItem("c_c28_g2", c_c28_g2.checked);
    localStorage.setItem("c_c28_g3", c_c28_g3.checked);
    localStorage.setItem("c_c28_g4", c_c28_g4.checked);
    localStorage.setItem("c_c28_g5", c_c28_g5.checked);
    localStorage.setItem("c_c28_g6", c_c28_g6.checked);
    localStorage.setItem("c_c28_g7", c_c28_g7.checked);
    localStorage.setItem("c_c28_t1", c_c28_t1.checked);
    localStorage.setItem("c_c28_t2", c_c28_t2.checked);
    
    localStorage.setItem("c_c29_g1", c_c29_g1.checked);
    localStorage.setItem("c_c29_g2", c_c29_g2.checked);
    localStorage.setItem("c_c29_g3", c_c29_g3.checked);
    localStorage.setItem("c_c29_g4", c_c29_g4.checked);
    localStorage.setItem("c_c29_g5", c_c29_g5.checked);
    localStorage.setItem("c_c29_g6", c_c29_g6.checked);
    localStorage.setItem("c_c29_g7", c_c29_g7.checked);
    localStorage.setItem("c_c29_t1", c_c29_t1.checked);
    localStorage.setItem("c_c29_t2", c_c29_t2.checked);
    
    localStorage.setItem("c_c30_g1", c_c30_g1.checked);
    localStorage.setItem("c_c30_g2", c_c30_g2.checked);
    localStorage.setItem("c_c30_g3", c_c30_g3.checked);
    localStorage.setItem("c_c30_g4", c_c30_g4.checked);
    localStorage.setItem("c_c30_g5", c_c30_g5.checked);
    localStorage.setItem("c_c30_g6", c_c30_g6.checked);
    localStorage.setItem("c_c30_g7", c_c30_g7.checked);
    localStorage.setItem("c_c30_t1", c_c30_t1.checked);
    localStorage.setItem("c_c30_t2", c_c30_t2.checked);
    
    localStorage.setItem("c_c31_g1", c_c31_g1.checked);
    localStorage.setItem("c_c31_g2", c_c31_g2.checked);
    localStorage.setItem("c_c31_g3", c_c31_g3.checked);
    localStorage.setItem("c_c31_g4", c_c31_g4.checked);
    localStorage.setItem("c_c31_g5", c_c31_g5.checked);
    localStorage.setItem("c_c31_g6", c_c31_g6.checked);
    localStorage.setItem("c_c31_g7", c_c31_g7.checked);
    localStorage.setItem("c_c31_t1", c_c31_t1.checked);
    localStorage.setItem("c_c31_t2", c_c31_t2.checked);
    
    localStorage.setItem("c_c32_g1", c_c32_g1.checked);
    localStorage.setItem("c_c32_g2", c_c32_g2.checked);
    localStorage.setItem("c_c32_g3", c_c32_g3.checked);
    localStorage.setItem("c_c32_g4", c_c32_g4.checked);
    localStorage.setItem("c_c32_g5", c_c32_g5.checked);
    localStorage.setItem("c_c32_g6", c_c32_g6.checked);
    localStorage.setItem("c_c32_g7", c_c32_g7.checked);
    localStorage.setItem("c_c32_t1", c_c32_t1.checked);
    localStorage.setItem("c_c32_t2", c_c32_t2.checked);
    
    localStorage.setItem("c_c33_g1", c_c33_g1.checked);
    localStorage.setItem("c_c33_g2", c_c33_g2.checked);
    localStorage.setItem("c_c33_g3", c_c33_g3.checked);
    localStorage.setItem("c_c33_g4", c_c33_g4.checked);
    localStorage.setItem("c_c33_g5", c_c33_g5.checked);
    localStorage.setItem("c_c33_g6", c_c33_g6.checked);
    localStorage.setItem("c_c33_g7", c_c33_g7.checked);
    localStorage.setItem("c_c33_t1", c_c33_t1.checked);
    localStorage.setItem("c_c33_t2", c_c33_t2.checked);
    
    localStorage.setItem("c_c34_g1", c_c34_g1.checked);
    localStorage.setItem("c_c34_g2", c_c34_g2.checked);
    localStorage.setItem("c_c34_g3", c_c34_g3.checked);
    localStorage.setItem("c_c34_g4", c_c34_g4.checked);
    localStorage.setItem("c_c34_g5", c_c34_g5.checked);
    localStorage.setItem("c_c34_g6", c_c34_g6.checked);
    localStorage.setItem("c_c34_g7", c_c34_g7.checked);
    localStorage.setItem("c_c34_t1", c_c34_t1.checked);
    localStorage.setItem("c_c34_t2", c_c34_t2.checked);

    localStorage.setItem("completionCheck", completionCheck.checked);

}

function loadStorage() {

    if (localStorage.numberPlayers == "1") {
        playerInfoDuo.style.opacity = "0";
        playerInfoDuo.style.pointerEvents = "none";
        playerInfoTrio.style.opacity = "0";
        playerInfoTrio.style.pointerEvents = "none";
        playerInfoQuad.style.opacity = "0";
        playerInfoQuad.style.pointerEvents = "none";
        numPlayers1.checked = true;
        numberPlayers = "1";
    } else if (localStorage.numberPlayers == "2") {
        playerInfoSolo.style.opacity = "0";
        playerInfoSolo.style.pointerEvents = "none";
        playerInfoDuo.style.opacity = "1";
        playerInfoDuo.style.pointerEvents = "initial";
        playerInfoTrio.style.opacity = "0";
        playerInfoTrio.style.pointerEvents = "none";
        playerInfoQuad.style.opacity = "0";
        playerInfoQuad.style.pointerEvents = "none";
        numPlayers2.checked = true;
        numberPlayers = "2";
    } else if (localStorage.numberPlayers == "3") {
        playerInfoSolo.style.opacity = "0";
        playerInfoSolo.style.pointerEvents = "none";
        playerInfoDuo.style.opacity = "0";
        playerInfoDuo.style.pointerEvents = "none";
        playerInfoTrio.style.opacity = "1";
        playerInfoTrio.style.pointerEvents = "initial";
        playerInfoQuad.style.opacity = "0";
        playerInfoQuad.style.pointerEvents = "none";
        numPlayers3.checked = true;
        numberPlayers = "3";
    } else if (localStorage.numberPlayers == "4") {
        playerInfoSolo.style.opacity = "0";
        playerInfoSolo.style.pointerEvents = "none";
        playerInfoDuo.style.opacity = "0";
        playerInfoDuo.style.pointerEvents = "none";
        playerInfoTrio.style.opacity = "0";
        playerInfoTrio.style.pointerEvents = "none";
        playerInfoQuad.style.opacity = "1";
        playerInfoQuad.style.pointerEvents = "initial";
        numPlayers4.checked = true;
        numberPlayers = "4";
    }

    c1.checked = (localStorage.c1 == "true");
    c2.checked = (localStorage.c2 == "true");
    c3.checked = (localStorage.c3 == "true");
    c4.checked = (localStorage.c4 == "true");
    c5.checked = (localStorage.c5 == "true");
    c6.checked = (localStorage.c6 == "true");
    c7.checked = (localStorage.c7 == "true");
    c8.checked = (localStorage.c8 == "true");
    c9.checked = (localStorage.c9 == "true");
    c10.checked = (localStorage.c10 == "true");
    c11.checked = (localStorage.c11 == "true");
    c12.checked = (localStorage.c12 == "true");
    c13.checked = (localStorage.c13 == "true");
    c14.checked = (localStorage.c14 == "true");
    c15.checked = (localStorage.c15 == "true");
    c16.checked = (localStorage.c16 == "true");
    c17.checked = (localStorage.c17 == "true");
    c18.checked = (localStorage.c18 == "true");
    c19.checked = (localStorage.c19 == "true");
    c20.checked = (localStorage.c20 == "true");
    c21.checked = (localStorage.c21 == "true");
    c22.checked = (localStorage.c22 == "true");
    c23.checked = (localStorage.c23 == "true");
    c24.checked = (localStorage.c24 == "true");
    c25.checked = (localStorage.c25 == "true");
    c26.checked = (localStorage.c26 == "true");
    c27.checked = (localStorage.c27 == "true");
    c28.checked = (localStorage.c28 == "true");
    c29.checked = (localStorage.c29 == "true");
    c30.checked = (localStorage.c30 == "true");
    c31.checked = (localStorage.c31 == "true");
    c32.checked = (localStorage.c32 == "true");
    c33.checked = (localStorage.c33 == "true");
    c34.checked = (localStorage.c34 == "true");

    w1.value = localStorage.w1;
    w2.value = localStorage.w2;
    w3.value = localStorage.w3;
    w4.value = localStorage.w4;
    w5.value = localStorage.w5;
    w6.value = localStorage.w6;
    w7.value = localStorage.w7;
    w8.value = localStorage.w8;
    w9.value = localStorage.w9;
    w10.value = localStorage.w10;
    w11.value = localStorage.w11;
    w12.value = localStorage.w12;
    w13.value = localStorage.w13;
    w14.value = localStorage.w14;
    w15.value = localStorage.w15;
    w16.value = localStorage.w16;
    w17.value = localStorage.w17;
    w18.value = localStorage.w18;
    w19.value = localStorage.w19;
    w20.value = localStorage.w20;
    w21.value = localStorage.w21;
    w22.value = localStorage.w22;
    w23.value = localStorage.w23;
    w24.value = localStorage.w24;
    w25.value = localStorage.w25;
    w26.value = localStorage.w26;
    w27.value = localStorage.w27;
    w28.value = localStorage.w28;
    w29.value = localStorage.w29;
    w30.value = localStorage.w30;
    w31.value = localStorage.w31;
    w32.value = localStorage.w32;
    w33.value = localStorage.w33;
    w34.value = localStorage.w34;

    if (localStorage.weightVisible == "true") {
        wLabelArray.forEach(function(elem) {
            elem.style.display = "initial";
        });
        weightArray.forEach(function(elem) {
            elem.style.display = "initial";
        });
        weightVisible = true;
    } else if (localStorage.weightVisible == "false") {
        wLabelArray.forEach(function(elem) {
            elem.style.display = "none";
        });
        weightArray.forEach(function(elem) {
            elem.style.display = "none";
        });
        weightVisible = false;
    }

    if (localStorage.customCheck == "true") {
        customInputArray.forEach(function(elem) {
            elem.disabled = false;
        });
    } else if (localStorage.customCheck == "false") {
        customInputArray.forEach(function(elem) {
            elem.disabled = true;
        });
    }

    customCheck.checked = (localStorage.customCheck == "true");

    if (localStorage.customVisible == "true") {
        customChars.style.display = "initial";
    } else if (localStorage.customVisible == "false") {
        customChars.style.display = "none";
    }

    customc1.checked = (localStorage.customc1 == "true");
    customn1.value = localStorage.customn1;
    customw1.value = localStorage.customw1;
    customc2.checked = (localStorage.customc2 == "true");
    customn2.value = localStorage.customn2;
    customw2.value = localStorage.customw2;
    customc3.checked = (localStorage.customc3 == "true");
    customn3.value = localStorage.customn3;
    customw3.value = localStorage.customw3;
    customc4.checked = (localStorage.customc4 == "true");
    customn4.value = localStorage.customn4;
    customw4.value = localStorage.customw4;
    customc5.checked = (localStorage.customc5 == "true");
    customn5.value = localStorage.customn5;
    customw5.value = localStorage.customw5;
    customc6.checked = (localStorage.customc6 == "true");
    customn6.value = localStorage.customn6;
    customw6.value = localStorage.customw6;
    customc7.checked = (localStorage.customc7 == "true");
    customn7.value = localStorage.customn7;
    customw7.value = localStorage.customw7;
    customc8.checked = (localStorage.customc8 == "true");
    customn8.value = localStorage.customn8;
    customw8.value = localStorage.customw8;
    customc9.checked = (localStorage.customc9 == "true");
    customn9.value = localStorage.customn9;
    customw9.value = localStorage.customw9;
    customc10.checked = (localStorage.customc10 == "true");
    customn10.value = localStorage.customn10;
    customw10.value = localStorage.customw10;
    customc11.checked = (localStorage.customc11 == "true");
    customn11.value = localStorage.customn11;
    customw11.value = localStorage.customw11;
    customc12.checked = (localStorage.customc12 == "true");
    customn12.value = localStorage.customn12;
    customw12.value = localStorage.customw12;
    customc13.checked = (localStorage.customc13 == "true");
    customn13.value = localStorage.customn13;
    customw13.value = localStorage.customw13;
    customc14.checked = (localStorage.customc14 == "true");
    customn14.value = localStorage.customn14;
    customw14.value = localStorage.customw14;
    customc15.checked = (localStorage.customc15 == "true");
    customn15.value = localStorage.customn15;
    customw15.value = localStorage.customw15;
    customc16.checked = (localStorage.customc16 == "true");
    customn16.value = localStorage.customn16;
    customw16.value = localStorage.customw16;
    customc17.checked = (localStorage.customc17 == "true");
    customn17.value = localStorage.customn17;
    customw17.value = localStorage.customw17;
    customc18.checked = (localStorage.customc18 == "true");
    customn18.value = localStorage.customn18;
    customw18.value = localStorage.customw18;
    customc19.checked = (localStorage.customc19 == "true");
    customn19.value = localStorage.customn19;
    customw19.value = localStorage.customw19;
    customc20.checked = (localStorage.customc20 == "true");
    customn20.value = localStorage.customn20;
    customw20.value = localStorage.customw20;

    g1.checked = (localStorage.g1 == "true");
    g2.checked = (localStorage.g2 == "true");
    g3.checked = (localStorage.g3 == "true");
    g4.checked = (localStorage.g4 == "true");
    g5.checked = (localStorage.g5 == "true");
    g6.checked = (localStorage.g6 == "true");
    g7.checked = (localStorage.g7 == "true");

    gw1.value = localStorage.gw1;
    gw2.value = localStorage.gw2;
    gw3.value = localStorage.gw3;
    gw4.value = localStorage.gw4;
    gw5.value = localStorage.gw5;
    gw6.value = localStorage.gw6;
    gw7.value = localStorage.gw7;

    if (localStorage.gWeightVisible == "true") {
        gWLabelArray.forEach(function(elem) {
            elem.style.display = "initial";
        });
        gWeightArray.forEach(function(elem) {
            elem.style.display = "initial";
        });
        gWeightVisible = true;
    } else if (localStorage.gWeightVisible == "false") {
        gWLabelArray.forEach(function(elem) {
            elem.style.display = "none";
        });
        gWeightArray.forEach(function(elem) {
            elem.style.display = "none";
        });
        gWeightVisible = false;
    }

    timedCheck.checked = (localStorage.timedCheck == "true");

    if (localStorage.timedCheck == "false") {
        t1.checked = false;
        t1.disabled = true;
        t2.checked = false;
        t2.disabled = true;
        timedChance.disabled = true;
    }

    timedChance.value = localStorage.timedChance;

    t1.checked = (localStorage.t1 == "true");
    t2.checked = (localStorage.t2 == "true");

    challengeCheck.checked = (localStorage.challengeCheck == "true");
    challengeChance.value = localStorage.challengeChance;

    ch1.checked = (localStorage.ch1 == "true");
    ch2.checked = (localStorage.ch2 == "true");
    ch3.checked = (localStorage.ch3 == "true");
    ch4.checked = (localStorage.ch4 == "true");
    ch5.checked = (localStorage.ch5 == "true");
    ch6.checked = (localStorage.ch6 == "true");
    ch7.checked = (localStorage.ch7 == "true");
    ch8.checked = (localStorage.ch8 == "true");
    ch9.checked = (localStorage.ch9 == "true");
    ch10.checked = (localStorage.ch10 == "true");
    ch11.checked = (localStorage.ch11 == "true");
    ch12.checked = (localStorage.ch12 == "true");


    c_c1_g1.checked = (localStorage.c_c1_g1 == "true");
    c_c1_g2.checked = (localStorage.c_c1_g2 == "true");
    c_c1_g3.checked = (localStorage.c_c1_g3 == "true");
    c_c1_g4.checked = (localStorage.c_c1_g4 == "true");
    c_c1_g5.checked = (localStorage.c_c1_g5 == "true");
    c_c1_g6.checked = (localStorage.c_c1_g6 == "true");
    c_c1_g7.checked = (localStorage.c_c1_g7 == "true");
    c_c1_t1.checked = (localStorage.c_c1_t1 == "true");
    c_c1_t2.checked = (localStorage.c_c1_t2 == "true");
    
    c_c2_g1.checked = (localStorage.c_c2_g1 == "true");
    c_c2_g2.checked = (localStorage.c_c2_g2 == "true");
    c_c2_g3.checked = (localStorage.c_c2_g3 == "true");
    c_c2_g4.checked = (localStorage.c_c2_g4 == "true");
    c_c2_g5.checked = (localStorage.c_c2_g5 == "true");
    c_c2_g6.checked = (localStorage.c_c2_g6 == "true");
    c_c2_g7.checked = (localStorage.c_c2_g7 == "true");
    c_c2_t1.checked = (localStorage.c_c2_t1 == "true");
    c_c2_t2.checked = (localStorage.c_c2_t2 == "true");
    
    c_c3_g1.checked = (localStorage.c_c3_g1 == "true");
    c_c3_g2.checked = (localStorage.c_c3_g2 == "true");
    c_c3_g3.checked = (localStorage.c_c3_g3 == "true");
    c_c3_g4.checked = (localStorage.c_c3_g4 == "true");
    c_c3_g5.checked = (localStorage.c_c3_g5 == "true");
    c_c3_g6.checked = (localStorage.c_c3_g6 == "true");
    c_c3_g7.checked = (localStorage.c_c3_g7 == "true");
    c_c3_t1.checked = (localStorage.c_c3_t1 == "true");
    c_c3_t2.checked = (localStorage.c_c3_t2 == "true");
    
    c_c4_g1.checked = (localStorage.c_c4_g1 == "true");
    c_c4_g2.checked = (localStorage.c_c4_g2 == "true");
    c_c4_g3.checked = (localStorage.c_c4_g3 == "true");
    c_c4_g4.checked = (localStorage.c_c4_g4 == "true");
    c_c4_g5.checked = (localStorage.c_c4_g5 == "true");
    c_c4_g6.checked = (localStorage.c_c4_g6 == "true");
    c_c4_g7.checked = (localStorage.c_c4_g7 == "true");
    c_c4_t1.checked = (localStorage.c_c4_t1 == "true");
    c_c4_t2.checked = (localStorage.c_c4_t2 == "true");
    
    c_c5_g1.checked = (localStorage.c_c5_g1 == "true");
    c_c5_g2.checked = (localStorage.c_c5_g2 == "true");
    c_c5_g3.checked = (localStorage.c_c5_g3 == "true");
    c_c5_g4.checked = (localStorage.c_c5_g4 == "true");
    c_c5_g5.checked = (localStorage.c_c5_g5 == "true");
    c_c5_g6.checked = (localStorage.c_c5_g6 == "true");
    c_c5_g7.checked = (localStorage.c_c5_g7 == "true");
    c_c5_t1.checked = (localStorage.c_c5_t1 == "true");
    c_c5_t2.checked = (localStorage.c_c5_t2 == "true");
    
    c_c6_g1.checked = (localStorage.c_c6_g1 == "true");
    c_c6_g2.checked = (localStorage.c_c6_g2 == "true");
    c_c6_g3.checked = (localStorage.c_c6_g3 == "true");
    c_c6_g4.checked = (localStorage.c_c6_g4 == "true");
    c_c6_g5.checked = (localStorage.c_c6_g5 == "true");
    c_c6_g6.checked = (localStorage.c_c6_g6 == "true");
    c_c6_g7.checked = (localStorage.c_c6_g7 == "true");
    c_c6_t1.checked = (localStorage.c_c6_t1 == "true");
    c_c6_t2.checked = (localStorage.c_c6_t2 == "true");
    
    c_c7_g1.checked = (localStorage.c_c7_g1 == "true");
    c_c7_g2.checked = (localStorage.c_c7_g2 == "true");
    c_c7_g3.checked = (localStorage.c_c7_g3 == "true");
    c_c7_g4.checked = (localStorage.c_c7_g4 == "true");
    c_c7_g5.checked = (localStorage.c_c7_g5 == "true");
    c_c7_g6.checked = (localStorage.c_c7_g6 == "true");
    c_c7_g7.checked = (localStorage.c_c7_g7 == "true");
    c_c7_t1.checked = (localStorage.c_c7_t1 == "true");
    c_c7_t2.checked = (localStorage.c_c7_t2 == "true");
    
    c_c8_g1.checked = (localStorage.c_c8_g1 == "true");
    c_c8_g2.checked = (localStorage.c_c8_g2 == "true");
    c_c8_g3.checked = (localStorage.c_c8_g3 == "true");
    c_c8_g4.checked = (localStorage.c_c8_g4 == "true");
    c_c8_g5.checked = (localStorage.c_c8_g5 == "true");
    c_c8_g6.checked = (localStorage.c_c8_g6 == "true");
    c_c8_g7.checked = (localStorage.c_c8_g7 == "true");
    c_c8_t1.checked = (localStorage.c_c8_t1 == "true");
    c_c8_t2.checked = (localStorage.c_c8_t2 == "true");
    
    c_c9_g1.checked = (localStorage.c_c9_g1 == "true");
    c_c9_g2.checked = (localStorage.c_c9_g2 == "true");
    c_c9_g3.checked = (localStorage.c_c9_g3 == "true");
    c_c9_g4.checked = (localStorage.c_c9_g4 == "true");
    c_c9_g5.checked = (localStorage.c_c9_g5 == "true");
    c_c9_g6.checked = (localStorage.c_c9_g6 == "true");
    c_c9_g7.checked = (localStorage.c_c9_g7 == "true");
    c_c9_t1.checked = (localStorage.c_c9_t1 == "true");
    c_c9_t2.checked = (localStorage.c_c9_t2 == "true");
    
    c_c10_g1.checked = (localStorage.c_c10_g1 == "true");
    c_c10_g2.checked = (localStorage.c_c10_g2 == "true");
    c_c10_g3.checked = (localStorage.c_c10_g3 == "true");
    c_c10_g4.checked = (localStorage.c_c10_g4 == "true");
    c_c10_g5.checked = (localStorage.c_c10_g5 == "true");
    c_c10_g6.checked = (localStorage.c_c10_g6 == "true");
    c_c10_g7.checked = (localStorage.c_c10_g7 == "true");
    c_c10_t1.checked = (localStorage.c_c10_t1 == "true");
    c_c10_t2.checked = (localStorage.c_c10_t2 == "true");
    
    c_c11_g1.checked = (localStorage.c_c11_g1 == "true");
    c_c11_g2.checked = (localStorage.c_c11_g2 == "true");
    c_c11_g3.checked = (localStorage.c_c11_g3 == "true");
    c_c11_g4.checked = (localStorage.c_c11_g4 == "true");
    c_c11_g5.checked = (localStorage.c_c11_g5 == "true");
    c_c11_g6.checked = (localStorage.c_c11_g6 == "true");
    c_c11_g7.checked = (localStorage.c_c11_g7 == "true");
    c_c11_t1.checked = (localStorage.c_c11_t1 == "true");
    c_c11_t2.checked = (localStorage.c_c11_t2 == "true");
    
    c_c12_g1.checked = (localStorage.c_c12_g1 == "true");
    c_c12_g2.checked = (localStorage.c_c12_g2 == "true");
    c_c12_g3.checked = (localStorage.c_c12_g3 == "true");
    c_c12_g4.checked = (localStorage.c_c12_g4 == "true");
    c_c12_g5.checked = (localStorage.c_c12_g5 == "true");
    c_c12_g6.checked = (localStorage.c_c12_g6 == "true");
    c_c12_g7.checked = (localStorage.c_c12_g7 == "true");
    c_c12_t1.checked = (localStorage.c_c12_t1 == "true");
    c_c12_t2.checked = (localStorage.c_c12_t2 == "true");
    
    c_c13_g1.checked = (localStorage.c_c13_g1 == "true");
    c_c13_g2.checked = (localStorage.c_c13_g2 == "true");
    c_c13_g3.checked = (localStorage.c_c13_g3 == "true");
    c_c13_g4.checked = (localStorage.c_c13_g4 == "true");
    c_c13_g5.checked = (localStorage.c_c13_g5 == "true");
    c_c13_g6.checked = (localStorage.c_c13_g6 == "true");
    c_c13_g7.checked = (localStorage.c_c13_g7 == "true");
    c_c13_t1.checked = (localStorage.c_c13_t1 == "true");
    c_c13_t2.checked = (localStorage.c_c13_t2 == "true");
    
    c_c14_g1.checked = (localStorage.c_c14_g1 == "true");
    c_c14_g2.checked = (localStorage.c_c14_g2 == "true");
    c_c14_g3.checked = (localStorage.c_c14_g3 == "true");
    c_c14_g4.checked = (localStorage.c_c14_g4 == "true");
    c_c14_g5.checked = (localStorage.c_c14_g5 == "true");
    c_c14_g6.checked = (localStorage.c_c14_g6 == "true");
    c_c14_g7.checked = (localStorage.c_c14_g7 == "true");
    c_c14_t1.checked = (localStorage.c_c14_t1 == "true");
    c_c14_t2.checked = (localStorage.c_c14_t2 == "true");
    
    c_c15_g1.checked = (localStorage.c_c15_g1 == "true");
    c_c15_g2.checked = (localStorage.c_c15_g2 == "true");
    c_c15_g3.checked = (localStorage.c_c15_g3 == "true");
    c_c15_g4.checked = (localStorage.c_c15_g4 == "true");
    c_c15_g5.checked = (localStorage.c_c15_g5 == "true");
    c_c15_g6.checked = (localStorage.c_c15_g6 == "true");
    c_c15_g7.checked = (localStorage.c_c15_g7 == "true");
    c_c15_t1.checked = (localStorage.c_c15_t1 == "true");
    c_c15_t2.checked = (localStorage.c_c15_t2 == "true");
    
    c_c16_g1.checked = (localStorage.c_c16_g1 == "true");
    c_c16_g2.checked = (localStorage.c_c16_g2 == "true");
    c_c16_g3.checked = (localStorage.c_c16_g3 == "true");
    c_c16_g4.checked = (localStorage.c_c16_g4 == "true");
    c_c16_g5.checked = (localStorage.c_c16_g5 == "true");
    c_c16_g6.checked = (localStorage.c_c16_g6 == "true");
    c_c16_g7.checked = (localStorage.c_c16_g7 == "true");
    c_c16_t1.checked = (localStorage.c_c16_t1 == "true");
    c_c16_t2.checked = (localStorage.c_c16_t2 == "true");
    
    c_c17_g1.checked = (localStorage.c_c17_g1 == "true");
    c_c17_g2.checked = (localStorage.c_c17_g2 == "true");
    c_c17_g3.checked = (localStorage.c_c17_g3 == "true");
    c_c17_g4.checked = (localStorage.c_c17_g4 == "true");
    c_c17_g5.checked = (localStorage.c_c17_g5 == "true");
    c_c17_g6.checked = (localStorage.c_c17_g6 == "true");
    c_c17_g7.checked = (localStorage.c_c17_g7 == "true");
    c_c17_t1.checked = (localStorage.c_c17_t1 == "true");
    c_c17_t2.checked = (localStorage.c_c17_t2 == "true");
    
    c_c18_g1.checked = (localStorage.c_c18_g1 == "true");
    c_c18_g2.checked = (localStorage.c_c18_g2 == "true");
    c_c18_g3.checked = (localStorage.c_c18_g3 == "true");
    c_c18_g4.checked = (localStorage.c_c18_g4 == "true");
    c_c18_g5.checked = (localStorage.c_c18_g5 == "true");
    c_c18_g6.checked = (localStorage.c_c18_g6 == "true");
    c_c18_g7.checked = (localStorage.c_c18_g7 == "true");
    c_c18_t1.checked = (localStorage.c_c18_t1 == "true");
    c_c18_t2.checked = (localStorage.c_c18_t2 == "true");
    
    c_c19_g1.checked = (localStorage.c_c19_g1 == "true");
    c_c19_g2.checked = (localStorage.c_c19_g2 == "true");
    c_c19_g3.checked = (localStorage.c_c19_g3 == "true");
    c_c19_g4.checked = (localStorage.c_c19_g4 == "true");
    c_c19_g5.checked = (localStorage.c_c19_g5 == "true");
    c_c19_g6.checked = (localStorage.c_c19_g6 == "true");
    c_c19_g7.checked = (localStorage.c_c19_g7 == "true");
    c_c19_t1.checked = (localStorage.c_c19_t1 == "true");
    c_c19_t2.checked = (localStorage.c_c19_t2 == "true");
    
    c_c20_g1.checked = (localStorage.c_c20_g1 == "true");
    c_c20_g2.checked = (localStorage.c_c20_g2 == "true");
    c_c20_g3.checked = (localStorage.c_c20_g3 == "true");
    c_c20_g4.checked = (localStorage.c_c20_g4 == "true");
    c_c20_g5.checked = (localStorage.c_c20_g5 == "true");
    c_c20_g6.checked = (localStorage.c_c20_g6 == "true");
    c_c20_g7.checked = (localStorage.c_c20_g7 == "true");
    c_c20_t1.checked = (localStorage.c_c20_t1 == "true");
    c_c20_t2.checked = (localStorage.c_c20_t2 == "true");
    
    c_c21_g1.checked = (localStorage.c_c21_g1 == "true");
    c_c21_g2.checked = (localStorage.c_c21_g2 == "true");
    c_c21_g3.checked = (localStorage.c_c21_g3 == "true");
    c_c21_g4.checked = (localStorage.c_c21_g4 == "true");
    c_c21_g5.checked = (localStorage.c_c21_g5 == "true");
    c_c21_g6.checked = (localStorage.c_c21_g6 == "true");
    c_c21_g7.checked = (localStorage.c_c21_g7 == "true");
    c_c21_t1.checked = (localStorage.c_c21_t1 == "true");
    c_c21_t2.checked = (localStorage.c_c21_t2 == "true");
    
    c_c22_g1.checked = (localStorage.c_c22_g1 == "true");
    c_c22_g2.checked = (localStorage.c_c22_g2 == "true");
    c_c22_g3.checked = (localStorage.c_c22_g3 == "true");
    c_c22_g4.checked = (localStorage.c_c22_g4 == "true");
    c_c22_g5.checked = (localStorage.c_c22_g5 == "true");
    c_c22_g6.checked = (localStorage.c_c22_g6 == "true");
    c_c22_g7.checked = (localStorage.c_c22_g7 == "true");
    c_c22_t1.checked = (localStorage.c_c22_t1 == "true");
    c_c22_t2.checked = (localStorage.c_c22_t2 == "true");
    
    c_c23_g1.checked = (localStorage.c_c23_g1 == "true");
    c_c23_g2.checked = (localStorage.c_c23_g2 == "true");
    c_c23_g3.checked = (localStorage.c_c23_g3 == "true");
    c_c23_g4.checked = (localStorage.c_c23_g4 == "true");
    c_c23_g5.checked = (localStorage.c_c23_g5 == "true");
    c_c23_g6.checked = (localStorage.c_c23_g6 == "true");
    c_c23_g7.checked = (localStorage.c_c23_g7 == "true");
    c_c23_t1.checked = (localStorage.c_c23_t1 == "true");
    c_c23_t2.checked = (localStorage.c_c23_t2 == "true");
    
    c_c24_g1.checked = (localStorage.c_c24_g1 == "true");
    c_c24_g2.checked = (localStorage.c_c24_g2 == "true");
    c_c24_g3.checked = (localStorage.c_c24_g3 == "true");
    c_c24_g4.checked = (localStorage.c_c24_g4 == "true");
    c_c24_g5.checked = (localStorage.c_c24_g5 == "true");
    c_c24_g6.checked = (localStorage.c_c24_g6 == "true");
    c_c24_g7.checked = (localStorage.c_c24_g7 == "true");
    c_c24_t1.checked = (localStorage.c_c24_t1 == "true");
    c_c24_t2.checked = (localStorage.c_c24_t2 == "true");
    
    c_c25_g1.checked = (localStorage.c_c25_g1 == "true");
    c_c25_g2.checked = (localStorage.c_c25_g2 == "true");
    c_c25_g3.checked = (localStorage.c_c25_g3 == "true");
    c_c25_g4.checked = (localStorage.c_c25_g4 == "true");
    c_c25_g5.checked = (localStorage.c_c25_g5 == "true");
    c_c25_g6.checked = (localStorage.c_c25_g6 == "true");
    c_c25_g7.checked = (localStorage.c_c25_g7 == "true");
    c_c25_t1.checked = (localStorage.c_c25_t1 == "true");
    c_c25_t2.checked = (localStorage.c_c25_t2 == "true");
    
    c_c26_g1.checked = (localStorage.c_c26_g1 == "true");
    c_c26_g2.checked = (localStorage.c_c26_g2 == "true");
    c_c26_g3.checked = (localStorage.c_c26_g3 == "true");
    c_c26_g4.checked = (localStorage.c_c26_g4 == "true");
    c_c26_g5.checked = (localStorage.c_c26_g5 == "true");
    c_c26_g6.checked = (localStorage.c_c26_g6 == "true");
    c_c26_g7.checked = (localStorage.c_c26_g7 == "true");
    c_c26_t1.checked = (localStorage.c_c26_t1 == "true");
    c_c26_t2.checked = (localStorage.c_c26_t2 == "true");
    
    c_c27_g1.checked = (localStorage.c_c27_g1 == "true");
    c_c27_g2.checked = (localStorage.c_c27_g2 == "true");
    c_c27_g3.checked = (localStorage.c_c27_g3 == "true");
    c_c27_g4.checked = (localStorage.c_c27_g4 == "true");
    c_c27_g5.checked = (localStorage.c_c27_g5 == "true");
    c_c27_g6.checked = (localStorage.c_c27_g6 == "true");
    c_c27_g7.checked = (localStorage.c_c27_g7 == "true");
    c_c27_t1.checked = (localStorage.c_c27_t1 == "true");
    c_c27_t2.checked = (localStorage.c_c27_t2 == "true");
    
    c_c28_g1.checked = (localStorage.c_c28_g1 == "true");
    c_c28_g2.checked = (localStorage.c_c28_g2 == "true");
    c_c28_g3.checked = (localStorage.c_c28_g3 == "true");
    c_c28_g4.checked = (localStorage.c_c28_g4 == "true");
    c_c28_g5.checked = (localStorage.c_c28_g5 == "true");
    c_c28_g6.checked = (localStorage.c_c28_g6 == "true");
    c_c28_g7.checked = (localStorage.c_c28_g7 == "true");
    c_c28_t1.checked = (localStorage.c_c28_t1 == "true");
    c_c28_t2.checked = (localStorage.c_c28_t2 == "true");
    
    c_c29_g1.checked = (localStorage.c_c29_g1 == "true");
    c_c29_g2.checked = (localStorage.c_c29_g2 == "true");
    c_c29_g3.checked = (localStorage.c_c29_g3 == "true");
    c_c29_g4.checked = (localStorage.c_c29_g4 == "true");
    c_c29_g5.checked = (localStorage.c_c29_g5 == "true");
    c_c29_g6.checked = (localStorage.c_c29_g6 == "true");
    c_c29_g7.checked = (localStorage.c_c29_g7 == "true");
    c_c29_t1.checked = (localStorage.c_c29_t1 == "true");
    c_c29_t2.checked = (localStorage.c_c29_t2 == "true");
    
    c_c30_g1.checked = (localStorage.c_c30_g1 == "true");
    c_c30_g2.checked = (localStorage.c_c30_g2 == "true");
    c_c30_g3.checked = (localStorage.c_c30_g3 == "true");
    c_c30_g4.checked = (localStorage.c_c30_g4 == "true");
    c_c30_g5.checked = (localStorage.c_c30_g5 == "true");
    c_c30_g6.checked = (localStorage.c_c30_g6 == "true");
    c_c30_g7.checked = (localStorage.c_c30_g7 == "true");
    c_c30_t1.checked = (localStorage.c_c30_t1 == "true");
    c_c30_t2.checked = (localStorage.c_c30_t2 == "true");
    
    c_c31_g1.checked = (localStorage.c_c31_g1 == "true");
    c_c31_g2.checked = (localStorage.c_c31_g2 == "true");
    c_c31_g3.checked = (localStorage.c_c31_g3 == "true");
    c_c31_g4.checked = (localStorage.c_c31_g4 == "true");
    c_c31_g5.checked = (localStorage.c_c31_g5 == "true");
    c_c31_g6.checked = (localStorage.c_c31_g6 == "true");
    c_c31_g7.checked = (localStorage.c_c31_g7 == "true");
    c_c31_t1.checked = (localStorage.c_c31_t1 == "true");
    c_c31_t2.checked = (localStorage.c_c31_t2 == "true");
    
    c_c32_g1.checked = (localStorage.c_c32_g1 == "true");
    c_c32_g2.checked = (localStorage.c_c32_g2 == "true");
    c_c32_g3.checked = (localStorage.c_c32_g3 == "true");
    c_c32_g4.checked = (localStorage.c_c32_g4 == "true");
    c_c32_g5.checked = (localStorage.c_c32_g5 == "true");
    c_c32_g6.checked = (localStorage.c_c32_g6 == "true");
    c_c32_g7.checked = (localStorage.c_c32_g7 == "true");
    c_c32_t1.checked = (localStorage.c_c32_t1 == "true");
    c_c32_t2.checked = (localStorage.c_c32_t2 == "true");
    
    c_c33_g1.checked = (localStorage.c_c33_g1 == "true");
    c_c33_g2.checked = (localStorage.c_c33_g2 == "true");
    c_c33_g3.checked = (localStorage.c_c33_g3 == "true");
    c_c33_g4.checked = (localStorage.c_c33_g4 == "true");
    c_c33_g5.checked = (localStorage.c_c33_g5 == "true");
    c_c33_g6.checked = (localStorage.c_c33_g6 == "true");
    c_c33_g7.checked = (localStorage.c_c33_g7 == "true");
    c_c33_t1.checked = (localStorage.c_c33_t1 == "true");
    c_c33_t2.checked = (localStorage.c_c33_t2 == "true");
    
    c_c34_g1.checked = (localStorage.c_c34_g1 == "true");
    c_c34_g2.checked = (localStorage.c_c34_g2 == "true");
    c_c34_g3.checked = (localStorage.c_c34_g3 == "true");
    c_c34_g4.checked = (localStorage.c_c34_g4 == "true");
    c_c34_g5.checked = (localStorage.c_c34_g5 == "true");
    c_c34_g6.checked = (localStorage.c_c34_g6 == "true");
    c_c34_g7.checked = (localStorage.c_c34_g7 == "true");
    c_c34_t1.checked = (localStorage.c_c34_t1 == "true");
    c_c34_t2.checked = (localStorage.c_c34_t2 == "true");

    completionCheck.checked = (localStorage.completionCheck == "true");

    if (localStorage.completionCheck == "true" && localStorage.numberPlayers == "1") {
        markAsCompleteDiv.style.display = "block";
    }

}

// set defaults if no saved settings exist
if (localStorage.length == 0) {
    wLabelArray.forEach(function(elem) {
        elem.style.display = "none";
    });
    weightArray.forEach(function(elem) {
        elem.style.display = "none";
    });
    gWLabelArray.forEach(function(elem) {
        elem.style.display = "none";
    });
    gWeightArray.forEach(function(elem) {
        elem.style.display = "none";
    });
    customCheck.checked = false;
    customChars.style.display = "none";
    customInputArray.forEach(function(elem) {
        elem.disabled = true;
    });
    playerInfoDuo.style.opacity = "0";
    playerInfoDuo.style.pointerEvents = "none";
    playerInfoTrio.style.opacity = "0";
    playerInfoTrio.style.pointerEvents = "none";
    playerInfoQuad.style.opacity = "0";
    playerInfoQuad.style.pointerEvents = "none";
// if an older version of saved settings are found, add required items then load
} else if (localStorage.version == undefined && localStorage.length != 0) {
    localStorage.setItem("a", "If you want to edit this, that's fine, but don't touch the 'version' entry or things will break");
    localStorage.setItem("version", "6");
    localStorage.setItem("customVisible", "false");
    localStorage.setItem("numberPlayers", "1");
    loadStorage();
// if everything is as expected, load settings
} else if (localStorage.version == "6") {
    loadStorage();
}

// get exact X size of img_page
var spriteSizeX = parseFloat((img_page.getBoundingClientRect().width / img_page.naturalWidth).toPrecision(5));

// update the sizes of all images to make sure that they are consistent with each other
function updateSpriteSize() {
    spriteSizeX = parseFloat((img_page.getBoundingClientRect().width / img_page.naturalWidth).toPrecision(5));
    img_charSolo.style.width = img_charSolo.naturalWidth * spriteSizeX + "px";
    img_nameSolo.style.width = img_nameSolo.naturalWidth * spriteSizeX + "px";
    img_charDuo1.style.width = img_charDuo1.naturalWidth * spriteSizeX + "px";
    img_nameDuo1.style.width = img_nameDuo1.naturalWidth * spriteSizeX + "px";
    img_charDuo2.style.width = img_charDuo2.naturalWidth * spriteSizeX + "px";
    img_nameDuo2.style.width = img_nameDuo2.naturalWidth * spriteSizeX + "px";
    img_charTrio1.style.width = img_charTrio1.naturalWidth * spriteSizeX + "px";
    img_nameTrio1.style.width = img_nameTrio1.naturalWidth * spriteSizeX + "px";
    img_charTrio2.style.width = img_charTrio2.naturalWidth * spriteSizeX + "px";
    img_nameTrio2.style.width = img_nameTrio2.naturalWidth * spriteSizeX + "px";
    img_charTrio3.style.width = img_charTrio3.naturalWidth * spriteSizeX + "px";
    img_nameTrio3.style.width = img_nameTrio3.naturalWidth * spriteSizeX + "px";
    img_charQuad1.style.width = img_charQuad1.naturalWidth * spriteSizeX + "px";
    img_charQuad2.style.width = img_charQuad2.naturalWidth * spriteSizeX + "px";
    img_charQuad3.style.width = img_charQuad3.naturalWidth * spriteSizeX + "px";
    img_charQuad4.style.width = img_charQuad4.naturalWidth * spriteSizeX + "px";
    img_obj1.style.width = img_obj1.naturalWidth * spriteSizeX + "px";
    img_obj2.style.width = img_obj2.naturalWidth * spriteSizeX + "px";
    img_randomize.style.width = img_randomize.naturalWidth * spriteSizeX + "px";
    img_options.style.width = img_options.naturalWidth * spriteSizeX + "px";
    for (i = 0; i < challengeContainer.children.length; i++) {
        challengeContainer.children[i].style.width = challengeContainer.children[i].naturalWidth * spriteSizeX + "px";
    }

    img_simplePlayAs.style.width = img_simplePlayAs.naturalWidth * spriteSizeX + "px";
    img_simpleCharSolo.style.width = img_simpleCharSolo.naturalWidth * spriteSizeX + "px";
    img_simpleCharSolo.style.margin = "0 " + img_simpleCharSolo.getBoundingClientRect().width * 0.2 + "px";
    img_simpleCharSolo.style.marginBottom = img_simpleCharSolo.getBoundingClientRect().height * -0.25 + "px";
    img_simpleNameSolo.style.width = img_simpleNameSolo.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti1.style.width = img_simpleCharMulti1.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti2.style.width = img_simpleCharMulti2.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti3.style.width = img_simpleCharMulti3.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti4.style.width = img_simpleCharMulti4.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti1.style.marginBottom = img_simpleCharMulti1.getBoundingClientRect().height * -0.25 + "px";
    img_simpleCharMulti2.style.marginBottom = img_simpleCharMulti2.getBoundingClientRect().height * -0.25 + "px";
    img_simpleCharMulti3.style.marginBottom = img_simpleCharMulti3.getBoundingClientRect().height * -0.25 + "px";
    img_simpleCharMulti4.style.marginBottom = img_simpleCharMulti4.getBoundingClientRect().height * -0.25 + "px";
    img_simpleDefeat.style.width = img_simpleDefeat.naturalWidth * spriteSizeX + "px";
    img_simpleGoal1.style.width = img_simpleGoal1.naturalWidth * spriteSizeX + "px";
    img_simplePlus.style.width = img_simplePlus.naturalWidth * spriteSizeX + "px";
    img_simplePlus.style.margin = "0 " + img_simplePlus.getBoundingClientRect().width * 0.2 + "px";
    img_simpleGoal1.style.marginLeft = img_simplePlus.getBoundingClientRect().width * 0.2 + "px";
    img_simpleGoal2.style.width = img_simpleGoal2.naturalWidth * spriteSizeX + "px";
    img_simpleChallenges.style.width = img_simpleChallenges.naturalWidth * spriteSizeX + "px";

    img_simpleCharSoloB.style.width = img_simpleCharSoloB.naturalWidth * spriteSizeX + "px";
    img_simpleCharSoloB.style.margin = "0 " + img_simpleCharSoloB.getBoundingClientRect().width * 0.2 + "px";
    img_simpleCharSoloB.style.marginBottom = img_simpleCharSoloB.getBoundingClientRect().height * -0.25 + "px";
    img_simpleNameSoloB.style.width = img_simpleNameSoloB.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti1B.style.width = img_simpleCharMulti1B.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti2B.style.width = img_simpleCharMulti2B.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti3B.style.width = img_simpleCharMulti3B.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti4B.style.width = img_simpleCharMulti4B.naturalWidth * spriteSizeX + "px";
    img_simpleCharMulti1B.style.marginBottom = img_simpleCharMulti1B.getBoundingClientRect().height * -0.25 + "px";
    img_simpleCharMulti2B.style.marginBottom = img_simpleCharMulti2B.getBoundingClientRect().height * -0.25 + "px";
    img_simpleCharMulti3B.style.marginBottom = img_simpleCharMulti3B.getBoundingClientRect().height * -0.25 + "px";
    img_simpleCharMulti4B.style.marginBottom = img_simpleCharMulti4B.getBoundingClientRect().height * -0.25 + "px";
    img_simpleGoal1B.style.width = img_simpleGoal1B.naturalWidth * spriteSizeX + "px";
    img_simplePlusB.style.width = img_simplePlusB.naturalWidth * spriteSizeX + "px";
    img_simplePlusB.style.margin = "0 " + img_simplePlusB.getBoundingClientRect().width * 0.2 + "px";
    img_simpleGoal1B.style.marginLeft = img_simplePlusB.getBoundingClientRect().width * 0.2 + "px";
    img_simpleGoal2B.style.width = img_simpleGoal2B.naturalWidth * spriteSizeX + "px";
    img_simpleChallengesB.style.width = img_simpleChallengesB.naturalWidth * spriteSizeX + "px";

    for (i = 0; i < simpleChallengeContainer.children.length; i++) {
        simpleChallengeContainer.children[i].style.width = simpleChallengeContainer.children[i].naturalWidth * spriteSizeX + "px";
    }

    for (i = 0; i < simpleChallengeContainerB.children.length; i++) {
        simpleChallengeContainerB.children[i].style.width = simpleChallengeContainerB.children[i].naturalWidth * spriteSizeX + "px";
    }
}

// update the page used as the background of the options menu
function updateOptionsSize() {
    if (window.innerWidth > 700) {
        options2.style.width = img_page2.getBoundingClientRect().width + "px";
        options2.style.height = img_page2.getBoundingClientRect().height + "px";
    } else {
        options2.style.width = "90vw";
        options2.style.height = "90vh";
    }
}

// do these things when the page first finishes loading
window.addEventListener("load", function(e) {
    updateSpriteSize();
    updateOptionsSize();
    preload.remove();
});

// handles the different appearances of the randomizer after clicking the buttons on the left
let chromaButtonArray = document.querySelectorAll(".chromaButton");
chromaButtonArray.forEach(function(elem) {
    elem.addEventListener("change", function(e) {
        if (chromaStyle0.checked) { // Full
            display.style.opacity = 1;
            display.style.pointerOptions = "initial";
            simpleDisplay.style.opacity = 0;
            simpleDisplay.style.pointerOptions = "none";
            simpleDisplayB.style.opacity = 0;
            simpleDisplayB.style.pointerOptions = "none";
            result.style.opacity = 0;
            result.style.pointerOptions = "none";
        } else if (chromaStyle1.checked) { // Simple A
            display.style.opacity = 0;
            display.style.pointerOptions = "none";
            simpleDisplay.style.opacity = 1;
            simpleDisplay.style.pointerOptions = "initial";
            simpleDisplayB.style.opacity = 0;
            simpleDisplayB.style.pointerOptions = "none";
            result.style.opacity = 0;
            result.style.pointerOptions = "none";
        } else if (chromaStyle2.checked) { // Plain text
            display.style.opacity = 0;
            display.style.pointerOptions = "none";
            simpleDisplay.style.opacity = 0;
            simpleDisplay.style.pointerOptions = "none";
            simpleDisplayB.style.opacity = 0;
            simpleDisplayB.style.pointerOptions = "none";
            result.style.opacity = 1;
            result.style.pointerOptions = "initial";
        } else if (chromaStyle3.checked) { // Simple B
            display.style.opacity = 0;
            display.style.pointerOptions = "none";
            simpleDisplay.style.opacity = 0;
            simpleDisplay.style.pointerOptions = "none";
            simpleDisplayB.style.opacity = 1;
            simpleDisplayB.style.pointerOptions = "initial";
            result.style.opacity = 0;
            result.style.pointerOptions = "none";
        }

        if (chromaAlignLeft.checked) {
            simpleDisplay.style.justifyItems = "left";
            simpleChallenges.style.justifyItems = "left";
            simpleDisplayB.style.justifyItems = "left";
            simpleChallengesB.style.justifyItems = "left";
            result.style.textAlign = "left";
        } else if (chromaAlignCenter.checked) {
            simpleDisplay.style.justifyItems = "center";
            simpleChallenges.style.justifyItems = "center";
            simpleDisplayB.style.justifyItems = "center";
            simpleChallengesB.style.justifyItems = "center";
            result.style.textAlign = "center";
        } else if (chromaAlignRight.checked) {
            simpleDisplay.style.justifyItems = "right";
            simpleChallenges.style.justifyItems = "right";
            simpleDisplayB.style.justifyItems = "right";
            simpleChallengesB.style.justifyItems = "right";
            result.style.textAlign = "right";
        }
    });
});

// changes text color of "Plain text" option
chromaTextApply.addEventListener("click", function(e) {
    result.style.color = "#" + chromaText.value;
});

// changes alignment of "Simple A", "Simple B", "Plain text" modes
chromaBGApply.addEventListener("click", function(e) {
    document.body.style.backgroundColor = "#" + chromaBG.value;
});

// do these things any time the window is resized
window.addEventListener("resize", function(e) {
    updateSpriteSize();
    updateOptionsSize();
});