<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Getting Started</title>
    <link href="css/gettingStarted.css" rel="stylesheet" type="text/css">

</head>

<body>

<header>
        Getting Started with Your Website
</header>
<aside id="dirImage" class="imagezoom"> <a href="AssignmentDirStructure.html" target="_blank"><img src="images/AssignmentDirStructure.png" width="451" height="600" alt=""/></a>
</aside>

    
<div class="imagezoom">
    <div class="magnifyMe">
      <div class="iamMagnified" style="left: -54.5px; top: 131.844px; background-position: 11.375% 46.974%;"></div>
    </div>
</div>
<main>
        <h1>Introduction</h1>
        <p>Note: To stop this page from displaying when you try to access your website, you will have to remove index.html and replace it with your own creation of index.html per assignment guidelines in Assignmen 00. </p>
        <p>I've created web space on my domain to complete your lab work. It is also known as your <em>Development Environment</em>. You will be creating your lab assignments and uploading them to my site so that I can grade them and make sure they work. It also makes it very easy for me to answer questions you may have if your JavaScript functions don't work. </p>
        <p>Here is your website location:

            <?php
            // current directory
            $cwd = getcwd();

            // get the directory name from the path
            $pathArray = explode( "/", $cwd );
            $arrayLen = count( $pathArray );
            $dirName = $pathArray[ $arrayLen - 2 ];

            // display message regarding the current directory
            echo "<strong>http://dbrodersen.com/Students/";
            echo $dirName . "</strong>\n";

            ?>
        </p>
        <p>You can also access it at <a href="http://dbrodersen.com/Students" target="_blank">http://dbrodersen.com/Students</a>; where you will be able to see:</p>
        <ul>
            <li>Assignment Solutions by Picking My Link at the bottom of the page.</li>
            <li>The work of your fellow classmates. </li>
        </ul>
        <p>You will want to bookmark this link:  <a href="http://dbrodersen.com/Students" target="_blank">http://dbrodersen.com/Students</a></p>
        <article class="alert notSecure">This development environment is similar to working in a college science lab. Nothing is secure or private. Just like students in a physics lab who can look at the work in progress on a peer's project, your aspiring JavaScript peers (fellow students in this class) can see the work you do. Do not put anything in your account that you don't want others to see. Each week I download student lab work for the entire class. <br><br> 
        The work that you complete in this introductory class will be sufficiently trivial to discourage interested in stealing your work for their own publication.
        </article>
            
        <article class="alert neverDo">
            <strong>Never, never, never</strong> use a <em>library</em> or <em>framework</em> to complete your work, such as, but not limited to <a href="https://en.wikipedia.org/wiki/Modernizr" target="_blank">Modernizer</a>, <a href="https://en.wikipedia.org/wiki/JQuery" target="_blank">JQuery</a>, <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" target="_blank">bootstrap</a>, <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank">nodeJS</a>, etc. unless instructed to do so.<br><br> 
            Libraries and frameworks can be very beneficial in a production environment, but they will prevent you from learning some very important JavaScript concepts as well as making it nearly impossible to debug your code if you run into problems.<br><br>
            You will get a zero (0) for your assignment grade unless otherwise directed in the assignment. 
        </article>
    <article>
    <h1>Links to FTP client software</h1>
        <h3>To download Cyberduck or FillZilla click the icon below. </h3>
    <p><a href="https://cyberduck.io/" target="_blank"><img src="images/Cyberduck-Logo.png" width="125" height="90" alt=""/></a>
        <a href="https://filezilla-project.org/" target="_blank"><img src="images/FilezillaLogo.png" width="102" height="100" alt=""/></a></p>
    <h1>Your Directory and Files</h1>
        <p>An image presenting a general directory structure is presented to the right.</p>
        <p>When you first access your directory, you will find several files and folders. </p>
        <p>Your directory currently has an index.htm file it it. This origional index.html file contains the code that redirected your browser to the file you are now viewing. This webpage is located in your gettingStarted folder (subdirectory), which is a PHP that has some scripting that can only be executed on the server and allows me to present information unique to your account. </p>
        <p>You do not need to understand PHP for this course.</p>
        <p>Delete the <em>index.html</em> file and replace it with your own per assignment guidelines. </p>
        <h2>folder discriptions. </h2>
        <ul>
            <li><strong>gettingStarted</strong>: containes the files and assetts for displaying the getting started information (Do not Delete)</li>
            <li><strong>css</strong> : contains cascading style sheets for your assignments.</li>
            <li><strong>js</strong>: contains JavaScript files for your assignments</li>
            <li><strong>data</strong>: contains the data resources for your assignments</li>
            <li><strong>images</strong>: contains the image files for all your web pages</li>
        </ul>
        <h2>File Discriptions.</h2>
        <ul>
            <li>All of the files described below are the starting points for your assignments. Many have little or no code in them at all. Replace or edit the files as necessary to complete your assignments. </li>
            <li><strong>index.html:</strong> Currently the home page that contains a redirector to the gettingStarted page. Replace it with your own page. </li>
            <li><strong>A1.html - A8.html:</strong> Assignment pages with desccriptions of the assignment</li>
            <li><strong>index.css, A1.css - A8.css: </strong>are empty cascading style sheet files that you will be linking to your assignments as needed.</li>
            <li><strong>menu.js, pageTitle.js, A1.js - A8.js:</strong> Empty JavaScript files to hold your code as assigned. You will be establishing links to these files in the web pages that you develop.</li>
        </ul>
    </article>
               
            <article class="alert html5Warning">All web pages page must be in HTML5.    </article>
</main>

</body>
</html>