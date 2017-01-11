var app = getApp();
var ak = 'btsVVWf0TM1zUBEbzFz6QqWF';
Page({
	onLoad:function(){
		wx.getLocation({
			type: 'gcj02',
			success:function(res){
				var latitude = res.latitude;
				var longitude = res.longitude;
				console.log(res);
			},
			fail:function(err){
				console.log(err);
			}
		});
	}
});