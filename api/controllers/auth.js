import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER NEW USER
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

// LOG IN
export const login = (req, res) => {
    // Check existing user
    const selectQuery = "SELECT * FROM users WHERE username = ?";

    db.query(selectQuery, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("User not found");

        // Chech password
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password,
        );

        if (!isPasswordCorrect)
            return res.status(400).json("Wrong username or password");

        const token = jwt.sign({ id: data[0].id_user }, "jwtkey");
        const { password, ...other } = data[0];

        res.cookie("access_token", token, {
            httpOnly: true,
        })
            .status(200)
            .json(other);
    });
};

export const logout = (req, res) => {};
