// =====================================================
//   KokoMemo Homepage v2 — script.js
//   Features: i18n (VI/JP/EN), Sakura, Animations
// =====================================================

// ===== i18n TRANSLATIONS =====
const translations = {
  vi: {
    nav_features: "Tính năng",
    nav_screenshots: "Giao diện",
    nav_travel: "Du lịch",
    nav_reviews: "Đánh giá",
    cta_free: "Dùng thử miễn phí",
    hero_badge: "🇻🇳 × 🇯🇵 Ứng dụng hữu ích cho tất cả mọi người",
    hero_title: "Người bạn đồng hành thông minh của bạn ở mọi nơi",
    hero_subtitle: "Bắt nguồn từ nhu cầu nhớ nơi đã mua mỹ phẩm, tìm cửa hàng tiện lợi tại Nhật và chia sẻ kinh nghiệm mua sắm — KokoMemo giờ đây là nơi lý tưởng để quản lý đồ dùng, ghi lại nhật ký và khám phá 800+ điểm đến Việt Nam & Nhật Bản.",
    cta_start: "✨ Bắt đầu miễn phí",
    cta_explore: "Khám phá thêm →",
    stat_spots: "Địa điểm du lịch",
    stat_langs: "Ngôn ngữ hỗ trợ",
    stat_free: "Miễn phí",
    mock_hello: "こんにちは! 🌸",
    mock_today: "Hôm nay bạn thế nào?",
    mock_using: "Đang dùng",
    mock_expiring: "Sắp hết",
    mock_expiring_soon: "Sắp hết hạn ⚠️",
    mock_3days: "Còn 3 ngày",
    mock_7days: "Còn 7 ngày",
    mock_travel: "🗺️ Du lịch Việt-Nhật",
    feat_badge: "Tính năng nổi bật",
    feat_title: "Mọi thứ bạn cần, trong một ứng dụng 🌸",
    feat_subtitle: "KokoMemo được thiết kế với mục tiêu ban đầu là hỗ trợ cuộc sống của người Việt tại Nhật, nhưng giờ đây nó là công cụ hữu ích cho bất kỳ ai muốn quản lý cuộc sống thông minh hơn.",
    feat1_title: "Quản lý Đồ dùng thông minh",
    feat1_desc: "Theo dõi hạn sử dụng mỹ phẩm, đồ gia dụng Nhật. Nhận thông báo trước khi hết hạn để không bao giờ lãng phí!",
    feat1_l1: "✅ Nhắc nhở hạn sử dụng", feat1_l2: "✅ Theo dõi chu kỳ tiêu dùng",
    feat1_l3: "✅ Quản lý nhiều danh mục", feat1_l4: "✅ Lưu link mua lại",
    feat2_badge: "Được yêu thích nhất 💕",
    feat2_title: "Nhật ký & Ghi chú nhanh",
    feat2_desc: "Lưu giữ tâm trạng trong ngày và chép lại những ý tưởng, ghi chú bất chợt một cách nhanh chóng.",
    feat2_l1: "✅ Ghi nhận tâm trạng", feat2_l2: "✅ Đính kèm hình ảnh",
    feat2_l3: "✅ Ghi chú ý tưởng nhanh", feat2_l4: "✅ Tìm kiếm dễ dàng",
    feat3_title: "Bản đồ Du lịch Song phương",
    feat3_desc: "Khám phá 800+ địa điểm tại Việt Nam & Nhật Bản với mô tả đa ngôn ngữ.",
    feat3_l1: "✅ 800+ điểm đến kiểm duyệt", feat3_l2: "✅ Tin tức du lịch cập nhật",
    feat3_l3: "✅ Cộng đồng chia sẻ", feat3_l4: "✅ Hỗ trợ VI / JP / EN",
    feat4_title: "Quản lý Công việc",
    feat4_desc: "Lên kế hoạch mua sắm, việc nhà và cá nhân. Không bao giờ bỏ lỡ điều gì quan trọng.",
    feat4_l1: "✅ Task có độ ưu tiên", feat4_l2: "✅ Gắn link sản phẩm", feat4_l3: "✅ Đặt ngày hết hạn",
    feat5_title: "Giao diện Cá nhân hóa",
    feat5_desc: "Nhiều theme theo cảm xúc: Sakura hồng, Midnight xanh, Vintage hoài cổ.",
    feat5_l1: "✅ 5+ theme có sẵn", feat5_l2: "✅ Tạo theme cá nhân", feat5_l3: "✅ Chuyển đổi tức thì",
    feat6_title: "Lưu Địa điểm Yêu thích",
    feat6_desc: "Lưu địa chỉ nhà, công ty và tích hợp Google Maps để điều hướng ngay lập tức.",
    feat6_l1: "✅ Lưu lịch trình theo địa điểm", feat6_l2: "✅ Tích hợp Google Maps", feat6_l3: "✅ Xem cửa hàng gần nhất",
    ss_badge: "Giao diện App", ss_title: "Giao diện tinh tế và trực quan ✨",
    ss_subtitle: "Thiết kế tối giản, thân thiện, giúp bạn thao tác nhanh chóng và quản lý thông tin dễ dàng.",
    ss1_name: "Cô chủ nhỏ ✨", ss1_tag: "Hôm nay bạn thế nào?",
    ss1_stock: "Dự trữ", ss1_diary: "Hôm nay có tâm trạng tốt!",
    ss1_title: "Trang chủ thông minh", ss1_desc: "Tổng quan nhanh về đồ dùng và cảm xúc",
    ss2_back: "← Quay lại", ss2_hdr: "Đồ dùng", ss2_progress: "Còn 35% · 3 ngày nữa hết",
    ss2_tag1: "Đang dùng", ss2_tag2: "Yêu thích",
    ss2_title: "Chi tiết sản phẩm", ss2_desc: "Theo dõi chu kỳ, hạn dùng và đánh giá",
    ss3_hdr: "🗺️ Du lịch", ss3_vn: "400+ địa điểm", ss3_jp: "400+ địa điểm",
    ss3_news: "📰 Tin du lịch mới nhất", ss3_n1: "🌸 Mùa hoa anh đào Tokyo 2025",
    ss3_n2: "🌊 Lễ hội biển Đà Nẵng",
    ss3_title: "Khám phá du lịch", ss3_desc: "800+ địa điểm cùng tin tức mới nhất",
    trav_badge: "Điểm đặc biệt",
    trav_title: "Sổ tay du lịch của riêng bạn 🌏",
    trav_desc: "Lưu giữ, chia sẻ và khám phá những trải nghiệm du lịch tuyệt vời. Từ những quán cafe nhỏ bé đến các danh lam thắng cảnh nổi tiếng.",
    map_jp: "Bản đồ Nhật Bản", map_vn: "Bản đồ Việt Nam",
    trav_f1_title: "Bản đồ đa dạng", trav_f1_desc: "Tích hợp sẵn Nhật Bản và Việt Nam, với hơn 800+ địa điểm.",
    trav_f2_title: "Tìm kiếm dễ dàng", trav_f2_desc: "Hệ thống lọc thông minh giúp bạn tìm được địa điểm phù hợp nhất.",
    trav_f3_title: "Cộng đồng chia sẻ", trav_f3_desc: "Đăng bài, bình luận và kết nối với những người cùng đam mê",
    trav_cta: "Khám phá ngay →",
    vn_count: "Khám phá không giới hạn", jp_count: "Khám phá không giới hạn",
    test_badge: "Người dùng nói gì", test_title: "Được cộng đồng tin yêu 💕",
    test1_text: "\"Từ khi dùng KokoMemo, mình không bao giờ quên hạn sử dụng mỹ phẩm và đồ gia dụng nữa. App dùng siêu tiện!\"",
    test1_role: "Người nội trợ",
    test2_text: "\"Tính năng bản đồ du lịch và nhớ vị trí shop cực kỳ hữu ích! Mình note lại quán quen rất dễ dàng. Recommend 100%!\"",
    test2_role: "Nhân viên văn phòng",
    test3_text: "\"Nhật ký cảm xúc là tính năng mình thích nhất. Sau một ngày dài, mở app ra ghi vài dòng cảm thấy nhẹ người hẳn.\"",
    test3_role: "Sinh viên đại học",
    cta_title: "Sẵn sàng bắt đầu hành trình của bạn? 🌸",
    cta_sub: "Miễn phí hoàn toàn. Không cần cài đặt. Chỉ cần 30 giây để đăng ký!",
    cta_btn: "✨ Dùng thử KokoMemo miễn phí",
    footer_tagline: "Người bạn đồng hành thông minh giúp quản lý cuộc sống của bạn.",
    footer_col1: "Tính năng", footer_col2: "Ứng dụng",
    footer_signup: "Đăng ký tài khoản", footer_login: "Đăng nhập",
  },

  jp: {
    nav_features: "機能", nav_screenshots: "画面", nav_travel: "旅行", nav_reviews: "レビュー",
    cta_free: "無料で試す",
    hero_badge: "🇻🇳 × 🇯🇵 誰にとっても便利なアプリ",
    hero_title: "どこにいてもあなたのスマートな相棒",
    hero_subtitle: "コスメを買った場所を思い出したり、日本で便利なお店を探したり、買い物の経験をシェアしたいという思いから生まれました。KokoMemoは今や、日用品の管理、日記の記録、そして日越の800以上のスポットを探索するための理想的な場所です。",
    cta_start: "✨ 無料で始める",
    cta_explore: "詳しく見る →",
    stat_spots: "観光スポット", stat_langs: "対応言語", stat_free: "完全無料",
    mock_hello: "こんにちは! 🌸", mock_today: "今日の気分はいかがですか？",
    mock_using: "使用中", mock_expiring: "まもなく期限切れ",
    mock_expiring_soon: "まもなく期限切れ ⚠️", mock_3days: "残り3日", mock_7days: "残り7日",
    mock_travel: "🗺️ 旅行スポット",
    feat_badge: "主な機能",
    feat_title: "必要なものは、すべてひとつに 🌸",
    feat_subtitle: "KokoMemoは元々、在日ベトナム人の生活をサポートするために設計されましたが、今ではよりスマートに生活を管理したいすべての人にとって便利なツールとなっています。",
    feat1_title: "スマートな商品管理",
    feat1_desc: "コスメや日用品の使用期限を追跡。期限前に通知を受け取り、無駄をなくしましょう！",
    feat1_l1: "✅ 使用期限のリマインダー", feat1_l2: "✅ 消費サイクルの追跡",
    feat1_l3: "✅ 複数カテゴリー管理", feat1_l4: "✅ 購入リンクの保存",
    feat2_badge: "最も人気 💕",
    feat2_title: "日記＆クイックメモ",
    feat2_desc: "その日の気分を記録したり、ふと思い浮かんだアイデアやメモを素早く書き留めることができます。",
    feat2_l1: "✅ 気分の記録", feat2_l2: "✅ 画像の添付",
    feat2_l3: "✅ クイックアイデアメモ", feat2_l4: "✅ 簡単な検索",
    feat3_title: "日越旅行マップ",
    feat3_desc: "ベトナム・日本の800か所以上のスポットを多言語説明付きで探索。",
    feat3_l1: "✅ 800か所以上の審査済みスポット", feat3_l2: "✅ 最新旅行ニュース",
    feat3_l3: "✅ コミュニティ投稿", feat3_l4: "✅ VI / JP / EN 対応",
    feat4_title: "タスク管理",
    feat4_desc: "買い物、家事、個人のスケジュールを計画。大切なことを見逃さない。",
    feat4_l1: "✅ 優先度設定", feat4_l2: "✅ 関連商品リンク", feat4_l3: "✅ 期限日設定",
    feat5_title: "パーソナルテーマ",
    feat5_desc: "桜ピンク、ミッドナイトブルー、ヴィンテージ風など多彩なテーマ。",
    feat5_l1: "✅ 5種類以上のテーマ", feat5_l2: "✅ カスタムテーマ作成", feat5_l3: "✅ 即座に切り替え",
    feat6_title: "お気に入り場所の保存",
    feat6_desc: "自宅や職場を登録し、Google Mapsと連携してすぐナビできます。",
    feat6_l1: "✅ 場所ごとのスケジュール", feat6_l2: "✅ Google Maps 連携", feat6_l3: "✅ 近くのショップ検索",
    ss_badge: "アプリ画面", ss_title: "洗練された使いやすいデザイン ✨",
    ss_subtitle: "ユーザー体験にフォーカスしたミニマルなインターフェースで、情報を簡単に管理できます。",
    ss1_name: "小さなお姫様 ✨", ss1_tag: "今日の気分はいかがですか？",
    ss1_stock: "在庫", ss1_diary: "今日はいい気分！",
    ss1_title: "スマートなホーム画面", ss1_desc: "商品と感情の素早い概要",
    ss2_back: "← 戻る", ss2_hdr: "商品", ss2_progress: "残り35% · あと3日",
    ss2_tag1: "使用中", ss2_tag2: "お気に入り",
    ss2_title: "商品詳細", ss2_desc: "消費サイクル、期限、評価を追跡",
    ss3_hdr: "🗺️ 旅行", ss3_vn: "400か所以上", ss3_jp: "400か所以上",
    ss3_news: "📰 最新旅行ニュース", ss3_n1: "🌸 東京の桜シーズン2025",
    ss3_n2: "🌊 ダナンのビーチフェスティバル",
    ss3_title: "旅行探索", ss3_desc: "800か所以上 + 最新ニュース",
    trav_badge: "特別なポイント",
    trav_title: "あなただけの旅行手帳 🌏",
    trav_desc: "素晴らしい旅行体験を保存、共有、発見しましょう。小さなカフェから有名な観光地まで。",
    map_jp: "日本マップ", map_vn: "ベトナムマップ",
    trav_f1_title: "多様なマップ", trav_f1_desc: "日本とベトナムを統合し、800か所以上のスポットを収録。",
    trav_f2_title: "簡単な検索", trav_f2_desc: "スマートなフィルター機能で、最適な場所を素早く見つけられます。",
    trav_f3_title: "コミュニティと共有", trav_f3_desc: "投稿、コメント、同じ興味を持つ人々とつながりましょう",
    trav_cta: "今すぐ探索 →",
    vn_count: "終わりのない探索", jp_count: "終わりのない探索",
    test_badge: "ユーザーの声", test_title: "多くの人に愛されています 💕",
    test1_text: "「KokoMemoを使い始めてから、化粧品や日用品の使用期限を忘れたことがありません。本当に便利なアプリ！」",
    test1_role: "主婦",
    test2_text: "「旅行マップやお店の場所を保存する機能がとても便利！おなじみのお店を簡単に記録できました。100%おすすめ！」",
    test2_role: "会社員",
    test3_text: "「感情日記が一番好きな機能です。長い一日の後、アプリを開いて数行書くだけで気分が軽くなります。」",
    test3_role: "大学生",
    cta_title: "あなたの旅を始める準備はできていますか？ 🌸",
    cta_sub: "完全無料。インストール不要。30秒で登録できます！",
    cta_btn: "✨ KokoMemoを無料で試す",
    footer_tagline: "あなたの生活管理を楽しくするスマートな相棒。",
    footer_col1: "機能", footer_col2: "アプリ",
    footer_signup: "アカウント登録", footer_login: "ログイン",
  },

  en: {
    nav_features: "Features", nav_screenshots: "UI", nav_travel: "Travel", nav_reviews: "Reviews",
    cta_free: "Try for Free",
    hero_badge: "🇻🇳 × 🇯🇵 A useful app for everyone",
    hero_title: "Your smart companion everywhere",
    hero_subtitle: "Originating from the need to remember where to buy cosmetics, find convenient stores in Japan, and share shopping experiences — KokoMemo is now the ideal place to manage daily items, write journals, and explore 800+ destinations in Vietnam & Japan for everyone.",
    cta_start: "✨ Get Started Free",
    cta_explore: "Explore More →",
    stat_spots: "Travel Destinations", stat_langs: "Languages", stat_free: "Totally Free",
    mock_hello: "Hello! 🌸", mock_today: "How are you feeling today?",
    mock_using: "In Use", mock_expiring: "Expiring Soon",
    mock_expiring_soon: "Expiring Soon ⚠️", mock_3days: "3 days left", mock_7days: "7 days left",
    mock_travel: "🗺️ Vietnam·Japan Travel",
    feat_badge: "Key Features",
    feat_title: "Everything You Need, in One App 🌸",
    feat_subtitle: "Initially designed to support the lives of Vietnamese people in Japan, KokoMemo is now a useful tool for anyone who wants to manage their life smarter.",
    feat1_title: "Smart Product Management",
    feat1_desc: "Track expiry dates of Japanese cosmetics & household goods. Get notified before they expire — never waste again!",
    feat1_l1: "✅ Expiry Reminders", feat1_l2: "✅ Usage Cycle Tracking",
    feat1_l3: "✅ Multi-Category Management", feat1_l4: "✅ Save Purchase Links",
    feat2_badge: "Most Loved 💕",
    feat2_title: "Journal & Quick Notes",
    feat2_desc: "Log your daily moods and jot down sudden ideas or notes quickly and conveniently.",
    feat2_l1: "✅ Mood tracking", feat2_l2: "✅ Attach images",
    feat2_l3: "✅ Quick idea notes", feat2_l4: "✅ Easy search",
    feat3_title: "Bilateral Travel Map",
    feat3_desc: "Explore 800+ destinations in Vietnam & Japan with multilingual descriptions.",
    feat3_l1: "✅ 800+ Curated Spots", feat3_l2: "✅ Latest Travel News",
    feat3_l3: "✅ Community Sharing", feat3_l4: "✅ VI / JP / EN Support",
    feat4_title: "Task Management",
    feat4_desc: "Plan shopping, household chores and personal tasks. Never miss anything important.",
    feat4_l1: "✅ Priority Levels", feat4_l2: "✅ Link Related Products", feat4_l3: "✅ Set Due Dates",
    feat5_title: "Personalized Themes",
    feat5_desc: "Multiple themes by mood: Sakura Pink, Midnight Blue, Vintage Retro.",
    feat5_l1: "✅ 5+ Built-in Themes", feat5_l2: "✅ Create Custom Themes", feat5_l3: "✅ Instant Switching",
    feat6_title: "Save Favorite Locations",
    feat6_desc: "Save home, work addresses and integrate with Google Maps for instant navigation.",
    feat6_l1: "✅ Location-based Schedules", feat6_l2: "✅ Google Maps Integration", feat6_l3: "✅ Find Nearby Stores",
    ss_badge: "App UI", ss_title: "Elegant and Intuitive Interface ✨",
    ss_subtitle: "Minimalist and friendly design focused on user experience, helping you manage information effortlessly.",
    ss1_name: "Little Boss ✨", ss1_tag: "How are you feeling today?",
    ss1_stock: "In Stock", ss1_diary: "Feeling great today!",
    ss1_title: "Smart Home Screen", ss1_desc: "Quick overview of products and emotions",
    ss2_back: "← Back", ss2_hdr: "Products", ss2_progress: "35% left · Expires in 3 days",
    ss2_tag1: "In Use", ss2_tag2: "Favorite",
    ss2_title: "Product Details", ss2_desc: "Track usage cycles, expiry dates and ratings",
    ss3_hdr: "🗺️ Travel", ss3_vn: "400+ destinations", ss3_jp: "400+ destinations",
    ss3_news: "📰 Latest Travel News", ss3_n1: "🌸 Tokyo Cherry Blossom Season 2025",
    ss3_n2: "🌊 Da Nang Beach Festival",
    ss3_title: "Explore Travel", ss3_desc: "800+ spots + latest news",
    trav_badge: "Special Feature",
    trav_title: "Your very own travel journal 🌏",
    trav_desc: "Save, share, and discover amazing travel experiences. From small cafes to famous sightseeing spots.",
    map_jp: "Japan Map", map_vn: "Vietnam Map",
    trav_f1_title: "Diverse Maps", trav_f1_desc: "Integrated Japan and Vietnam maps with over 800+ locations.",
    trav_f2_title: "Easy to Search", trav_f2_desc: "Smart filtering system helps you find the perfect place quickly.",
    trav_f3_title: "Community Sharing", trav_f3_desc: "Post, comment and connect with like-minded people",
    trav_cta: "Explore Now →",
    vn_count: "Endless discovery", jp_count: "Endless discovery",
    test_badge: "What Users Say", test_title: "Loved by Everyone 💕",
    test1_text: "\"Since I started using KokoMemo, I never forget my cosmetics and household items expiry dates. The app is super convenient!\"",
    test1_role: "Housewife",
    test2_text: "\"The travel map and saved shop locations feature is incredibly useful! I can note down my favorite spots easily. 100% recommend!\"",
    test2_role: "Office Worker",
    test3_text: "\"The emotion journal is my favorite feature. After a long day, opening the app and writing a few lines makes everything feel lighter.\"",
    test3_role: "College Student",
    cta_title: "Ready to Start Your Journey? 🌸",
    cta_sub: "Completely free. No installation needed. Sign up in 30 seconds!",
    cta_btn: "✨ Try KokoMemo Free",
    footer_tagline: "The smart companion that helps you manage your life.",
    footer_col1: "Features", footer_col2: "App",
    footer_signup: "Create Account", footer_login: "Sign In",
  }
};

