import { pool } from "../db.js";

export const home = (req, res) => res.render('home', { title: 'Home'});