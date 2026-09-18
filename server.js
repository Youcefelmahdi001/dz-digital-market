const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// الصفحة الرئيسية للمنصة
app.get('/', (req, res) => {
  res.json({
    message: "مرحباً بك في منصة DigiDz للمنتجات الرقمية",
    status: "Active"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
