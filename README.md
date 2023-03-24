# Indie Fever

Indie Fever is a minimalistic website dedicated to independent gaming projects. It consists of an ecommerce section (homepage) and a news section (news). 

## Homepage
![Home](home.gif)
The homepage features a responsive grid that displays overall trending topics, a menu bar for game categories, a sales section, a most popular games section, and a latest releases section. Each of these three sections consists of a 2x4 grid (8 content blocks), with each block containing an image, a price tag, a platform tag, the game title, and a brief description.

## News
![News](news.gif)
The news page features a menu bar for popular tags and a text section. The left portion of the text section is reserved for small, brief headlines. The content displayed includes: title, author, date, description, and three tags of choice. The right portion is reserved for more important headlines, and in addition to the contents of the left portion, there is also a space for a 500px wide image. This whole text section is rendered three times before the bottom of the page, which is marked by a 'go to next page' button.

## Login/Register
![Login](login.gif)
The login/register link in the navbar is responsive. When the user clicks on it, it shows a login popup. If the user clicks on the 'sign up' button, the popup changes to a signup form. The form has three fields: email, password, and confirm password. If the password and confirmed password match, the user will receive an alert ('Check your email for a link'). If the passwords do not match, another alert will pop up ('Passwords don't match').

## Used libraries/packages
* @fontsource/merriweather@4.5.14
* @testing-library/jest-dom@5.16.5
* @testing-library/react@13.4.0
* @testing-library/user-event@13.5.0
* react-dom@18.2.0
* react-router-dom@6.9.0
* react-scripts@5.0.1
* react@18.2.0
* web-vitals@2.1.4
* reactstrap@9.1.6
  
## Future Features
* Dark mode
* Translation (br-pt, fr)
* News layout improvements
* Mobile version improvements


