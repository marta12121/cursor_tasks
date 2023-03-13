import logo from './logo.svg';
import './App.css';
import Post from './components/Post.js';


const ANAKIN_IMAGE = "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/10/27120854/Hayden-Christensen-FI-1.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const TICK = "https://cdn-icons-png.flaticon.com/512/6520/6520110.png",
      COMMENT  = "https://cdn-icons-png.flaticon.com/512/5338/5338282.png",
      LIKE = "https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png",
      SHARE = "https://icons.veryicon.com/png/o/miscellaneous/dowell/share-244.png",
      DOWNLOAD = "https://icons-for-free.com/iconfiles/png/512/download+file+page+paper+icon-1320165844661536600.png";

const postData = [
  {
    author:{
      name: "Anakin Skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    count:{
      like_count:450,
      share_count: 234,
      comment_count: 325,
    },

    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:RAY_IMAGE,
    date:"26 feb",
  },
];
function App() {
  return (
    <Post 
    author_image={postData[0].author.photo}
    author_name={postData[0].author.name} 
    author_nick={postData[0].author.nickname} 
    post_date={postData[0].date}
    content={postData[0].content} 
    image={postData[0].image} 
    data={postData[0].data}
    tick={TICK}
    comment={COMMENT}
    like={LIKE}
    share={SHARE}
    download={DOWNLOAD} 
    like_count = {postData[0].count.like_count}
    share_count = {postData[0].count.share_count}
    comment_count = {postData[0].count.comment_count}/>
  );
}

export default App;
