//৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে
//সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা
//শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়।
//তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে।
//সেগুলা রিটার্ন করে দিবে।

// declear a function named getUntilNeg
//// decrear an array named newArray;
//// traverse the array;
////// check if any element of the array is neg and immediately return;
////// otherwise push the element inside the newArray
//// return newArray
// call the func

const testArray = [20, 0, 50, -3, 40, 60];

function getUntilNeg(testArray) {
  const newArry = [];
  for (const e of testArray) {
    if (e < 0) break;
    newArry.push(e)
  }

  return newArry;
}

console.log(getUntilNeg(testArray))
