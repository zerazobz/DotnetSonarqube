# Configuration to get Code Coverage in Sonarqube

## Steps

1. dotnet sonarscanner begin /k:"TestConsole" /d:sonar.host.url="http://localhost:9000"  /d:sonar.login="8cd5a6579b851f2509720faf92406c75951d5910" /d:"sonar.cs.opencover.reportsPaths=**/coverage.opencover.xml"
2. dotnet build
3. dotnet test --collect:"XPlat Code Coverage" -- DataCollectionRunSettings.DataCollectors.DataCollector.Configuration.Format=opencover
4. dotnet sonarscanner end /d:sonar.login="8cd5a6579b851f2509720faf92406c75951d5910"


