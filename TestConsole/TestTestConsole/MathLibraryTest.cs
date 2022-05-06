using NUnit.Framework;
using TestConsole;

namespace TestTestConsole
{
    public class MathLibraryTest
    {
        MathLibrary mathL;

        public MathLibraryTest()
        {
            mathL = new MathLibrary();
        }
             
        [SetUp]
        public void Setup()
        {
            mathL = new MathLibrary();
        }

        [Test]
        public void Test_SumTwoNumbers()
        {
            int firstValue = 23;
            int secondValue = 12;

            var result = mathL.Sum(firstValue, secondValue);

            Assert.AreEqual(firstValue + secondValue, result);
        }
    }
}