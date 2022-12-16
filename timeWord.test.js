const timeWord = require('./timeWord.js');

describe("#timeword", () => {

  test("it is a function", () => {
    expect(typeof timeWord).toBe('function');
  });
});


describe("Testing valid times", () => {
  test("getting midnight", () => {
    expect(timeWord("00:00")).toEqual("midnight")
  })

  test("getting noon", () => {
    expect(timeWord("12:00")).toEqual("noon")
  })

  test("getting twelve thrity am", () => {
    expect(timeWord("12:30")).toEqual("twelve thirty pm")
  })

  test("getting time two 'o' clock am", () => {
    expect(timeWord("02:00")).toEqual("two 'o' clock am")
  })

  test("getting thirteen oh five pm", () => {
    expect(timeWord("13:05")).toEqual("thirteen oh five pm")
  })

  test("getting fifteen fifty five pm", () => {
    expect(timeWord("15:55")).toEqual("fifteen fifty five pm")
  })
});


describe("Testing invalid times", () => {
  test("sending too little characters 1", () => {
    expect(timeWord("7:09")).toEqual("Invalid data input, please use '00:00' time format")
  })
  test("sending too little characters 2", () => {
    expect(timeWord("00:2")).toEqual("Invalid data input, please use '00:00' time format")
  })
  test("sending invalid character 1", () => {
    expect(timeWord("1a:10")).toEqual("Please type in a valid time format '00:00'")
  })
  test("sending invalid character 2", () => {
    expect(timeWord("11://")).toEqual("Please type in a valid time format '00:00'")
  })
  test("sending invalid character 3", () => {
    expect(timeWord("04:90")).toEqual("Please type in a valid time format '00:00'")
  })
});