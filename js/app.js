let sidebar = $(".sidebar");
$("nav .sidebarBtn").click(function () {
  sidebar.addClass("active");
});

$(".sidebar,.closeBtn").click(function (event) {
  if (
    event.target.classList.contains("closeBtn") ||
    event.target.classList.contains("sidebar")
  ) {
    sidebar.removeClass("active");
  }
});
