import { expect } from "chai";
import { getBorderStyleForDate } from "../TodoListItem";

describe("Get broder style for date", () => {
  it("returns none if its less than 5 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 3);

    const expected = "none";
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.equal(expected);
  });
  it("returns none if its more than 5 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 5);

    const expected = "2px solid red";
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.equal(expected);
  });
});
