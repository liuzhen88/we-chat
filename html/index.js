var app = getApp();
Page({
	data:{
		text:'hello world',
		indicatorDots:false,
		autoplay:true,
		imgUrls: [
	      'http://img.aigegou.com/mobile/special/s2/s2_05360757449421449.jpg',
	      'http://img.aigegou.com/mobile/special/s2/s2_05363465668130163.jpg',
	      'http://img.aigegou.com/mobile/special/s2/s2_05356314769682460.jpg'
	    ],
	    imageWidth:320,
	    imageHeight:160,
	    list:[
	    	{
	    		url:'http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png',
	    		text:'美食'
	    	},
	    	{
	    		url:'http://img.aigegou.com/mobile/category/05169655736122324.png?imageView2/1/w/200/h/200/format/png',
	    		text:"丽人"
	    	},
	    	{
	    		url:'http://img.aigegou.com/mobile/category/05169655639112140.png?imageView2/1/w/200/h/200/format/png',
	    		text:"酒店"
	    	},
	    	{
	    		url:'http://img.aigegou.com/mobile/category/05169666276604348.png?imageView2/1/w/200/h/200/format/png',
	    		text:"结婚"
	    	},
	    	{
	    		url:'http://img.aigegou.com/mobile/category/05169655513261242.png?imageView2/1/w/200/h/200/format/png',
	    		text:"休闲娱乐"
	    	},
	    	{
	    		url:'http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png',
	    		text:"同城配送"
	    	},
	    	{
	    		url:'http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png',
	    		text:"商城"
	    	},
	    	{
	    		url:'http://img.aigegou.com/mobile/category/05169657249774838.png?imageView2/1/w/200/h/200/format/png',
	    		text:"生态"
	    	}
	    ],
	    recommandImageWidth:0,
	    recommandImageHeight:0,
	    recommand:[
	    	{
	    		url:'http://img.aigegou.com/shop/store/goods/28420/2016/04/14/28420_05139570398898190.jpg-recommend',
	    		text:'红烧鱼',
	    		price:'￥20.0'
	    	},
	    	{
	    		url:'http://img.aigegou.com/shop/store/goods/8047/2016/04/05/8047_05131871821743050.jpg-recommend',
	    		text:'羊肉火锅',
	    		price:'￥33.0'
	    	},
	    	{
	    		url:'http://img.aigegou.com/shop/store/goods/28428/2016/04/14/28428_05139581396591840.png-recommend',
	    		text:'番茄牛肉面',
	    		price:'￥12.0'
	    	},
	    	{
	    		url:'http://img.aigegou.com/shop/store/goods/28534/2016/04/15/28534_05140343171846615.jpg-recommend',
	    		text:'富贵蹄膀',
	    		price:'￥30.0'
	    	}
	    ]
	},
	onLoad:function(){
		console.log('onload')
	},
	handleClick:function(){
		this.setData({
			text:'你好'
		})
	},
	countImage:function(e){
		let width = e.detail.width;
		let height = e.detail.height;
		let n = width/height;
		let result = this.tool();
		let imageWidth = result.width;
		let imageHeight = imageWidth/n;
		this.setData({
			imageWidth:imageWidth,
			imageHeight:imageHeight
		})
	},
	tool:function(){
		let result = {};
		wx.getSystemInfo({
			success:function(res){
				result.width = res.windowWidth;
				result.height = res.windowHeight;
			}
		});

		return result;
	},
	countRecommand:function(e){
		let width = e.detail.width;
		let height = e.detail.height;
		let n = width/height;
		let result = this.tool();
		let recommandImageWidth = result.width/2.2;
		let recommandImageHeight = recommandImageWidth/n;
		this.setData({
			recommandImageWidth:recommandImageWidth,
			recommandImageHeight:recommandImageHeight
		})
	}
})