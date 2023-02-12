$options = @("Option 1", "Option 2", "Option 3")
$selectedIndex = 0

while ($true) {
  [System.Console]::Clear()
  for ($index = 0; $index -lt $options.Count; $index++) {
    if ($index -eq $selectedIndex) {
      Write-Host "`t[$($options[$index])]"
    } else {
      Write-Host "`t $($options[$index])"
    }
  }

  $key = [System.Console]::ReadKey($true)
  switch ($key.Key) {
    'DownArrow' {
      $selectedIndex++
      if ($selectedIndex -ge $options.Count) {
        $selectedIndex = 0
      }
      break
    }
    'UpArrow' {
      $selectedIndex--
      if ($selectedIndex -lt 0) {
        $selectedIndex = $options.Count - 1
      }
      break
    }
    'Enter' {
      Write-Host ""
      Write-Host "Selected option: $($options[$selectedIndex])"
      return
    }
  }
}
