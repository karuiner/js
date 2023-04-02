//유한소수 판별하기
function solution(a, b) {
    // chat gpt code 
    // 분자와 분모를 최대공약수로 나누어 기약분수로 만듦
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const common = gcd(a, b);
    a /= common;
    b /= common;
  
    // 분모의 소인수분해 결과를 확인하여 2와 5가 아닌 다른 소인수가 존재하는지 확인
    while (b % 2 === 0) {
      b /= 2;
    }
    while (b % 5 === 0) {
      b /= 5;
    }
  
    if (b === 1) {
      // 2와 5만을 소인수로 갖는 경우 유한소수
      return 1;
    } else {
      // 2와 5 이외의 다른 소인수가 존재하는 경우 무한소수
      return 2;
    }
  }