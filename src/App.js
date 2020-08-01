import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component { <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="generator" content=
"HTML Tidy for HTML5 for Linux version 5.2.0" />
<title>Petflix</title>
<meta charset="utf-8" />
<meta name="viewport" content=
"width=device-width, initial-scale=1" />
<link rel="stylesheet" href="assets/css/main.css" />
</head>
<body id="top">
<!-- Banner -->

<section id="banner" data-video="images/cat">
<div class="inner">
<header>
<h1>Petflix</h1>
<p>This is our project for cloud computing</p>
</header>
<a href="#main" class="more">Learn More</a></div>
</section>
<!-- Main -->
<div id="main">
<div class="inner"><!-- Boxes -->
<div class="thumbnails">
<div class="box"><a href=
"https://petvideo.s3.amazonaws.com/cat.mp4" class=
"image fit"><img src="images/tabby.png" alt="" /></a>
<div class="inner">
<h3>Brown tabby cat</h3>
<p>This clip is a brown tabby cat looking at the camera</p>
<a href="https://petvideo.s3.amazonaws.com/cat.mp4" class=
"button fit">Watch</a> <a href=
"https://petvideo.s3.amazonaws.com/cat.mp4" class="button fit">I
like this</a></div>
</div>
<div class="box"><a href=
"https://petvideo.s3.amazonaws.com/kitten.mp4" class=
"image fit"><img src="images/kitten.png" alt="" /></a>
<div class="inner">
<h3>Kitten Playing</h3>
<p>A clip of a kitten playing with a toy</p>
<a href="https://petvideo.s3.amazonaws.com/kitten.mp4" class=
"button style2 fit">Watch and play</a></div>
</div>
<div class="box"><a href=
"https://petvideo.s3.amazonaws.com/dogbeach.mp4" class=
"image fit"><img src="images/puppybeach.jpg" alt="" /></a>
<div class="inner">
<h3>Puppy on the beach</h3>
<p>In this clip we have a puppy playing on the beach with some sort
of toy.</p>
<a href="https://petvideo.s3.amazonaws.com/dogbeach.mp4" class=
"button style3 fit">Watch</a></div>
</div>
<div class="box"><a href=
"https://petvideo.s3.amazonaws.com/catsleep.mp4" class=
"image fit"><img src="images/catsleep.png" alt="" /></a>
<div class="inner">
<h3>Cat falling asleep</h3>
<p>Here we have a video of a cat falling asleep</p>
<a href="https://petvideo.s3.amazonaws.com/catsleep.mp4" class=
"button style2 fit">Watch</a></div>
</div>
<div class="box"><a href=
"https://petvideo.s3.amazonaws.com/dogrunning.mp4" class=
"image fit"><img src="images/dogrunning.png" alt="" /></a>
<div class="inner">
<h3>Dog running</h3>
<p>A dog frantically runs</p>
<a href="https://petvideo.s3.amazonaws.com/dogrunning.mp4" class=
"button style3 fit">Watch</a></div>
</div>
<div class="box"><a href=
"https://petvideo.s3.amazonaws.com/dogswimming.mp4" class=
"image fit"><img src="images/dogswimming.png" alt="" /></a>
<div class="inner">
<h3>Dog swimming</h3>
<p>A dog happily swims across a pool.</p>
<a href="https://petvideo.s3.amazonaws.com/dogswimming.mp4" class=
"button fit">Watch</a></div>
</div>
</div>
</div>
</div>
<!-- Footer -->
<footer id="footer">
<div class="inner">
<h2>Petflix hosted on AWS</h2>
<p>A project by Zaid Alli, John Robertson, Jamal Austin, Mario
Pendleton, and Matthew Dortch</p>
<ul class="icons">
<li><a href="#" class="icon fa-twitter"><span class=
"label">Twitter</span></a></li>
<li><a href="#" class="icon fa-facebook"><span class=
"label">Facebook</span></a></li>
<li><a href="#" class="icon fa-instagram"><span class=
"label">Instagram</span></a></li>
<li><a href="#" class="icon fa-envelope"><span class=
"label">Email</span></a></li>
</ul>
<p class="copyright">© Untitled. Design: <a href=
"https://templated.co">TEMPLATED</a>. Images: <a href=
"https://unsplash.com/">Unsplash</a>. Videos: <a href=
"http://coverr.co/">Coverr</a>.</p>
</div>
</footer>
<!-- Scripts -->
<script src="assets/js/jquery.min.js">
</script> 
<script src="assets/js/jquery.scrolly.min.js">
</script> 
<script src="assets/js/jquery.poptrox.min.js">
</script> 
<script src="assets/js/skel.min.js">
</script> 
<script src="assets/js/util.js">
</script> 
<script src="assets/js/main.js">
</script>
</body>
</html>

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
        This is a test
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
