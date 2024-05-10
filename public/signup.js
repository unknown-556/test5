function showModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
  modal.style.display = "block";
}

function setUpModal() {
  const closeButton = document.querySelector('.close-button');
  const modal = document.getElementById('modal');
  closeButton.onclick = function() {
      modal.style.display = "none";
  };
  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  };
}

document.addEventListener("DOMContentLoaded", function() {
  setUpModal();
});

function signUp() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const verifyPassword = document.getElementById('verify-password').value;

  if (password !== verifyPassword) {
      showModal('Passwords do not match!');
      return;
  }

  const user = { firstName, lastName, email, phone, password };
  localStorage.setItem(phone, JSON.stringify(user));
  showModal('Signup successful. You can now sign in.');
  window.location.href = 'signInPage.html';

  // Set a delay before redirecting to the sign-in page
  setTimeout(function() {
    window.location.href = 'signin.html';
  }, 4000); // Delay of 4000 milliseconds (4 seconds)
}

function signIn() {
  const phone = document.getElementById('login-phone').value;
  const password = document.getElementById('login-password').value;
  const user = JSON.parse(localStorage.getItem(phone));

  if (user && user.password === password) {
      showModal('Sign In Successful. Welcome ' + user.firstName + '!');
  } else {
      showModal('Invalid phone or password.');
  }
}

let globalOTP; // Store OTP at a global scope for easy access

function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    return otp.toString(); // Ensure it is a string
}

function sendOTP() {
    globalOTP = generateOTP();
    // In a real application, you would send this OTP via SMS or email
    const otp = globalOTP;
    document.getElementById('otp-display').textContent = "Your OTP is: " + otp;
    document.getElementById('otp-input').style.display = 'block';
    document.getElementById('verify-otp-btn').style.display = 'block';
    // console.log("OTP is: " + globalOTP); // For demo purposes, we log it to the console
    // document.getElementById('otp-input').style.display = 'block';
    // document.getElementById('verify-otp-btn').style.display = 'block';
}

function verifyOTP() {
    const userOTP = document.getElementById('otp-input').value;
    if (userOTP === globalOTP) {
        showModal('OTP Verified! Signup successful. Redirecting to sign in...');
        setTimeout(function() {
            window.location.href = 'signInPage.html';
        }, 4000);
    } else {
        showModal('Invalid OTP. Please try again.');
    }
}

function signUp() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const verifyPassword = document.getElementById('verify-password').value;
    
    if (password !== verifyPassword) {
        showModal('Passwords do not match!');
        return;
    }

    const user = { firstName, lastName, email, phone, password };
    localStorage.setItem(phone, JSON.stringify(user));
    showModal('Please check the console for OTP and enter it below to complete your registration.');
    sendOTP();
}

function signIn() {
  const phone = document.getElementById('login-phone').value;
  const password = document.getElementById('login-password').value;
  const user = JSON.parse(localStorage.getItem(phone));

  if (user && user.password === password) {
      // alert('Sign In Successful. Welcome ' + user.firstName + '!');
      window.location.href = 'dashboard.html';  // Redirect to the dashboard page
  } else {
      showModal('Invalid phone or password.');
  }
}

// function sendOTP() {
//   const otp = generateOTP();
//   document.getElementById('otp-display').textContent = "Your OTP is: " + otp;
//   document.getElementById('otp-input').style.display = 'block';
//   document.getElementById('verify-otp-btn').style.display = 'block';
// }

// function generateOTP() {
//   return Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
// }