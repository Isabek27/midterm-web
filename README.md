# MatchIQ Pro

Educational project (midterm) — a responsive multi-page football analytics website in a dark theme. 
It displays match statistics, league standings, a player database, and AI predictions based on xG.

## Pages

| File | Section |
|------|--------|
| `index.html` | Dashboard: key metrics, goals per matchweek chart, player of the week |
| `match.html` | Match Center: live / finished / upcoming matches with filters |
| `standings.html` | EPL Standings with expected points (xPts) |
| `players.html` | Player Database: goals, assists, passing accuracy |
| `ai.html` | AI Analytics: team form trends and outcome probabilities |
| `contact.html` | Contact: API access request form |

The sidebar menu (navigation) is present on every page; on tablets and mobile phones, it collapses into a "☰" toggle button.

## Implemented Features (based on requirements)

**HTML:** semantic tags (`header`, `nav`, `aside`, `main`, `section`, `article`, `figure`), headings, lists, links, images; **table** — `standings.html`; **form** — `contact.html`; `div` and `span` for structure.

**CSS (`css/style.css`):** `:root` variables, classes and IDs, consistent color scheme and Inter font; **Flexbox** (menu, header, cards), **CSS Grid** (dashboard cards, match card body, bar chart); **positioning** — `sticky` (menu and header), `absolute` (LIVE/FT badges, search icon, chart axis labels), `relative` (parents for absolute elements).

**Responsive Design:** media queries for tablets (`max-width: 991.98px`) and mobile phones (`max-width: 575.98px`); Bootstrap grid (`row`, `col-lg-*`, `col-md-*`, `col-xl-*`) and utility classes (`d-flex`, `mb-*`, `w-100`, `h-100`, `btn`, `table-responsive`, `collapse`).

**JS (`js/main.js`, optional):** match filters and card search.

## Structure

```text
index.html  match.html  standings.html  players.html  ai.html  contact.html
css/style.css
js/main.js
img/            — SVG team logos and avatars (created for the project)