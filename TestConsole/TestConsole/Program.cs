// See https://aka.ms/new-console-template for more information
using System;
using TestConsole;

Console.WriteLine("Hello, World!");
Console.WriteLine("Enter the first value to add");
var first = Console.ReadLine();
if (!Int32.TryParse(first, out var firstValue))
    Environment.Exit(0);
Console.WriteLine("Enter the second value to add");
var second = Console.ReadLine();
if(!Int32.TryParse(second, out var secondValue))
    Environment.Exit(0);
MathLibrary mathL = new MathLibrary();
Console.WriteLine($"The sum is: {mathL.Sum(firstValue, secondValue)}");