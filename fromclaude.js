
async function savePuzzle(puzzleWidth, puzzleHeight) {
  // ... existing code ...

  try {
      const response = await fetch('/.netlify/functions/deploy', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              content: htmlContent
          })
      });

      if (response.ok) {
          const result = await response.json();
          alert('Puzzle deployed successfully! Your site is live at: ' + result.url);
      } else {
          alert('Error deploying puzzle');
      }
  } catch (error) {
      console.error('Request Error:', error);
      alert('Failed to deploy: ' + error.message);
  }
}