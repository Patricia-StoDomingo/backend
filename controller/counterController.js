const Counter = require("../model/counterModel");

// function for retrieving counter number
module.exports.getCounter = async (req, res) => {
  try {
    const count = await Counter.findOne({});
    res.send(count);
  } catch (err) {
    console.error(err);
  }
};

// function for incrementing counter number
module.exports.incrementCounter = async (req, res) => {
  try {
    const count = await Counter.findOne({});
    let addCount = count.current + 1;
    const updateCount = await Counter.updateOne(
      { current: count.current },
      { current: addCount }
    );
    const newCount = await Counter.findOne({});
    res.send(newCount);
  } catch (err) {
    console.error(err);
  }
};

// function for decrementing counter number
module.exports.decrementCounter = async (req, res) => {
  try {
    const count = await Counter.findOne({});
    let subtractCount = count.current - 1;
    const updateCount = await Counter.updateOne(
      { current: count.current },
      { current: subtractCount }
    );
    const newCount = await Counter.findOne({});
    res.send(newCount);
  } catch (err) {
    console.error(err);
  }
};

// function for resetting counter number to zero
module.exports.resetCounter = async (req, res) => {
  try {
    const count = await Counter.findOne({});
    const updateCount = await Counter.updateOne(
      { current: count.current },
      { current: 0 }
    );
    const newCount = await Counter.findOne({});
    res.send(newCount);
  } catch (err) {
    console.error(err);
  }
};
