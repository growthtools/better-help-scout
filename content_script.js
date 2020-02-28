var waitForInputs = setInterval(function() {
  console.log("waiting", $("textarea.response-input").length);
  if ($("textarea.response-input").length) {
    $("textarea.response-input").each(function(i, elem) {
      elem.style.height = "1px";
      elem.style.height = 25 + elem.scrollHeight + "px";
    });
    console.log("resized text areas");
    $(".control-group.custom-field").each(function(i, elem) {
      elem.style = "";
    });
    console.log("reset inline styles for custom fields");
    $("#convo-custom-fields .masonry-container").each(function(i, elem) {
      elem.style.height = "";
    });
    console.log("added dynamic height for masonry container");
    clearInterval(waitForInputs);
  }
}, 100);
