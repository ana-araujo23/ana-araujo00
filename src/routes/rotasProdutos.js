import express from "express";
import { getProdutos, addProduto, updateProduto, deleteProduto} from "../controllers/conexaoProdutos.js";
import { storage } from '../controllers/multerConfig.js'
import multer from "multer"

const router = express.Router();
const upload = multer({ storage: storage });

router.get("/listar", getProdutos);

router.post("/anunciar", addProduto);

router.put("/:id", updateProduto);

router.delete("/:id", deleteProduto);



export default router;