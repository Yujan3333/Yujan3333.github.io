import { Router} from "express";
import todoRoutes from "./todoRoutes";
// import usersRoutes from "./usersRoutes";

// Creating a main router instance
const router = Router();

// Mounting sub-routers for specific paths
router.use('/todo', todoRoutes);
// router.use('/users', usersRoutes);

// Exporting the main router
export default router;