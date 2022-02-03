// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

//write a func named paperRequirements with 3 params(numOfCopiesOf1stBook, numOfCopiesOf2ndBook, numOfCopiesOf3rdBook);
//// multiply numOfCopiesOf1stBook with 100 and assign it to a variable;
//// multiply numOfCopiesOf2ndBook with 200 and assign it to a variable;
//// multiply numOfCopiesOf3rdBook with 300 and assign it to a variable;
//// add prev multiplied vars and return it;

function paperRequirements(
  numOfCopiesOf1stBook,
  numOfCopiesOf2ndBook,
  numOfCopiesOf3rdBook
) {
  const totalPagesFor1stBook = numOfCopiesOf1stBook * 100;
  const totalPagesFor2ndBook = numOfCopiesOf2ndBook * 200;
  const totalPagesFor3rdBook = numOfCopiesOf3rdBook * 300;
  return totalPagesFor1stBook + totalPagesFor2ndBook + totalPagesFor3rdBook;
}

const totalPapersRequired = paperRequirements(2, 1, 2);
console.log("Total required: " + totalPapersRequired + " pages");
