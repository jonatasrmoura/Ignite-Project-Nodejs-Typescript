import { Router } from "express";

const router = Router();

import { categoriesRoutes } from '../routes/categories.routes';
import { specificationsRoutes } from "../routes/specifications.routes";

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
