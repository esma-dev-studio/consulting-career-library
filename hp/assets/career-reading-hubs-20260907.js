// Authored source module. Native React integration; no MutationObserver/DOM reparenting.
import { j as jsx } from "./art-BNH4Pxxt.js";

export const careerHubs = [
  { id: 9680, key: "job-hunting", title: "コンサル就活を始めたい", detail: "企業研究からES・面接まで、準備の順番を整理します。", link: "就活ロードマップを読む" },
  { id: 7826, key: "case", page: true, title: "ケース面接を練習したい", detail: "考え方、解き方、実践練習へ。今の課題に合う記事を探せます。", link: "ケース面接の学習ガイドを読む" },
  { id: 8852, key: "transfer", title: "未経験から転職したい", detail: "経験の棚卸しから職務経歴書・面接まで、転職準備を進めます。", link: "未経験転職ロードマップを読む" },
  { id: 10495, key: "growth", title: "若手コンサルとして成長したい", detail: "仕事の進め方やレビューの受け方を、日々の実務につなげます。", link: "若手コンサルの成長ガイドを読む" },
  { id: 9626, key: "freelance", title: "独立・副業の準備を整理したい", detail: "案件探しの前に、経験・働き方・条件の確認点を整理します。", link: "独立・副業の準備ガイドを読む" },
  { id: 9656, key: "resources", title: "資料を学習に活かしたい", detail: "テンプレートやチェックリストを、準備や振り返りに活用します。", link: "資料活用のガイドを読む" }
];

function trackHub(event, hub) {
  if (event.defaultPrevented || (event.type === "auxclick" && event.button !== 1)) return;
  if (window.location.origin !== "https://escape.kuroma-akuto.com" || window.location.pathname !== "/hp/career/") return;
  if (typeof window.gtag !== "function") return;
  const params = {
    send_to: "G-LTQ73KPGCJ", content_group: "consulting-career",
    source_kind: "career_home", source_post_id: "career_home", target_post_id: String(hub.id),
    topic_cluster: hub.key, link_position: "home_reading_hubs", link_variant: "internal-links-v1",
    page_location: "https://escape.kuroma-akuto.com/hp/career/", page_referrer: ""
  };
  try {
    const debug = new URL(window.location.href).searchParams.getAll("ecc_debug");
    if (debug.length === 1 && debug[0] === "1") params.debug_mode = true;
    window.gtag("event", "career_article_click", params);
  } catch (_) { /* Analytics must never block navigation. */ }
}

export function CareerReadingHubs() {
  return jsx.jsxs("section", {
    id: "articles", className: "ecc-reading", "aria-labelledby": "ecc-reading-title",
    children: [
      jsx.jsxs("div", { className: "ecc-reading__intro", children: [
        jsx.jsx("p", { className: "ecc-reading__eyebrow", children: "CAREER GUIDES" }),
        jsx.jsx("h2", { id: "ecc-reading-title", children: "今の課題から、記事を読む。" }),
        jsx.jsx("p", { children: "就活・転職・独立・日々の成長。目的に合うガイドから、次の一歩を見つけてください。記事は登録なしで読めます。" })
      ]}),
      jsx.jsx("div", { className: "ecc-reading__grid", children: careerHubs.map((hub, i) =>
        jsx.jsxs("a", {
          className: "ecc-reading__card", href: "https://kuroma-akuto.com/?" + (hub.page ? "page_id=" : "p=") + hub.id,
          "data-career-hub": String(hub.id),
          onClick: event => trackHub(event, hub), onAuxClick: event => trackHub(event, hub),
          children: [
            jsx.jsx("span", { className: "ecc-reading__number", "aria-hidden": true, children: "0" + (i + 1) }),
            jsx.jsx("h3", { children: hub.title }),
            jsx.jsx("p", { children: hub.detail }),
            jsx.jsxs("span", { className: "ecc-reading__link", children: [hub.link, jsx.jsx("span", { "aria-hidden": true, children: " →" })] })
          ]
        }, hub.key)
      )})
    ]
  });
}
