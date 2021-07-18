import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import star from './pic/123.gif';
import mypicture from './pic/S__32382979.jpg';

const styleArgument = { fontSize: '50px', color: 'white', font: 'Arial'};
const s = {width: 250 };


const testFunction =()=> {
  return( 
      <div>
          <div>
             <h1 style = {styleArgument} >
              <center>
                <img src={star} alt="yt. logo" ></img>Yanting's Blog<img src={star} alt="yt. logo"></img>
              </center>
            </h1>
          </div>

          <div className='sidebar_left'>
            <img src = {mypicture} alt = "myself" className='picture-img '></img>
          </div>

          <div className = 'word content'>
            <p>自我介紹XD</p>
              <p>
                <ul>
                  <li>姓名 : 陳嬿婷  </li>
                  <li>生日 : 0223 </li>
                  <li>興趣 : 轉魔術方塊 </li>
                  <li>Facebook : <a href="https://www.facebook.com/yanting0223/">嬿婷</a></li>
                  <li>Instagram :  <a href="https://www.instagram.com/yanting0223/?hl=zh-tw">嬿婷</a></li>
                  <li>最近想做的事 : 回家🏡</li>
                </ul> 
              </p>
          </div>
          
          <div className = 'word1 sidebar_right Info'>
              <p>無聊的調查</p>
                <ul>
                  <li>
                    <form>
                      姓名 :  <input type="TEXT" name="NAME" size="25"></input>
                    </form>
                  </li>
                  <li>
                    <form>
                      性別：<input type="TEXT" name="NAME" size="25"></input>
                    </form>
                  </li>
                  <li>
                    <form>
                      喜好：<input type="TEXT" name="NAME" size="25"></input>
                    </form>
                  </li>
                  <li>
                    <form>
                      您喜歡看書嗎？
                      <select name="LIKE">
                        <option value="非常喜歡">非常喜歡</option>
                        <option value="還算喜歡">還算喜歡</option>
                        <option value="不太喜歡">不太喜歡</option>
                        <option value="非常討厭">非常討厭</option>
                        <option valueE="其他">其他</option>
                      </select>
                    </form> 
                  </li>
                  <li>
                    <form>
                      不喜歡蔬菜？
                      <select name="LIKE">
                        <option value="苦瓜">苦瓜</option>
                        <option value="青椒">青椒</option>
                        <option value="紅蘿蔔">紅蘿蔔</option>
                        <option value="其他">其他</option>
                      </select>
                    </form>
                  </li>
                  <li>
                     <form>
                      按下按鈕   <button>重新整理???</button>
                    </form>
                  </li>
                  <form>
                    <input type="SUBMIT" value="送出資料"></input>
                    <input type="RESET" value="重新填寫"></input>
                  </form>
                </ul>
          </div>
          <div className='sidebar_left1'>
            <button style = {s} onClick = {true} >👉👉👉CLICK ME👈👈👈</button>
            <p>   </p>
            <p className = "word" style = {s}>我喜歡的卡通</p>
            <ul className = "word1">
              <li>烏龍派出所</li>
              <li>蠟筆小新</li>
              <li>多拉A夢</li>
            </ul>
          </div>
          <div className='content1'>
          <button style = {s} onClick = {true} >👉👉👉CLICK ME👈👈👈</button>
            <p>   </p>
            <p className = "word" style = {s}>我喜歡的主題</p>
            <ul className = "word1" >
              <li>米奇</li>
              <li>蠟筆小新</li>
              <li>小熊維尼</li>
            </ul>
          </div>
          <div className='sidebar_right1'>
            <button style = {s} onClick = {true} >👉👉👉CLICK ME👈👈👈</button>
            <p>   </p>
            <p className = "word" style = {s}>我喜歡的卡通</p>
            <ul className = "word1">
              <li>蘋果</li>
              <li>ਸੇਬ</li>
              <li>ఆపిల్</li>
            </ul>
          </div>
          <div className="comment"> 
            <form >
            <p class="word1">Comments:</p>
              <p><label for = "promo"><textarea name="comments" rows="3" cols="50" class="word1">可以留言給我但我看不到XDDD</textarea></label></p>
              <p className="pp"><input type="submit" value="送出資料"/></p>
            </form>
          </div>
          <div className="re sidebar_left2">
            <font ><p>圖片來源</p></font>
              <font>
                <ul>
                  <li>http://classic-album.udn.com/j3388004/photo/9627940</li>
                  <li>https://blog.xuite.net/wanwanjudy27/happy/29546050</li>
                </ul>
              </font>
          </div>
        </div>
  );
}

ReactDOM.render(
  testFunction(),
  document.getElementById('root')
);

reportWebVitals();
