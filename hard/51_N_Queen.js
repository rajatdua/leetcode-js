/** still WIP **/
let ans;
/**
 * @param {number} n
 * @return {string[][]}
 */

const solveNQueens = function(n) {
  let pos = Array(n).fill(Array(n).fill(0));
  ans = Array(n).fill(Array(n).fill(undefined));
  bt(n, 0, pos);
  return ans;
};

const isValid = (pos, r, c) => {
  let valid = true;
  let j = c - 1, k = c + 1;
  for(let i = r - 1; i >= 0; i--, j--, k++){
    if(pos[i][c]) valid = false;
    if(j >= 0 && pos[i][j]) valid = false;
    if(k < pos.length && pos[i][k]) valid = false;
    if(!valid) return valid;
  }
  return valid;
};

const bt = (n, row, pos) => {
  if(row === n){
    let curr = [];
    for(let i = 0; i < n; i++){
      let sb = '';

      for(let j = 0; j < n; j++){
        if(pos[i][j]){
          sb = sb + "Q";
        }else{
          sb = sb + ".";
        }
      }
      curr.push(sb);
    }
    ans.push(curr);
    return;
  }
  for(let j = 0; j < n; j++){
    if(!isValid(pos, row, j)){
      continue;
    }
    pos[row][j] = true;
    bt(n, row + 1, pos);
    pos[row][j] = false;
  }
};

console.log(solveNQueens(4));


/*
class Solution {
    List<List<String>> ans = new ArrayList<>();
    public List<List<String>> solveNQueens(int n) {
        boolean[][] pos = new boolean[n][n];
        bt(n, 0, pos);

        return ans;
    }
    private boolean isValid(boolean[][] pos, int r, int c){
        boolean valid = true;
        int j = c - 1, k = c + 1;
        for(int i = r - 1; i >= 0; i--, j--, k++){
            if(pos[i][c]) valid = false;
            if(j >= 0 && pos[i][j]) valid = false;
            if(k < pos.length && pos[i][k]) valid = false;
            if(!valid) return valid;
        }
        return valid;
    }
    private void bt(int n, int row, boolean[][] pos){
        if(row == n){
            List<String> curr = new ArrayList<>();
            for(int i = 0; i < n; i++){
                StringBuilder sb = new StringBuilder();

                for(int j = 0; j < n; j++){
                    if(pos[i][j]){
                        sb.append("Q");
                    }else{
                        sb.append(".");
                    }
                }
                curr.add(sb.toString());
            }
            ans.add(curr);
            return;
        }
        for(int j = 0; j < n; j++){
            if(!isValid(pos, row, j)){
                continue;
            }
            pos[row][j] = true;
            bt(n, row + 1, pos);
            pos[row][j] = false;
        }
    }
}
 */
