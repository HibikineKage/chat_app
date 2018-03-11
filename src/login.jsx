import React from 'react';
import io from 'socket.io-client';

export default function Login(props) {
  const socket = io();
  return (
    <div>
      <input type="text" name="ID" id="ID"/>
      <label htmlFor="ID">ID:</label>
      <input type="password" name="PassWord" id="PassWord"/>
      <label htmlFor="PassWord">パスワード:</label>
      <button onClick={() => {
        const ID = document.getElementById('ID').value;
        const PassWord = document.getElementById('PassWord').value;
        if(ID===/\w{5,}/ && PassWord===/\w{5,}/) {
          socket.emit('Login', ID, PassWord);
        }else {
          alert('IDとパスワードは少なくとも5文字以上の英数字で入力してください');
        }}}>
        ログイン
      </button>
    </div>
  )
}