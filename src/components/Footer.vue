<template>
  <div>
    <footer>
      <div class="box1">
        <div style="display: flex">
          <div><img src="../assets/social/icons8-mail-24.png" alt="" /></div>
          <div
            style="
              font-size: 15px;
              padding: 10px;
              line-height: 20px;
              margin-top: 10px;
            "
          >
            Ўзбекистон Республикаси Давлат божхона қўмитаси
          </div>
        </div>
        <div
          style="
            color: #979da4;
            font-size: 14px;
            line-height: 28px;
            margin-top: 10px;
          "
        >
          Сайтдан олинган ҳар қандай маълумотлардан фойдаланганда Ўзбекистон
          Республикаси ДБҚ сайтидан олинганлиги кўрсатиб ўтилиши шарт. ЎзМАА
          Интернет-ОАВ гувоҳномаси № 0902© 2001-2021 Ўзбекистон Республикаси
          Давлат божхона қўмитаси
        </div>
      </div>
      <div class="box2">
        <div>
          <ul>
            <li>
              <img src="../assets/social/angle-right.svg" alt="" />
              <router-link to="/">Қўмита ҳақида</router-link>
            </li>
            <li>
              <img src="../assets/social/angle-right.svg" alt="" />
              <router-link to="/">Ҳужжатлар</router-link>
            </li>
            <li>
              <img src="../assets/social/angle-right.svg" alt="" />
              <router-link to="/">Статистика</router-link>
            </li>
            <li>
              <img src="../assets/social/angle-right.svg" alt="" />
              <router-link to="/">Боғланиш</router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <img src="../assets/social/angle-right.svg" alt="" />
              <router-link to="/">Фаолият</router-link>
            </li>
            <li>
              <img src="../assets/social/angle-right.svg" alt="" />
              <router-link to="/">Очиқ қўмита</router-link>
            </li>
            <li>
              <img src="../assets/social/angle-right.svg" alt="" />
              <router-link to="/">Оав учун</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="box3">
        <router-link to="/">
          <div>
            <img src="../assets/social/icons8-location-24.png" alt="" />
          </div>
          <div style="margin-left: 8px">
            100003, Тошкент шаҳри,Ислом Каримов кўчаси 3 уй
          </div>
        </router-link>

        <router-link to="/">
          <div><img src="../assets/social/icons8-phone-24.png" alt="" /></div>
          <div style="margin-left: 8px">(+998-78) 120-76-00</div>
        </router-link>

        <router-link to="/">
          <div><img src="../assets/social/icons8-mail-24.png" alt="" /></div>
          <div style="margin-left: 8px">info@customs.uz</div>
        </router-link>
        <div class="social">
          <img src="../assets/social/Facebook.svg" alt="" />
          <img src="../assets/social/Twitter.svg" alt="" />
          <img src="../assets/social/Telegram.svg" alt="" />
          <img src="../assets/social/Linkedin.svg" alt="" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
router-link {
  cursor: pointer;
  color: #979da4;
  font-size: 14px;
  font-weight: 500;
  display: flex;
}
.box2 ul li {
  padding-top: 6px;
}
.box2 ul li {
  padding-top: 6px;
}
.box3 ul li {
  padding-top: 6px;
}
router-link:hover {
  color: #39ae69;
}
footer {
  display: flex;
  padding: 40px 65px;
  width: 100%;
}
.box1 {
  flex-grow: 1;
  width: 35%;
  /* margin: 0 auto; */
}
.box1 img {
  width: 60px;
  margin-top: 20px;
}
.box2 {
  margin-top: 20px;
  display: flex;
  width: 35%;
}

.box2 > * {
  width: 50%;
}

.box3 {
  margin-top: 20px;
  width: 30%;
}
.box3 img {
  color: #39ae69;
}
.social {
  display: flex;
  margin-top: 30px;
}
.social img {
  margin-left: 10px;
  width: 30px;
  height: 30px;
  background-color: #3a4b5b;
  font-size: 11px;
  border-radius: 3px;
  cursor: pointer;
}
.social img:hover {
  background-color: #39ae69;
  transition: all 0.5s;
}
@media (max-width: 960px) {
  footer {
    flex-direction: column;
    /* align-items: center; */
  }

  footer > * {
    width: 100% !important;
  }
}
@media (max-width: 590px) {
  .box2 {
    flex-direction: column;
  }
  .box2 > div {
    width: auto;
  }
  .box2 ul {
    display: inline-flex;
    padding: 0;
    flex-wrap: wrap;
    margin-bottom: 0 !important;
  }
  .box2 ul li {
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
  }
}
@media (max-width: 400px) {
  footer {
    /* display: block; */
  }
  .box1,
  .box4 {
    width: 100%;
  }
  .box2,
  .box3 {
    width: 50%;
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }
}
</style>
