document.addEventListener("DOMContentLoaded", () => {
  const d = document;
  const $detailList = d.querySelectorAll("details");

  $detailList.forEach(($detail) => {
    const $summary = $detail.querySelector("summary");
    $summary.addEventListener("click", expand);
  });

  function expand() {
    $detailList.forEach(($item) => {
      $item.removeAttribute("open");
      if ($item.getAttribute("open")) {
        console.log($item);
      }
    });
  }
});
