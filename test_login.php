<html>
    <head>
        <title>Login page</title>
    </head>
    <body>
        <h1>Login Here</h1>
        <form method="POST">
            Name: <input type="text" name="name">
            Email: <input type="text" name="mail">
            Password: <input type="password" name="pass">
            <input type="submit">
        </form>

        <?php 
        $con = mysqli_connect('localhost', 'root', '', 'login');
        if(isset($_POST['sb']))
        {
            $name=$_POST['name'];
            $email=$_POST['mail'];
            $password=$_POST['pass'];

            $query= "INSERT INTO mydata(name, email, password ) values ('$name', '$email','$password')";
            $execute = mysqli_query($con,$query);
        }
        ?>

    </body>
</html>