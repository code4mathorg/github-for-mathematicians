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
  "title": "Git vs. GitHub asdfsadfas",
  "body": " Git vs. GitHub asdfsadfas   What Is Git?    An illustration of Git history   An illustration of a project's history controlled by Git     Git is a distributed version control system that tracks changes in any set of computer files. sadfsadf Git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel. Git is free and open-source software shared under the GPL-2.0-only license.  Two core concepts of Git are commits (illustrated in by circles) and branches (illustrated in by lines).    What Is Git Hub ?  Hello   "
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
  "id": "ch-first-repo",
  "level": "1",
  "url": "ch-first-repo.html",
  "type": "Chapter",
  "number": "2",
  "title": "Your First Repository",
  "body": " Your First Repository  Hello   Creating the repo  Hello    Using GitHub.dev  Hello    Commiting and syncing  Hello   "
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
  "body": " Open Educational Resources  Hello   PreTeXt  Hello    CheckIt  Hello   "
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
