import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

const MovieModel = mongoose.model("Movie", movieSchema);

export const createDoc = async () => {
  try {
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie." }],
    });
    const result = await m1.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export const insertManyDoc = async () => {
  try {
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie." }],
    });
    const m2 = new MovieModel({
      name: "John Wick 4",
      ratings: 4,
      money: 23000,
      genre: ["action"],
      isActive: true,
      comments: [{ value: "John doesn't seem that angry any more:(" }],
    });
    const m3 = new MovieModel({
      name: "Mission Impossible - Dead Reckoning Part One",
      ratings: 4,
      money: 60000,
      genre: ["action", "spy", "crime film", "thriller"],
      isActive: true,
      comments: [{ value: "Ok that was TOM but where is Jeryy." }],
    });
    const m4 = new MovieModel({
      name: "Transformers",
      ratings: 4,
      money: 220000,
      genre: ["action", "adventure", "Science Fiction", "fantasy"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today." }],
    });
    const m5 = new MovieModel({
      name: "The Expendables 4",
      ratings: 4,
      money: 250000,
      genre: ["action", "war", "comedy", "thriller"],
      isActive: true,
      comments: [
        { value: "That was enough fighting and blowing stuff for today." },
      ],
    });
    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export const allDoc = async () => {
  try {
    const result = await MovieModel.find();
    console.clear();
    result.forEach((movie) => {
      console.log(movie.name);
    });
  } catch (e) {
    console.log(e);
  }
};

export const singleDoc = async () => {
  try {
    const result = await MovieModel.findById("6697cf0ebfcf1c771b5235de");
    console.clear();
    console.log(result.name);
    console.log(result.ratings);
  } catch (e) {
    console.log(e);
  }
};

export const docWithField = async () => {
  try {
    const result = await MovieModel.find({
      $and: [{ money: 220000 }, { ratings: 4 }],
    });
    console.clear();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export const updateById = async (id) => {
  try {
    const result = await MovieModel.updateOne({ _id: id }, { ratings: 5 });
    console.clear();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
