
 const form = document.querySelector('#sell-art');
 user_name = document.getElementById("name").value
 user_email = document.getElementById("email").value
 user_no = document.getElementById("message").value




 form.addEventListener('submit', (e) => {
   e.preventDefault();
   user_name = document.getElementById("name").value
   user_email = document.getElementById("email").value
   user_no = document.getElementById("message").value

   $('form').get(0).reset();

   firebase.database().ref("Contact").push({
     message: user_no,
     email_of_user: user_email,
     name: user_name
   })

 });
