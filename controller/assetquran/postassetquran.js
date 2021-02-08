const express = require('express'); 
const respond = require('../../helpers/response');
const model = require('../../models/index');// GET users listing.

const { validationResult } = require('express-validator')

const postassetquran = async function (req, res, next) {
	const error = validationResult(req);
  if(!error.isEmpty()){
    return respond(res,false,'Data input invalid', error.array(), 400)
  }else{ 

    const { surah, ayat,halaman,juz } = req.body;

    const aset_quran = await model.asset_quran.create({
      surah,
      ayat,
      halaman,
      juz
    });
	  if (aset_quran) {
	  	return respond(res, true, 'Asset quran berhasil ditambahkan!', aset_quran, 201);
	  	// console.log(asset);
	  	// if(asset.length > 0){
	  	// 	const uploadimg = [];
	  	// 	for(let i = 0;i<asset.length;i++){
	  	// 		const id = aset_quran.id; 

			 //    const aset_image = await model.asset_image.create({
			 //      asset_quran_id:id, 
			 //      gambar:asset[i].gambar,
			 //      tipe_gambar:asset[i].tipe_gambar,
			 //      tipe:asset[i].tipe
			 //    });

			 //    uploadimg.push(aset_image); 
	  	// 	}
	  	// 	await Promise.all(uploadimg).then(() => {
	  	// 		return respond(res, true, 'Asset quran dan image berhasil ditambahkan', "sucess", 201);
	  	// 	})

	  	// }

	  }else{
	  	return respond(response, false, 'upload aset quran gagal', [], 404)
	  }
  }
 // try {


 // } catch (err) {
 // 	return respond(res, false, 'internal server error', err, 500);
 // }
}

module.exports = postassetquran;
 