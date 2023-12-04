var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  jmm2024.clontz.org   copyright  This work includes materials used under license from the following works:    Wikipedia       CC BY-SA 4.0      "
},
{
  "id": "pre-abstract",
  "level": "1",
  "url": "pre-abstract.html",
  "type": "Preface",
  "number": "",
  "title": "Abstract",
  "body": " Abstract  Increasingly, the cyberinfrastructure of mathematics and mathematics education is built using GitHub to organize projects, courses, and their communities. The goal of this book is to help readers learn the basic features of GitHub available using only a web browser, and how to use these features to participate in GitHub-hosted mathematical projects with colleagues and\/or students.  "
},
{
  "id": "pre-workshop-info",
  "level": "1",
  "url": "pre-workshop-info.html",
  "type": "Preface",
  "number": "",
  "title": "JMM 2024 Details",
  "body": " JMM 2024 Details  This workshop will take place on Wednesday January 3, 2024, 1:00 p.m.-3:00 p.m, and Thursday January 4, 2024, 1:00 p.m.-3:00 p.m.  We will be located at Foothill E, Marriott Marquis San Francisco.  More information about JMM 2024 in San Francisco can be found at JointMathematicsMeetings.org .  "
},
{
  "id": "ch-git-github",
  "level": "1",
  "url": "ch-git-github.html",
  "type": "Chapter",
  "number": "1",
  "title": "Git vs. GitHub",
  "body": " Git vs. GitHub   What Is Git?    An illustration of Git history   An illustration of a project's history controlled by Git    Git is a distributed version control system that tracks changes in any set of computer files. This software was originally authored by Linus Torvalds in 2005 for development of the Linux kernel. Importantly, Git is free and open-source software, which means you have the legal and practical ability to use it however you want, and even modify it for your purposes if you wanted.  Two core concepts of Git are commits (illustrated in by circles) and branches (illustrated in by lines). A commit represents the state of of your project at a particular point in its history. Branches allow this history to not be linear: you can branch off to experiment on a particular new feature, then merge this feature branch back into the main branch when it's complete. This is particularly useful when multiple people collaborate ( ) on a Git-managed project. Finally, a Git project is often called a repository , or repo for short.  Since you're reading GitHub for Mathematicians , I'm obligated to describe Git history as either a finite partial order, or a loopless directed graph, depending on your preferred flavor of mathematical models. In particular, you might consider the normal history of a file to be a linear order: article.tex , then article-dec-1.tex , then article-dec-1-fixed.tex , and so on. But with Git, you don't need to track your version history with filenames, you (and your colleagues) can branch your history into several timelines, you can merge them back together again, and look up the state of your project at any point where you committed your work.    What Is Git Hub ?  Another key feature of Git is the ability to share your project, along with its history, with other people. This is generally accomplished by hosting your repository on a service such as GitHub : GitHub.com . (Other such services include BitBucket.org and GitLab.com .)  Importantly, GitHub is not itself open-source software, but is a service owned and operated by Microsoft. However, Microsoft makes GitHub available for use at no cost to the public, with additional pro features available for free to instructors and researchers.  We'll use GitHub not only as a host for our repositories, but also to take advantage of all the tools it provides to author content using only a web browser. If you've looked into using Git in the past, you may have hesitated due to the apparent need for software developer experience to get started. However, using GitHub's web applications, there will be no need for complicated installations or memorizing command line incantations like git commit -m \"foobar\" . (Of course, you still can choose to use such tools to get as much control over your Git project as you want, should the need ever arise.)  Another reason to use GitHub: community! GitHub is often marketed as a social coding platform , because it not only provides tools to create and deliver digital content, but it also provides social features such as Following users, Starring repositories, participation in Discussions and Issues, and more. Particular in open-source, we like to work together and support each other, and GitHub provides much of the social cyberinfrastructure necessary to do so efficiently.    An example  An example of a project using Git and GitHub is the document you're reading right now! This book is open-sourced and shared at , and was authored completely using the GitHub web browser features we will explore together in this book.   "
},
{
  "id": "fig-git-branches",
  "level": "2",
  "url": "ch-git-github.html#fig-git-branches",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  An illustration of Git history   An illustration of a project's history controlled by Git  "
},
{
  "id": "sec-what-is-git-3",
  "level": "2",
  "url": "ch-git-github.html#sec-what-is-git-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Git "
},
{
  "id": "sec-what-is-git-4",
  "level": "2",
  "url": "ch-git-github.html#sec-what-is-git-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commits branches repository repo "
},
{
  "id": "sec-what-is-github-2",
  "level": "2",
  "url": "ch-git-github.html#sec-what-is-github-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "GitHub "
},
{
  "id": "ch-first-repo",
  "level": "1",
  "url": "ch-first-repo.html",
  "type": "Chapter",
  "number": "2",
  "title": "Your First Repository",
  "body": " Your First Repository   Making an account  All the features of GitHub we'll be using are available using a free GitHub account. Make your account by visiting .  Many mathematicians are also eligible for GitHub's educator discount, which provides additional functionality and computational resources normally only available to Pro users. Visit while logged into your account to request it. (You do not need to wait for approval before continuing to the next section.)    Creating the repo  Once logged in, a new repository can be created by pressing the + button in the toolbar, or visiting .  The repository will need a name, which can be something like my-first-repo for this tutorial. (GitHub will also suggest a cute random name like ubiquitous-space-tribble if you have writer's block.)  Repositories can be public to everyone on the internet or private to only people you approved. I encourage you to work publicly, to make it easier to collaborate with the open-source community I can personally attest to publishing many garbage repositories on GitHub (along with my hopefully-useful ones), and no one has called me out for it yet!  The last option we'll make sure to select is to Initialize this repository with: Add a README file . Then click Create repository .    Editing README.md  While logged into GitHub.com, you have the ability to edit individual files on your repositories. (If your repository is public, others can see those files, but cannot edit them unless you make them a collaborator, see .)  An easy way to edit an individual file is just to click the pencil icon such as the one that appears on your README. This file is written in Markdown , a markup language that takes plain text like *this* and renders it like this .  Try to edit your file to say something like I'm learning how to use GitHub! , perhaps adding a link back to this document using [this markup](https:\/\/g4m.clontz.org) . You can click the Preview tab to see what your README will look like, and visit sites like or to learn more. GitHub also provides a panel of several formatting options you can click on.  When you're happy with your updated README, click the Commit changes button. This will create a new commit , representing a new moment in your project's history. You should write a useful commit message summarizing the work you've done since your last commit (or perhaps keep the default Update README.md ) Doing this will update the README visible on your repository homepage on GitHub.com.  Finally, you might be interested in visiting the Insights tab for your repository, and specifically the Network page. It should reveal a graphic similar to visualizing the history of you project across all GitHub collaborators. Right now you don't have any collaborators and just a couple commits, but keeping in mind this model for your project history will be useful as we juggle various commits and pushes and syncs and so on down the line.    Using GitHub.dev  Using the GitHub.com interface to author or edit just one file can be useful (I do this all the time to make quick typo fixes on my blog), but you will likely be using GitHub to manage projects that involve editing mulitple files at the same time, and likely you will have non-text files (such as images) that you need to include in your work as well.  One way to quickly be able to manage several files at once is to use the GitHub.dev service offered by GitHub. Try clicking that link - you should have a fully-functional VS Code text editor right inside your web browser.  (This is a good point to suggest that you use an updated version of Chrome or Firefox when using GitHub. In particular, Safari tends to show off its rough edges when using advanced web applications like GitHub.dev, so it's best to choose an alternative.)  You can create files, edit them, upload images, and do whatever you like at GitHub.dev. But this isn't your repository - it's just an example. So, we'll need a way to tell GitHub.dev we want to work on the repository we just made instead.  There are two very easy ways to accomplish this. The first is to just change the address of your repository from github.com to github.dev . For example, if your repository lives at https:\/\/github.com\/YourUserName\/YourGreatRepo , you should visit https:\/\/github.dev\/YourUserName\/YourGreatRepo .  The other trick is even fancier. When you are visiting https:\/\/github.com\/YourUserName\/YourGreatRepo in your web browser and not writing in a text box, press the period ( . ) key.  Either way, you should now have a GitHub.dev window where you can manage all the files of your project. Using the Explorer sidebar, you can create new files, rename files, move files, upload files, and more. Selecting a file opens it, and lets you edit it as needed. Your changes are saved automatically in GitHub.dev, but they won't show up at GitHub.com just yet.    Commiting your Work  After you're tried creating\/editing\/uploading a few files, now it's time to commit those changes to your repository. The easiest way to do this is to use the Source Control sidebar. You may have noticed that a numerical badge appeared by the Source Control icon as you created, edited, or deleted files. This number represents the number of files that have been changed in some way since the previous commit. By opening the Source Control panel, you'll see a list of these files.  Clicking these file names not only lets you open the file and edit it further, but you are shown a diff - a summary of the lines that have been altered since the previous commit. (This is a good reason to not write in a long continuous line, but to break lines every 80ish characters or so. That way you can easily see where exactly a change is made between each commit.)  The idea is this: edit as you see fit, knowing that your files are being saved at GitHub.dev and won't be lost if you accidentally refresh your web browser. However, you'll need to eventually commit those changes to the repository in order to share your work with anyone else, and to ensure that the work is preserved in the long term. The Source Control panel provides a place to write a commit message , a short phrase or sentence that summarizes the work you've done. (Writer's block? For now just type learning GitHub.dev .) Then once you click the Commit and Push button, your work will be logged as a permanent commit to the repository.  This is a good point to review your commit history again. You probably have three commits: the initial commit made when you created the repository, the README.md update you made using GitHub.com's editing interface, and this more elaborate GitHub.dev commit involving possibly several files. To visualize this history, you can go to the Insights\/Network page described earlier, or click on the 3 commits link from your GitHub.com repository homepage to see a linearization of this history. From there you can click on each commit to see exactly what has changed from the previous commit across all files.   "
},
{
  "id": "sec-creating-the-repo-4",
  "level": "2",
  "url": "ch-first-repo.html#sec-creating-the-repo-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "public private "
},
{
  "id": "sec-editing-readme-md-3",
  "level": "2",
  "url": "ch-first-repo.html#sec-editing-readme-md-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Markdown "
},
{
  "id": "sec-editing-readme-md-5",
  "level": "2",
  "url": "ch-first-repo.html#sec-editing-readme-md-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commit "
},
{
  "id": "sec-using-github-dev-8",
  "level": "2",
  "url": "ch-first-repo.html#sec-using-github-dev-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Explorer "
},
{
  "id": "sec-commiting-and-syncing-2",
  "level": "2",
  "url": "ch-first-repo.html#sec-commiting-and-syncing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Source Control "
},
{
  "id": "sec-commiting-and-syncing-3",
  "level": "2",
  "url": "ch-first-repo.html#sec-commiting-and-syncing-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diff "
},
{
  "id": "sec-commiting-and-syncing-4",
  "level": "2",
  "url": "ch-first-repo.html#sec-commiting-and-syncing-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commit message "
},
{
  "id": "ch-github-pages",
  "level": "1",
  "url": "ch-github-pages.html",
  "type": "Chapter",
  "number": "3",
  "title": "Websites",
  "body": " Websites   Using GitHub Pages  Having made your first repository in , and committed a few changes, you are now ready to share your work with the public. One way is to share a link to your repository at GitHub.com ; as long as you made it a public repository, anyone can see your files.  Another option is to use GitHub Pages to host a customizable website with your work. This can be done with any existing repository, so let's try it out with our existing example first. Use GitHub.dev to create two files in the root of your project.   Create a blank text file named .nojekyll (note the period at the start). This will disable some advanced features of GitHub Pages we don't need right now.    Create an index.html file. This book won't discuss how to author much HTML, as we'll learn how to author our website content in Markdown in the next section, but for now add the following content:   <!-- index.html --> <html> <head> <title>My website!<\/title> <\/head> <body> <p>Thanks for visiting!<\/p> <img src=\".\/git-branches.png\"> <\/body> <\/html>     Download git-branches.png from and upload it to GitHub.dev.     Commit this update to your repository using Source Control, and confirm you see the two new files on your GitHub.com repository webpage.  To enable GitHub Pages, go to your repository Settings, and choose Pages from the sidebar. From there you can select to Deploy from a branch , using the main branch and the \/ (root) directory, and after a few moments your site will be enabled.  Once enabled, GitHub will provide a link to your public GitHub Pages website, hosted at GitHub.io . Click it and you'll see the content of your index.html file, which displays the image downloaded as git-branches.png . (It should look like this .)  It's good to remember how to distinguish the three GitHub domains:    GitHub.com is where your repository lives. It can be public or private.     GitHub.dev is where you can make changes to your repository through your web browser. This is private to you and you must commit and push your changes to the GitHub.com repository every so often.     GitHub.io is your public GitHub Pages website, which you can edit by updating your repository files.     I recommend you add a link to your GitHub.io website from your GitHub.com repository page. On your repository page, there's an About sidebar. You can edit this section to add whatever details you like, and there's a checkbox to automatically add a link to your GitHub.io website for everyone's convenience.    Using a Template  While you can create a custom website by authoring HTML, it'd be great to not have to! There are several templates available for GitHub Pages that allow you to author your content in Markdown, as well as providing nice themes, automatic linking between different sections of your website, and so on.  Note that GitHub Pages uses something called Jekyll to generate websites from Markdown files. So if you want to look around the internet for your perfect template, try seaching for Jekyll templates or GitHub Pages templates in your favorite search engine.  For this book, I've created a fork of the Minimal Mistakes template. A fork of a repository is a copy someone else makes of the original. In this case, I made a fork so that I could ensure my book stays compatible with the template I'm providing you, even if the original template receives an update from its author. I'm allowed to do this because the Minimal Mistakes template is made available under the terms of the open-source MIT license .  Certain repositories on GitHub are designated as templates . A template creates a shallow copy of all the files in the repository, without the full history of the project. This is meant for situations like a GitHub Pages website, where you probably don't care about every single change that was made to create the template you're using; you just want the latest working files so you can insert your own pages and posts and get them online.  Visit my Minimal Mistakes fork and click Use this template , and Create a new repository . This creates a new repository you own on GitHub.com , and you can follow the instructions in the previous section to enable GitHub Pages. Once that's done, visit your new GitHub.io website to see the placeholder content of your new website (don't forget to update your repository page's About sidebar to add a convenient link).    Posts and pages  Hello   "
},
{
  "id": "sec-upload-html-3",
  "level": "2",
  "url": "ch-github-pages.html#sec-upload-html-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "GitHub Pages "
},
{
  "id": "sec-using-a-template-4",
  "level": "2",
  "url": "ch-github-pages.html#sec-using-a-template-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fork "
},
{
  "id": "sec-using-a-template-5",
  "level": "2",
  "url": "ch-github-pages.html#sec-using-a-template-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "templates "
},
{
  "id": "ch-pi-base",
  "level": "1",
  "url": "ch-pi-base.html",
  "type": "Chapter",
  "number": "4",
  "title": "<span class=\"process-math\">\\(\\pi\\)<\/span>-Base Database for Topology",
  "body": " -Base Database for Topology  Hello  "
},
{
  "id": "ch-coding",
  "level": "1",
  "url": "ch-coding.html",
  "type": "Chapter",
  "number": "5",
  "title": "Writing and Running Code",
  "body": " Writing and Running Code  Hello   Codespaces  Hello    Jupyter notebooks  Hello    SageMath  Hello   "
},
{
  "id": "ch-oer",
  "level": "1",
  "url": "ch-oer.html",
  "type": "Chapter",
  "number": "6",
  "title": "PreTeXt",
  "body": " PreTeXt   What is PreTeXt?  Hello    A sample interactive   Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: If is an even number, then .    Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So we have the displayed equation: .  This is a superfluous second paragraph in this block.    Thus .   Dorothy will not be much help with this proof.   "
},
{
  "id": "fig-geogebra",
  "level": "2",
  "url": "ch-oer.html#fig-geogebra",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": "  A sample interactive  "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "ch-oer.html#number-theory-proof",
  "type": "Checkpoint",
  "number": "6.1.2",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": "Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: If is an even number, then .    Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So we have the displayed equation: .  This is a superfluous second paragraph in this block.    Thus .   Dorothy will not be much help with this proof. "
},
{
  "id": "ch-lean",
  "level": "1",
  "url": "ch-lean.html",
  "type": "Chapter",
  "number": "7",
  "title": "Lean theorem prover",
  "body": " Lean theorem prover  Hello  "
},
{
  "id": "ch-collaboration",
  "level": "1",
  "url": "ch-collaboration.html",
  "type": "Chapter",
  "number": "8",
  "title": "Collaborating with Students and Colleagues",
  "body": " Collaborating with Students and Colleagues  Hello   LiveShare  Hello    Adding collaborators  Hello    Forks and Pull Requests  Hello   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
