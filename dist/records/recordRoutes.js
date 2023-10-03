import { Router } from "express";
import { add, findAll, findOne, remove, sanitizeRecordInput, update } from "./recordController.js";
export const recordRouter = Router();
recordRouter.get('/', findAll);
recordRouter.post('/', sanitizeRecordInput, add);
recordRouter.get('/:recordId', findOne);
recordRouter.put('/:recordId', sanitizeRecordInput, update);
recordRouter.patch('/:recordId', sanitizeRecordInput, update);
recordRouter.delete('/:recordId', remove);
//# sourceMappingURL=recordRoutes.js.map