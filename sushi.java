class Solution {
  public int getMaximumEatenDishCount(int N, int[] D, int K) {
    int count = 0;
    Set stackSet = new HashSet();
    Queue<Integer> stack = new LinkedList<Integer>();
    
    for(int i = 0; i < N; i++) {
      if(!stackSet.contains(D[i])){
        stack.add(D[i]);
        stackSet.add(D[i]);
        count++;
      }
      
      if(stack.size() > K) {
        int x = stack.poll();
        stackSet.remove(x);
      }
    }
    return count;
  }
}