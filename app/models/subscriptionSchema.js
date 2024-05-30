const mongoose = require("mongoose");

// Define the schema
const mealSchema = new mongoose.Schema({
  day: String,
  meals: [String],
});

// Define the model
const Meal = mongoose.models.Meal || mongoose.model("Meal", mealSchema);

// Define the schema for the monthlyTwoMeal data
const subscriptionSchema = new mongoose.Schema(
  [
    {
      "Week 1": [{ type: { day: String, meals: [String] } }],
      "Week 2": [{ type: { day: String, meals: [String] } }],
      "Week 3": [{ type: { day: String, meals: [String] } }],
      "Week 4": [{ type: { day: String, meals: [String] } }],
      price: String,
      options: String,
      mealplan: String,
    },
  ],
  { timestamps: true }
);

const Subscription =
  mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);

module.exports = {
  Subscription,
  Meal,
};
