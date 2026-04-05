// =====================================================
//   KokoMemo Homepage v2 — script.js
//   Features: i18n (VI/JP/EN), Sakura, Animations
// =====================================================

// ===== i18n TRANSLATIONS =====
const translations = {
  vi: {
    nav_features: "Tính năng",
    nav_screenshots: "Giao diện",
    nav_story: "Câu chuyện",
    nav_travel: "Du lịch",
    nav_reviews: "Đánh giá",
    cta_free: "Dùng thử miễn phí",
    
    // Problems/Pain Points Section
    prob_badge: "BẠN CÓ GẶP NHỮNG TÌNH HUỐNG NÀY?",
    prob_title: "Những phiền não nhỏ tưởng không đáng, mà rất đáng",
    prob1_title: "Hết serum giữa chừng, bỏ dở routine",
    prob1_desc: "Tìm mãi không ra, đặt ship thì phải chờ 2–3 ngày. Cả tuần da bị ảnh hưởng.",
    prob2_title: "Vào bếp mới phát hiện hết gia vị",
    prob2_desc: "Tỏi, nước mắm, dầu ăn... cứ đến lúc cần mới biết là hết. Phải chạy ra tiệm gấp.",
    prob3_title: "Ghi note rồi vẫn quên",
    prob3_desc: "Nhắc trên điện thoại không đúng thời điểm, ghi sổ thì lại quên nhìn vào.",
    prob_footer: "KokoMemo tự tính — tự nhắc — đúng lúc bạn cần 🌸",
    
    // Story Section
    story_badge: "Từ ý tưởng đến hiện thực",
    story_title: "KokoMemo bắt đầu như thế nào? 🌸",
    story_p1: "Đang sinh sống tại Nhật, tôi thường xuyên mua mỹ phẩm, thực phẩm chức năng qua các review. Nhưng có một nỗi khổ: Không phải cửa hàng nào cũng có món đồ đó, và tôi thường xuyên quên mất mình đã mua nó ở hiệu thuốc nào với giá bao nhiêu.",
    story_p2: "KokoMemo ra đời để giúp bạn lưu lại chính xác vị trí cửa hàng, giá mua và công dụng của từng món đồ. Không chỉ vậy, bạn còn có thể lưu lại các link review 'để dành' cho những món chưa kịp mua.",
    story_p3: "Từ một cuốn sổ tay cá nhân, chúng tôi phát triển KokoMemo thành cộng đồng chia sẻ địa điểm thực tế - nơi mọi người giúp nhau mua sắm thông minh hơn tại Nhật Bản và Việt Nam.",
    
    hero_badge: "🌟 Giải pháp mua sắm & Quản lý cá nhân thông minh",
    hero_title: "Mua đúng lúc, dùng không gián đoạn. App tự nhắc bạn restock trước khi hết.",
    hero_subtitle: "Dựa trên ước tính thời gian sử dụng của bạn, KokoMemo sẽ tự động gửi thông báo dự đoán ngày hết hàng để bạn kịp thời mua mới (refill). Kết hợp nhật ký tâm trạng và bản đồ khám phá trong một ứng dụng duy nhất.",
    cta_start: "Dùng thử miễn phí ngay",
    cta_explore: "Tính năng chính ↓",
    stat_spots: "Điểm đến",
    stat_langs: "Ngôn ngữ",
    stat_free: "Người dùng thử nghiệm",
    mock_hello: "KokoMemo xin chào! 🌸",
    mock_today: "Hôm nay bạn cần refill gì không?",
    mock_using: "Đang dùng",
    mock_expiring: "Sắp hết",
    mock_expiring_soon: "Dự kiến hết sau 3 ngày ⚠️",
    mock_3days: "Tính toán dựa trên mức độ dùng",
    mock_7days: "Nhắc mua mới ngay",
    mock_travel: "🗺️ Khám phá Việt - Nhật",
    feat_badge: "Giá trị cốt lõi",
    feat_title: "Đơn giản hóa cuộc sống của bạn 🌸",
    feat_subtitle: "Chúng tôi tập trung vào 3 giải pháp quan trọng nhất giúp bạn quản lý thời gian và cảm xúc một cách khoa học.",
    feat1_title: "Nhớ đúng tiệm, mua đúng giá",
    feat1_desc: "Lưu lại chính xác cửa hàng (shop) bạn đã mua sản phẩm và giá tiền tại đó. KokoMemo giúp bạn so sánh giá giữa các hiệu thuốc (drugstore) Nhật để luôn mua được giá hời nhất.",
    feat1_l1: "📍 Lưu vị trí shop đã mua", feat1_l2: "💰 So sánh giá các cửa hàng",
    feat1_l3: "📅 Tự động nhắc refill khi hết", feat1_l4: "🛍️ Quản lý sản phẩm theo shop",
    feat2_badge: "Dễ dàng ghi nhớ 💕",
    feat2_title: "Wishlist & Link Review",
    feat2_desc: "Lưu sẳn link TikTok/Youtube review của những món đồ dự định mua. Ghi chú công dụng chi tiết để không bị 'quên' khi đi mua sắm.",
    feat2_l1: "✅ Lưu link review 'để dành'", feat2_l2: "✅ Danh sách Wishlist riêng",
    feat2_l3: "✅ Ghi chú công dụng chi tiết", feat2_l4: "✅ Tìm món chưa mua cực nhanh",
    feat3_title: "Tự động nhắc Restock",
    feat3_desc: "Chỉ cần nhập ước tính thời gian sử dụng, KokoMemo sẽ dựa vào ngày bắt đầu dùng để tự động tính toán và gửi thông báo nhắc bạn mua mới trước khi hết hàng.",
    feat3_l1: "⏰ Thông báo đẩy thông minh", feat3_l2: "📅 Dự đoán chính xác ngày hết",
    feat3_l3: "🔄 Duy trì chu trình sử dụng", feat3_l4: "🔔 Không bao giờ bị gián đoạn",
    feat4_title: "Nhật ký & Ghi chú",
    feat4_desc: "Lưu giữ tâm trạng mỗi ngày và những ý tưởng bất chợt. Dữ liệu được đồng bộ an toàn, bảo mật tuyệt đối cho riêng bạn.",
    feat4_l1: "✅ Ghi nhận tâm trạng", feat4_l2: "✅ Đính kèm hình ảnh",
    feat4_l3: "✅ Tìm kiếm ghi chú nhanh", feat4_l4: "✅ Bảo mật mật khẩu App",
    feat5_title: "Giao diện Cá nhân hóa",
    feat5_desc: "Nhiều theme theo cảm xúc: Sakura hồng, Midnight xanh, Vintage hoài cổ.",
    feat5_l1: "✅ 5+ theme có sẵn", feat5_l2: "✅ Tạo theme cá nhân", feat5_l3: "✅ Chuyển đổi tức thì",
    feat6_title: "Review Du lịch Việt - Nhật",
    feat6_desc: "Khám phá và đọc review về 800+ địa điểm tại Việt Nam & Nhật Bản. Cập nhật tin tức du lịch mới nhất ngay trong App.",
    feat6_l1: "✅ 800+ địa điểm thật", feat6_l2: "✅ Review chi tiết địa phương",
    feat6_l3: "✅ Tin tức du lịch liên tục", feat6_l4: "✅ Hướng dẫn đi lại, chi phí",
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
    test_badge: "Trải nghiệm thực tế", test_title: "Được 200+ người dùng tin tưởng 💕",
    test1_text: "\"Tính năng dự báo ngày hết mỹ phẩm cực kỳ chính xác. Mình không còn phải đợi đến lúc hết sạch mới đi mua như trước nữa.\"",
    test1_role: "Beta tester #42",
    test2_text: "\"Mình dùng app để lưu lại các shop mỹ phẩm uy tín tại Tokyo. Bản đồ rất trực quan và dễ dùng cho người Việt mới sang.\"",
    test2_role: "Beta tester #108",
    test3_text: "\"Giao diện sạch sẽ, không có quảng cáo rác là điểm mình thích nhất ở KokoMemo so với các app khác.\"",
    test3_role: "Beta tester #15",
    cta_title: "Sẵn sàng bắt đầu hành trình của bạn? 🌸",
    cta_sub: "Miễn phí hoàn toàn. Không cần cài đặt. Chỉ cần 30 giây để đăng ký!",
    cta_btn: "✨ Dùng thử KokoMemo miễn phí",
    footer_tagline: "Ứng dụng nhắc nhở Refill & Nhật ký hành trình Việt - Nhật.",
    footer_col1: "Pháp lý", footer_col2: "Liên hệ",
    footer_privacy: "Chính sách bảo mật", footer_terms: "Điều khoản sử dụng",
    footer_contact: "Email hỗ trợ: support@kokomemo.app",
    faq_title: "Câu hỏi thường gặp (FAQ)",
    faq_q1: "Dữ liệu của tôi có được bảo mật không?",
    faq_a1: "Có. KokoMemo sử dụng mã hóa tiêu chuẩn để bảo vệ dữ liệu cá nhân và nhật ký của bạn. Chúng tôi không chia sẻ thông tin cho bên thứ ba.",
    faq_q2: "Tôi có bị mất dữ liệu khi đổi điện thoại không?",
    faq_a2: "Không. Chỉ cần đăng nhập bằng tài khoản của bạn, mọi dữ liệu về sản phẩm, nhật ký và địa điểm sẽ được đồng bộ ngay lập tức.",
    faq_q3: "App có yêu cầu trả phí không?",
    faq_a3: "Hiện tại KokoMemo hoàn toàn miễn phí cho hơn 200+ người dùng thử nghiệm đầu tiên.",

    // Showcase Section
    showcase_title: "Nhập một lần, app nhắc mãi mãi",
    showcase_subtitle: "Bạn chỉ cần cho biết dùng sản phẩm từ ngày nào và ước tính dùng bao lâu — KokoMemo tự lo phần còn lại.",
    showcase_badge: "🌟 Core Feature",
    feat_refill_title: "Refill reminder thông minh",
    feat_refill_desc: "Nhập ngày bắt đầu dùng + ước tính bao lâu hết. KokoMemo tự tính ngày cạn sản phẩm và nhắc bạn đặt mua mới — đúng lúc, không sớm không muộn.",
    feat_refill_l1: "Hoạt động cho mỹ phẩm, thực phẩm, gia vị và đồ gia dụng",
    feat_refill_l2: "Nhắc trước 3, 7, hoặc 14 ngày tuỳ bạn chọn",
    feat_refill_l3: "Lưu link mua lại — restock chỉ một chạm",
    feat_refill_l4: "Xem toàn bộ lịch restock sắp tới trong tuần/tháng",

    feat_diary_badge: "💕 Được yêu thích nhất",
    feat_diary_title: "Nhật ký cảm xúc & Ghi chú nhanh",
    feat_diary_desc: "Ghi lại tâm trạng trong ngày, lưu những ý tưởng chợt đến. Cuối năm nhìn lại, bạn sẽ thấy mình đã lớn thêm bao nhiêu.",
    feat_diary_l1: "Ghi cảm xúc hàng ngày với biểu tượng trực quan",
    feat_diary_l2: "Đính kèm hình ảnh vào từng trang nhật ký",
    feat_diary_l3: "Ghi chú nhanh ý tưởng bất chợt",
    feat_diary_l4: "Tìm kiếm lại bất kỳ ký ức nào dễ dàng",

  },

  jp: {
    nav_features: "機能", nav_screenshots: "画面", nav_story: "ストーリー", nav_travel: "旅行", nav_reviews: "レビュー",
    cta_free: "無料で試す",

    // Problems/Pain Points Section
    prob_badge: "このような状況に直面したことはありませんか？",
    prob_title: "実は重要な、日常の小さな悩み",
    prob1_title: "ルーチンの途中でセラムが切れる",
    prob1_desc: "近くで見つからず、配送に2〜3日かかります。1週間、スキンケアルーチンが中断されてしまいます。",
    prob2_title: "料理中にスパイスが切れる",
    prob2_desc: "ニンニク、醤油、油...最も必要な時に、なくなっていることに気づきます。",
    prob3_title: "メモしたのに、やっぱり忘れる",
    prob3_desc: "スマホの通知はタイミングが悪く、物理的なノートはチェックするのを忘れてしまいます。",
    prob_footer: "KokoMemoが計算し、通知します。あなたが必要なその瞬間に 🌸",

    // Story Section
    story_badge: "アイデアから実現まで",
    story_title: "KokoMemoはどのように始まったのか？ 🌸",
    story_p1: "日本に住んでいると、レビューに基づいて化粧品やサプリメントをよく購入します。しかし、どのドラッグストアでいくらで買ったのかをいつも忘れてしまうという悩みがありました。",
    story_p2: "KokoMemoは、各アイテムの正確な店舗場所、価格、用途を保存できるようにするために誕生しました。さらに、後で購入予定のリビューリンクも保存できます。",
    story_p3: "個人のノートから始まったKokoMemoは、実際の場所を共有するコミュニティへと進化し、日本とベトナムで誰もがより賢く買い物ができるようサポートしています。",

    hero_badge: "🇻🇳 × 🇯🇵 誰にとっても便利なアプリ",
    hero_title: "タイムリーに購入、中断のない使用。使い切る前にリストック通知をお届け。",
    hero_subtitle: "あなたの使用期間の推定に基づいて、KokoMemoは在庫切れの予測日を自動的に通知します。感情日記と旅行マップを一つのアプリで体験しましょう。",
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

    // Showcase Section
    showcase_title: "一度入力すれば、アプリがずっとリマインド",
    showcase_subtitle: "いつ使い始めたか、どのくらい持つかを教えるだけ。あとはKokoMemoにお任せください。",
    showcase_badge: "🌟 主要機能",
    feat_refill_title: "スマートなリストックリマインダー",
    feat_refill_desc: "開始日と使用期間の目安を入力。KokoMemoが最適なタイミングで通知します。早すぎず、遅すぎず。",
    feat_refill_l1: "化粧品、食品、調味料、日用品に対応",
    feat_refill_l2: "3日、7日、または14日前にリマインド（選択可能）",
    feat_refill_l3: "購入リンクを保存 — ワンタップでリストック",
    feat_refill_l4: "週・月ごとのリストックスケジュールを確認",

    feat_diary_badge: "💕 ユーザーに大人気",
    feat_diary_title: "感情日記＆クイックメモ",
    feat_diary_desc: "日々の気分を記録し、ふと思いついたアイデアを保存。年末に振り返れば、自分の成長を実感できるはずです。",
    feat_diary_l1: "直感的なアイコンで日々の感情を記録",
    feat_diary_l2: "日記の各エントリーに写真を添付",
    feat_diary_l3: "ランダムなアイデアを素早く書き留める",
    feat_diary_l4: "思い出を簡単に検索",

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
    nav_features: "Features", nav_screenshots: "UI", nav_story: "Story", nav_travel: "Travel", nav_reviews: "Reviews",
    cta_free: "Try for Free",

    // Problems/Pain Points Section
    prob_badge: "DO YOU FACE THESE SITUATIONS?",
    prob_title: "Small Pains That Actually Matter",
    prob1_title: "Out of serum mid-routine",
    prob1_desc: "Can't find it locally, shipping takes 2-3 days. Your skincare routine suffers for a week.",
    prob2_title: "Ran out of spices while cooking",
    prob2_desc: "Garlic, fish sauce, cooking oil... you only realize it's gone when you need it most.",
    prob3_title: "Wrote a note, still forgot",
    prob3_desc: "Phone alerts come at the wrong time, and you forget to check your physical journal.",
    prob_footer: "KokoMemo Calculates — Notifies — Exactly when you need it 🌸",

    // Story Section
    story_badge: "From Idea to Reality",
    story_title: "How KokoMemo Started? 🌸",
    story_p1: "Living in Japan, I often buy cosmetics and supplements based on reviews. But there was a struggle: I always forgot which pharmacy I bought it from and at what price.",
    story_p2: "KokoMemo was born to help you save the exact shop location, price, and usage of every item. Plus, you can save review links for items you plan to buy later.",
    story_p3: "From a personal notebook, we evolved KokoMemo into a community for sharing real locations - helping everyone shop smarter in Japan and Vietnam.",

    hero_badge: "🌟 Smart Shopping & Life Management",
    hero_title: "Buy in time, use without break. Get restock alerts before you run out.",
    hero_subtitle: "Based on your usage estimates, KokoMemo automatically sends restock notifications. Combined with mood journal and discovery map in one app.",
    cta_start: "✨ Get Started Free",
    cta_explore: "Explore More →",
    stat_spots: "Spots", stat_langs: "Languages", stat_free: "Beta Users",
    mock_hello: "Hello! 🌸", mock_today: "How are you feeling today?",
    mock_using: "In Use", mock_expiring: "Low Stock",
    mock_expiring_soon: "Estimated 3 days left ⚠️", mock_3days: "Based on usage level",
    mock_7days: "Restock Now", mock_travel: "🗺️ VN-JP Travel",

    feat_badge: "Core Values",
    feat_title: "Everything You Need, in One App 🌸",
    feat_subtitle: "We focus on 3 key solutions that help you manage your time and emotions scientifically.",
    feat1_title: "Right Shop, Right Price",
    feat1_desc: "Save the exact shop and price. Compare prices between Japanese drugstores to always get the best deal.",
    feat1_l1: "📍 Save Shop Location", feat1_l2: "💰 Price Comparison",
    feat1_l3: "📅 Auto Restock Reminder", feat1_l4: "🛍️ Shop-wise Management",
    feat2_badge: "Save Easily 💕",
    feat2_title: "Wishlist & Review Links",
    feat2_desc: "Save TikTok/Youtube review links for items you plan to buy. Add detailed notes to never forget.",
    feat2_l1: "✅ Save Review Links", feat2_l2: "✅ Private Wishlist",
    feat2_l3: "✅ Usage Details", feat2_l4: "✅ Quick Item Search",
    feat3_title: "Auto Restock Reminder",
    feat3_desc: "Enter your estimated usage time, and KokoMemo will alert you based on your start date.",
    feat3_l1: "⏰ Smart Push Notifications", feat3_l2: "📅 Accurate Expiry Prediction",
    feat3_l3: "🔄 Maintain Daily Routine", feat3_l4: "🔔 Never Run Out",
    feat4_title: "Journal & Notes",
    feat4_desc: "Save your daily moods and sudden ideas. Data is securely synced and strictly private.",
    feat4_l1: "✅ Mood Tracking", feat4_l2: "✅ Photo Attachments",
    feat4_l3: "✅ Quick Note Search", feat4_l4: "✅ App Passcode Lock",
    feat5_title: "Personalized Interface",
    feat5_desc: "Multiple themes: Sakura Pink, Midnight Blue, Vintage Retro.",
    feat5_l1: "✅ 5+ Built-in Themes", feat5_l2: "✅ Create Custom Themes", feat5_l3: "✅ Instant Switch",
    feat6_title: "VN-JP Travel Reviews",
    feat6_desc: "Explore 800+ spots in VN & JP. Get the latest travel news right in the app.",
    feat6_l1: "✅ 800+ Real Spots", feat6_l2: "✅ Local Expert Reviews",
    feat6_l3: "✅ Travel News Feed", feat6_l4: "✅ Transport & Costs Guide",

    // Showcase Section
    showcase_title: "Enter Once, App Reminds Forever",
    showcase_subtitle: "Just tell us when you started and how long it lasts — KokoMemo does the rest.",
    showcase_badge: "🌟 Core Feature",
    feat_refill_title: "Smart Refill Reminder",
    feat_refill_desc: "Input start date + estimate duration. KokoMemo notifies you at the perfect time. Not too early, not too late.",
    feat_refill_l1: "Works for cosmetics, food, spices, and household items",
    feat_refill_l2: "Remind 3, 7, or 14 days before per your choice",
    feat_refill_l3: "Save purchase links — restock with one tap",
    feat_refill_l4: "View upcoming restock schedule by week/month",

    feat_diary_badge: "💕 User's Favorite",
    feat_diary_title: "Emotion Journal & Quick Notes",
    feat_diary_desc: "Log daily moods, save sudden ideas. Look back at the end of the year to see how much you've grown.",
    feat_diary_l1: "Log moods daily with intuitive icons",
    feat_diary_l2: "Attach photos to every journal entry",
    feat_diary_l3: "Quickly jot down random ideas",
    feat_diary_l4: "Search through memories effortlessly",

    ss_badge: "App Interface", ss_title: "Elegant and Intuitive ✨",
    ss_subtitle: "Minimalist, user-friendly design helping you manage information with ease.",
    ss1_name: "Little Boss ✨", ss1_tag: "How are you today?",
    ss1_stock: "Stock", ss1_diary: "Feeling great today!",
    ss1_title: "Smart Home Screen", ss1_desc: "Quick overview of items and moods",
    ss2_back: "← Back", ss2_hdr: "Product Info", ss2_progress: "35% left · 3 days until empty",
    ss2_tag1: "In Use", ss2_tag2: "Favorite",
    ss2_title: "Product Detail", ss2_desc: "Track cycles, expiry dates, and reviews",
    ss3_hdr: "🗺️ Travel", ss3_vn: "400+ spots", ss3_jp: "400+ spots",
    ss3_news: "📰 Latest News", ss3_n1: "🌸 Tokyo Sakura 2025 Forecast",
    ss3_n2: "🌊 Da Nang Beach Fest",
    ss3_title: "Travel Discovery", ss3_desc: "800+ spots and latest news",
    trav_badge: "Special Point",
    trav_title: "Your Personal Travel Journal 🌏",
    trav_desc: "Save and share amazing travel experiences. From cafes to famous landmarks.",
    map_jp: "Japan Map", map_vn: "Vietnam Map",
    trav_f1_title: "Diverse Maps", trav_f1_desc: "Integrated Japan/Vietnam with 800+ curated spots.",
    trav_f2_title: "Easy Discovery", trav_f2_desc: "Smart filtering helps you find the perfect place instantly.",
    trav_f3_title: "Share with Community", trav_f3_desc: "Post, comment and connect with followers.",
    trav_cta: "Explore Now →",
    vn_count: "Endless discovery", jp_count: "Endless discovery",
    footer_tagline: "Restock reminders & Travel diary connecting VN-JP.",
    footer_col1: "Legal", footer_col2: "Contact",
    footer_privacy: "Privacy Policy", footer_terms: "Terms of Service",
    footer_contact: "Email Support: support@kokomemo.app",
    footer_login: "Login",
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
