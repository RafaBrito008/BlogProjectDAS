import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
    // Check existing user
    const selectQuery = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(selectQuery, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists");

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Create new user
        const insertQuery =
            "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(insertQuery, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("New user created");
        });
    });
};

export const login = (req, res) => { };

export const logout = (req, res) => { };
