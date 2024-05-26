# Recuerda que para ejecutar scripts de PowerShell, es posible que debas configurar la política de ejecución de scripts. 
# Puedes hacerlo ejecutando el siguiente comando en una ventana de PowerShell con privilegios de administrador:

# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# PowerShell abriendo una ventana de PowerShell y navegando a la ubicación donde guardaste el archivo. 
# Luego, ejecuta el script escribiendo .\generate_env.ps1 y presionando Enter.

$base64String = "REJfSE9TVD1sb2NhbGhvc3QKREJfVVNFUj1yb290CkRCX1BBU1NXT1JEPWFkbWluMTIzCkRCX05BTUU9bXlkYXRhYmFzZQpEQl9QT1JUPTMzMDYKUE9SVD04MDgwClNFQ1JFVF9LRVk9OTBLMU1UdUZUSzRzRm1GUnlwQjIyMDJ1NjREUnpUakpxSDRDbmhVNlB1alVhdUsxQ3Y="
$decodedBytes = [Convert]::FromBase64String($base64String)
$decodedString = [System.Text.Encoding]::UTF8.GetString($decodedBytes)
$decodedString | Out-File -FilePath ./.env -Encoding utf8
