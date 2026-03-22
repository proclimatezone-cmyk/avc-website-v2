$ErrorActionPreference = "Stop"

# Detect large files before committing
$largeFiles = git ls-files | Where-Object {
    $item = Get-Item $_ -ErrorAction SilentlyContinue
    if ($item) {
        $item.Length -gt 10MB
    } else {
        $false
    }
}

if ($largeFiles) {
    Write-Host "WARNING: Large files detected in index:" -ForegroundColor Yellow
    $largeFiles | ForEach-Object { Write-Host "   $_" -ForegroundColor Red }
    Write-Host "Add them to .gitignore and execute: git rm --cached <file>" -ForegroundColor Yellow
    Read-Host "Press Enter to cancel"
    exit 1
}

Write-Host "OK: No large files. Syncing..." -ForegroundColor Green

git add .
$msg = "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $msg

if ($LASTEXITCODE -ne 0) {
    Write-Host "INFO: No changes to commit." -ForegroundColor Cyan
    exit 0
}

git push
Write-Host "Deployed! Check Vercel in 60 seconds." -ForegroundColor Green
Read-Host "Press Enter to exit..."
