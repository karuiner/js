/*
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  // let ans=0,n=nums1.length,n2=nums2.length
  // for (let i=0; i <n;i++){
  //     let sub=0,k=0
  //     for (let j=i; j <n;j++){
  //         let q=k
  //         while (nums1[j] !== nums2[k] && q <n2){
  //             q++
  //         }
  //         if (q <n2){
  //             sub++
  //             k=q+1
  //         }
  //     }
  //     console.log(i,ans,sub)
  //     ans=sub>ans?sub:ans
  // }
  //     function cvt(arr){
  //         let db={}
  //         for (let i=0; i <arr.length;i++){
  //             if (db[arr[i]]===undefined){
  //                 db[arr[i]]=[i]
  //             }else{
  //                 db[arr[i]].push(i)
  //             }
  //         }
  //         return db
  //     }

  //     function sel(i,j,c){
  //         if (i >=n){
  //             return c
  //         }
  //         if (db[nums1[i]]===undefined){
  //             return sel(i+1,j,c)
  //         }else{
  //             let v=db[nums1[i]].filter(x => x>=j)
  //             let a=sel(i+1,j,c)
  //             if (v.length >0){
  //                 let b=sel(i+1,v[0]+1,c+1)
  //                 a=a>b?a:b
  //             }
  //             c=a>c?a:c
  //         }
  //         return c
  //     }

  //     let ans=0; db=cvt(nums2),n=nums1.length
  let n = nums1.length,
    n2 = nums2.length;
  function count(i, j, c) {
    if (i < n && j < n2) {
      if (nums1[i] === nums2[j]) {
        return count(i + 1, j + 1, c + 1);
      } else {
        let a = count(i + 1, j, c),
          b = count(i, j + 1, c);
        return a > b ? a : b;
      }
    } else {
      return c;
    }
  }

  return count(0, 0, 0);
};
