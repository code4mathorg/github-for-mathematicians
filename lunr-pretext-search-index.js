var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Steven Clontz  Department of Mathematics and Statistics  Univeristy of South Alabama    American Institute of Mathematics          jmm2024.clontz.org   https:\/\/jmm2024.clontz.org   copyright   "
},
{
  "id": "sec-git-github",
  "level": "1",
  "url": "sec-git-github.html",
  "type": "Section",
  "number": "1",
  "title": "Git vs. GitHub",
  "body": " Git vs. GitHub  Hello world    "
},
{
  "id": "sec-first-repo",
  "level": "1",
  "url": "sec-first-repo.html",
  "type": "Section",
  "number": "2",
  "title": "Your First Repository",
  "body": " Your First Repository  Hello  "
},
{
  "id": "sec-github-pages",
  "level": "1",
  "url": "sec-github-pages.html",
  "type": "Section",
  "number": "3",
  "title": "Websites with GitHub Pages",
  "body": " Websites with GitHub Pages  Hello  "
},
{
  "id": "sec-coding",
  "level": "1",
  "url": "sec-coding.html",
  "type": "Section",
  "number": "4",
  "title": "Writing and Running Code",
  "body": " Writing and Running Code  Hello  "
},
{
  "id": "sec-oer",
  "level": "1",
  "url": "sec-oer.html",
  "type": "Section",
  "number": "5",
  "title": "Open Educational Resources",
  "body": " Open Educational Resources  Hello  "
},
{
  "id": "sec-collaboration",
  "level": "1",
  "url": "sec-collaboration.html",
  "type": "Section",
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
  "body": " This article was authored in PreTeXt .  "
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
