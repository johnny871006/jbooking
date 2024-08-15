import express from "express";
import Hotel from "../models/Hotel.js";
// import {
//   createHotel,
//   deleteHotel,
//   getHotel,
//   getHotels,
//   updatedHotel,
// } from "../routesController/hotels.js";

const router = express.Router();

// 可再分離，將此頁程式碼改成以下
//創建第一筆資料
// router.post("/",createHotel)
//抓取所有資料
// router.get("/find/",getHotels)
//抓取第一筆資料
// router.get("/find/:id",getHotel)
//將第一筆資料做修改
// router.put("/:id",updatedHotel)
//刪除資料
// router.delete("/:id",deleteHotel)
// 可再分離，將此頁程式碼改成以上

router.get("/find", async (req, res) => {
  try {
    let getHotels = await Hotel.find({}).exec();
    return res.status(200).send(getHotels);
  } catch (e) {
    // return res.status(500).send(e); 使用index.js統一用next處理
    next(e);
  }
});

router.get("/find/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    let getHotel = await Hotel.findById({ _id }).exec();
    return res.status(200).send(getHotel);
  } catch (e) {
    // return res.status(500).send(e); 使用index.js統一用next處理
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    let saveHotel = await newHotel.save();
    return res.status(200).send({ message: "Hotel新增成功!", saveHotel });
  } catch (e) {
    // return res.status(500).send(e); 使用index.js統一用next處理;

    next(e);
  }
});

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    let updateHotel = await Hotel.findOneAndUpdate(
      { _id },
      //或不用$set 直接req.body也行
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).send({ message: "Hotel已被更新!", updateHotel });
  } catch (e) {
    // return res.status(500).send(e); 使用index.js統一用next處理
    next(e);
  }
});

router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    await Hotel.findByIdAndDelete({ _id });
    return res.status(200).send("此Hotel刪除成功!");
  } catch (e) {
    // return res.status(500).send(e); 使用index.js統一用next處理
    next(e);
  }
});

export default router;
