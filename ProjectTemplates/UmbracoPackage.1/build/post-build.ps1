# post build script. 
#
# runs in post build, copies outputted dll's to the .website/bin folder. 
#

param(
    # Configuration
    [Parameter(Mandatory=$true, ValueFromRemainingArguments=$true)]
    [string]
    $sourceFile
)

$solutionRoot = Resolve-Path "$PSScriptRoot\.."
$pathConfig = Join-Path -Path $solutionRoot "paths.json";

if (Test-Path $pathConfig) 
{
    $pathJson = Get-Content $pathConfig | Out-String | ConvertFrom-Json
    $pathSiteName = $pathJson.site
    $folder = Join-Path -Path $solutionRoot -ChildPath (Join-Path -Path $pathSiteName -ChildPath "bin")

    If ((Test-Path $sourceFile) -and (Test-Path $folder)) {
		Write-Host "Copy " -NoNewline
        Split-Path $sourceFile -Leaf | Write-Host -NoNewline
        Write-Host " to $folder"
        Copy-Item -Path $sourceFile -Destination $folder
    }
}

