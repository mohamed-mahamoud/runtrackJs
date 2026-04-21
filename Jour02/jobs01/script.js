function citation() {
  document.getElementById("button").addEventListener("click", () => { 
    const citation = document.getElementById("citation");
    const text = citation.textContent;
    console.log(text);
});
}

citation();