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
                <img src={star} alt="yt. logo" ></img>Yanting's Blog<img src={star} alt="yt. logo"/>
              </center>
            </h1>
          </div>
          <div>
            <img src = {mypicture} alt = "myself" className='picture-img'></img>
          </div>
          <div className = 'myselfinfo word1'>
            <h2 className='word'>
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
            </h2>
          </div>
          <div className = 'myselfinfo_r word1'>
            <h2>無聊的調查 </h2>
              <ul>
                <li>
                  <form>
                    姓名 :  <input type="TEXT" name="NAME" size="25"></input>
                  </form>
                </li>
                <li>
                  <form>
                    性別：<input type="TEXT" name="NAME" size="25"></input>
                    {/* <input type="RADIO" name="SEX" value="BOY"> 男</input>  */}
                    {/* <INPUT TYPE="RADIO" NAME="SEX" VALUE="GIRL"> 女 
                    <INPUT TYPE="RADIO" NAME="SEX" VALUE="OTHER"> 不公開  */}
                  </form>
                </li>
                <li>
                  <form>
                    喜好：<input type="TEXT" name="NAME" size="25"></input>
                    {/* <input TYPE="CHECKBOX" NAME="SEX" VALUE="MOVIE">電影</input>
                    <input TYPE="CHECKBOX" NAME="SEX" VALUE="BOOK">看書</input>
                    <input TYPE="CHECKBOX" NAME="SEX" VALUE="OTHER">其他</input> */}
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
                    按下按鈕   <button value="true">重新整理???</button>
                  </form>
                </li>
               
                <form>
                  <input type="SUBMIT" value="送出資料"></input>
                  <input type="RESET" value="重新填寫"></input>
                </form>
              </ul>
          </div>
          <div>
          {/* <div  className="divstyle1" >
            <button style = {s}>👉👉👉CLICK ME👈👈👈</button>
            <p>   </p>
            <p className = "word p2" >我喜歡的主題</p>
            <ul className = "word1" >
              <li>米奇</li>
              <li>蠟筆小新</li>
              <li>小熊維尼</li>
            </ul>
          </div> */}
            {/* <div  className="divstyle2" >
              <button style = {s}>👉👉👉CLICK ME👈👈👈</button>
              <p>   </p>
              <p2 className = "word p2" >我喜歡的主題</p2>
              <ul2 className = "word1" >
                <li>米奇</li>
                <li>蠟筆小新</li>
                <li>小熊維尼</li>
              </ul2>
            </div> */}
            {/* <div  className="divstyle3" >
              <button style = {s}>👉👉👉CLICK ME👈👈👈</button>
              <p>   </p>
              <p2 className = "word p2" >我喜歡的主題</p2>
              <ul2 className = "word1" >
                <li>蘋果</li>
                <li>ਸੇਬ</li>
                <li>ఆపిల్</li>
              </ul2>
            </div> */}
        </div>                
      </div>
  );
}

ReactDOM.render(
  testFunction(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
