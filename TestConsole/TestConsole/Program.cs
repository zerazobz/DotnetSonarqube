// See https://aka.ms/new-console-template for more information
using TestConsole;

Console.WriteLine("Hello, World!");
Console.WriteLine("Enter the first value to add");
var first = Console.ReadLine();
Int32.TryParse(first, out var firstValue);
Console.WriteLine("Enter the second value to add");
var second = Console.ReadLine();
Int32.TryParse(second, out var secondValue);
MathLibrary mathL = new MathLibrary();
Console.WriteLine($"The sum is: {mathL.Sum(firstValue, secondValue)}");