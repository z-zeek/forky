// Mock Notification Data
const notifications = [
  {
    id: 1,
    title: "Feature #101 Status Updated",
    details: "Feature #101 has been implemented.",
    timestamp: "2024-11-09 10:00",
    isRead: false
  },
  {
    id: 2,
    title: "New Comment on Feature #102",
    details: "A user commented on Feature #102.",
    timestamp: "2024-11-09 09:30",
    isRead: true
  },
  {
    id: 3,
    title: "Priority Update for Feature #103",
    details: "Feature #103 has been marked as high priority.",
    timestamp: "2024-11-09 08:45",
    isRead: false
  }
];

// Populate Notification Dropdown
const notificationButton = document.querySelector(".notification-button");
const notificationList = document.getElementById("notification-list");
const unreadCount = document.getElementById("unread-count");

notificationButton.addEventListener("click", () => {
  notificationList.classList.toggle("active");
});

function renderNotifications() {
  notificationList.innerHTML = "";
  let unread = 0;

  notifications.forEach((notification) => {
    if (!notification.isRead) unread++;

    const item = document.createElement("div");
    item.classList.add("notification-item");
    item.innerHTML = `
      <h4>${notification.title}</h4>
      <p>${notification.details}</p>
      <small>${notification.timestamp}</small>
    `;
    notificationList.appendChild(item);
  });

  unreadCount.textContent = `(${unread})`;
}

renderNotifications();
