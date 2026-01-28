// Custom keyboard shortcut for search (Cmd+K / Ctrl+K)
if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      
      // Find and click the search button
      const searchButton = document.querySelector('.aa-DetachedSearchButton');
      if (searchButton) {
        searchButton.click();
      }
    }
  });
}

export default function SearchBarShortcut() {
  return null;
}
