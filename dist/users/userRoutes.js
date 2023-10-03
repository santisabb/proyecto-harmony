import { Router } from "express";
import { add, findAll, findOne, remove, sanitizeUserInput, update } from "./userController.js";
export const userRouter = Router();
userRouter.get("/", findAll);
userRouter.get('/:userId', findOne);
userRouter.post('/', sanitizeUserInput, add);
userRouter.put('/:userId', sanitizeUserInput, update);
userRouter.patch('/:userId', sanitizeUserInput, update);
userRouter.delete('/:userId', remove);
//# sourceMappingURL=userRoutes.js.map