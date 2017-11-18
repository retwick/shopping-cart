var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/cart');

var product = [
	new Product({
		imagePath:'https://i.ebayimg.com/images/g/PO8AAOSwImRYI8oX/s-l300.jpg',
		title:'Mia malkova',
		description:'Flexible AF',
		price:'20'
	}),

	new Product({
		imagePath:'http://cdn.ebaumsworld.com/mediaFiles/picture/730195/84882999.jpg',
		title:'Allie Haze',
		description:'Gets the heat on.',
		price:'40'
	}),
	
	new Product({
		imagePath:'https://i.pinimg.com/474x/44/e5/15/44e5155ab069ae3c0e547d00770240d8.jpg',
		title:'Dillion Harper',
		description:'awww',
		price:'30'
	}),

	new Product({
		imagePath:'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-foundations-of-a-healthy-kathrain-lovely.jpg',
		title:'Riley Reid',
		description:'You dont need to be giant',
		price:'50'
	})


];

for (var i = product.length - 1; i >= 0; i--) {
	product[i].save(function(err,result){
		if(i === 0){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}