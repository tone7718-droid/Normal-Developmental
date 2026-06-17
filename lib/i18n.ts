import type { Lang } from "./data";

// UI 문자열 (한국어/영어/베트남어)
export const ui = {
  nav: {
    intro: { ko: "소개", en: "Overview", vi: "Giới thiệu" },
    timeline: { ko: "개월별 발달", en: "By month", vi: "Theo tháng" },
    tummy: { ko: "터미타임", en: "Tummy time", vi: "Nằm sấp" },
    reflexes: { ko: "원시 반사", en: "Reflexes", vi: "Phản xạ" },
    checkup: { ko: "건강검진", en: "Check-ups", vi: "Khám sức khỏe" },
    warnings: { ko: "위험 신호", en: "Warning signs", vi: "Dấu hiệu cảnh báo" },
    faq: { ko: "자주 묻는 질문", en: "FAQ", vi: "Hỏi đáp" },
    brand: { ko: "아기 발달 가이드", en: "Baby Development", vi: "Phát triển của bé" },
  },
  hero: {
    badge: {
      ko: "🍼 신생아부터 두 돌까지",
      en: "🍼 Newborn to age 2",
      vi: "🍼 Từ sơ sinh đến 2 tuổi",
    },
    title1: { ko: "우리 아기,", en: "Your baby —", vi: "Bé của bạn —" },
    title2: {
      ko: "지금 어디쯤 자라고 있을까요?",
      en: "where are they growing right now?",
      vi: "đang phát triển đến đâu rồi?",
    },
    desc: {
      ko: "뒤집고, 앉고, 기고, 마침내 걷기까지. 개월별 아기의 정상 운동 발달 과정과 타고난 반사를 부모의 눈높이에서 쉽게 풀어드려요.",
      en: "Rolling, sitting, crawling, and finally walking. We explain each month's normal motor milestones and inborn reflexes in plain, parent-friendly language.",
      vi: "Lật, ngồi, bò, rồi cuối cùng là đi. Chúng tôi giải thích các mốc vận động bình thường theo từng tháng và các phản xạ bẩm sinh bằng ngôn ngữ dễ hiểu cho cha mẹ.",
    },
    ctaPrimary: { ko: "개월별 발달 보기", en: "See milestones", vi: "Xem các mốc" },
    ctaSecondary: {
      ko: "원시 반사 알아보기",
      en: "Explore reflexes",
      vi: "Tìm hiểu phản xạ",
    },
    note: {
      ko: "아기마다 발달 속도는 다릅니다. 이 가이드는 평균적인 흐름을 보여주는 교육용 정보예요.",
      en: "Every baby develops at their own pace. This guide shows the average pattern for educational purposes.",
      vi: "Mỗi bé phát triển theo nhịp riêng. Hướng dẫn này cho thấy diễn tiến trung bình với mục đích giáo dục.",
    },
  },
  overview: {
    title: {
      ko: "발달에는 순서가 있어요",
      en: "Development follows an order",
      vi: "Sự phát triển có trình tự",
    },
    desc: {
      ko: "아기의 운동 발달은 마구잡이가 아니라 일정한 방향으로 진행돼요. 머리에서 발끝으로, 몸의 중심에서 바깥으로 힘과 조절 능력이 차례로 자라납니다.",
      en: "Motor development isn't random — it follows a direction. Strength and control grow from head to toe, and from the body's center outward.",
      vi: "Vận động của bé không phát triển ngẫu nhiên mà theo một hướng nhất định. Sức mạnh và khả năng kiểm soát lớn dần từ đầu xuống chân, và từ trung tâm cơ thể ra ngoài.",
    },
    phases: [
      {
        emoji: "👶",
        title: { ko: "머리부터", en: "Head first", vi: "Bắt đầu từ đầu" },
        desc: {
          ko: "발달은 위에서 아래로. 먼저 목을 가누고 머리를 듭니다.",
          en: "Top to bottom — first controlling the neck and lifting the head.",
          vi: "Từ trên xuống — đầu tiên là giữ cổ và nâng đầu.",
        },
      },
      {
        emoji: "🔄",
        title: { ko: "몸통으로", en: "Then the trunk", vi: "Đến thân mình" },
        desc: {
          ko: "뒤집고 앉으며 몸통의 중심을 잡아갑니다.",
          en: "Rolling and sitting build core stability.",
          vi: "Lật và ngồi giúp ổn định phần thân.",
        },
      },
      {
        emoji: "🧎",
        title: { ko: "팔다리로", en: "Then the limbs", vi: "Đến tay chân" },
        desc: {
          ko: "기고 잡고 서며 팔과 다리에 힘이 실립니다.",
          en: "Crawling and pulling up load the arms and legs.",
          vi: "Bò và bám đứng dồn lực lên tay và chân.",
        },
      },
      {
        emoji: "🏃",
        title: { ko: "온몸으로", en: "Then the whole body", vi: "Đến toàn thân" },
        desc: {
          ko: "걷고 뛰며 세상을 온몸으로 탐험합니다.",
          en: "Walking and running to explore the whole world.",
          vi: "Đi và chạy để khám phá cả thế giới.",
        },
      },
    ],
  },
  calculator: {
    title: {
      ko: "우리 아기는 지금 몇 개월일까요?",
      en: "How many months is your baby?",
      vi: "Bé của bạn được mấy tháng?",
    },
    desc: {
      ko: "생년월일을 입력하면 현재 개월 수와 해당 발달 시기를 찾아드려요. 입력 정보는 기기에만 저장되고 서버로 전송되지 않습니다.",
      en: "Enter the birth date to find the current age in months and the matching stage. Your input stays on your device and is never sent to a server.",
      vi: "Nhập ngày sinh để biết số tháng tuổi hiện tại và giai đoạn phát triển tương ứng. Thông tin chỉ lưu trên thiết bị của bạn, không gửi lên máy chủ.",
    },
    birthLabel: { ko: "아기 생년월일", en: "Baby's birth date", vi: "Ngày sinh của bé" },
    correctedToggle: {
      ko: "이른둥이(교정 연령) 적용",
      en: "Apply preterm (corrected) age",
      vi: "Áp dụng tuổi điều chỉnh (sinh non)",
    },
    dueDateLabel: { ko: "출산 예정일", en: "Original due date", vi: "Ngày dự sinh" },
    resultPrefix: { ko: "우리 아기는 지금", en: "Your baby is", vi: "Bé của bạn hiện được" },
    monthsUnit: { ko: "개월", en: "months", vi: "tháng" },
    correctedNote: { ko: "교정 연령 기준", en: "corrected age", vi: "tuổi điều chỉnh" },
    goToStage: { ko: "이 시기 발달 보기 →", en: "See this stage →", vi: "Xem giai đoạn này →" },
    future: {
      ko: "아직 태어나기 전이거나 미래 날짜예요. 날짜를 확인해 주세요.",
      en: "That's before birth or a future date. Please check the date.",
      vi: "Đó là trước khi sinh hoặc ngày trong tương lai. Vui lòng kiểm tra lại ngày.",
    },
    over: {
      ko: "이 가이드는 24개월까지를 다뤄요. 곧 더 큰 아이를 위한 내용도 준비할게요!",
      en: "This guide covers up to 24 months. Content for older children is coming soon!",
      vi: "Hướng dẫn này bao gồm đến 24 tháng. Nội dung cho bé lớn hơn sẽ sớm có!",
    },
  },
  stages: {
    title: {
      ko: "개월별 운동 발달",
      en: "Motor milestones by month",
      vi: "Mốc vận động theo tháng",
    },
    desc: {
      ko: "궁금한 시기를 눌러보세요. 그 시기 아기가 보이는 대근육·소근육 발달과 활발한 반사, 부모를 위한 팁을 한눈에 정리했어요.",
      en: "Tap a period you're curious about. We've gathered that stage's gross- and fine-motor milestones, active reflexes, and parent tips in one place.",
      vi: "Hãy chạm vào giai đoạn bạn quan tâm. Chúng tôi đã tổng hợp các mốc vận động thô và tinh, phản xạ đang hoạt động và mẹo cho cha mẹ ở một nơi.",
    },
    grossTitle: { ko: "대근육 운동", en: "Gross motor", vi: "Vận động thô" },
    grossSub: {
      ko: "몸 전체를 쓰는 큰 움직임",
      en: "Big movements using the whole body",
      vi: "Cử động lớn dùng cả cơ thể",
    },
    fineTitle: { ko: "소근육 운동", en: "Fine motor", vi: "Vận động tinh" },
    fineSub: {
      ko: "손과 손가락의 정교한 움직임",
      en: "Precise hand and finger movements",
      vi: "Cử động khéo léo của bàn tay và ngón tay",
    },
    reflexLabel: {
      ko: "이 시기에 활발한 반사",
      en: "Active reflexes this stage",
      vi: "Phản xạ hoạt động ở giai đoạn này",
    },
    tipLabel: { ko: "부모님을 위한 팁", en: "Tip for parents", vi: "Mẹo cho cha mẹ" },
    activitiesLabel: {
      ko: "이렇게 놀아주세요",
      en: "Play ideas",
      vi: "Gợi ý chơi với bé",
    },
    watchLabel: {
      ko: "이럴 땐 전문가와 상담해 보세요",
      en: "Talk to a professional if…",
      vi: "Hãy hỏi chuyên gia nếu…",
    },
    checklistTitle: { ko: "우리 아기 발달 체크", en: "Track your baby", vi: "Theo dõi bé" },
    checklistDesc: {
      ko: "할 수 있는 항목을 체크해 보세요. 진행 상황은 이 기기에 저장돼요.",
      en: "Check what your baby can do. Progress is saved on this device.",
      vi: "Hãy đánh dấu những điều bé làm được. Tiến độ được lưu trên thiết bị này.",
    },
  },
  reflexSection: {
    badge: { ko: "✨ 타고난 능력", en: "✨ Inborn abilities", vi: "✨ Khả năng bẩm sinh" },
    title: { ko: "아기의 원시 반사", en: "Primitive reflexes", vi: "Phản xạ nguyên thủy của bé" },
    desc: {
      ko: "원시 반사는 아기가 태어날 때부터 가진 자동 반응이에요. 생존을 돕고, 때가 되면 자연스럽게 사라지면서 더 정교한 움직임에 자리를 내어줍니다. ",
      en: "Primitive reflexes are automatic responses babies are born with. They aid survival and, in time, fade to make room for more refined movement. ",
      vi: "Phản xạ nguyên thủy là những phản ứng tự động bé có từ khi sinh ra. Chúng giúp bé sinh tồn và đến lúc sẽ mất đi để nhường chỗ cho các cử động tinh tế hơn. ",
    },
    descStrong: {
      ko: "제때 나타나고 제때 사라지는지",
      en: "Appearing and fading on schedule",
      vi: "Xuất hiện và mất đi đúng thời điểm",
    },
    descEnd: {
      ko: "가 건강한 발달의 신호예요.",
      en: " is a sign of healthy development.",
      vi: " là dấu hiệu của sự phát triển khỏe mạnh.",
    },
    appearLabel: { ko: "나타남", en: "Appears", vi: "Xuất hiện" },
    disappearLabel: { ko: "사라짐", en: "Fades", vi: "Mất đi" },
    howLabel: { ko: "👀 이렇게 보여요", en: "👀 What it looks like", vi: "👀 Trông như thế nào" },
    whyLabel: { ko: "🔎 왜 중요할까요", en: "🔎 Why it matters", vi: "🔎 Vì sao quan trọng" },
    timelineTitle: {
      ko: "반사가 나타나고 사라지는 시기",
      en: "When reflexes appear and fade",
      vi: "Khi nào phản xạ xuất hiện và mất đi",
    },
    timelineDesc: {
      ko: "막대는 각 반사가 활발한 기간이에요. 대부분 생후 몇 달 안에 사라집니다.",
      en: "Each bar shows how long a reflex stays active. Most fade within the first few months.",
      vi: "Mỗi thanh cho thấy phản xạ hoạt động trong bao lâu. Hầu hết mất đi trong vài tháng đầu.",
    },
    monthAxis: { ko: "개월", en: "mo", vi: "th" },
  },
  checkup: {
    badge: {
      ko: "국가 무료 검진",
      en: "Free national check-ups",
      vi: "Khám miễn phí theo quốc gia",
    },
    title: {
      ko: "영유아 건강검진과 함께 보기",
      en: "Pair with well-baby check-ups",
      vi: "Kết hợp với khám sức khỏe định kỳ",
    },
    desc: {
      ko: "한국은 만 6세 미만 영유아에게 국가 무료 건강검진을 제공해요. 발달 단계에 맞춰 아래 시기에 검진을 받으면 발달 선별과 상담에 큰 도움이 됩니다.",
      en: "Korea offers free national health check-ups for children under 6. Getting checked at the periods below — aligned with developmental stages — greatly helps with screening and counseling.",
      vi: "Hàn Quốc cung cấp khám sức khỏe miễn phí cho trẻ dưới 6 tuổi. Khám vào các thời điểm dưới đây — phù hợp với các giai đoạn phát triển — giúp ích rất nhiều cho việc sàng lọc và tư vấn.",
    },
    periodLabel: { ko: "차수", en: "Round", vi: "Lần" },
    ageColLabel: { ko: "시기", en: "Age", vi: "Độ tuổi" },
    focusColLabel: { ko: "주요 내용", en: "Focus", vi: "Nội dung chính" },
    note: {
      ko: "검진 시기·항목은 정책에 따라 달라질 수 있어요. 정확한 일정은 국민건강보험공단(1577-1000) 또는 검진기관에서 확인하세요.",
      en: "Timing and items may change with policy. Confirm exact schedules with your national health service or clinic.",
      vi: "Thời điểm và nội dung khám có thể thay đổi theo chính sách. Hãy xác nhận lịch chính xác với cơ quan y tế quốc gia hoặc phòng khám.",
    },
  },
  tummyTime: {
    badge: { ko: "🤸 토대가 되는 활동", en: "🤸 Foundational skill", vi: "🤸 Kỹ năng nền tảng" },
    title: { ko: "터미타임 미니 가이드", en: "Tummy time mini-guide", vi: "Hướng dẫn nhanh nằm sấp" },
    desc: {
      ko: "터미타임(엎드려 놀기)은 거의 모든 운동 발달의 출발점이에요. 어렵지 않아요 — 아래만 기억하면 됩니다.",
      en: "Tummy time is the starting point for almost all motor development. It's simple — just remember the points below.",
      vi: "Nằm sấp là điểm khởi đầu cho hầu hết sự phát triển vận động. Rất đơn giản — chỉ cần nhớ những điều dưới đây.",
    },
    points: [
      {
        emoji: "🕐",
        title: { ko: "언제·얼마나", en: "When & how much", vi: "Khi nào & bao lâu" },
        text: {
          ko: "신생아는 하루 2~3회, 한 번에 1~2분부터 시작하세요. 점차 늘려 3~4개월에는 하루 총 20~30분을 목표로 해요.",
          en: "Newborns: start 2–3 times a day, 1–2 minutes each. Build up to a total of 20–30 minutes a day by 3–4 months.",
          vi: "Trẻ sơ sinh: bắt đầu 2–3 lần/ngày, mỗi lần 1–2 phút. Tăng dần đến tổng 20–30 phút/ngày khi 3–4 tháng.",
        },
      },
      {
        emoji: "🛟",
        title: { ko: "안전하게", en: "Safely", vi: "An toàn" },
        text: {
          ko: "항상 깨어 있고 보호자가 지켜볼 때만 하세요. 평평하고 단단한 바닥에서, 수유 직후는 피합니다.",
          en: "Only when awake and supervised. On a flat, firm surface, and avoid right after feeding.",
          vi: "Chỉ khi bé thức và có người trông. Trên mặt phẳng cứng, và tránh ngay sau khi bú.",
        },
      },
      {
        emoji: "😊",
        title: { ko: "싫어할 때 요령", en: "If baby dislikes it", vi: "Khi bé không thích" },
        text: {
          ko: "짧게 자주 하고, 내 가슴 위에 엎드리기부터 시작하세요. 눈높이에서 얼굴이나 장난감으로 흥미를 끌어 주세요.",
          en: "Keep it short and frequent; start on your chest. Engage at eye level with your face or a toy.",
          vi: "Cho ngắn và thường xuyên; bắt đầu trên ngực bạn. Thu hút bé ngang tầm mắt bằng mặt bạn hoặc đồ chơi.",
        },
      },
      {
        emoji: "💪",
        title: { ko: "왜 중요해요", en: "Why it matters", vi: "Vì sao quan trọng" },
        text: {
          ko: "목·어깨·등 근육을 키워 고개 들기, 뒤집기, 앉기의 바탕이 돼요. 머리 한쪽이 납작해지는 것도 예방합니다.",
          en: "Builds neck, shoulder, and back muscles — the basis for head control, rolling, and sitting. Also helps prevent a flat spot on the head.",
          vi: "Phát triển cơ cổ, vai, lưng — nền tảng cho giữ đầu, lật và ngồi. Cũng giúp ngừa bẹp một bên đầu.",
        },
      },
    ],
    note: {
      ko: "잠은 반드시 등을 대고 똑바로 눕혀 재우세요. 터미타임은 깨어 있고 지켜볼 때만 합니다.",
      en: "Always put baby to sleep on the back. Tummy time is only for awake, supervised play.",
      vi: "Khi ngủ luôn đặt bé nằm ngửa. Nằm sấp chỉ dành cho lúc bé thức và có người trông.",
    },
  },
  warnings: {
    badge: { ko: "🩺 빠른 점검", en: "🩺 Quick check", vi: "🩺 Kiểm tra nhanh" },
    title: {
      ko: "한눈에 보는 발달 위험 신호",
      en: "Developmental warning signs at a glance",
      vi: "Dấu hiệu cảnh báo phát triển trong nháy mắt",
    },
    desc: {
      ko: "아래는 시기별로 '전문가와 상담'을 권하는 신호를 모은 거예요. 한두 가지에 해당한다고 꼭 문제가 있는 것은 아니지만, 여러 개가 보이거나 걱정된다면 소아청소년과에 상담하세요.",
      en: "Below gathers the 'talk to a professional' signs for each age. Matching one or two doesn't necessarily mean a problem, but if several appear or you're worried, consult a pediatrician.",
      vi: "Dưới đây tổng hợp các dấu hiệu 'nên hỏi chuyên gia' theo từng độ tuổi. Trùng một hai dấu hiệu không hẳn là có vấn đề, nhưng nếu thấy nhiều hoặc bạn lo lắng, hãy tư vấn bác sĩ nhi khoa.",
    },
    emphasis: {
      ko: "어느 시기든, 이전에 하던 동작(앉기·기기·걷기 등)을 갑자기 못 하게 되면 시기와 관계없이 바로 진료받으세요.",
      en: "At any age, if your baby suddenly loses a skill they had (sitting, crawling, walking…), seek care right away.",
      vi: "Ở bất kỳ độ tuổi nào, nếu bé đột nhiên mất kỹ năng đã có (ngồi, bò, đi…), hãy đi khám ngay.",
    },
  },
  faq: {
    title: {
      ko: "자주 묻는 질문",
      en: "Frequently asked questions",
      vi: "Câu hỏi thường gặp",
    },
    desc: {
      ko: "부모님들이 가장 많이 궁금해하시는 내용을 모았어요.",
      en: "The questions parents ask most often.",
      vi: "Những câu hỏi cha mẹ hay thắc mắc nhất.",
    },
    items: [
      {
        q: {
          ko: "발달이 또래보다 느린 것 같아요. 괜찮을까요?",
          en: "My baby seems behind peers. Is that okay?",
          vi: "Bé nhà tôi có vẻ chậm hơn bạn cùng tuổi. Có sao không?",
        },
        a: {
          ko: "아기마다 발달 속도는 다릅니다. 예를 들어 혼자 걷는 시기는 9개월부터 16개월까지도 모두 정상 범위예요. 한두 가지가 조금 늦더라도 전반적으로 꾸준히 나아가고 있다면 대개 괜찮습니다. 다만 여러 영역이 동시에 늦거나, 하던 동작을 갑자기 못 하게 되면 전문가 상담을 권합니다.",
          en: "Every baby develops at their own pace. Walking, for instance, is normal anywhere from 9 to 16 months. If one or two things are a bit late but overall progress is steady, it's usually fine. But if several areas lag at once, or your baby loses a skill they had, see a professional.",
          vi: "Mỗi bé phát triển theo nhịp riêng. Ví dụ, biết đi trong khoảng 9 đến 16 tháng đều là bình thường. Nếu một hai điều hơi chậm nhưng nhìn chung bé vẫn tiến bộ đều thì thường không sao. Tuy nhiên, nếu nhiều lĩnh vực chậm cùng lúc, hoặc bé mất đi kỹ năng đã có, hãy đi khám chuyên gia.",
        },
      },
      {
        q: {
          ko: "이른둥이(미숙아)는 어떻게 봐야 하나요?",
          en: "How should I assess a preterm baby?",
          vi: "Với bé sinh non thì đánh giá thế nào?",
        },
        a: {
          ko: "이른둥이는 '교정 연령'으로 발달을 봅니다. 예정일보다 2개월 일찍 태어났다면, 실제 4개월일 때 교정 연령은 2개월이에요. 보통 만 2세 무렵까지 교정 연령을 기준으로 발달을 평가합니다. 위의 나이 계산기에서 '교정 연령'을 켜면 바로 확인할 수 있어요.",
          en: "Preterm babies are assessed by 'corrected age.' If born 2 months early, a 4-month-old's corrected age is 2 months. Corrected age is typically used until about age 2. Toggle 'corrected age' in the calculator above to see it instantly.",
          vi: "Bé sinh non được đánh giá theo 'tuổi điều chỉnh'. Nếu sinh sớm 2 tháng, thì khi bé 4 tháng, tuổi điều chỉnh là 2 tháng. Tuổi điều chỉnh thường được dùng đến khoảng 2 tuổi. Hãy bật 'tuổi điều chỉnh' ở công cụ tính phía trên để xem ngay.",
        },
      },
      {
        q: {
          ko: "터미타임(엎드려 놀기)은 꼭 해야 하나요?",
          en: "Is tummy time really necessary?",
          vi: "Có nhất thiết phải cho bé nằm sấp không?",
        },
        a: {
          ko: "네, 권장됩니다. 깨어 있고 보호자가 지켜보는 동안 엎드려 노는 시간은 목·어깨·등 근육을 길러 뒤집기와 앉기의 바탕이 돼요. 신생아기에는 하루 몇 분씩 짧게 시작해 점차 늘려가면 됩니다. (단, 잠은 반드시 등을 대고 똑바로 눕혀 재우세요.)",
          en: "Yes, it's recommended. Supervised, awake tummy time builds neck, shoulder, and back muscles — the basis for rolling and sitting. Start with a few minutes a day as a newborn and build up. (But always put baby to sleep on the back.)",
          vi: "Có, điều này được khuyến khích. Nằm sấp khi bé thức và có người trông giúp xây dựng cơ cổ, vai, lưng — nền tảng để lật và ngồi. Khi mới sinh, hãy bắt đầu vài phút mỗi ngày rồi tăng dần. (Nhưng khi ngủ luôn đặt bé nằm ngửa.)",
        },
      },
      {
        q: {
          ko: "보행기를 쓰면 더 빨리 걷나요?",
          en: "Do baby walkers help babies walk sooner?",
          vi: "Dùng xe tập đi bé có biết đi sớm hơn không?",
        },
        a: {
          ko: "그렇지 않습니다. 많은 전문가 단체가 영아용 보행기를 권장하지 않아요. 걷기를 앞당기지 못할뿐더러 넘어짐·계단 추락 등 안전사고 위험이 있습니다. 붙잡고 설 수 있는 안정적인 가구와 안전한 바닥 공간이 더 도움이 돼요.",
          en: "No. Many expert bodies advise against infant walkers. They don't speed up walking and carry risks like falls and stair injuries. Sturdy furniture to pull up on and safe floor space help more.",
          vi: "Không. Nhiều tổ chức chuyên môn khuyến cáo không nên dùng xe tập đi cho trẻ. Chúng không giúp đi sớm hơn mà còn có nguy cơ té ngã, rơi cầu thang. Đồ đạc chắc chắn để bám đứng và không gian sàn an toàn sẽ hữu ích hơn.",
        },
      },
      {
        q: {
          ko: "까치발(발끝)로 걸어요. 문제인가요?",
          en: "My baby walks on tiptoes. Is that a problem?",
          vi: "Bé đi nhón gót. Có vấn đề gì không?",
        },
        a: {
          ko: "걷기를 막 배운 아기가 가끔 까치발을 하는 것은 흔한 일이에요. 보통은 자라면서 자연스럽게 발 전체로 걷게 됩니다. 다만 '항상' 까치발로만 걷거나, 다리가 뻣뻣하게 느껴진다면 한 번 진료받아 보는 것이 좋습니다.",
          en: "Occasional tiptoeing in a new walker is common and usually resolves as they grow into flat-footed walking. But if they 'always' walk on tiptoes, or the legs feel stiff, it's worth getting checked.",
          vi: "Bé mới biết đi thỉnh thoảng nhón gót là chuyện thường gặp và thường tự hết khi bé lớn lên và đi cả bàn chân. Nhưng nếu bé 'luôn luôn' nhón gót, hoặc chân có vẻ cứng, thì nên đi khám.",
        },
      },
      {
        q: {
          ko: "이 사이트 정보로 진단해도 되나요?",
          en: "Can I use this site to diagnose?",
          vi: "Có thể dùng trang này để chẩn đoán không?",
        },
        a: {
          ko: "아니요. 이 가이드는 부모의 이해를 돕는 교육용 정보일 뿐, 의학적 진단이나 치료를 대신하지 않습니다. 걱정되는 부분이 있다면 소아청소년과 의사나 영유아 건강검진을 통해 상담하세요.",
          en: "No. This guide is educational only and does not replace medical diagnosis or treatment. If you're concerned, consult a pediatrician or a well-baby check-up.",
          vi: "Không. Hướng dẫn này chỉ mang tính giáo dục và không thay thế cho chẩn đoán hay điều trị y tế. Nếu bạn lo lắng, hãy tư vấn bác sĩ nhi khoa hoặc đi khám sức khỏe định kỳ cho bé.",
        },
      },
    ],
  },
  footer: {
    remember: { ko: "⚠️ 꼭 기억해 주세요", en: "⚠️ Please remember", vi: "⚠️ Xin hãy nhớ" },
    disclaimer: {
      ko: "이 웹사이트는 아기의 정상 운동 발달을 부모가 쉽게 이해하도록 돕는 교육용 자료입니다. 의학적 진단·치료를 대신하지 않으며, 아기의 발달이 걱정될 때는 반드시 소아청소년과 전문의와 상담하시기 바랍니다.",
      en: "This website is educational material to help parents understand normal infant motor development. It does not replace medical diagnosis or treatment; if you're worried about your baby's development, always consult a pediatric specialist.",
      vi: "Trang web này là tài liệu giáo dục giúp cha mẹ hiểu về sự phát triển vận động bình thường của trẻ. Nó không thay thế cho chẩn đoán hay điều trị y tế; nếu bạn lo lắng về sự phát triển của bé, hãy luôn tư vấn bác sĩ chuyên khoa nhi.",
    },
    brand: {
      ko: "아기 운동 발달 가이드",
      en: "Baby Motor Development Guide",
      vi: "Hướng dẫn phát triển vận động của bé",
    },
    tagline: {
      ko: "평균적인 발달 흐름을 정리한 참고 자료입니다. 모든 아기는 저마다의 속도로 자랍니다. 🌱",
      en: "A reference outlining the average pattern. Every baby grows at their own pace. 🌱",
      vi: "Tài liệu tham khảo phác họa diễn tiến trung bình. Mỗi bé lớn lên theo nhịp riêng của mình. 🌱",
    },
    sourcesTitle: { ko: "참고 자료", en: "References", vi: "Tài liệu tham khảo" },
  },
};

export const sources = [
  {
    label: "WHO Motor Development Study (운동 발달 이정표)",
    url: "https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones",
  },
  {
    label: "CDC – Developmental Milestones (Learn the Signs. Act Early.)",
    url: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html",
  },
  {
    label: "American Academy of Pediatrics – HealthyChildren.org",
    url: "https://www.healthychildren.org/English/ages-stages/Pages/default.aspx",
  },
  {
    label: "보건복지부·국민건강보험공단 영유아 건강검진",
    url: "https://www.nhis.or.kr",
  },
];

export const t = <K extends { ko: string; en: string; vi: string }>(
  v: K,
  lang: Lang
): string => v[lang];

export const langNames: Record<Lang, string> = {
  ko: "한국어",
  en: "English",
  vi: "Tiếng Việt",
};
