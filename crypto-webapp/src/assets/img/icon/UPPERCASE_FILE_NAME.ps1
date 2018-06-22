# Get all items in the current directory
Get-ChildItem | %{
    # Construct a new file name
    $newFilename = ($_.BaseName.ToUpper())+($_.Extension.ToLower());

    # Move the file
    Move-Item $_ $newFilename
}