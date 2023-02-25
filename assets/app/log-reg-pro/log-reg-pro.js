const swiper = new Swiper(".zf-login-swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: true,
  delay: 2500,
  effect: "cube",
  pagination: {
    el: ".swiper-pagination",
  },
});

function initializeUsers() {
  const users = [
    {
      email: "feridz@gmail.com",
      password: "123",
      fullName: "FaridZ",
    },
    {},
  ];
  localStorage.setItem("local-users", JSON.stringify(users));
  return users;
}

function getUsers() {
  const localUsers = localStorage.getItem("local-users");
  // console.log("unparsed", localUsers);
  if (localUsers) {
    // console.log("parsed", JSON.parse(localUsers)[0].id);
    return JSON.parse(localUsers);
  } else {
    const users = initializeUsers();
    return users;
  }
}

function login(email, password) {
  const localUsers = getUsers();
  console.log(localUsers);

  const loggedInUser = localUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (loggedInUser) {
    // localStorage.setItem("current-user", JSON.stringify(loggedInUser));
    // console.log(window.location.origin);
    window.location.href = window.location.origin + "/pages/home/navbar.html";
  }

  return loggedInUser;
}

function register(email, password, fullName) {
  const localUsers = getUsers();
  console.log(localUsers);

  const existingUser = localUsers.find((user) => user.email === email);

  if (existingUser) {
    alert(`There is already a user with email: ${email}`);
    return;
  }

  localUsers.push({
    email: email,
    password: password,
    fullName: fullName,
  });

  localStorage.setItem("local-users", JSON.stringify(localUsers));

  // Windows+V
  window.location.href =
    window.location.origin + "/pages/log-re-pro/log-reg-pro.html";
}

function handleLoginForm() {
  const formElement = document.getElementById("login-form");
  if (formElement) {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const loginDetails = Object.fromEntries(formData);

      const loginResult = login(loginDetails.email, loginDetails.password);
      if (!loginResult) {
        alert("You should register before LOGIN");
      }
    });
  }
}

function handleRegisterForm() {
  const formElement = document.getElementById("register-form");
  if (formElement) {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const registerDetails = Object.fromEntries(formData);

      register(
        registerDetails.email,
        registerDetails.password,
        registerDetails.fullName
      );
    });
  }
}

handleLoginForm();
handleRegisterForm();
