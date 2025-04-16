/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
    // Write your code here
    var sortS = S.sort((a,b) => a - b)
    var Count = 0
    var currPos = 0
    for(let i = 0;i<M+1;i++){
      if(i==0){
        currPos = sortS[i]
        Count = Count + Math.floor((currPos-1)/(K+1))
      } else if(i == M){
        currPos = sortS[i-1]
        Count = Count + Math.floor((N - currPos)/(K+1))
        
      } else {
        currPos = sortS[i]
        Count = currPos-sortS[i-1]-K-1 > 0 ? Count + Math.floor((currPos-sortS[i-1]-K-1)/(K+1)) : Count
      }
    }
    return Count;
  }
  