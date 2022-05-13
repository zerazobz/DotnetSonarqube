# Configuration to get Code Coverage in Sonarqube

## Preconditions
1. Download NUnit console [NUnit Console releases](https://github.com/nunit/nunit-console/releases)
2. Add the installation path to the system path, commonly it is: C:\Program Files (x86)\NUnit.org\nunit-console
3. C:\Users\erick.asto\.nuget\packages\nunit.consolerunner\3.15.0\tools\nunit3-console.exe --result=NUnitResults.xml "TestTestConsole\bin\Debug\net5.0\TestTestConsole.dll"
	check Errors

## Steps

1. dotnet sonarscanner begin /k:"TestConsole" /d:sonar.host.url="http://localhost:9000"  /d:sonar.login="8cd5a6579b851f2509720faf92406c75951d5910" /d:"sonar.cs.opencover.reportsPaths=**/coverage.opencover.xml"
2. dotnet build
3. dotnet test --collect:"XPlat Code Coverage" -- DataCollectionRunSettings.DataCollectors.DataCollector.Configuration.Format=opencover
4. dotnet sonarscanner end /d:sonar.login="8cd5a6579b851f2509720faf92406c75951d5910"


