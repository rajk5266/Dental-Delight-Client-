<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animation.css">
    <link rel="stylesheet" href="fonts/css/font-awesome.min.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
</head>
<body>

<!-- HEADER  -->
<?php include "header.php"; ?>
<!-- HEADER  -->

<div class="row contact-row">
  <div class="col-12">
    <h1>Contact Us...</h1>
  </div>
</div>

<div class="container-fluid px-5 my-5">
  <div class="row justify-content-center">
    <div class="col-xl-10">
      <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
        <div class="card-body p-0">
          <div class="row g-0">
            <div class="col-sm-6 d-none d-sm-block bg-image"></div>
            <div class="col-sm-6 p-4">
              <div class="text-center">
                <div class="h3 fw-light">Fill Up the Form</div>
                <!-- <p class="mb-4 text-muted">Split layout contact form</p> -->
              </div>

         


             <div class="contactForm">
                <form action="contact.php">

                    <div class="section">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" placeholder="Enter name" required>
                    </div>

                    <div class="section">
                      <label for="phone">Phone no:-</label>
                      <input type="text" class="form-control" id="phone" placeholder="Enter phone-no:-"required>
                    </div>
                    
                    <div class="section">
                      <label for="email">Email address</label>
                      <input type="email" class="form-control" id="email"  placeholder="Enter email" required>
                    </div>
                    
                    <div class="col col-12" style="text-align: center;">
                      <button class="btn btn-outline-primary">Submit</button>
                    </div>
              
                </form>
              </div>
          
          
              <!-- End of contact form -->

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>



<!-- FOOTER  -->
<?php include "footer.php"; ?>
<!-- FOOTER  -->



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script src="js/main.js"></script>
<script src="js/animation.js"></script>
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
</body>
</html>