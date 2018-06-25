var water, relay = 'low';
var time = 0;
var x = 0;
var value = ['警戒', '注意', '安全'];
var word = ['現在地下道積水嚴重，無法行駛，請改道', '現在地下道有些許積水，請小心慢行', '現在地下道無積水，可安心行駛'];

setup();

function test() {
    if (x == 0) {
        cpf.request('["digitalWrite", 4 , HIGH]');
        x = 1;
    }
    else {
        cpf.request('["digitalWrite", 4 , LOW]');
        x = 0;
    }
} setTimeout(test, 2000);
test();

//cpf.request('["grove_rgblcd_clear"]');

/*function loop() {
    //water = cpf.get("d6");   //  WaterSensor
    relay = cpf.get("d4");   //  取得繼電器模組pin

    console.log(relay);


    setTimeout(() => {
        cpf.request('["digitalWrite", 4 , HIGH]');
    }, 1500);

    setTimeout(() => {
        cpf.request('["digitalWrite", 4 ,LOW]');
    }, 1500);

    /*if (cpf) {
        if (water == 0 && time > 5) {  //  紅燈   WaterSensor == 0 有水
            console.log(time);*/

/*if (x != 1) {          //  LCD板的變數
    cpf.request('["grove_rgblcd_clear"]');
}
cpf.request('["digitalWrite", 4 , HIGH]');*/
//cpf.set('d4', relay);   //  繼電器模組
//console.log('After Relay');

/*relay = 'high';
console.log('Relay = high');
cpf.setPinMode('["setPinMode","digital",4,"OUTPUT","high"]');
console.log('Open Relay');*/

/* cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
 cpf.request('["grove_rgblcd_print", 4, 1,"NO ENTRY."]');
 cpf.request('["grove_rgblcd_set_rgb", 255, 160, 122]');
 cpf.request('["grove_setColorRGB", 0, 255, 0, 0]');*/

// if (relay == 0)  //  繼電器模組==0(關)  繼電器模組==1(開)
// {
//     relay = 1;
//     console.log('Relay = 1');
//     cpf.request('["setPinMode",1]');
//     console.log('Open Relay');
//     // cpf.set('4 relay', 'd4', 1);;
// }

/*if (((time - 5) % 3) == 1) {
    cpf.SetSpeech("On", "cmn-Hant-TW", "現在地下道無法通行請駕駛改道", 0.4, 0.7);
}
time += 1;
x = 1;
}
else if (water == 0 && time <= 5) {   //  黃燈
if (x != 2) {
    cpf.request('["grove_rgblcd_clear"]');
}*/
/* cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
 cpf.request('["grove_rgblcd_print", 0, 1,"Drive carefully."]');
 cpf.request('["grove_rgblcd_set_rgb", 238, 238, 0]');
 cpf.request('["grove_setColorRGB", 0, 255, 255, 0]');
 time += 1;
 x = 2;
}*/
/*else if (water == 1) {    //  綠燈    WaterSensor == 1 沒水
    if (x != 3) {
        cpf.request('["grove_rgblcd_clear"]');
    }

    cpf.request('["digitalWrite", 4 , LOW]');*/
/*cpf.set('d4', relay);   //  繼電器模組
console.log('After Relay');

relay = 'low';
console.log('Relay = low')
// cpf.setPinMode('["setPinMode", "digital", 4, "OUTPUT"]');
cpf.setPinMode('["setPinMode","digital",4,"OUTPUT","low"]');
console.log('Off Relay');*/
// if (relay == 1)  //  繼電器模組==0(關)  繼電器模組==1(開)
// {
//     relay = 0;
//     console.log('Relay = 0');
//     cpf.request('["setPinMode",0]');
//     console.log('Off Relay');
//     // cpf.set('4 relay', 'd4', 0);
// }

/*cpf.request('["grove_rgblcd_print", 2, 0,"Underground"]');
cpf.request('["grove_rgblcd_print", 2, 1,"Road safely."]');
cpf.request('["grove_rgblcd_set_rgb", 124, 252, 0]');
cpf.request('["grove_setColorRGB", 0, 0, 255, 0]');
time = 0;
x = 3;
}*/
/*console.log(water);

document.getElementById("lightValue").innerHTML = value[x - 1];
document.getElementById("word").innerHTML = word[x - 1];

} setTimeout(loop, 1000);
loop();* /*/

function setup() {
    if (cpf) {
        cpf.setPinMode('["resetPin"], ["grove_rgblcd_begin", 16, 2], ["grove_newChainableLED",7, 8, 1], ["setPinMode", "digital", 4, "OUTPUT"], ["setPinMode", "digital", 6, "INPUT"]');
    }
}