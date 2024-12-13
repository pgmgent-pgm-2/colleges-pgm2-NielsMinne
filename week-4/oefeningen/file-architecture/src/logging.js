function displayExtendedDataReport(data) {
  console.log("Even More Extended Data Processing Report:");
  console.log("===========================================");
  data.forEach((item) => {
    console.log(
      `ID: ${item.id}, Value: ${item.value}, Category: ${item.category}, Special Result: ${item.specialResult}, Advanced Result: ${item.advancedResult}`
    );
  });
}

function displayImportance(highImportanceCount, lowImportanceCount, data) {
  console.log("\nEven More Additional Confusing Statistics:");
  console.log("===========================================");
  console.log(`High Importance Count: ${highImportanceCount}`);
  console.log(`Low Importance Count: ${lowImportanceCount}`);
  console.log(
    `High Importance Percentage: ${(highImportanceCount / data.length) * 100}%`
  );
  console.log(
    `Low Importance Percentage: ${(lowImportanceCount / data.length) * 100}%`
  );
}

function displayComplexity(highComplexityCount, lowComplexityCount, data) {
    console.log("\nAdvanced Complexity Summary:");
console.log("===========================");
console.log(`High Complexity Count: ${highComplexityCount}`);
console.log(`Low Complexity Count: ${lowComplexityCount}`);
console.log(
  `High Complexity Percentage: ${(highComplexityCount / data.length) * 100}%`
);
console.log(
  `Low Complexity Percentage: ${(lowComplexityCount / data.length) * 100}%`
);
}

module.exports = {
    displayExtendedDataReport,
    displayImportance,
    displayComplexity
};
