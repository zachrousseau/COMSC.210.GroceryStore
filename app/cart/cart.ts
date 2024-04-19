const checkbox = document.getElementById(
    'subscribe',
  ) as HTMLInputElement | null;
  
  if (checkbox != null) {
    // ✅ Set checkbox checked
    checkbox.checked = true;
  
    // ✅ Set checkbox unchecked
    // checkbox.checked = false;
}