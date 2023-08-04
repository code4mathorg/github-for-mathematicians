var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   jmm2024.clontz.org   https:\/\/jmm2024.clontz.org   copyright  This work includes materials used under license from the following works:    Wikipedia       CC BY-SA 4.0      "
},
{
  "id": "pre-abstract",
  "level": "1",
  "url": "pre-abstract.html",
  "type": "Preface",
  "number": "",
  "title": "Abstract",
  "body": " Abstract  Increasingly, the cyberinfrastructure of mathematics and mathematics education is built using GitHub to organize projects, courses, and their communities. In this PEP, participants will learn the basic features of GitHub available using only a web browser, and how to use these features to participate in GitHub-hosted mathematical projects with colleagues and\/or students.  "
},
{
  "id": "pre-workshop-info",
  "level": "1",
  "url": "pre-workshop-info.html",
  "type": "Preface",
  "number": "",
  "title": "Workshop Details",
  "body": " Workshop Details  This workshop will take place on Wednesday January 3, 2024, 1:00 p.m.-3:00 p.m, and Thursday January 4, 2024, 1:00 p.m.-3:00 p.m.  We will be located at Foothill E, Marriott Marquis San Francisco.  More information about JMM 2024 in San Francisco can be found at JointMathematicsMeetings.org .  "
},
{
  "id": "ch-git-github",
  "level": "1",
  "url": "ch-git-github.html",
  "type": "Chapter",
  "number": "1",
  "title": "Git vs. GitHub",
  "body": " Git vs. GitHub   What Is Git?    An illustration of Git history   An illustration of a project's history controlled by Git    Git is a distributed version control system that tracks changes in any set of computer files. Git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel. Git is free and open-source software.  Two core concepts of Git are commits (illustrated in by circles) and branches (illustrated in by lines). A commit represents the state of of your project at a particular point in its history. Branches allow this history to not be linear: you can branch off to experiment on a particular new feature, then merge this feature branch back into the main branch when it's complete. This is particularly useful when multiple people collaborate ( ) on a Git-managed project.  A Git project is often called a repository , or repo for short.    What Is Git Hub ?  Another key feature of Git is the ability to share your project, along with its history, with other people. This is generally accomplished by hosting your repository on a service such as GitHub : GitHub.com . (Other such services include BitBucket.org and GitLab.com .)  We'll use GitHub not only to host our repositories, but also because it provides all the tools needed to author content using only a web browser: no need for multiple installations or memorizing incantations like git commit -m \"foobar\" to type into a command line prompt.    An example  An example of a project using Git and GitHub is the document you're reading right now! This project is open-sourced and shared at , and was created completely using the tools described here.   "
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
  "id": "p-9",
  "level": "2",
  "url": "ch-git-github.html#p-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Git "
},
{
  "id": "p-10",
  "level": "2",
  "url": "ch-git-github.html#p-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commits branches "
},
{
  "id": "p-11",
  "level": "2",
  "url": "ch-git-github.html#p-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "repository repo "
},
{
  "id": "p-12",
  "level": "2",
  "url": "ch-git-github.html#p-12",
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
  "body": " Your First Repository   Making an account  All the features of GitHub we'll be using are available using a free GitHub account. Make your account by visiting .  Many mathematicians are also eligible for GitHub's educator discount, which provides additional functionality and computational resources normally only available to Pro users. Visit while logged into your account to request it. (You do not need to wait for approval before continuing to the next section.)    Creating the repo  Once logged in, a new repository can be created by pressing the + button in the toolbar, or visiting .  The repository will need a name, which can be something like my-first-repo for this tutorial. (GitHub will also suggest a cute random name like ubiquitous-space-tribble if you have writer's block.)  Repositories can be public to everyone on the internet or private to only people you approved. I encourage you to work publicly, to make it easier to collaborate with the open-source community I can personally attest to publishing many garbage repositories on GitHub (along with my hopefully-useful ones), and no one has called me out for it yet!  The last option we'll make sure to select is to Initialize this repository with: Add a README file . Then click Create repository .    Editing README.md  While logged into GitHub.com, you have the ability to edit individual files on your repositories. (If your repository is public, others can see those files, but cannot edit them unless you make them a collaborator, see .)  An easy way to edit an individual file is just to click the pencil icon such as the one that appears on your README. This file is written in Markdown , a markup language that takes plain text like *this* and renders it like this .  Try to edit your file to say something like I'm learning how to use GitHub!     Using GitHub.dev  Hello    Commiting and syncing  Hello   "
},
{
  "id": "p-19",
  "level": "2",
  "url": "ch-first-repo.html#p-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "public private "
},
{
  "id": "p-22",
  "level": "2",
  "url": "ch-first-repo.html#p-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Markdown "
},
{
  "id": "ch-github-pages",
  "level": "1",
  "url": "ch-github-pages.html",
  "type": "Chapter",
  "number": "3",
  "title": "Websites with GitHub Pages",
  "body": " Websites with GitHub Pages  Hello   Starting with a template  Hello    Posts and pages  Hello    Tweaking the layout  Hello    Just let me host some HTML!  Hello   "
},
{
  "id": "ch-coding",
  "level": "1",
  "url": "ch-coding.html",
  "type": "Chapter",
  "number": "4",
  "title": "Writing and Running Code",
  "body": " Writing and Running Code  Hello   Codespaces  Hello    Jupyter notebooks  Hello   "
},
{
  "id": "ch-oer",
  "level": "1",
  "url": "ch-oer.html",
  "type": "Chapter",
  "number": "5",
  "title": "Open Educational Resources",
  "body": " Open Educational Resources  Hello   PreTeXt  Hello    A sample interactive   Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: If is an even number, then .    Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So we have the displayed equation: .  This is a superfluous second paragraph in this block.    Thus .   Dorothy will not be much help with this proof.    CheckIt  Hello   "
},
{
  "id": "fig-geogebra",
  "level": "2",
  "url": "ch-oer.html#fig-geogebra",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": "  A sample interactive  "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "ch-oer.html#number-theory-proof",
  "type": "Checkpoint",
  "number": "5.1.2",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": "Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: If is an even number, then .    Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So we have the displayed equation: .  This is a superfluous second paragraph in this block.    Thus .   Dorothy will not be much help with this proof. "
},
{
  "id": "ch-collaboration",
  "level": "1",
  "url": "ch-collaboration.html",
  "type": "Chapter",
  "number": "6",
  "title": "Collaborating with Students and Colleagues",
  "body": " Collaborating with Students and Colleagues  Hello   Adding collaborators  Hello    Forks and Pull Requests  Hello   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
