document.addEventListener("DOMContentLoaded", () => {
  // Mock notifications data
  let notifications = [
    { id: 1, title: "Feature A Updated", isRead: false },
    { id: 2, title: "Feature B Updated", isRead: true },
    { id: 3, title: "Feature C Feedback Received", isRead: false }
  ];

  const notificationList = document.getElementById("notification-list");

  // Function to render notifications
  function renderNotifications(filteredNotifications) {
    notificationList.innerHTML = ""; // Clear existing notifications

    if (filteredNotifications.length === 0) {
      notificationList.innerHTML = `<p class="no-notifications">No notifications to display.</p>`;
      return;
    }

    filteredNotifications.forEach(notification => {
      const li = document.createElement("li");
      li.classList.add("notification-item");
      if (notification.isRead) li.classList.add("read");
      li.innerHTML = `
        <strong>${notification.title}</strong>
        <p>Status: ${notification.isRead ? "Read" : "Unread"}</p>
        <button class="mark-read-toggle">
          Mark as ${notification.isRead ? "Unread" : "Read"}
        </button>
      `;

      // Event listener to toggle read/unread status
      li.querySelector(".mark-read-toggle").addEventListener("click", () => toggleReadStatus(notification.id));
      notificationList.appendChild(li);
    });
  }

  // Toggle read/unread status
  function toggleReadStatus(notificationId) {
    notifications = notifications.map(notification =>
      notification.id === notificationId
        ? { ...notification, isRead: !notification.isRead }
        : notification
    );
    renderNotifications(notifications);
  }

  // Event listeners for filter buttons
  document.getElementById("filter-all").addEventListener("click", () => {
    renderNotifications(notifications);
  });

  document.getElementById("filter-read").addEventListener("click", () => {
    const readNotifications = notifications.filter(notification => notification.isRead);
    renderNotifications(readNotifications);
  });

  document.getElementById("filter-unread").addEventListener("click", () => {
    const unreadNotifications = notifications.filter(notification => !notification.isRead);
    renderNotifications(unreadNotifications);
  });

  // Initial render
  renderNotifications(notifications);
});
