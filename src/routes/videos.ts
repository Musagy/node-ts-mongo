import { Router } from "express";
import * as videoServices from "../services/videoServices";

const router = Router();

router.post("/", videoServices.createVideo);
router.get("/", videoServices.getVideos);
router.get("/:id", videoServices.getVideo);
router.put("/:id", videoServices.updateVideo);
router.delete("/:id", videoServices.deleteVideo);

export default router;
