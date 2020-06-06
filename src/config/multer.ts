import multer from "multer";
import path from "path";
import crypto from "crypto";

const config = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString("hex");

      const filename = `${hash}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};

export default config;
