// 추억 점수
// 풀이방식
// 주어진 이름에따라 점수가 주어지고
// 해당 사진의 이름들이 가진 점수의 합을 구하는 방식이니
// 이름에따른 점수를 객체러 만들고
// 사진을 순회하면 각 사진의 총합을구하여 돌려문제 문제 풀이 완료이다.
function solution(name, yearning, photo) {
  let db = {},
    n = name.length;
  for (let i = 0; i < n; i++) {
    db[name[i]] = yearning[i];
  }

  return photo.map((x) => {
    return x.reduce((acc, k) => {
      return db[k] ? acc + db[k] : acc;
    }, 0);
  });
}
