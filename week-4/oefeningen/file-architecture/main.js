const { generateData } = require('./src/data');
const { processData, calculateStatistics, complexOperation } = require('./src/processing');
const { displayExtendedDataReport, displayImportance, displayComplexity } = require('./src/logging');

const data = generateData(); 
const processedData = processData(data);
displayExtendedDataReport(processedData);

//Zonder Destructuring
const count = calculateStatistics(processedData);
displayImportance(count.highImportanceCount, count.lowImportanceCount, processedData);

//Met Destructuring
const { highComplexityCount, lowComplexityCount } = complexOperation(processedData);
displayComplexity(highComplexityCount, lowComplexityCount, processedData);