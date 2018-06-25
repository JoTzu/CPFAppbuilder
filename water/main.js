var water, relay;
var time = 0;
var x = 0;
var value = ['警戒', '注意', '安全'];
var word = ['現在地下道積水嚴重，無法行駛，請改道', '現在地下道有些許積水，請小心慢行', '現在地下道無積水，可安心行駛'];

setup();

cpf.request('["grove_rgblcd_clear"]');

function loop() {
    water = cpf.get("d6");   //  WaterSensor
    relay = cpf.get("d4");   //  繼電器模組
    light = document.getElementById("lightValue").value;
    text = document.getElementById("word").value;

    if (cpf) {
        if (water == 0 && time > 5) {  //  紅燈   WaterSensor == 0 有水
            console.log(time);

            if (x != 1) {          //  LCD板的變數
                cpf.request('["grove_rgblcd_clear"]');
            }
            cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
            cpf.request('["grove_rgblcd_print", 4, 1,"NO ENTRY."]');
            cpf.request('["grove_rgblcd_set_rgb", 255, 160, 122]');
            cpf.request('["grove_setColorRGB", 0, 255, 0, 0]');

            ui.set("d4", d4);   //  繼電器模組
            // cpf.set('d4',d4);
            // cpf.repeat(relay);

            if (relay == 0)  //  繼電器模組==0(關)  繼電器模組==1(開)
            {
                // relay = 1;
                cpf.set('4 relay', 'd4', 1);
            }

            if (((time - 5) % 3) == 1) {
                cpf.SetSpeech("On", "cmn-Hant-TW", "現在地下道無法通行請駕駛改道", 0.4, 0.7);
            }
            time += 1;
            x = 1;
        }
        else if (water == 0 && time <= 5) {   //  黃燈
            if (x != 2) {
                cpf.request('["grove_rgblcd_clear"]');
            }
            cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
            cpf.request('["grove_rgblcd_print", 0, 1,"Drive carefully."]');
            cpf.request('["grove_rgblcd_set_rgb", 238, 238, 0]');
            cpf.request('["grove_setColorRGB", 0, 255, 255, 0]');
            time += 1;
            x = 2;
        }
        else if (water == 1) {    //  綠燈    WaterSensor == 0 沒水
            if (x != 3) {
                cpf.request('["grove_rgblcd_clear"]');
            }

            if (relay == 1)  //  繼電器模組==0(關)  繼電器模組==1(開)
            {
                // relay = 0;
                cpf.set('4 relay', 'd4', 0);
            }

            cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
            cpf.request('["grove_rgblcd_print", 2, 1,"Road safely."]');
            cpf.request('["grove_rgblcd_set_rgb", 124, 252, 0]');
            cpf.request('["grove_setColorRGB", 0, 0, 255, 0]');
            time = 0;
            x = 3;
        }
        console.log(water);

        document.getElementById("lightValue").innerHTML = value[x - 1];
        document.getElementById("word").innerHTML = word[x - 1];

    } setTimeout(loop, 1000);
}
loop();

function setup() {
    if (cpf) {
        cpf.setPinMode('["resetPin"], ["grove_rgblcd_begin", 16, 2], ["grove_newChainableLED",7, 8, 1], ["setPinMode", "digital", 4, "INPUT"], ["setPinMode", "digital", 6, "INPUT"]');
    }
}