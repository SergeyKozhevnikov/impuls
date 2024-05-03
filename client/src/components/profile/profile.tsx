import './style_profile.css';
import bBack from './img/bBack.svg'
import React from 'react';

function Profile() {
  return(
    <div id="page-profile">
      <header id="header-profile">
        <div id="header-left_site">
          <a id="profile-bBack" href="/main">
            <img src={bBack} alt="Вернуться"/>
          </a>
          <h1>Мой профиль</h1>
        </div>
        <div id="header-mainInfo">
          <p>Имя Фамилия</p>
          <p>пользователь/админ</p>
        </div>
      </header>
      <div id="infoProfile">
        {/* img строчный элемент, возможно стоит обернуть в div чтобы кнопки под картинку уехали @RusDa256*/}
        <div id="editPhoto">
          <img src="/img/UserImage.png" alt="Аватар пользователя" id="userImage"/>
          <div id="infoProfile-editPhoto-buttons">
            <label className="input-file">
              <input type="file" name="file"/>		
              <span>Загрузить фото</span>
            </label>
            <button id="bDelImg" type="button">Удалить</button>
          </div>
        </div>

        <div id='infoUserAndSave'>
          <div id="infoUser">
            <div className="infoUserValues" id="el1">
              <label>Логин</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el2">
              <label>Email</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el3">
              <label>Фамилия</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el4">
              <label>Телефон</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el5">
              <label>Имя</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el6">
              <label>Должность</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el7">
              <label>Отчество</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el8">
              <label>Город</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el9">
              <label>Роль</label>
              <input type="text"/>
            </div>
            <div className="infoUserValues" id="el10">
              <label>Пол</label>
              <input type="text"/>
            </div>
          </div>
          
          <div id="replacePas_Save">
              {/* что думаешь насчет диалогового окна @RusDa256? */}
              <a href="/replace_password" id="bReplacePas">Изменить пароль</a>
              <button id="bSave" type="button">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;