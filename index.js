// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(0, 2);

const returnLastTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function selectDifferentDrivers(arrayOfDrivers, cb) {
    return cb(arrayOfDrivers);
}




function createFareMultiplier(multiplier){
    return function (x=multiplier){return multiplier*x;}
}

const fareDoubler = (fare) => createFareMultiplier(fare);

const fareTripler = (fare) => createFareMultiplier(fare);


