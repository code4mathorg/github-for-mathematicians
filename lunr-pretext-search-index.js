var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   jmm2024.clontz.org   https:\/\/jmm2024.clontz.org   copyright  "
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
  "body": " Git vs. GitHub  Hello   What Is Git?  Hello   "
},
{
  "id": "ch-first-repo",
  "level": "1",
  "url": "ch-first-repo.html",
  "type": "Chapter",
  "number": "2",
  "title": "Your First Repository",
  "body": " Your First Repository  Hello  "
},
{
  "id": "ch-github-pages",
  "level": "1",
  "url": "ch-github-pages.html",
  "type": "Chapter",
  "number": "3",
  "title": "Websites with GitHub Pages",
  "body": " Websites with GitHub Pages  Hello  "
},
{
  "id": "ch-coding",
  "level": "1",
  "url": "ch-coding.html",
  "type": "Chapter",
  "number": "4",
  "title": "Writing and Running Code",
  "body": " Writing and Running Code  Hello  "
},
{
  "id": "ch-collaboration",
  "level": "1",
  "url": "ch-collaboration.html",
  "type": "Chapter",
  "number": "5",
  "title": "Open Educational Resources",
  "body": " Open Educational Resources  Hello  "
},
{
  "id": "ch-collaboration",
  "level": "1",
  "url": "ch-collaboration.html",
  "type": "Chapter",
  "number": "6",
  "title": "Collaborating with Students and Colleagues",
  "body": " Collaborating with Students and Colleagues  Hello  "
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
