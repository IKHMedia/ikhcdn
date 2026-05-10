(function() {
  const url = new URL(window.location.href);
  if (url.searchParams.has('fbclid')) {
    url.searchParams.delete('fbclid');
    // Update the address bar without reloading
    window.history.replaceState(null, '', url.toString());
  }
})();

if (window.location.hostname.indexOf("www") == 0) {
    window.location = window.location.href.replace("www.","");
}
