/*
Pathao Pay DayTrip

On a pleasant morning, Mr. Sajib and Mr. Samad decided to organize a refreshing trip to Gazipur for the Pathao Pay team. They tasked Mr. Anis with arranging the daylong trip to ensure a memorable and seamless experience for everyone.

Pathao's employees are divided into several teams, and each team is further divided into smaller groups. To ensure convenience and enjoyment, each group must travel together in the same private car, and a single car can accommodate up to 4 passengers.

The sizes of these groups, ranging from 1 to 4 members, have already been collected. Now, Mr. Anis needs to determine the minimum number of cars required to transport all the groups while adhering to these rules:

Each group must stay together in the same car.
A single car can accommodate multiple groups if their combined size does not exceed 4.
Help Mr. Anis calculate the minimum number of cars required to transport all the groups.

Input Format

The first line of each case will take a single integer g - where g is the number of groups (1 ≤ g ≤ 10⁵) .
The second line of each case will take g integers p1, p2, ...., pg (1 ≤ pi ≤ 4) represents the size of the i-th group.
Input terminates at the end of file.
Constraints

(1 ≤ g ≤ 10⁵)
(1 ≤ pi ≤ 4)
Output Format

Print a single integer for each test case, representing the minimum number of cars required. Each result must be printed on a separate line.

Sample Input 0

4
4 3  2  1
Sample Output 0

3
*/

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int g;
    while (cin >> g)
    {
        vector<int> groups(g);
        for (int i = 0; i < g; i++)
        {
            cin >> groups[i];
        }

        int count1 = 0, count2 = 0, count3 = 0, count4 = 0;

        for (int size : groups)
        {
            if (size == 1)
                count1++;
            else if (size == 2)
                count2++;
            else if (size == 3)
                count3++;
            else if (size == 4)
                count4++;
        }

        int cars = count4;
        cars += count3;
        count1 = max(0, count1 - count3);

        cars += count2 / 2;
        if (count2 % 2 != 0)
        {
            cars++;
            count1 = max(0, count1 - 2);
        }

        cars += (count1 + 3) / 4;

        cout << cars << endl;
    }

    return 0;
}
