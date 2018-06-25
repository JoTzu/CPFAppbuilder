var data_url = 'https://opendata.epa.gov.tw/ws/Data/RainTenMin/?$format=json&callback=?';  // 加上 &callback=? 是 JSONP 格式
var rain;
var a = document.getElementById("county").value;
var b = document.getElementById("township").value;
var c = document.getElementById("now").value;
var d = document.getElementById("publishTime").value;

console.log('open');

$.ajax({
    url: data_url,
    type: 'GET',
    dataType: 'jsonp',
    success: function (data) {
        rain = data;
        opendata();
    },
    error: function (error) {
        console.log('Error  ' + error);
    }
});

function opendata() {
    console.log("opendata");

    for (var i = 0; i < rain.length; i++) {
        var county = rain[i].County;
        var township = rain[i].Township;

        if ((county == '臺中市' || county == '台中市') && township == '北區') {
            var now = rain[i].Now;
            var publishTime = rain[i].PublishTime;
            break;
        }
    }
    console.log(county);
    console.log(township);
    console.log(now);
    console.log(publishTime);

    a = county;
    b = township;
    c = now;
    d = publishTime;

    document.getElementById('county').innerHTML = a;
    document.getElementById('township').innerHTML = b;
    document.getElementById('now').innerHTML = c;
    document.getElementById('publishTime').innerHTML = d;
}
