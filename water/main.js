var water;
var time = 0;
var x = 0;

setup();

cpf.request('["grove_rgblcd_clear"]');

function loop() {
    water = cpf.get("d6");

    if (cpf) {
        if (water == 0 && time > 5) {
            if (x != 1) {
                cpf.request('["grove_rgblcd_clear"]');
            }
            //cpf.request('["grove_rgblcd_print", 0, 1,"Danger" ]');
            cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
            cpf.request('["grove_rgblcd_print", 4, 1,"NO ENTRY."]');
            cpf.request('["grove_rgblcd_set_rgb", 255, 160, 122]');
            cpf.request('["grove_setColorRGB", 0, 255, 0, 0]');
            if ((time - 5) % 3 == 1) {
                cpf.SetSpeech("On", "cmn-Hant-TW", "現在地下道無法通行", 0.4, 1);
                cpf.SetSpeech("On", "cmn-Hant-TW", "請駕駛改道", 0.4, 0.7);
                time += 1;
            }
            x = 1;
        }
        else if (water == 0 && time <= 5) {
            if (x != 2) {
                cpf.request('["grove_rgblcd_clear"]');
            }
            //cpf.request('["grove_rgblcd_print", 0, 1,"Caveat" ]');
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
            }
            //cpf.request('["grove_rgblcd_print", 0, 1,"Safe" ]');
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
        cpf.setPinMode('["resetPin"], ["grove_rgblcd_begin", 16, 2], ["grove_newChainableLED",7, 8, 1], ["setPinMode", "digital", 6, "INPUT"]');
    }
}