# Indie Fever 
[![My Skills](https://skillicons.dev/icons?i=mongodb,react,&theme=dark)](https://skillicons.dev)

Indie Fever is a minimalistic website dedicated to independent gaming projects made with React and MongoDB. It consists of an ecommerce section (homepage) and a news section (news). 

## Homepage
![Home](/readme/home.gif)
The homepage features a responsive grid that displays overall trending topics, a menu bar for game categories, a sales section, a most popular games section, and a latest releases section. Each of these three sections consists of a 2x4 grid (8 content blocks), with each block containing an image, a price tag, a platform tag, the game title, and a brief description.

## Login/Register
![Login](/readme/login.gif)
The login/register is connected to the MongoDB and allows user authentication/registration. Every field is case sensitive, and the password is encrypted using bcrypt.

## Post
![Post](/readme/post.gif)
The posting page consists of a form with the following fields: title, subtitle, author, content, tags and date. Through this form, users can easily input data that will be displayed in the news page. The tags are separated by commas. The initial news page will take up to 5 posts, with the subsequent ones being rendered on new news pages.
Additionaly, users can submit an image to be stored as binary data in the database. However, please note that images will not be rendered on the news page (yet!).

## News
![News](/readme/news.gif)
The news page features a menu bar for popular tags and a text section. Up to 5 posts are dynamically generated here from the database. The news page supports multipagination. 

<!-- ## Used libraries/packages
* @fontsource/merriweather@4.5.14
* @testing-library/jest-dom@5.16.5
* @testing-library/react@13.4.0
* @testing-library/user-event@13.5.0
* react-dom@18.2.0
* react-router-dom@6.9.0
* react-scripts@5.0.1
* react@18.2.0
* web-vitals@2.1.4
* reactstrap@9.1.6 -->
  
## Future Features
* Dark mode
* Translation (br-pt, fr)
* ~~News layout improvements~~
* Mobile version improvements


