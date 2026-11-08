(function() {
  const url = new URL(window.location.href);
  let changed = false;

  // 1. Remove fbclid if present
  if (url.searchParams.has('fbclid')) {
    url.searchParams.delete('fbclid');
    changed = true;
  }

  // 2. Strip www. from the hostname if present
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '');
    changed = true;
  }

  // 3. Update the address bar without reloading if anything changed
  if (changed) {
    window.history.replaceState(null, '', url.toString());
  }
})();
