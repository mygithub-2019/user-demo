<template>
    <div>
        <div class="container-fluid">
            <!-- <img src="../assets/header-logo.png" width="500px;" height="300px;"> -->
            <div id="demo" class="carousel slide" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/logo.png" alt="Los Angeles" width="500" height="500">
    </div>
    <div class="carousel-item">
      <img src="../assets/header-logo.png" alt="Chicago" width="500" height="500">
    </div>
    <div class="carousel-item">
      <img src="../assets/logo.png" alt="New York" width="500" height="500">
    </div>
  </div>
  
  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
        <br>
        <!-- <h3>Sticky Navbar</h3>
        <p>A sticky navigation bar stays fixed at the top of the page when you scroll past it.</p>
        <p>Scroll this page to see the effect. <strong>Note:</strong> sticky-top does not work in IE11 and earlier.</p> -->
        </div>

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <a class="navbar-brand" href="#">Logo</a>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item pull-right">
            <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
        
        </nav>
        <br>
        <div class="container-fluid" id='home'><br>
            <p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
            <p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
            <p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
            <p>Some example text. Some example text. Some example text. Some example text. Some example text.</p>
            
            <div class="content">
                <h3>Sticky Navigation Example</h3>
                <p>The navbar will stick to the top when you reach its scroll position.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            </div>
        </div>
        <div id='about'>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1>About Us</h1>      
                    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
                </div>
                <div class="container">
                <p>This is some text.</p>      
                <p>This is another text.</p>      
                </div>
            </div>
        </div>
        <div id='services'>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1>Our Services</h1>      
                <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
            </div>
            <div class="container">
            <p>This is some text.</p>      
            <p>This is another text.</p>      
            </div>

            </div>
        </div>
        <div id='contact'>
                <div class="jumbotron jumbotron-fluid">
                <div class="col-lg-12">
                    <div class="container">
                        <h1>Contact Us</h1>      
                        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
                    </div>
                    <div class="container">
                    <p>This is some text.</p>      
                    <p>This is another text.</p>      
                    </div>
                </div>
                <div class="col-log-12">
                <div class="container">
                <form action="/action_page.php">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd">
                </div>
                <div class="form-group">
                    <label for="comment">Comment:</label>
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
            
            </div>
        </div>
        

        
    </div>
</template>
<script>
export default {
    
}

</script>
<style lang="scss" scoped>
.bg-dark {
    background-color: #0aacf5fa!important;
}
</style>
