/*
 *
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    let ans = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            ans += 1;
        }
    }
    return ans;
};
//Runtime: 84 ms, faster than 29.07% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
//Memory Usage: 38.5 MB, less than 81.60% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
