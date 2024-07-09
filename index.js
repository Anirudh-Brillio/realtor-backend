const express = require("express");
const mongoose = require("mongoose");
const PropertyModel = require("./Modal/Properties");
const cors = require("cors")
// const properties = require('./Modal/properties.json');
const app = express();
app.use(cors())

// MongoDB connection
mongoose.connect("mongodb+srv://anirudhkulkarni9094:vrOwHdItmyeZfdNV@realtor.lf2joct.mongodb.net/realtor?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

app.use(express.json());

// GET all properties
app.get("/Property", async (req, res) => {
  try {
    const propertyData = await PropertyModel.find({});
    res.status(200).json({
      message: "Data fetched successfully",
      data: propertyData
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching data",
      error: err.message
    });
  }
});

// POST a new property
app.post("/Property", async (req, res) => {
  try {
    const { category, title, price, quantity, location, details } = req.body;
    const newData = await PropertyModel.create({
      category,
      title,
      price,
      quantity,
      location,
      details
    });
    res.status(200).json({
      message: "Data added successfully",
      data: newData
    });
  } catch (err) {
    res.status(500).json({
      message: "Error adding data",
      error: err.message
    });
  }
});

// POST multiple properties from JSON file
// app.post('/addProperties', async (req, res) => {
//   try {
//     await PropertyModel.insertMany(properties);
//     res.status(200).json({ message: 'Properties inserted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error inserting properties', error: err.message });
//   }
// });

// GET unique categories
app.get("/getByUniqueCategory", async (req, res) => {
    try {
      // Fetch all properties
      const properties = await PropertyModel.find({});
  
      // Group properties by category
      const groupedByCategory = properties.reduce((acc, property) => {
        const category = property.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(property);
        return acc;
      }, {});
  
      res.status(200).json({
        message: "Properties fetched and grouped by category successfully",
        data: groupedByCategory
      });
    } catch (err) {
      res.status(500).json({
        message: "Error fetching properties",
        error: err.message
      });
    }
  });
  

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
