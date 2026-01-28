// Custom keyboard shortcut for search (Cmd+K / Ctrl+K)
if (typeof window !== 'undefined') {
  // Add keyboard shortcut listener
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

  // Add shortcut hint to search placeholder
  const addShortcutHint = () => {
    const placeholder = document.querySelector('.aa-DetachedSearchButtonPlaceholder');
    if (placeholder && !placeholder.dataset.hintAdded) {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const shortcut = isMac ? '⌘K' : 'Ctrl+K';
      placeholder.textContent = `Search... (${shortcut})`;
      placeholder.dataset.hintAdded = 'true';
    }
  };

  // Run on load and observe for dynamic changes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addShortcutHint);
  } else {
    addShortcutHint();
  }

  // Also observe for SPA navigation
  const observer = new MutationObserver(() => {
    addShortcutHint();
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
}

export default function SearchBarShortcut() {
  return null;
}