// ===== LANGUAGE MANAGEMENT =====
const langMap = { vi: 'vi', jp: 'ja', en: 'en' };
let currentLang = localStorage.getItem('kokomemo_lang') || 'vi';

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update HTML lang for SEO
  document.documentElement.lang = langMap[lang] || 'vi';
  // Update title
  const titles = {
    vi: 'ここメモ (KokoMemo) - Quản lý cá nhân & Bản đồ du lịch thông minh',
    jp: 'ここメモ (KokoMemo) - スマートな生活管理＆旅行マップ',
    en: 'KokoMemo (ここメモ) - Smart Life Management & Travel Map'
  };
  document.title = titles[lang] || titles.vi;

  // Update active button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  currentLang = lang;
  localStorage.setItem('kokomemo_lang', lang);
}

// Attach language switcher events
function initLangSwitchers() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslation(btn.dataset.lang));
  });
}

// ===== SAKURA PETALS =====
const sakuraContainer = document.getElementById('sakura-container');
const petals = ['🌸', '🌺', '✿', '❀', '🌸'];

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.textContent = petals[Math.floor(Math.random() * petals.length)];
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.fontSize = (Math.random() * 0.8 + 0.6) + 'rem';
  petal.style.opacity = Math.random() * 0.4 + 0.1;
  const duration = Math.random() * 8 + 6;
  const delay = Math.random() * 4;
  petal.style.animationDuration = duration + 's';
  petal.style.animationDelay = delay + 's';
  sakuraContainer.appendChild(petal);
  setTimeout(() => petal.remove(), (duration + delay) * 1000);
}

