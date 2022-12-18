# Define the custom functions
function Get-Greeting {
    "Hello, World!"
}

function Get-Farewell {
    "Goodbye, World!"
}

# Write the custom functions to the profile script if they are not already defined
if (-not (Test-Path $profile)) {
    # Create a new, empty profile script if it does not exist
    New-Item -ItemType File -Path $profile
}

$functions = @"
function Get-Greeting {
    "Hello, World!"
}

function Get-Farewell {
    "Goodbye, World!"
}
"@

$existingFunctions = Get-Content -Path $profile

if (-not ($existingFunctions -contains $functions)) {
    Add-Content -Path $profile -Value $functions
}
