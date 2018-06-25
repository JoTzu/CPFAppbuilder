var water, relay;
var time = 0;
var x = 0;
var value1 = "警戒";
var value2 = "注意";
var value3 = "安全";
var word1 = "現在地下道積水嚴重，無法行駛，請改道";
var word2 = "現在地下道有些許積水，請小心慢行";
var word3 = "現在地下道無積水，可安心行駛";

setup();

cpf.request('["grove_rgblcd_clear"]');

function loop() {
    water = cpf.get("d6");
    relay = cpf.get("d2");

    if (cpf) {
        if (water == 0 && time > 5) {
            console.log(time);
            if (x != 1) {
                cpf.request('["grove_rgblcd_clear"]');
                document.getElementById("lightValue").innerHTML = value1;
                document.getElementById("word").innerHTML = word1;
            }
            cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
            cpf.request('["grove_rgblcd_print", 4, 1,"NO ENTRY."]');
            cpf.request('["grove_rgblcd_set_rgb", 255, 160, 122]');
            cpf.request('["grove_setColorRGB", 0, 255, 0, 0]');

            cpf.set("d2", d2);

            if (((time - 5) % 3) == 1) {
                cpf.SetSpeech("On", "cmn-Hant-TW", "現在地下道無法通行請駕駛改道", 0.4, 0.7);
            }
            time += 1;
            x = 1;
        }
        else if (water == 0 && time <= 5) {
            if (x != 2) {
                cpf.request('["grove_rgblcd_clear"]');
                document.getElementById("lightValue").innerHTML = value2;
                document.getElementById("word").innerHTML = word2;
            }
            cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
            cpf.request('["grove_rgblcd_print", 0, 1,"Drive carefully."]');
            cpf.request('["grove_rgblcd_set_rgb", 238, 238, 0]');
            cpf.request('["grove_setColorRGB", 0, 255, 255, 0]');
            time += 1;
            x = 2;
        }
        else if (water == 1) {
            if (x != 3) {
                cpf.request('["grove_rgblcd_clear"]');
                document.getElementById("lightValue").innerHTML = value3;
                document.getElementById("word").innerHTML = word3;
            }
            cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
            cpf.request('["grove_rgblcd_print", 2, 1,"Road safely."]');
            cpf.request('["grove_rgblcd_set_rgb", 124, 252, 0]');
            cpf.request('["grove_setColorRGB", 0, 0, 255, 0]');
            time = 0;
            x = 3;
        }
        console.log(water);

    } setTimeout(loop, 1000);
}
loop();

function setup() {
    if (cpf) {
        cpf.setPinMode('["resetPin"], ["grove_rgblcd_begin", 16, 2], ["grove_newChainableLED",7, 8, 1], ["setPinMode", "digital", 2, "INPUT"], ["setPinMode", "digital", 6, "INPUT"]');
    }
}