var data_url = 'https://opendata.epa.gov.tw/ws/Data/RainTenMin/?$format=json&callback=?';  //// 加上 &callback=? 是 JSONP 格式
var rain;

$.ajax({
    url: data_url,
    type: 'GET',
    dataType: 'jsonp',
    success: function (data) {
        rain = data;
        opendata();
    }
});

function opendata() {

    for (var i = 0; i < rain.length; i++) {
        var county = rain[i].County;
        var township = rain[i].Township;

        if ((county == '臺中市' || county == '台中市') && township == '北區') {
            var now = rain[i].Now;
            var publishTime = rain[i].PublishTime;
            break;
        }
    }
    document.getElementById("county").innerHTML = county;
    document.getElementById("township").innerHTML = township;
    document.getElementById("now").innerHTML = now;
    document.getElementById("publishTime").innerHTML = publishTime;

    console.log(county);
    console.log(township);
    console.log(now);
    console.log(publishTime);
}
