/*

Description
Given a graph undirected G with N nodes and M edges. Check whether the graph G can be colored using exactly two colors or not.
Note - Graph coloring is a procedure of assigning colors to each vertex of a graph G such that no adjacent vertices get same color.

Input
First line: Single integer denoting the value of T - the number of test cases.
For each test case:
First line: Two single space-separated integers denoting the value of N and M.
M lines follow:
Each of the lines consists of two single space-separated distinct integers u and v, denoting an edge between node u and node v.

Constraints:
1 <= T <= 100
1 <= N,M <= 100000
1 <= u,v <= N

Output
For each test case, print in a new line:
"Bipartite graph" without quotes if the graph can be colored using exactly two colors, else
"Non-Bipartite graph" without quotes.

Sample Input 1 
2
4 3
1 2
2 3
3 4
3 3
1 2
2 3
3 1

Sample Output 1
Bipartite graph
Non-Bipartite graph

Hint
Given tests cases:
N=4, M=3.
Graph structure:
1--2--3--4
You may color nodes 1 and 3 with color 1 and nodes 2 and 4 with color 2. Hence the graph is Bipartite.
N=3, M=3.
Graph structure:
1--3
\  /
2
Nodes 1 and 3 can be colored using colors 1 and 2 but you can never use the same colors to color node 2. Hence at least 3 colors are required to color the entire graph. Hence the graph is aNon-Bipartite graph.

*/

/*

//JAVA

import java.util.*;
import java.io.*;
class Main{
    
    
    public static void main(String[] args){
        FastReader scan = new FastReader();
        int tc = scan.nextInt();
        while(tc-->0){
            int n = scan.nextInt();
            int m = scan.nextInt();
            
            Map<Integer,Set<Integer>> map = new HashMap<>();
            
            
            for(int i = 0; i < m; i++){
                int a = scan.nextInt();
                int b = scan.nextInt();
                if(map.containsKey(a)){
                    map.get(a).add(b);
                }else{
                    Set<Integer> s = new HashSet<>();
                    s.add(b);
                    map.put(a,s);
                }
                if(map.containsKey(b)){
                    map.get(b).add(a);
                }else{
                    Set<Integer> s = new HashSet<>();
                    s.add(a);
                    map.put(b,s);
                }
            }
            Map<Integer,Integer> color = new HashMap<>();
            
            for(int i : map.keySet()){
                
                color.put(i,-1);
            }
            
             boolean t = true;
            for(int i: map.keySet()){
               
                   t = call(map,i,n,color);
                    if(!t){
                        System.out.println("Non-Bipartite graph");
                        break;
                    }
                    
            }
            if(t)
            System.out.println("Bipartite graph");
            // System.out.println(color);
            // System.out.println(map);
        }
    }   
    
    static boolean call(Map<Integer,Set<Integer>> map, int e,int n, Map<Integer,Integer> color){
        if(color.get(e)==-1) color.put(e,1);
        for(int i : map.get(e)){
            if(color.get(i) == -1){
                color.put(i,-1-color.get(e));
                if(!call(map,i,n,color)){
                    return false;
                }
            }
            if(color.get(i) == color.get(e)) return false;
        }
        return true;
        
    }
        
    
    
    
    
        static class FastReader {BufferedReader br;StringTokenizer st; public FastReader(){br = new BufferedReader(new InputStreamReader(System.in));}String next(){while (st == null || !st.hasMoreElements()) { try {st = new StringTokenizer(br.readLine());}catch (IOException e) {  e.printStackTrace();}}  return st.nextToken();}int nextInt() { return Integer.parseInt(next()); } long nextLong() { return Long.parseLong(next()); }double nextDouble()  {   return Double.parseDouble(next());}String nextLine(){ String str = ""; try { if(st.hasMoreTokens()){ str = st.nextToken("\n"); }else{  str = br.readLine(); }  }  catch (IOException e) {  e.printStackTrace(); } return str; } } 

}

*/

// Not Solved
