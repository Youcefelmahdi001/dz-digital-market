// Structure for Digital Products in DigiDz
const productSchema = {
  title: String,       // اسم المنتج
  price: Number,       // السعر بالدينار DZD
  sellerId: String,    // معرف البائع
  fileUrl: String,     // رابط التحميل المحمي
  category: String,    // التصنيف (تصاميم، كتب، كود...)
  isApproved: Boolean  // موافقة الإدارة قبل النشر
};

module.exports = productSchema;
