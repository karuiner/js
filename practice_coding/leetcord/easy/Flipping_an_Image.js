/*
 *
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    image = image.map((x) => {
        let l = x.length - 1;
        let nx = Array(l + 1).fill(0);
        x.forEach((xx, i) => {
            nx[l - i] = xx > 0 ? 0 : 1;
        });

        return nx;
    });
    return image;
};
//Runtime: 80 ms, faster than 94.04% of JavaScript online submissions for Flipping an Image.
//Memory Usage: 40.3 MB, less than 78.39% of JavaScript online submissions for Flipping an Image.

// var flipAndInvertImage = function(image) {
//     image=image.map((x)=>{
//         x.reverse()
//         return x.map(x => x>0?0:1)

//     })
//     return image
// };

//Runtime: 92 ms, faster than 36.07% of JavaScript online submissions for Flipping an Image.
//Memory Usage: 40.4 MB, less than 66.47% of JavaScript online submissions for Flipping an Image.
