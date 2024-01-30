const Picture = require("../models/Picture");

exports.create = async (req, res) => {
  try {
    const { name, customId } = req.body;
    const file = req.file;

    const picture = new Picture({
      _id: customId,
      name,
      src: `uploads/${file.originalname}`,
      
    });

    await picture.save();
    res.json({ picture, msg: "Imagem salva com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar imagem." });
  }
};

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    const formattedPictures = pictures.map((picture) => ({
      ...picture.toObject(),
      src: picture.src.replace(/\\/g, '/'),  // Substitua barras invertidas por barras normais
    }));
    res.json(formattedPictures);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imagens." });
  }
};

exports.findById = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    const formattedPicture = {
      ...picture.toObject(),
      src: picture.src.replace(/\\/g, '/'),
    };

    res.json(formattedPicture);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imagem por ID." });
  }
};

exports.updateById = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    picture.name = name || picture.name;

    await picture.save();
    res.json({ picture, msg: "Imagem atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar imagem por ID." });
  }
};

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    console.log(picture)
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    //fs.unlinkSync(picture.id);

    await picture.deleteOne();

    res.json({ message: "Imagem removida com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir imagem." });
  }
};
