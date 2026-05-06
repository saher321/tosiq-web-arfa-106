import multer from "multer";
import path from "path";

// export const uploadFile = (path, file) => {
//     const storage = multer.diskStorage({
//       destination: function (req, file, cb) {
//         cb(null, path)
//       },
//       filename: function (req, file, cb) {
//         // Get original file extension
//         const ext = path.extname(file.originalname);
//         const filename = 'lms' + '-' + Date.now() + ext
//         cb(null, filename)
//       }
//     })

//     const upload = multer({ storage: storage })
//     return upload
// }