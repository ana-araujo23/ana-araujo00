import multer from 'multer';
import path from "path";

let file_name = ''

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve("uploads"));
    },
    filename: (req, file, cb) => {
        const time = new Date().getTime();
        file_name = time + '-' + file.originalname
        cb(null,  time + '-' + file.originalname);
    },
});