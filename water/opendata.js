var data_url = 'https://opendata.epa.gov.tw/ws/Data/RainTenMin/?$format=json&callback=?';  // 加上 &callback=? 是 JSONP 格式
var rain;

console.log('open');
console.log(data_url);

$.ajax({
    url: data_url,
    type: 'GET',
    dataType: 'json',
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

    document.getElementById('county').innerHTML = county;
    document.getElementById('township').innerHTML = township;
    document.getElementById('now').innerHTML = now;
    document.getElementById('publishTime').innerHTML = publishTime;
}
