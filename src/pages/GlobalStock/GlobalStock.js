import { useEffect, useState } from "react";
import { getGlobalStockEventList } from "../../apis/stockApis";
import TopNav from "../../components/TopNav/TopNav";

import styles from "./GlobalStock.module.css";
import HeaderCard1 from "../../assets/images/slide8_04.png";
import HeaderCard2 from "../../assets/images/slide9_04.png";
import EventInfo from "../../components/EventInfo/EventInfo";
import EventCard from "../../components/EventCard/EventCard";
import { useNavigate } from "react-router-dom";
import eventInfos from "../../data/eventsDummy.json";

const eventCards = [
  {
    cardImage: HeaderCard1,
    title: (
      <>
        <span className={styles.primaryColor}>일본주식 매수 수수료 0%</span>
      </>
    ),
    list: [
      "(온라인, 매도 시 고객별 수수료 적용)",

      "* MTS, HTS, WTS 거래 시 적용",
    ],
  },
  {
    cardImage: HeaderCard2,
    title: (
      <>
        <span className={styles.primaryColor}>엔화 환전 우대 95%</span>
      </>
    ),
    list: [
      "이벤트 비대상: (매매기준율 + 스프레드 100% 적용) 환율 ",
      "우대 미적용",
      "매매기준율이란 고시된 (매수 환율 + 매도 환율)/2, ",
      "신한투자증권 고시 매매 기준 ",
      "환율 적용",
      "매수기준 환율과 매도기준 환율 간에 차이가 있으므로, ",
      "환전시 비용 발생 가능",
    ],
  },
  // { num: 3, title: "대상", text: "신한투자증권 생애 첫 계좌 개설 신규 고객" },
];


const GlobalStock = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState();

  useEffect(() => {
    fetchEvents();
  }, [])

  const fetchEvents = async () => {
    const response = await getGlobalStockEventList();
    setEvents(response);
  }

  return (
    <>
      <TopNav />
      {/*상단 탭 */}
      <div className={styles.tabMenuContainer}>
        <button onClick={() => navigate("/")}>국내 주식</button>
        <button onClick={() => navigate("/global")}>해외 주식</button>
      </div>

      <div className={styles.container}>
        <section className={styles.header}>
          {events && events.map((event, idx) => (
            <div key={idx}>
              <div className={styles.headerSubTitle}>{event.subTitle}</div>
              <div className={styles.headerTitle}>
                <span className={styles.primaryColor}>{event.title}</span>
              </div>
              {/* 카드 섹션 */}
              {event.benefits.map(benefit => (
                <EventCard key={benefit.id} event={benefit} />
              ))}

              {/* 혜택받으러가기 버튼 */}
              <a>
                <div className={styles.applyButton}>{event.buttonLabel}</div>
              </a>
            </div>
          ))}

          {/* 기간/대상 */}
          <div className={styles.infoContainer}>
            {eventInfos && eventInfos.map((event, idx) => (
              <EventInfo key={idx} title={event.title} text={event.text} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GlobalStock;