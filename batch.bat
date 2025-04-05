powershell -Command "Get-ChildItem -Path . -Recurse -Directory -Filter node_modules | ForEach-Object { Remove-Item $_.FullName -Recurse -Force }"
