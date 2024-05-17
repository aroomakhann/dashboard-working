document.addEventListener('DOMContentLoaded', function () {
    const notificationButton = document.querySelector('.notifications');
    const notificationPanel = document.querySelector('.notification-panel');

    notificationButton.addEventListener('click', function () {
        notificationPanel.classList.toggle('show');
    });
});
  