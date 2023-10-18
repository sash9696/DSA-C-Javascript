#include <iostream>
using namespace std;

int main()
{
    int marks[100] = {0};

    int n;
    cout << "Enter no of students: ";
    cin >> n;

    // Input from the user
    for (int i = 1; i <= n; i++)
    {
        cin >> marks[i]; // Use marks[i] to store the input
        marks[i] = marks[i] * 2; // Double the marks for each student
    }
    
    // Output the doubled marks
    for (int i = 1; i <= n; i++)
    {
        cout << marks[i] << " ,";
    }
    cout << endl; // Move this outside the loop to print a new line after all marks

    return 0;
}
