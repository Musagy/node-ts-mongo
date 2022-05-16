import { RequestHandler } from "express";
import Video from "./video";

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound) return res.status(301).send("El video ya existe");

  const newVideo = new Video(req.body);
  const video = await newVideo.save();
  return res.send(video);
};

export const getVideos: RequestHandler = (_, res) => {
  Video.find()
    .then((videos) => res.send(videos))
    .catch((err) => res.send(err));
};

export const getVideo: RequestHandler = (req, res) => {
  Video.findById(req.params.id)
    .then((video) => res.send(video))
    .catch((err) => res.send(err));
};

export const updateVideo: RequestHandler = async (req, res) => {
  const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.send(video);
};

export const deleteVideo: RequestHandler = async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.send("Video eliminado");
};