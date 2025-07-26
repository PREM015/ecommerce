import mongoose from "mongoose";
import bcrypt from "bcrypt";

// 1️⃣ Create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// 2️⃣ Hash the password before saving to DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    console.log("🔁 Password not modified, skipping hash...");
    return next();
  }

  console.log("🔐 Hashing password before saving...");
  try {
    this.password = await bcrypt.hash(this.password, 10); // saltRounds = 10
    console.log("✅ Password hashed successfully!");
    next();
  } catch (err) {
    console.error("❌ Error hashing password:", err);
    next(err);
  }
});

// 3️⃣ Method to compare entered password with hashed one
userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log("🔍 Checking password match...");
  try {
    const isMatch = await bcrypt.compare(enteredPassword, this.password);
    console.log("✅ Match status:", isMatch);
    return isMatch;
  } catch (err) {
    console.error("❌ Error comparing passwords:", err);
    return false;
  }
};

// 4️⃣ Export model
export default mongoose.model("User", userSchema);
