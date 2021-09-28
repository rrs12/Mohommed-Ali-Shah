
 const form = document.querySelector('#contact');
 user_name = document.getElementById("name").value
 user_email = document.getElementById("email").value


 form.addEventListener('submit', (e) => {
   e.preventDefault();
   user_name = document.getElementById("name").value
   user_email = document.getElementById("email").value

   $('form').get(0).reset();

   firebase.database().ref("Drama").push({
     email_of_user: user_email,
     name: user_name
   })

 });
