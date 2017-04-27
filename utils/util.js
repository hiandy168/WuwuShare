var app = getApp();

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function isLogin(){
  return app.data.isLogin?true:false;
}


    /** 
     * 基于余弦定理求两经纬度距离 
     * @param lon1 第一点的精度 
     * @param lat1 第一点的纬度 
     * @param lon2 第二点的精度 
     * @param lat3 第二点的纬度 
     * @return 返回的距离，单位km 
     * */  
// 经纬度计算距离
function Dist(lon1,lat1,lon2,lat2) {  
        var EARTH_RADIUS = 6378137;//赤道半径(单位m)
        // 转为弧度
        var radLat1 = parseFloat(lat1 * Math.PI / 180);  
        var radLat2 = parseFloat(lat2 * Math.PI / 180); 
  
        var radLon1 = parseFloat(lon1 * Math.PI / 180); 
        var radLon2 = parseFloat(lon2 * Math.PI / 180); 
  
        if (radLat1 < 0)  
            radLat1 = Math.PI / 2 + Math.abs(radLat1);// south  
        if (radLat1 > 0)  
            radLat1 = Math.PI / 2 - Math.abs(radLat1);// north  
        if (radLon1 < 0)  
            radLon1 = Math.PI * 2 - Math.abs(radLon1);// west  
        if (radLat2 < 0)  
            radLat2 = Math.PI / 2 + Math.abs(radLat2);// south  
        if (radLat2 > 0)  
            radLat2 = Math.PI / 2 - Math.abs(radLat2);// north  
        if (radLon2 < 0)  
            radLon2 = Math.PI * 2 - Math.abs(radLon2);// west  

        var x1 = EARTH_RADIUS * Math.cos(radLon1) * Math.sin(radLat1);
        var y1 = EARTH_RADIUS * Math.sin(radLon1) * Math.sin(radLat1);  
        var z1 = EARTH_RADIUS * Math.cos(radLat1);  
  
        var x2 = EARTH_RADIUS * Math.cos(radLon2) * Math.sin(radLat2);  
        var y2 = EARTH_RADIUS * Math.sin(radLon2) * Math.sin(radLat2);  
        var z2 = EARTH_RADIUS * Math.cos(radLat2);  
  
        var d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)+ (z1 - z2) * (z1 - z2));  
        //余弦定理求夹角  
        var theta = Math.acos((EARTH_RADIUS * EARTH_RADIUS + EARTH_RADIUS * EARTH_RADIUS - d * d) / (2 * EARTH_RADIUS * EARTH_RADIUS));  
        var dist = theta * EARTH_RADIUS;  
        return dist;  
    }

module.exports = {
  formatTime: formatTime,
  isLogin:isLogin,
  Dist:Dist
}
