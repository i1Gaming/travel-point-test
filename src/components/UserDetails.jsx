import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div className="user-detail">
      <h1 className="user-detail__name">{user.name}</h1>
      <h2 className="user-detail__title">Деталі</h2>
      <h3 className="user-detail__subtitle">Контактна Інформація</h3>
      <div className="user-detail__wrapper">
        <span className="user-detail__text user-detail__username">
          Ім'я Користувача - {user.username}
        </span>
        <span className="user-detail__text user-detail__email">
          Email - {user.email}
        </span>
        <span className="user-detail__text user-detail__phone">
          Телефон - {user.phone}
        </span>
        <span className="user-detail__text user-detail__website">
          Сайт - <a href={`http://${user.website}`}>{user.website}</a>
        </span>
      </div>
      <h3 className="user-detail__subtitle">Адреса</h3>
      <div className="user-detail__wrapper">
        <span className="user-detail__text user-address__city">
          Місто - {user.address.city}
        </span>
        <span className="user-detail__text user-address__street">
          Вулиця - {user.address.street}
        </span>
        <span className="user-detail__text user-address__suite">
          Будинок - {user.address.suite}
        </span>
        <span className="user-detail__text user-address__zipcode">
          Поштовий індекс - {user.address.zipcode}
        </span>
      </div>
      <h3 className="user-detail__subtitle">Місце роботи</h3>
      <div className="user-detail__wrapper">
        <span className="user-detail__text user-company__name">
          Назва компанії - {user.company.name}
        </span>
        <span className="user-detail__text user-company__catch-phrase">
          Слоган компанії - {user.company.catchPhrase}
        </span>
        <span className="user-detail__text user-company__bs">
          Галузь - {user.company.bs}
        </span>
      </div>
    </div>
  );
};

export default UserDetails;
