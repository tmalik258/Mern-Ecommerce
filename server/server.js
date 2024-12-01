import express, { json } from "express";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

connect("mongodb+srv://tmalik:jn1lJlSOsKrXMS65@cluster0.dg89m.mongodb.net/")
	.then(() => console.log("MongoDB connected."))
	.catch((error) => console.error(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
	cors({
		origin: "http://localhost:5173/",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: [
			"Content-Type",
			"Authorization",
			"Cache-control",
			"Expires",
			"Pragma",
		],
		credentials: true,
	})
);

app.use(cookieParser());
app.use(json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
