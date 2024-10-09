const drop = document.querySelectorAll(".drop");

drop.forEach(drop => {
    drop.addEventListener("click", () => {
        drop.classList.toggle("active");
    });
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '0'
    document.body.style.overflow = 'hidden';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '-80%';
}
