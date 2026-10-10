// ATHLETA Taiwan 團隊資料（由小封更新）
// 文字欄位可以是 '中文'，或 ['中文', '日本語'] 讓網站顯示雙語。
window.ATHLETA_DATA = {
  updated: '2026-10-10',

  // 每月進度：
  // { month: 'YYYY-MM', draft: 草案就填 true, theme: 本月主題,
  //   groups: [ { name: 分組名稱, tasks: [ { t: 待辦事項, done: true/false, owner: '負責人', due: 'MM/DD' } ] } ],
  //   shoots: [ { pillar: PRODUCT|PEOPLE|FOOTBALL|CULTURE, title: 拍攝內容, person: '人物', date: 'MM/DD', status: 待拍攝|已拍攝|已發布 } ] }
  //   ※ shoots 是本月內容清單；status 為「已發布」的項目會算進「實際比例」（同一則內容發多平台只列一次）。
  //   points: { purchased: 本月購入 Points（50／75／100／125 會自動帶入方案與合作費；其他數量可加 fee: 金額） }   ← 上月延展會自動計算
  //   usage: [ { date: 'MM/DD', task: 工作名稱, content: 服務的內容企劃, pillar: PRODUCT|PEOPLE|FOOTBALL|CULTURE,
  //              type: Photography|Reel|Social Post|Content Staff|Article|Campaign|Other, qty: 數量,
  //              points: 只有 Campaign／Other／特別報價時才填, status: PLANNED|SCHEDULED|IN PROGRESS|COMPLETED|CANCELLED, note: 備註 } ]
  //   單價：Photography 5/小時、Reel 10/支、Social Post 2/則、Content Staff 1/小時、Article 5 起
  months: [
    {
      month: '2026-10',
      theme: ['整理所有社群，放出 ATHLETA 的歷史內容', '全SNSを整理し、ATHLETAの歴史コンテンツを公開する'],
      groups: [
        { name: ['整理所有社群', '全SNSの整理'], tasks: [
          { t: ['盤點所有官方帳號（IG、FB、Threads、LINE）：帳號名稱、管理者、登入權限', '全公式アカウント（IG・FB・Threads・LINE）の棚卸し：アカウント名、管理者、ログイン権限'], done: false },
          { t: ['統一四個平台的大頭貼、名稱、簡介與連結', '4媒体のアイコン・名前・プロフィール文・リンクを統一する'], done: false },
          { t: ['整理舊貼文：決定保留、封存或隱藏與新方向不符的內容', '過去の投稿を整理：新しい方向性に合わないものを残すか、アーカイブか、非表示にするかを決める'], done: false },
          { t: ['IG 精選動態（Highlights）重新分類並換封面', 'IGハイライトを分類し直し、カバーを作り直す'], done: false },
          { t: ['FB 粉專資訊更新：門市地址、營業時間、聯絡方式', 'FBページの情報更新：店舗住所、営業時間、連絡先'], done: false },
          { t: ['LINE 官方帳號檢查：歡迎訊息、圖文選單、自動回覆', 'LINE公式アカウントの確認：あいさつメッセージ、リッチメニュー、自動応答'], done: false },
          { t: ['訂出各平台發文格式與語氣（第一版）', '各媒体の投稿フォーマットとトーンを決める（初版）'], done: false },
          { t: ['確認各平台負責人與發文頻率', '各媒体の担当者と投稿頻度を決める'], done: false }
        ] },
        { name: ['放出 ATHLETA 歷史內容', 'ATHLETAの歴史コンテンツを公開'], tasks: [
          { t: ['向日本方取得品牌歷史資料與照片，確認可使用的範圍', '日本側からブランドの歴史資料と写真をもらい、使用できる範囲を確認する'], done: false },
          { t: ['整理時間軸：1935 巴西誕生 → 日本延續與發展 → 2017 台灣啟程', '年表を整理：1935年ブラジルで誕生 → 日本での継承と発展 → 2017年台湾でスタート'], done: false },
          { t: ['收集台灣 2017 年至今的舊照片（門市、活動、合作）', '2017年以降の台湾の写真（店舗・イベント・コラボ）を集める'], done: false },
          { t: ['確認三顆星標誌的由來與意義，做成一則內容', '三つ星マークの由来と意味を確認し、1本の投稿にする'], done: false },
          { t: ['企劃歷史系列：集數、每集主題、發布日期', '歴史シリーズを企画：回数、各回のテーマ、公開日'], done: false },
          { t: ['製作並發布歷史系列（IG 輪播＋FB 長文＋Threads 短文）', '歴史シリーズを制作・公開（IGカルーセル＋FB長文＋Threads短文）'], done: false }
        ] }
      ],
      shoots: [],
      points: { purchased: 50 },
      usage: []
    },
    {
      month: '2026-11', draft: true,
      theme: ['開始穩定發文，四條內容線都出現', '安定した投稿を始め、4つの柱をすべて出す'],
      groups: [
        { name: ['發文與內容', '投稿とコンテンツ'], tasks: [
          { t: ['依新格式穩定發文，四大支柱各至少出現一次', '新しいフォーマットで安定して投稿し、4つの柱をそれぞれ最低1回出す'], done: false },
          { t: ['第一批人物內容：光桑、翔太、門市夥伴', '最初の人物コンテンツ：光さん、翔太さん、店舗スタッフ'], done: false },
          { t: ['FOOTBALL 試拍一次', 'FOOTBALLの試し撮りを1回'], done: false }
        ] },
        { name: ['建立工作流程', 'ワークフローづくり'], tasks: [
          { t: ['寫好可重複使用的拍攝流程（拍攝前、現場、收素材）', '繰り返し使える撮影フローをまとめる（撮影前・現場・素材回収）'], done: false },
          { t: ['寫好品牌語氣說明（各平台怎麼說話）', 'ブランドのトーンガイドを作る（媒体ごとの話し方）'], done: false },
          { t: ['Content Bank 開始建檔，統一檔名規則', 'Content Bankへの登録を始め、ファイル名のルールを統一する'], done: false },
          { t: ['企劃 12–1 月的固定系列', '12〜1月の定番シリーズを企画する'], done: false }
        ] }
      ],
      shoots: []
    },
    {
      month: '2026-12', draft: true,
      theme: ['固定系列上線', '定番シリーズを開始'],
      groups: [
        { name: ['固定系列', '定番シリーズ'], tasks: [
          { t: ['決定固定系列的名稱與視覺（商品、人物、門市、足球、品牌文化）', '定番シリーズ（商品・人物・店舗・サッカー・ブランドカルチャー）の名前とビジュアルを決める'], done: false },
          { t: ['「ATHLETA PEOPLE」系列定案並上線', '「ATHLETA PEOPLE」シリーズを確定して開始する'], done: false },
          { t: ['各系列固定發布頻率', '各シリーズの投稿頻度を固定する'], done: false }
        ] },
        { name: ['各平台', '各媒体'], tasks: [
          { t: ['FB：人物故事與完整相簿', 'FB：人物ストーリーとアルバム'], done: false },
          { t: ['Threads：每週固定觀點', 'Threads：毎週決まった視点の投稿'], done: false },
          { t: ['LINE：系列預告與會員內容', 'LINE：シリーズ予告と会員向けコンテンツ'], done: false }
        ] }
      ],
      shoots: []
    },
    {
      month: '2027-01', draft: true,
      theme: ['每個系列累積到至少 3 集', '各シリーズを最低3回まで積み上げる'],
      groups: [
        { name: ['系列累積', 'シリーズの積み上げ'], tasks: [
          { t: ['每個系列至少發布 3 集', '各シリーズを最低3回公開する'], done: false },
          { t: ['檢視系列反應，調整或停掉效果差的', 'シリーズの反応を見て、効果の低いものは調整または中止する'], done: false }
        ] },
        { name: ['準備走出去', '外に出る準備'], tasks: [
          { t: ['列出 2–3 月 FOOTBALL 合作名單（球隊、球員、創作者）', '2〜3月のFOOTBALLコラボ候補リストを作る（チーム、選手、クリエイター）'], done: false },
          { t: ['開始聯繫外部人物與球隊', '外部の人物・チームへの連絡を始める'], done: false }
        ] }
      ],
      shoots: []
    },
    {
      month: '2027-02', draft: true,
      theme: ['走進台灣足球圈', '台湾サッカー界に入り込む'],
      groups: [
        { name: ['外部拍攝', '外部での撮影'], tasks: [
          { t: ['拍攝外部球員、教練', '外部の選手・コーチを撮影する'], done: false },
          { t: ['拍攝球隊訓練或比賽', 'チームの練習・試合を撮影する'], done: false }
        ] },
        { name: ['各平台', '各媒体'], tasks: [
          { t: ['IG：球員、教練、球隊 Reels', 'IG：選手・コーチ・チームのリール'], done: false },
          { t: ['FB：賽事與活動紀錄', 'FB：試合・イベントの記録'], done: false },
          { t: ['Threads：比賽討論與台日足球話題', 'Threads：試合の話題と日台サッカー'], done: false }
        ] }
      ],
      shoots: []
    },
    {
      month: '2027-03', draft: true,
      theme: ['完成第一組合作', '最初のコラボを実現する'],
      groups: [
        { name: ['合作', 'コラボ'], tasks: [
          { t: ['完成至少一組台日或球隊合作（E CAMPAIGN）', '日台またはチームとのコラボを最低1件実施する（E CAMPAIGN）'], done: false },
          { t: ['外部人物與球隊的內容比例明顯增加', '外部の人物・チームの投稿の割合をはっきり増やす'], done: false },
          { t: ['LINE：活動報名、預購', 'LINE：イベント申込、予約販売'], done: false }
        ] },
        { name: ['準備 4–5 月', '4〜5月の準備'], tasks: [
          { t: ['企劃 4 月十週年預熱內容', '4月の10周年に向けた助走コンテンツを企画する'], done: false },
          { t: ['確認 5 月十週年 Campaign 的規模與預算', '5月の10周年キャンペーンの規模と予算を確認する'], done: false }
        ] }
      ],
      shoots: []
    },
    {
      month: '2027-04', draft: true,
      theme: ['十週年預熱：這十年發生了什麼', '10周年に向けた助走：この10年に何があったのか'],
      groups: [
        { name: ['回顧內容', '振り返りコンテンツ'], tasks: [
          { t: ['回溯人物訪談', '振り返りインタビュー'], done: false },
          { t: ['歷史照片翻拍與整理', '昔の写真の複写と整理'], done: false }
        ] },
        { name: ['各平台', '各媒体'], tasks: [
          { t: ['IG：歷史照片與人物回溯', 'IG：昔の写真と人物の振り返り'], done: false },
          { t: ['FB：十年故事長文', 'FB：10年のストーリーの長文'], done: false },
          { t: ['Threads：倒數與回憶', 'Threads：カウントダウンと思い出'], done: false },
          { t: ['LINE：十週年活動預告', 'LINE：10周年イベントの予告'], done: false }
        ] }
      ],
      shoots: []
    },
    {
      month: '2027-05', draft: true,
      theme: ['ATHLETA Taiwan 十週年', 'ATHLETA Taiwan 10周年'],
      groups: [
        { name: ['十週年', '10周年'], tasks: [
          { t: ['5/1 發布十週年主視覺與 Campaign', '5月1日に10周年キービジュアルとキャンペーンを公開する'], done: false },
          { t: ['執行並記錄十週年活動', '10周年イベントの実施と記録'], done: false },
          { t: ['FB 完整紀錄、Threads 即時互動', 'FBで全記録、Threadsでリアルタイムの交流'], done: false },
          { t: ['LINE：活動、預購、導購', 'LINE：イベント、予約販売、購入案内'], done: false }
        ] }
      ],
      shoots: []
    }
  ],

  // 素材庫：{ title, pillar: PRODUCT|PEOPLE|FOOTBALL|CULTURE, person, format: 照片|影片|文字, orient: 直式|橫式, status: 未發布|已發布, date: 'YYYY-MM-DD' }
  bank: [],

  // 人物清單：{ name, role, stage: 待邀請|已邀請|已拍攝|已發布 }
  people: []
};
