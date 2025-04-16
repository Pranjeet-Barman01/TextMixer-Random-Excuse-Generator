function generateExcuse() {
    const category = document.getElementById("category").value;
    fetch(`excuses/${category}.json`)
      .then(res => res.json())
      .then(data => {
        const excuse = data[Math.floor(Math.random() * data.length)];
        document.getElementById("output").innerText = excuse;
      });
  }
  
  function copyExcuse() {
    const excuseText = document.getElementById("output").innerText;
    navigator.clipboard.writeText(excuseText)
      .then(() => alert("Excuse copied to clipboard!"));
  }
  