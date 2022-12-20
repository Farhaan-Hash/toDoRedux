import {expect} from "chai";
import {getBorderStyleForDate} from "../TodoListItem";

describe("getBorderStyleForDate", () => {
  it("returns none when date is less than 5 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 3);
    const expected = "none";
    const actual = getBorderStyleForDate(recentDate, today);

    /* eslint-disable jest/valid-expect */

    expect(actual).to.equal(expected);
  });
  it("returns a border when a date is more than 5 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 7);
    const expected = "2px solid red";
    const actual = getBorderStyleForDate(recentDate, today);

    /* eslint-disable jest/valid-expect */

    expect(actual).to.equal(expected);
  });
});
