import React, { useEffect, useState } from "react";
import style from "./secondPage.module.css";
import axios from "axios";

const SecondPage = () => {
  const [allUsers, setAllUsers] = useState([]).slice(0, 10);
  const [userId, setUserId] = useState(Number);
  const [idPost, setIdPost] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () =>
    axios.get("http://jsonplaceholder.typicode.com/posts").then((res) => {
      setAllUsers(res.data.slice(0, 10));
    });

  const getuserId = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdPost([]);
    if (userId !== 0) {
      axios
        .get(`http://jsonplaceholder.typicode.com/comments?postId=${userId}`)
        .then((res) => {
          setIdPost(res.data);
        });
    }
  };

  return (
    <>
      <form className={style.form}>
        <input
          placeholder="Введите userID"
          className={style.form__input}
          onChange={getuserId}
          type="number"
        ></input>
        <button className={style.form__button} onClick={handleSubmit}>
          Запросить посты юзера
        </button>
      </form>
      <div className={style.idPost__list_wrapper}>
        {idPost.map((post) => (
          <>
            <ul key={post.id} className={style.idPost__list}>
              <li className={style.idPost_list_item}>
                <h2 className={style.idPost__name}>{post.name}</h2>
              </li>
              <li className={style.idPost_list_item}>
                <p className={style.idPost__email}>{post.email}</p>
              </li>
              <li className={style.idPost_list_item}>
                <p className={style.idPost__name}>{post.body}</p>
              </li>
            </ul>
          </>
        ))}
      </div>
      <h2 className={style.title}> All posts</h2>
      <div className={style.user__wrapper}>
        {allUsers.map((user) => (
          <ul key={user.id} className={style.user__list}>
            <li className={style.user__list_item}>
              <h2 className={style.user__title}>{user.title}</h2>
            </li>
            <li className={style.user__list_item}>
              <p className={style.user__body}>{user.body}</p>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default SecondPage;
