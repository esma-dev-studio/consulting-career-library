# Career article entry points (2026-09-07)

This distribution adds a native React section after `#target`, linking to six published guides. LINE, Discord, existing analytics configuration, and other routes are unchanged.

The repository currently exposes the built `gh-pages` distribution. The new entry asset is derived from `career-By-XBRvF.js` at commit `460f46e`; it preserves that release's banner-aware header positioning. Original assets remain available for rollback.

Authored component: `../assets/career-reading-hubs-20260907.js`.
Scoped styles: `../assets/career-reading-hubs-20260907.css`.
Entry asset: `../assets/career-internal-links-20260907.js`.

For the next upstream rebuild, port the authored component into the main React tree after the target-audience section, add `記事を読む -> #articles` to both navigation layouts and the active-section observer, and preserve the responsive header classes. Do not overwrite this deployment with an older build that omits these changes.

## Published guide destinations

| Topic | WordPress destination |
| --- | --- |
| Job hunting | `?p=9680` |
| Case interviews | `?page_id=7826` |
| Career change | `?p=8852` |
| Consultant growth | `?p=10495` |
| Independent/side-job consulting | `?p=9626` |
| Study resources | `?p=9656` |

All links use `https://kuroma-akuto.com/`. The resources guide is an article, not the separate materials landing page. The no-JavaScript fallback exposes the same six destinations.

## Measurement and regression checks

Hub clicks emit `career_article_click` to the already configured HP stream `G-LTQ73KPGCJ`. WordPress uses a separate stream; do not merge those event counts as though they were a single property. No new `config` or `page_view` call is added. Event parameters contain fixed topic/placement labels and numeric article IDs, not link text, search terms or arbitrary URL queries. `ecc_debug=1` enables debug mode for a controlled test.

After changes, verify six rendered cards, both menu variants, mobile-menu closing, no horizontal overflow at 390/768/1024/1440 px, unchanged LINE/Discord destinations, and the existing banner/header offset. Check the guide destinations remain published and canonical. A received click event is not proof of increased PV.
