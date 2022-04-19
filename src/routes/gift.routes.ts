import Router from "express";

const routes = Router();

//all routes

routes.get("/gifsname", (req, res) => { });

//add routes
routes.post("/gifsname", (req, res) => { });

//find routes id-ganr-gif
routes.get("/:id", (req, res) => { });
routes.get("/:name", (req, res) => { });

//delete routes  one and all
routes.delete("/:id", (req, res) => { });
routes.delete("/:name", (req, res) => { });

export default routes;
