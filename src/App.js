
import './test.css';

function App() {
  return (
    <div className="App">
      <body>
    <div class="container">
    
   <div class="signup">

   
      <form action="#" method="get">
        <h2 class="logtext">Sign Up</h2>
        <form action="" method="post">
                <div class="field-input">
                    <label for="username"></label><br></br>
                    <input type="text" name="username" class="field" placeholder="Name" autocomplete="off" required></input>
                </div>

                <div class="field-input">
                    <label for="email"></label><br></br>
                    <input type="text" name="email" class="field" placeholder="Surname" autocomplete="off" required></input>
                </div>
                 
                <div class="field-input">
                    <label for="age"></label><br></br>
                    <input type="text" name="age" class="field" placeholder="Email"  autocomplete="off" required></input>
                </div>


                <div class="field-input">
                    <label for="password"></label><br></br>
                    <input type="password" name="password" class="field" placeholder="Password" autocomplete="off" required></input>
                </div>

                <div class="field-input">
                    <label for="con-password"></label><br></br>
                    <input type="password" name="con-password" id="password" placeholder="Confirm password" autocomplete="off" required></input>
                </div>

                <div class="field-input">
                    <label for="Image"></label><br></br>
                    <input type="File" name="File" id="image" placeholder="Image" autocomplete="off" required></input>
                </div>
                <button id="logbutton">Register</button><br></br>
                <p>Already a User ? <a href="../Front end/Sign In - Interface/Connect.html">Sign In</a></p>
    </form> 
    </form>
</div>

</div>
</body>
    </div>
  );
}

export default App;
