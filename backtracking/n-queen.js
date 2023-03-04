// 추론!!!

// /
//  * 1. 귀납적 사고 => n-queen 해결할 예정!! "규칙"을 찾는거야!!
//  * 어떤 현상에 대해서 관찰을 계속해!!!
//  * 일반화!!! 점화식!! => 재귀함수, 함수 구조!!
//  * 1 + 2 = 3 n + n + 1 = 2N+1
//  * 
//  * 2. 연역적 사고
//  * 전제 조건. A -> B, B -> C A -> C
//  */

// /
//  * Q => 가로, 세로, 양 대각선
//  * 1. 가로를 먼저 검사
//  * 2. 세로를 먼저 검사
//  * 3. 양 대각선에 대해서 검사
//  * Q가 N개가 되면 
//  * 
//  * (x, y)
//  * ================ -> X
//  *       0       1       2       3
//  *  0  (0,0) | (1,0) | (2,0) | (3,0) |
//  *  1  (0,1) | (1,1) | (2,1) | (3,1) |
//  *  2  (0,2) | (1,2) | (2,2) | (3,2) |
//  *  3  (0,3) | (1,3) | (2,3) | (3,3) |
//  * ================
//  * ⬇️
//  * Y
//  *   
//  *  *       0       1       2       3
//  *  0  0 | Q | 0 | 0 |
//  *  1  0 | 0 | 0 | Q |
//  *  2  Q | 0 | 0 | 0 |
//  *  3  0 | 0 | Q | 0 |
//  * 
//  * 행은 고려할 필요가 없기 때문에!!
//  * [값, 값, 값, ... , 값](N개의 데이터) (인덱스 값을 열로 사용할 거야!!!)
//  * ex. [1, 3, 0, 2]
//  */
    
function solution(N){
    // [0, 0, 0, 0]
    const visited = new Array(N).fill(0)
    let answer = 0

    // 경우의 수 하나를 보는 함수
    function dfs(row){
        if(row === N){
            answer++
        } else{
            // i: column
            for(let i = 0;i<N;i++){
                if(visited[row]) continue
                visited[row] = i // 방문표시
                if(isValid(row)) dfs(row + 1)
                visited[row] = 0
            }
        }
    }

    // 해당 자리에 Queen을 놓을 수 있는지 없는지 체크하는 함수 return value: boolean
    function isValid(x){    // x: row
        // i: column(열)
        for(let i = 0;i<x;i++){
            if(visited[x] === visited[i]) return false
            if(Math.abs(visited[x] - visited[i]) === x - i) return false
        }
        return true
    }

    dfs(0)
    return answer
}

console.log(solution(8))