/*
Table Tennis Tussle
At Pathao Pay, there's a friendly but intense rivalry between two teams, Team Arif and Team Samad. To decide which team is the best, they’ve organized a series of table tennis matches. Each match is played between one member of Team Arif and one member of Team Samad. However, the records of the matches only show who played against whom, without mentioning which player belongs to which team. Now, the employees at Pathao Pay are curious. They want to figure out the maximum possible number of players in either team based on the match data.

Input Format

The first line of input contains an integer T (≤ 10), representing the number of tournaments held.
Each tournament begins with an integer n (1 <= n <= 10^5), denoting the number of matches scheduled.
The next n lines each contain two distinct integers u and v (1 ≤ u, v ≤ 20000), indicating that player u will play against player v. No pair of players will be listed more than once.
Constraints

T ≤ 10
1 <= n <= 10^5
1 ≤ u, v ≤ 20000
Output Format

For each tournament, print a single line with the tournament number, followed by the maximum possible number of players on either Mr. Arif's team or Mr. Samad's team. Each result should be printed on a separate line.

Sample Input 0

2
2
1 2
2 3
3
1 2
2 3
4 2
Sample Output 0

Tournament 1: 2
Tournament 2: 3
*/

process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  // now we can read/parse input
  const lines = input.trim().split("\n");

  let index = 0;
  const T = parseInt(lines[index++], 10);

  for (let t = 1; t <= T; t++) {
    const n = parseInt(lines[index++], 10);

    //         build graph
    const graph = new Map();
    for (let i = 0; i < n; i++) {
      const [u, v] = lines[index++].trim().split(" ").map(Number);
      if (!graph.has(u)) graph.set(u, []);
      if (!graph.has(v)) graph.set(v, []);
      graph.get(u).push(v);
      graph.get(v).push(u);
    }

    const colors = new Map();
    let maxTeamSize = 0;

    for (const [player] of graph) {
      if (!colors.has(player)) {
        const queue = [player];
        colors.set(player, 0); // assign team 0

        let team0 = 1,
          team1 = 0;

        while (queue.length > 0) {
          const current = queue.shift();
          const currentColor = colors.get(current);

          for (const neighbor of graph.get(current)) {
            if (!colors.has(neighbor)) {
              colors.set(neighbor, 1 - currentColor); // assign the oposit team

              if (colors.get(neighbor) === 0) {
                team0++;
              } else {
                team1++;
              }
              queue.push(neighbor);
            }
          }
        }

        maxTeamSize += Math.max(team0, team1);
      }
    }

    console.log(`Tournament ${t}: ${maxTeamSize}`);
  }
});
