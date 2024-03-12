const Popsong = require("../models/popsong");
const { cloudinary } = require("../cloudinary");

module.exports.popsongs = {
    index: async (req, res) => {
        const popsongList = await Popsong.find({});
        res.json(popsongList);
    },
    createPopsong: async (req, res) => {
        const popsongData = req.body;
        const file = req.file;
        const newPopsong = new Popsong(popsongData);
        newPopsong.image = { filename: file.originalname, url: file.path, publicId: file.filename };
        await newPopsong.save();
    },
    editPopsong: async (req, res) => {
        const { id } = req.params;
        const updatedData = req.body;
        const file = req.file;
        const updatedPopsong = await Popsong.findByIdAndUpdate(id, updatedData, { runValidators: true, new: true });
        const publicId = updatedPopsong.image.publicId;
        cloudinary.uploader.destroy(publicId);
        updatedPopsong.image = { filename: file.originalname, url: file.path, publicId: file.filename };
        await updatedPopsong.save();
    },
    deletePopsong: async (req, res) => {
        const { id } = req.params;
        const popsong = await Popsong.findById(id);
        const publicId = popsong.image.publicId;
        cloudinary.uploader.destroy(publicId);
        await Popsong.findByIdAndDelete(id);
    },
    renderPopsong: async (req, res) => {
        const { id } = req.params;
        const foundPopSong = await Popsong.findById(id);
        res.json(foundPopSong);
    },
    savePopsong: async (req, res) => {
        const { id } = req.params;
        const popsong = await Popsong.findById(id);
        const reqData = req.body;
        popsong.practice = reqData.practice;
        await popsong.save();
    }
}