setInterval(createPetal, 800);
for (let i = 0; i < 6; i++) createPetal();

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== FADE-IN ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

const animateStyle = document.createElement('style');
animateStyle.textContent = `
  .anim { opacity: 0; transform: translateY(28px); transition: opacity 0.55s ease, transform 0.55s ease; }
  .anim.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(animateStyle);

document.querySelectorAll('.feature-card, .screenshot-item, .testimonial-card, .country-card, .travel-feature-item, .section-header').forEach((el, i) => {
  el.classList.add('anim');
  el.style.transitionDelay = `${i * 0.06}s`;
  observer.observe(el);
});

// ===== 3D PHONE TILT =====
const mainPhone = document.getElementById('main-phone');
if (mainPhone && window.matchMedia('(min-width: 1024px)').matches) {
  document.addEventListener('mousemove', (e) => {
    const rect = mainPhone.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / window.innerWidth;
    const dy = (e.clientY - cy) / window.innerHeight;
    mainPhone.style.transform = `rotateY(${dx * 10}deg) rotateX(${-dy * 6}deg) translateY(-12px)`;
  });
  document.addEventListener('mouseleave', () => { mainPhone.style.transform = ''; });
}

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const navObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active-link', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => navObs.observe(s));

// ===== RIPPLE EFFECT =====
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const r = document.createElement('span');
    const rect = this.getBoundingClientRect();
    Object.assign(r.style, {
      position: 'absolute', width: '4px', height: '4px',
      background: 'rgba(255,255,255,0.5)', borderRadius: '50%',
      left: `${e.clientX - rect.left}px`, top: `${e.clientY - rect.top}px`,
      transform: 'scale(0)', animation: 'ripple 0.6s linear', pointerEvents: 'none',
    });
    this.style.position = 'relative'; this.style.overflow = 'hidden';
    this.appendChild(r);
    setTimeout(() => r.remove(), 600);
  });
});
const rippleStyle = document.createElement('style');
rippleStyle.textContent = '@keyframes ripple { to { transform: scale(80); opacity: 0; } }';
document.head.appendChild(rippleStyle);

// ===== INIT =====
initLangSwitchers();
applyTranslation(currentLang);

console.log('🌸 KokoMemo Homepage v2 — Responsive + i18n Ready!');
