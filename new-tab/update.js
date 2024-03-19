// Update.js
/*
    KeenWa Corp.
*/
fetch('https://keenwa.x10.mx/riceskiovoxhelper/update.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data && data.version) {

      if (compareVersions(data.version, chrome.runtime.getManifest().version) > 0) {

        alert('A newer version of RiceOS Skiovox Edition is available.');
        document.querySelector('.update').innerHTML = 'RiceOS needs an update. Update <a href="https://github.com/keenwarice/riceskiovoxhelper">here</a>.';
      } else {
        // Extension is up to date
        console.log('RiceOS Skiovox Edition is up to date.');
        document.querySelector('.update').innerHTML = 'RiceOS is up to date.';
      }
    } else {
      // Data format error: 'version' property is missing or invalid
      console.error('Error: Invalid update data format. Missing or invalid "version" property.');
      document.querySelector('.update').innerHTML = 'The RiceOS servers are having a skill issue.';
    }
  })
  .catch(error => {
    // Network error or other error occurred
    console.error('Error fetching update data:', error.message);
    // Update the UI element with the error message
    document.querySelector('.update').textContent = 'Unable to fetch update data.';
  });

// Function to compare version numbers
function compareVersions(versionA, versionB) {
  const segmentsA = versionA.split('.').map(Number);
  const segmentsB = versionB.split('.').map(Number);

  for (let i = 0; i < Math.max(segmentsA.length, segmentsB.length); i++) {
    const segmentA = segmentsA[i] || 0;
    const segmentB = segmentsB[i] || 0;

    if (segmentA !== segmentB) {
      return segmentA - segmentB;
    }
  }

  return 0;
}
