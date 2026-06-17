// 아기 운동 발달 데이터 (한국어/영어/베트남어)
// 출처 개념: WHO 운동 발달 이정표, 미국소아과학회(AAP), CDC 발달 이정표, 한국 영유아 건강검진 등
// 공개 자료를 바탕으로 일반 부모가 이해하기 쉽도록 재구성한 교육용 콘텐츠입니다.

export type Lang = "ko" | "en" | "vi";

export interface LText {
  ko: string;
  en: string;
  vi: string;
}
export interface LList {
  ko: string[];
  en: string[];
  vi: string[];
}

export const pick = <T,>(v: { ko: T; en: T; vi: T }, lang: Lang): T => v[lang];

export interface Stage {
  id: string;
  ageRange: LText;
  shortAge: LText;
  emoji: string;
  theme: string;
  summary: LText;
  grossMotor: LList;
  fineMotor: LList;
  reflexes: string[];
  parentTip: LText;
  watchOut: LList;
}

export const stageThemes: Record<
  string,
  { bg: string; soft: string; text: string; ring: string; dot: string; chip: string }
> = {
  rose: {
    bg: "bg-rose-500",
    soft: "bg-rose-50 dark:bg-rose-950/40",
    text: "text-rose-600 dark:text-rose-300",
    ring: "ring-rose-200",
    dot: "bg-rose-400",
    chip: "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-200",
  },
  amber: {
    bg: "bg-amber-500",
    soft: "bg-amber-50 dark:bg-amber-950/40",
    text: "text-amber-600 dark:text-amber-300",
    ring: "ring-amber-200",
    dot: "bg-amber-400",
    chip: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200",
  },
  emerald: {
    bg: "bg-emerald-500",
    soft: "bg-emerald-50 dark:bg-emerald-950/40",
    text: "text-emerald-600 dark:text-emerald-300",
    ring: "ring-emerald-200",
    dot: "bg-emerald-400",
    chip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-200",
  },
  sky: {
    bg: "bg-sky-500",
    soft: "bg-sky-50 dark:bg-sky-950/40",
    text: "text-sky-600 dark:text-sky-300",
    ring: "ring-sky-200",
    dot: "bg-sky-400",
    chip: "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-200",
  },
  violet: {
    bg: "bg-violet-500",
    soft: "bg-violet-50 dark:bg-violet-950/40",
    text: "text-violet-600 dark:text-violet-300",
    ring: "ring-violet-200",
    dot: "bg-violet-400",
    chip: "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-200",
  },
  fuchsia: {
    bg: "bg-fuchsia-500",
    soft: "bg-fuchsia-50 dark:bg-fuchsia-950/40",
    text: "text-fuchsia-600 dark:text-fuchsia-300",
    ring: "ring-fuchsia-200",
    dot: "bg-fuchsia-400",
    chip: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/50 dark:text-fuchsia-200",
  },
  teal: {
    bg: "bg-teal-500",
    soft: "bg-teal-50 dark:bg-teal-950/40",
    text: "text-teal-600 dark:text-teal-300",
    ring: "ring-teal-200",
    dot: "bg-teal-400",
    chip: "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-200",
  },
  indigo: {
    bg: "bg-indigo-500",
    soft: "bg-indigo-50 dark:bg-indigo-950/40",
    text: "text-indigo-600 dark:text-indigo-300",
    ring: "ring-indigo-200",
    dot: "bg-indigo-400",
    chip: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200",
  },
};

// 각 단계가 포함하는 개월 범위(나이 계산기에서 매칭에 사용)
export const stageMonthRange: Record<string, [number, number]> = {
  "0-1": [0, 1],
  "2": [2, 2],
  "3-4": [3, 4],
  "5-6": [5, 6],
  "7-8": [7, 8],
  "9-10": [9, 10],
  "11-12": [11, 12],
  "13-18": [13, 18],
  "19-24": [19, 24],
};

export const stages: Stage[] = [
  {
    id: "0-1",
    ageRange: { ko: "0–1개월", en: "0–1 months", vi: "0–1 tháng" },
    shortAge: { ko: "신생아", en: "Newborn", vi: "Trẻ sơ sinh" },
    emoji: "👶",
    theme: "rose",
    summary: {
      ko: "대부분 누워서 지내요. 아직 스스로 몸을 가누지 못하고, 타고난 '원시 반사'로 세상에 반응합니다.",
      en: "Mostly lying down. Baby can't yet control their body and responds to the world through inborn 'primitive reflexes'.",
      vi: "Bé chủ yếu nằm. Bé chưa tự kiểm soát được cơ thể và phản ứng với thế giới bằng các 'phản xạ nguyên thủy' bẩm sinh.",
    },
    grossMotor: {
      ko: [
        "엎드리면 고개를 잠깐(몇 초) 옆으로 돌릴 수 있어요.",
        "팔다리는 구부린 채로 자주 꿈틀거려요.",
        "안아 올리면 머리가 뒤로 푹 젖혀져 꼭 받쳐줘야 해요.",
      ],
      en: [
        "Can briefly turn the head to the side (a few seconds) when on the tummy.",
        "Arms and legs stay bent and wriggle often.",
        "Head flops back when lifted, so it must be supported.",
      ],
      vi: [
        "Khi nằm sấp, bé có thể quay đầu sang một bên trong giây lát (vài giây).",
        "Tay chân thường co lại và ngọ nguậy.",
        "Khi bế lên, đầu bé ngả ra sau nên cần đỡ đầu cẩn thận.",
      ],
    },
    fineMotor: {
      ko: ["손은 대부분 주먹을 꼭 쥐고 있어요.", "손바닥에 닿는 것을 반사적으로 꽉 잡아요."],
      en: [
        "Hands are mostly held in tight fists.",
        "Reflexively grips anything that touches the palm.",
      ],
      vi: [
        "Bàn tay thường nắm chặt thành nắm đấm.",
        "Theo phản xạ, bé nắm chặt bất cứ thứ gì chạm vào lòng bàn tay.",
      ],
    },
    reflexes: ["moro", "rooting", "sucking", "grasp", "stepping"],
    parentTip: {
      ko: "깨어 있을 때 하루 몇 분씩 '터미타임(엎드려 놀기)'을 시작해 보세요. 목과 어깨 힘을 기르는 첫걸음이에요.",
      en: "Start a few minutes of supervised 'tummy time' each day while awake. It's the first step to building neck and shoulder strength.",
      vi: "Hãy bắt đầu cho bé 'nằm sấp' vài phút mỗi ngày khi bé thức và có người trông. Đây là bước đầu giúp bé khỏe cổ và vai.",
    },
    watchOut: {
      ko: [
        "큰 소리에 전혀 놀라지 않아요.",
        "수유 시 빨기가 매우 약하거나 힘들어해요.",
        "몸이 지나치게 축 늘어지거나 반대로 늘 뻣뻣해요.",
      ],
      en: [
        "Doesn't startle at loud sounds at all.",
        "Sucks very weakly or struggles to feed.",
        "Body is excessively floppy, or always stiff.",
      ],
      vi: [
        "Hoàn toàn không giật mình khi có tiếng động lớn.",
        "Bú rất yếu hoặc khó bú.",
        "Cơ thể quá mềm nhũn, hoặc lúc nào cũng cứng đờ.",
      ],
    },
  },
  {
    id: "2",
    ageRange: { ko: "2개월", en: "2 months", vi: "2 tháng" },
    shortAge: { ko: "2개월", en: "2 months", vi: "2 tháng" },
    emoji: "🙂",
    theme: "amber",
    summary: {
      ko: "고개를 드는 힘이 생기기 시작해요. 사람을 보고 방긋 웃는 '사회적 미소'도 나타납니다.",
      en: "Starts gaining the strength to lift the head. The first 'social smile' at people appears.",
      vi: "Bé bắt đầu có sức nâng đầu. 'Nụ cười xã hội' khi nhìn thấy người cũng xuất hiện.",
    },
    grossMotor: {
      ko: ["엎드린 자세에서 고개를 45도 정도 들어요.", "누워서 팔다리를 더 부드럽게 움직여요."],
      en: [
        "Lifts the head about 45 degrees while on the tummy.",
        "Moves arms and legs more smoothly when lying down.",
      ],
      vi: [
        "Khi nằm sấp, bé nâng đầu khoảng 45 độ.",
        "Khi nằm, bé cử động tay chân nhịp nhàng hơn.",
      ],
    },
    fineMotor: {
      ko: ["주먹을 쥐고 있는 시간이 조금씩 줄어요.", "눈앞의 움직이는 물체를 따라봐요."],
      en: [
        "Spends a little less time with hands fisted.",
        "Follows a moving object with the eyes.",
      ],
      vi: [
        "Bé nắm tay lại ít hơn một chút.",
        "Mắt bé dõi theo vật chuyển động trước mặt.",
      ],
    },
    reflexes: ["moro", "rooting", "grasp", "atnr"],
    parentTip: {
      ko: "아기 눈높이에서 천천히 얼굴을 움직이며 눈맞춤을 해주세요. 시각 추적과 목 근육 발달에 좋아요.",
      en: "Make eye contact and slowly move your face at the baby's eye level. Great for visual tracking and neck muscles.",
      vi: "Hãy giao tiếp bằng mắt và di chuyển khuôn mặt chậm rãi ngang tầm mắt bé. Rất tốt cho khả năng dõi mắt và cơ cổ.",
    },
    watchOut: {
      ko: ["엎드려도 고개를 전혀 들지 못해요.", "사람과 눈을 맞추거나 웃지 않아요."],
      en: ["Can't lift the head at all on the tummy.", "Doesn't make eye contact or smile."],
      vi: [
        "Khi nằm sấp hoàn toàn không nâng được đầu.",
        "Không giao tiếp bằng mắt hoặc không cười.",
      ],
    },
  },
  {
    id: "3-4",
    ageRange: { ko: "3–4개월", en: "3–4 months", vi: "3–4 tháng" },
    shortAge: { ko: "3–4개월", en: "3–4 months", vi: "3–4 tháng" },
    emoji: "🤲",
    theme: "emerald",
    summary: {
      ko: "목을 제법 가눠요. 손을 모아 입으로 가져가고, 엎드리면 팔로 상체를 받칩니다. 첫 뒤집기가 나오기도 해요.",
      en: "Good head control now. Brings hands together to the mouth and props the chest up on the arms. A first roll may appear.",
      vi: "Bé giữ đầu khá vững. Bé chụm hai tay đưa lên miệng và chống tay nâng ngực khi nằm sấp. Lần lật đầu tiên có thể xuất hiện.",
    },
    grossMotor: {
      ko: [
        "엎드려서 팔꿈치로 상체를 받치고 고개를 90도까지 들어요.",
        "받쳐 안으면 머리를 안정적으로 가눠요.",
        "엎드림에서 바로 눕기로 뒤집기가 시작될 수 있어요.",
      ],
      en: [
        "Props up on the forearms and lifts the head up to 90 degrees.",
        "Holds the head steady when held upright.",
        "May start rolling from tummy to back.",
      ],
      vi: [
        "Chống cẳng tay nâng người và ngẩng đầu lên đến 90 độ.",
        "Giữ đầu vững khi được bế thẳng.",
        "Có thể bắt đầu lật từ nằm sấp sang nằm ngửa.",
      ],
    },
    fineMotor: {
      ko: [
        "두 손을 가슴 앞에서 모아요.",
        "눈앞의 장난감을 향해 손을 뻗기 시작해요.",
        "쥐여주면 잠시 흔들며 가지고 놀아요.",
      ],
      en: [
        "Brings both hands together in front of the chest.",
        "Begins reaching toward a toy.",
        "Holds and shakes a toy placed in the hand.",
      ],
      vi: [
        "Chụm hai tay trước ngực.",
        "Bắt đầu với tay về phía đồ chơi.",
        "Cầm và lắc đồ chơi khi được đặt vào tay.",
      ],
    },
    reflexes: ["grasp", "atnr"],
    parentTip: {
      ko: "딸랑이를 손이 닿을 듯한 거리에 두어 손 뻗기를 유도해 보세요. 눈과 손의 협응이 자라납니다.",
      en: "Hold a rattle just within reach to encourage reaching. This grows hand-eye coordination.",
      vi: "Hãy để cái lục lạc ở khoảng cách vừa tầm với để khuyến khích bé với tay. Điều này phát triển khả năng phối hợp tay-mắt.",
    },
    watchOut: {
      ko: ["받쳐 안아도 머리를 가누지 못해요.", "양손을 모으거나 물건을 향해 손을 뻗지 않아요."],
      en: [
        "Can't hold the head steady even when supported.",
        "Doesn't bring hands together or reach for objects.",
      ],
      vi: [
        "Không giữ đầu vững dù được đỡ.",
        "Không chụm hai tay hoặc không với tay lấy đồ vật.",
      ],
    },
  },
  {
    id: "5-6",
    ageRange: { ko: "5–6개월", en: "5–6 months", vi: "5–6 tháng" },
    shortAge: { ko: "5–6개월", en: "5–6 months", vi: "5–6 tháng" },
    emoji: "🔄",
    theme: "sky",
    summary: {
      ko: "양쪽으로 뒤집고, 받쳐주면 앉아요. 물건을 손바닥 전체로 잡아 입으로 탐색합니다.",
      en: "Rolls both ways and sits with support. Grabs objects with the whole palm and explores them with the mouth.",
      vi: "Bé lật được cả hai chiều và ngồi khi có người đỡ. Bé nắm đồ vật bằng cả bàn tay và khám phá bằng miệng.",
    },
    grossMotor: {
      ko: [
        "양방향(엎드림↔바로 눕기)으로 뒤집어요.",
        "손으로 바닥을 짚고 잠깐 앉아 있거나, 받쳐주면 앉아요.",
        "겨드랑이를 받쳐 세우면 다리로 체중을 디뎌요.",
      ],
      en: [
        "Rolls both ways (tummy ↔ back).",
        "Sits briefly propped on the hands, or sits with support.",
        "Bears weight on the legs when held standing.",
      ],
      vi: [
        "Lật được cả hai chiều (sấp ↔ ngửa).",
        "Ngồi trong giây lát khi chống tay, hoặc ngồi khi được đỡ.",
        "Dồn trọng lượng lên chân khi được giữ đứng.",
      ],
    },
    fineMotor: {
      ko: [
        "물건을 손바닥 전체로 움켜쥐어요.",
        "한 손에서 다른 손으로 물건을 옮기기 시작해요.",
        "잡은 것은 무엇이든 입으로 가져가 탐색해요.",
      ],
      en: [
        "Rakes objects up with the whole palm.",
        "Begins passing objects from one hand to the other.",
        "Brings everything to the mouth to explore.",
      ],
      vi: [
        "Vơ lấy đồ vật bằng cả bàn tay.",
        "Bắt đầu chuyền đồ vật từ tay này sang tay kia.",
        "Đưa mọi thứ lên miệng để khám phá.",
      ],
    },
    reflexes: [],
    parentTip: {
      ko: "안전한 바닥에서 자유롭게 구르고 뒤집게 해주세요. 다양한 질감의 장난감 탐색도 좋아요.",
      en: "Let baby roll freely on a safe floor. Exploring toys of different textures is great too.",
      vi: "Hãy để bé lăn và lật tự do trên sàn an toàn. Cho bé khám phá đồ chơi với nhiều chất liệu khác nhau cũng rất tốt.",
    },
    watchOut: {
      ko: [
        "어느 방향으로도 뒤집지 못해요.",
        "물건에 손을 뻗어 잡지 못해요.",
        "받쳐줘도 머리가 계속 흔들려요.",
      ],
      en: [
        "Can't roll in either direction.",
        "Doesn't reach for and grasp objects.",
        "Head still wobbles even when supported.",
      ],
      vi: [
        "Không lật được theo bất kỳ chiều nào.",
        "Không với tay lấy và nắm đồ vật.",
        "Đầu vẫn lắc lư dù được đỡ.",
      ],
    },
  },
  {
    id: "7-8",
    ageRange: { ko: "7–8개월", en: "7–8 months", vi: "7–8 tháng" },
    shortAge: { ko: "7–8개월", en: "7–8 months", vi: "7–8 tháng" },
    emoji: "🧎",
    theme: "violet",
    summary: {
      ko: "혼자 앉을 수 있어요. 배를 밀며 이동하고, 잡고 일어서려는 시도가 시작됩니다.",
      en: "Can sit alone. Moves by scooting on the belly and starts trying to pull up to stand.",
      vi: "Bé tự ngồi được. Bé di chuyển bằng cách trườn bụng và bắt đầu cố bám để đứng dậy.",
    },
    grossMotor: {
      ko: [
        "손을 짚지 않고 혼자 안정적으로 앉아요.",
        "배밀이를 하거나 네발 기기 자세를 잡아요.",
        "가구를 잡고 무릎을 펴 일어서려 해요.",
      ],
      en: [
        "Sits steadily without using the hands.",
        "Scoots on the belly or gets into a hands-and-knees position.",
        "Tries to pull up to stand holding furniture.",
      ],
      vi: [
        "Ngồi vững mà không cần chống tay.",
        "Trườn bụng hoặc vào tư thế bò bằng tay và đầu gối.",
        "Cố bám vào đồ đạc để đứng lên.",
      ],
    },
    fineMotor: {
      ko: [
        "엄지와 다른 손가락으로 물건을 집기 시작해요(초기 집기).",
        "양손에 물건을 하나씩 쥐고 부딪쳐요.",
      ],
      en: [
        "Starts picking up objects with thumb and fingers (early grasp).",
        "Holds an object in each hand and bangs them together.",
      ],
      vi: [
        "Bắt đầu nhặt đồ vật bằng ngón cái và các ngón tay (cầm nắm sơ khởi).",
        "Cầm mỗi tay một vật và đập chúng vào nhau.",
      ],
    },
    reflexes: [],
    parentTip: {
      ko: "아기 앞쪽에 장난감을 두어 기어가도록 유도해 보세요. 안전한 가구 모서리는 미리 보호해 주세요.",
      en: "Place a toy just ahead to encourage crawling. Pad sharp furniture corners in advance.",
      vi: "Hãy đặt đồ chơi phía trước để khuyến khích bé bò. Hãy bọc trước các góc cạnh sắc của đồ đạc.",
    },
    watchOut: {
      ko: [
        "받쳐줘도 혼자 앉지 못해요.",
        "체중을 다리로 전혀 싣지 않으려 해요.",
        "한쪽 팔다리만 주로 쓰는 비대칭이 뚜렷해요.",
      ],
      en: [
        "Can't sit alone even with support.",
        "Refuses to bear any weight on the legs.",
        "Strongly favors one side (marked asymmetry).",
      ],
      vi: [
        "Không tự ngồi được dù có người đỡ.",
        "Hoàn toàn không chịu dồn trọng lượng lên chân.",
        "Chỉ dùng một bên tay chân rõ rệt (mất cân đối).",
      ],
    },
  },
  {
    id: "9-10",
    ageRange: { ko: "9–10개월", en: "9–10 months", vi: "9–10 tháng" },
    shortAge: { ko: "9–10개월", en: "9–10 months", vi: "9–10 tháng" },
    emoji: "🚼",
    theme: "teal",
    summary: {
      ko: "잘 기어 다니고, 가구를 붙잡고 옆으로 걷습니다(크루징). 작은 것을 정교하게 집어요.",
      en: "Crawls well and cruises sideways holding furniture. Picks up small things with precision.",
      vi: "Bé bò giỏi và đi men theo đồ đạc (bám đi ngang). Bé nhặt vật nhỏ một cách khéo léo.",
    },
    grossMotor: {
      ko: [
        "네발로 능숙하게 기어 다녀요.",
        "가구를 잡고 스스로 일어서요.",
        "가구를 붙잡고 옆으로 발을 옮겨 걸어요(크루징).",
      ],
      en: [
        "Crawls skillfully on hands and knees.",
        "Pulls up to stand on furniture.",
        "Cruises sideways stepping along furniture.",
      ],
      vi: [
        "Bò thành thạo bằng tay và đầu gối.",
        "Tự bám đồ đạc để đứng lên.",
        "Bám đồ đạc bước ngang để đi (bám đi).",
      ],
    },
    fineMotor: {
      ko: [
        "엄지와 검지로 작은 것을 정확히 집어요(집게 잡기).",
        "물건을 일부러 떨어뜨리며 인과관계를 즐겨요.",
      ],
      en: [
        "Uses a precise pincer grasp (thumb and index finger).",
        "Drops objects on purpose, enjoying cause and effect.",
      ],
      vi: [
        "Nhặt vật nhỏ chính xác bằng ngón cái và ngón trỏ (kẹp ngón).",
        "Cố ý thả rơi đồ vật, thích thú với quan hệ nhân quả.",
      ],
    },
    reflexes: [],
    parentTip: {
      ko: "붙잡고 설 수 있는 안정적인 가구를 배치해 주세요. 바닥의 작은 물건은 삼킴 위험이 있으니 치워주세요.",
      en: "Arrange sturdy furniture to pull up on. Remove small floor objects — they're a choking hazard.",
      vi: "Hãy sắp xếp đồ đạc chắc chắn để bé bám đứng. Dọn các vật nhỏ trên sàn vì có nguy cơ hóc nghẹn.",
    },
    watchOut: {
      ko: [
        "어떤 방식으로도 이동(기기·배밀이)하지 못해요.",
        "잡아줘도 서려 하지 않아요.",
        "집게 잡기로 작은 물건을 집지 못해요.",
      ],
      en: [
        "Doesn't move by any means (crawling or scooting).",
        "Won't try to stand even when held.",
        "Can't pick up small objects with a pincer grasp.",
      ],
      vi: [
        "Không di chuyển bằng bất kỳ cách nào (bò hay trườn).",
        "Không chịu đứng dù được giữ.",
        "Không nhặt được vật nhỏ bằng kiểu kẹp ngón.",
      ],
    },
  },
  {
    id: "11-12",
    ageRange: { ko: "11–12개월", en: "11–12 months", vi: "11–12 tháng" },
    shortAge: { ko: "돌 무렵", en: "Around 1 year", vi: "Khoảng 1 tuổi" },
    emoji: "🧍",
    theme: "fuchsia",
    summary: {
      ko: "혼자 잠깐 서고, 첫 걸음을 떼기도 해요. 돌 무렵 걷는 시점은 아기마다 차이가 큽니다.",
      en: "Stands alone briefly and may take first steps. The timing of walking varies widely from baby to baby.",
      vi: "Bé tự đứng được trong giây lát và có thể bước những bước đầu tiên. Thời điểm biết đi khác nhau nhiều tùy mỗi bé.",
    },
    grossMotor: {
      ko: [
        "아무것도 잡지 않고 혼자 잠깐 서 있어요.",
        "손을 잡아주면 걷고, 첫 독립 보행을 시도해요.",
        "앉았다 일어서기를 자유롭게 해요.",
      ],
      en: [
        "Stands alone briefly without holding on.",
        "Walks when a hand is held, and tries first independent steps.",
        "Moves freely between sitting and standing.",
      ],
      vi: [
        "Tự đứng trong giây lát mà không bám víu.",
        "Đi khi được dắt tay, và thử những bước đi độc lập đầu tiên.",
        "Tự do chuyển giữa ngồi và đứng.",
      ],
    },
    fineMotor: {
      ko: [
        "컵을 잡고 마시려 하거나 숟가락을 쥐어요.",
        "블록 2개를 쌓으려 시도하고, 책장을 넘겨요.",
      ],
      en: [
        "Tries to drink from a cup and holds a spoon.",
        "Tries to stack 2 blocks and turns book pages.",
      ],
      vi: [
        "Cố cầm cốc uống nước và cầm thìa.",
        "Cố xếp chồng 2 khối và lật trang sách.",
      ],
    },
    reflexes: ["babinski"],
    parentTip: {
      ko: "맨발로 안전한 바닥을 걷게 하면 균형 감각에 도움이 돼요. 걷는 시기는 9~16개월까지 정상 범위가 넓어요.",
      en: "Walking barefoot on a safe floor helps balance. Walking anytime from 9–16 months is within the normal range.",
      vi: "Cho bé đi chân trần trên sàn an toàn giúp giữ thăng bằng. Biết đi trong khoảng 9–16 tháng đều nằm trong mức bình thường.",
    },
    watchOut: {
      ko: ["잡아줘도 다리로 서지 못해요.", "이전에 하던 동작(앉기·기기)을 갑자기 못 하게 돼요."],
      en: [
        "Can't stand on the legs even when held.",
        "Suddenly loses skills (sitting, crawling) once gained.",
      ],
      vi: [
        "Không đứng được trên chân dù được giữ.",
        "Đột nhiên mất các kỹ năng đã có (ngồi, bò).",
      ],
    },
  },
  {
    id: "13-18",
    ageRange: { ko: "13–18개월", en: "13–18 months", vi: "13–18 tháng" },
    shortAge: { ko: "13–18개월", en: "13–18 months", vi: "13–18 tháng" },
    emoji: "🚶",
    theme: "indigo",
    summary: {
      ko: "혼자 걷는 것이 안정돼요. 기어서 계단을 오르고, 끌거나 미는 장난감을 즐깁니다.",
      en: "Walking alone becomes steady. Crawls up stairs and enjoys push-and-pull toys.",
      vi: "Bé đi một mình vững vàng hơn. Bé bò lên cầu thang và thích đồ chơi kéo đẩy.",
    },
    grossMotor: {
      ko: [
        "혼자 안정적으로 걷고, 멈췄다 다시 걸어요.",
        "기어서 계단을 오르고, 쪼그려 앉았다 일어서요.",
        "끌거나 미는 장난감을 가지고 걸어요.",
      ],
      en: [
        "Walks steadily alone, stopping and starting.",
        "Crawls up stairs and squats then stands back up.",
        "Walks while pulling or pushing a toy.",
      ],
      vi: [
        "Đi một mình vững vàng, dừng lại rồi đi tiếp.",
        "Bò lên cầu thang và ngồi xổm rồi đứng dậy.",
        "Vừa đi vừa kéo hoặc đẩy đồ chơi.",
      ],
    },
    fineMotor: {
      ko: ["블록을 2~4개 쌓아요.", "크레용으로 끄적이고, 숟가락으로 떠먹으려 해요."],
      en: ["Stacks 2–4 blocks.", "Scribbles with a crayon and tries to self-feed with a spoon."],
      vi: ["Xếp chồng 2–4 khối.", "Vẽ nguệch ngoạc bằng bút sáp và tự xúc ăn bằng thìa."],
    },
    reflexes: [],
    parentTip: {
      ko: "넘어져도 괜찮은 넓은 공간에서 많이 걷게 해주세요. 계단은 반드시 어른이 곁에서 지켜봐 주세요.",
      en: "Let them walk lots in a wide, fall-safe space. Always supervise stairs closely.",
      vi: "Hãy cho bé đi nhiều ở không gian rộng, an toàn khi ngã. Luôn trông chừng sát sao khi bé ở cầu thang.",
    },
    watchOut: {
      ko: ["18개월이 되어도 혼자 걷지 못해요.", "발끝(까치발)으로만 걸어요."],
      en: ["Still can't walk alone by 18 months.", "Walks only on the toes (tiptoe)."],
      vi: ["18 tháng vẫn chưa tự đi được.", "Chỉ đi bằng đầu ngón chân (nhón gót)."],
    },
  },
  {
    id: "19-24",
    ageRange: { ko: "19–24개월", en: "19–24 months", vi: "19–24 tháng" },
    shortAge: { ko: "두 돌 무렵", en: "Around 2 years", vi: "Khoảng 2 tuổi" },
    emoji: "🏃",
    theme: "rose",
    summary: {
      ko: "뛰기 시작하고 공을 차요. 손을 잡고 계단을 오르내리며 활동 범위가 부쩍 넓어집니다.",
      en: "Starts running and kicks a ball. Goes up and down stairs with a hand held, and the world opens up.",
      vi: "Bé bắt đầu chạy và đá bóng. Bé lên xuống cầu thang khi được dắt tay, phạm vi hoạt động mở rộng hẳn.",
    },
    grossMotor: {
      ko: [
        "달리기 시작하고, 잘 넘어지지 않아요.",
        "공을 발로 차고, 제자리에서 살짝 뛰어요.",
        "난간이나 손을 잡고 계단을 오르내려요.",
      ],
      en: [
        "Starts running and falls less often.",
        "Kicks a ball and jumps in place a little.",
        "Goes up and down stairs holding a rail or hand.",
      ],
      vi: [
        "Bắt đầu chạy và ít bị ngã hơn.",
        "Đá bóng và nhảy tại chỗ một chút.",
        "Lên xuống cầu thang khi vịn lan can hoặc nắm tay.",
      ],
    },
    fineMotor: {
      ko: ["블록을 6개 이상 쌓아요.", "수직선·원 같은 단순한 선을 따라 그어요."],
      en: ["Stacks 6 or more blocks.", "Copies simple lines like a vertical stroke or circle."],
      vi: ["Xếp chồng từ 6 khối trở lên.", "Vẽ theo các nét đơn giản như nét dọc hoặc hình tròn."],
    },
    reflexes: [],
    parentTip: {
      ko: "공놀이, 미끄럼틀 등 대근육을 쓰는 바깥 놀이를 늘려주세요. 균형과 협응이 함께 자라납니다.",
      en: "Add outdoor play that uses big muscles — ball games, slides. Balance and coordination grow together.",
      vi: "Hãy tăng các hoạt động ngoài trời dùng cơ lớn như chơi bóng, cầu trượt. Thăng bằng và phối hợp sẽ cùng phát triển.",
    },
    watchOut: {
      ko: ["달리지 못하거나 자주 넘어져요.", "두 돌이 지나도 계단을 전혀 오르지 못해요."],
      en: ["Can't run or falls frequently.", "Still can't climb stairs at all after age 2."],
      vi: ["Không chạy được hoặc ngã thường xuyên.", "Qua 2 tuổi vẫn hoàn toàn không leo được cầu thang."],
    },
  },
];

export interface Reflex {
  id: string;
  name: LText;
  englishName: string;
  emoji: string;
  appears: LText;
  disappears: LText;
  appearsMonth: number; // 타임라인용
  disappearsMonth: number; // 타임라인용
  whatHappens: LText;
  howToSee: LText;
  whyItMatters: LText;
}

export const reflexes: Reflex[] = [
  {
    id: "moro",
    name: { ko: "모로 반사", en: "Moro Reflex", vi: "Phản xạ Moro" },
    englishName: "Moro · Startle",
    emoji: "😲",
    appears: { ko: "출생 시", en: "At birth", vi: "Khi sinh ra" },
    disappears: {
      ko: "보통 4–6개월에 사라짐",
      en: "Usually fades by 4–6 months",
      vi: "Thường mất đi khi 4–6 tháng",
    },
    appearsMonth: 0,
    disappearsMonth: 5,
    whatHappens: {
      ko: "갑작스러운 소리나 머리가 뒤로 젖혀지는 느낌에 양팔을 활짝 벌렸다가 다시 끌어안듯 오므리는 반응이에요.",
      en: "In response to a sudden sound or sensation of falling, the baby flings both arms wide, then pulls them back in as if to embrace.",
      vi: "Khi có tiếng động đột ngột hoặc cảm giác hẫng đầu, bé dang rộng hai tay rồi thu lại như ôm.",
    },
    howToSee: {
      ko: "큰 소리가 나거나 안고 있다 살짝 내려놓을 때, 팔을 쫙 폈다가 움츠리는 모습을 볼 수 있어요.",
      en: "When there's a loud noise or you gently lower the baby, you'll see the arms shoot out and then draw back in.",
      vi: "Khi có tiếng động lớn hoặc khi bạn nhẹ nhàng hạ bé xuống, bạn sẽ thấy hai tay bé bung ra rồi thu lại.",
    },
    whyItMatters: {
      ko: "양쪽이 대칭으로 나타나는지가 중요해요. 한쪽만 약하면 신경·근육 이상의 단서가 될 수 있어, 의료진이 꼭 확인하는 반사입니다.",
      en: "Symmetry matters: if it's weaker on one side it can hint at a nerve or muscle issue, so clinicians always check this reflex.",
      vi: "Tính đối xứng rất quan trọng: nếu yếu hơn ở một bên, đó có thể là dấu hiệu vấn đề thần kinh hoặc cơ, nên bác sĩ luôn kiểm tra phản xạ này.",
    },
  },
  {
    id: "rooting",
    name: { ko: "찾기(포유) 반사", en: "Rooting Reflex", vi: "Phản xạ tìm vú" },
    englishName: "Rooting",
    emoji: "🍼",
    appears: { ko: "출생 시", en: "At birth", vi: "Khi sinh ra" },
    disappears: {
      ko: "보통 4개월경 사라짐",
      en: "Usually fades around 4 months",
      vi: "Thường mất đi khoảng 4 tháng",
    },
    appearsMonth: 0,
    disappearsMonth: 4,
    whatHappens: {
      ko: "뺨이나 입가를 건드리면 그쪽으로 고개를 돌리고 입을 벌려 젖을 찾는 반응이에요.",
      en: "Touch the cheek or corner of the mouth and the baby turns toward it, opening the mouth to seek the breast.",
      vi: "Khi chạm vào má hoặc khóe miệng, bé quay đầu về phía đó và há miệng tìm vú.",
    },
    howToSee: {
      ko: "손가락으로 아기 볼을 살짝 쓰다듬으면 그 방향으로 고개를 돌리며 입을 오물거려요.",
      en: "Gently stroke the baby's cheek and they turn that way, mouthing for a feed.",
      vi: "Khi bạn nhẹ vuốt má bé, bé quay đầu về hướng đó và mấp máy miệng đòi bú.",
    },
    whyItMatters: {
      ko: "수유를 가능하게 하는 생존 반사예요. 잘 나타나면 빨기·삼키기 협응이 준비되고 있다는 신호입니다.",
      en: "A survival reflex that enables feeding. When present, it signals that suck-swallow coordination is developing.",
      vi: "Một phản xạ sinh tồn giúp bé bú. Khi xuất hiện tốt, đó là dấu hiệu khả năng phối hợp bú-nuốt đang phát triển.",
    },
  },
  {
    id: "sucking",
    name: { ko: "빨기 반사", en: "Sucking Reflex", vi: "Phản xạ bú" },
    englishName: "Sucking",
    emoji: "👄",
    appears: {
      ko: "출생 전(임신 32주경)부터",
      en: "Before birth (around 32 weeks)",
      vi: "Trước khi sinh (khoảng tuần 32)",
    },
    disappears: {
      ko: "점차 의식적인 빨기로 전환",
      en: "Gradually becomes voluntary sucking",
      vi: "Dần chuyển thành bú có ý thức",
    },
    appearsMonth: 0,
    disappearsMonth: 4,
    whatHappens: {
      ko: "입천장에 무언가 닿으면 자동으로 리듬감 있게 빠는 반응이에요.",
      en: "When something touches the roof of the mouth, the baby sucks rhythmically and automatically.",
      vi: "Khi có vật chạm vào vòm miệng, bé tự động bú theo nhịp.",
    },
    howToSee: {
      ko: "젖꼭지나 깨끗한 손가락이 입에 들어오면 규칙적으로 빨기 시작해요.",
      en: "A nipple or clean finger in the mouth triggers steady, rhythmic sucking.",
      vi: "Khi núm vú hoặc ngón tay sạch đưa vào miệng, bé bắt đầu bú đều đặn theo nhịp.",
    },
    whyItMatters: {
      ko: "찾기 반사와 짝을 이뤄 영양 섭취를 책임지는 핵심 반사예요. 약하면 수유량과 체중 증가를 함께 살펴야 합니다.",
      en: "Paired with rooting, it's a key feeding reflex. If weak, feeding amount and weight gain should be watched together.",
      vi: "Kết hợp với phản xạ tìm vú, đây là phản xạ ăn quan trọng. Nếu yếu, cần theo dõi cả lượng bú và sự tăng cân.",
    },
  },
  {
    id: "grasp",
    name: { ko: "쥐기(파악) 반사", en: "Palmar Grasp Reflex", vi: "Phản xạ nắm tay" },
    englishName: "Palmar Grasp",
    emoji: "✊",
    appears: { ko: "출생 시", en: "At birth", vi: "Khi sinh ra" },
    disappears: {
      ko: "보통 5–6개월에 사라짐",
      en: "Usually fades by 5–6 months",
      vi: "Thường mất đi khi 5–6 tháng",
    },
    appearsMonth: 0,
    disappearsMonth: 6,
    whatHappens: {
      ko: "손바닥에 무언가 닿으면 손가락을 오므려 꽉 쥐는 반응이에요.",
      en: "When something touches the palm, the fingers curl in and grip tightly.",
      vi: "Khi có vật chạm vào lòng bàn tay, các ngón tay cụp lại và nắm chặt.",
    },
    howToSee: {
      ko: "아기 손바닥에 손가락을 갖다 대면 깜짝 놀랄 만큼 세게 움켜쥐어요.",
      en: "Place a finger in the baby's palm and they grip surprisingly strongly.",
      vi: "Đặt ngón tay vào lòng bàn tay bé, bé sẽ nắm chặt đến mức bất ngờ.",
    },
    whyItMatters: {
      ko: "이 반사가 사라져야 '내가 원할 때 잡고 놓는' 의식적인 손 사용(소근육)이 발달해요. 자연스러운 발달의 디딤돌입니다.",
      en: "This reflex must fade for voluntary 'grasp and release at will' fine-motor skills to develop. A natural stepping stone.",
      vi: "Phản xạ này phải mất đi thì kỹ năng vận động tinh 'cầm và buông theo ý muốn' mới phát triển. Đây là một bước đệm tự nhiên.",
    },
  },
  {
    id: "stepping",
    name: { ko: "걷기(보행) 반사", en: "Stepping Reflex", vi: "Phản xạ bước đi" },
    englishName: "Stepping",
    emoji: "👣",
    appears: { ko: "출생 시", en: "At birth", vi: "Khi sinh ra" },
    disappears: {
      ko: "보통 2개월경 사라짐",
      en: "Usually fades around 2 months",
      vi: "Thường mất đi khoảng 2 tháng",
    },
    appearsMonth: 0,
    disappearsMonth: 2,
    whatHappens: {
      ko: "겨드랑이를 받쳐 발바닥을 바닥에 닿게 하면 한 발씩 내딛듯 다리를 움직이는 반응이에요.",
      en: "Held upright with the feet touching a surface, the baby moves the legs as if taking steps.",
      vi: "Khi được giữ thẳng cho bàn chân chạm mặt phẳng, bé cử động chân như đang bước đi.",
    },
    howToSee: {
      ko: "아기를 세워 발을 평평한 곳에 살짝 대면 걷는 것처럼 다리를 번갈아 움직여요.",
      en: "Hold the baby upright with feet on a flat surface and they alternate the legs as if walking.",
      vi: "Giữ bé đứng cho chân chạm mặt phẳng, bé sẽ luân phiên hai chân như đang đi.",
    },
    whyItMatters: {
      ko: "실제 걷기와는 다른 원시 반사예요. 사라졌다가 돌 무렵 '진짜 걷기'로 새로 발달하니 걱정하지 않아도 됩니다.",
      en: "This is a primitive reflex, not real walking. It fades and 'true walking' develops anew around age 1 — no need to worry.",
      vi: "Đây là phản xạ nguyên thủy, không phải đi thật. Nó mất đi rồi 'đi thật' phát triển lại khoảng 1 tuổi — không cần lo lắng.",
    },
  },
  {
    id: "atnr",
    name: { ko: "비대칭 긴장성 경반사", en: "ATNR", vi: "Phản xạ ATNR" },
    englishName: "ATNR · Fencing",
    emoji: "🤺",
    appears: { ko: "출생 시", en: "At birth", vi: "Khi sinh ra" },
    disappears: {
      ko: "보통 4–6개월에 사라짐",
      en: "Usually fades by 4–6 months",
      vi: "Thường mất đi khi 4–6 tháng",
    },
    appearsMonth: 0,
    disappearsMonth: 6,
    whatHappens: {
      ko: "고개를 한쪽으로 돌리면 그쪽 팔다리는 펴지고 반대쪽은 구부러져, 마치 펜싱 자세 같은 모습이 돼요.",
      en: "When the head turns to one side, that side's limbs extend and the other side bends — like a fencing pose.",
      vi: "Khi quay đầu sang một bên, tay chân bên đó duỗi ra còn bên kia co lại — giống tư thế đấu kiếm.",
    },
    howToSee: {
      ko: "누운 아기의 고개가 한쪽으로 향할 때, 보는 쪽 팔이 쭉 뻗는 자세를 관찰할 수 있어요.",
      en: "When a lying baby's head turns to one side, you can see the arm on that side stretch out.",
      vi: "Khi đầu bé đang nằm quay sang một bên, bạn thấy cánh tay bên đó duỗi thẳng ra.",
    },
    whyItMatters: {
      ko: "눈과 손의 협응이 시작되도록 돕는 반사예요. 너무 오래 남으면 뒤집기·기기 같은 다음 발달을 방해할 수 있어 경과를 봅니다.",
      en: "It helps hand-eye coordination begin. If it lingers too long it can hinder rolling and crawling, so its course is monitored.",
      vi: "Phản xạ này giúp khởi đầu phối hợp tay-mắt. Nếu tồn tại quá lâu, nó có thể cản trở việc lật và bò, nên cần theo dõi diễn tiến.",
    },
  },
  {
    id: "babinski",
    name: { ko: "바빈스키 반사", en: "Babinski Reflex", vi: "Phản xạ Babinski" },
    englishName: "Babinski",
    emoji: "🦶",
    appears: { ko: "출생 시", en: "At birth", vi: "Khi sinh ra" },
    disappears: {
      ko: "보통 12–24개월에 사라짐",
      en: "Usually fades by 12–24 months",
      vi: "Thường mất đi khi 12–24 tháng",
    },
    appearsMonth: 0,
    disappearsMonth: 24,
    whatHappens: {
      ko: "발바닥 바깥쪽을 발꿈치에서 발가락 쪽으로 긁으면 엄지발가락이 위로 젖혀지고 발가락이 부채처럼 펴지는 반응이에요.",
      en: "Stroke the outer sole from heel to toes and the big toe bends up while the toes fan out.",
      vi: "Vuốt mép ngoài lòng bàn chân từ gót lên ngón, ngón cái cong lên còn các ngón xòe ra như nan quạt.",
    },
    howToSee: {
      ko: "발바닥을 부드럽게 한 번 긁으면 엄지발가락이 위로 올라가요.",
      en: "Gently stroke the sole once and the big toe lifts upward.",
      vi: "Vuốt nhẹ lòng bàn chân một lần, ngón chân cái sẽ nhấc lên.",
    },
    whyItMatters: {
      ko: "영유아에게는 정상 반응이에요. 다만 두 돌 이후에도 계속 나타나면 신경계 평가가 필요할 수 있어, 시간에 따라 사라지는지가 중요합니다.",
      en: "Normal in infants. But if it persists after age 2 a neurological check may be needed, so whether it fades over time matters.",
      vi: "Là phản ứng bình thường ở trẻ nhỏ. Nhưng nếu vẫn còn sau 2 tuổi thì có thể cần khám thần kinh, nên việc nó có mất đi theo thời gian hay không rất quan trọng.",
    },
  },
];

export const reflexById = (id: string) => reflexes.find((r) => r.id === id);

// 한국 영유아 건강검진 일정 (국가 무료 검진)
export interface Checkup {
  period: LText;
  ageLabel: LText;
  focus: LText;
}

export const checkups: Checkup[] = [
  {
    period: { ko: "1차", en: "1st", vi: "Lần 1" },
    ageLabel: { ko: "생후 14–35일", en: "14–35 days", vi: "14–35 ngày tuổi" },
    focus: {
      ko: "문진·진찰, 수유·영양 상담",
      en: "History & exam, feeding and nutrition counseling",
      vi: "Hỏi bệnh & khám, tư vấn bú và dinh dưỡng",
    },
  },
  {
    period: { ko: "2차", en: "2nd", vi: "Lần 2" },
    ageLabel: { ko: "4–6개월", en: "4–6 months", vi: "4–6 tháng" },
    focus: {
      ko: "발달 평가 시작, 안전사고 예방 교육",
      en: "Developmental screening begins, safety education",
      vi: "Bắt đầu sàng lọc phát triển, giáo dục phòng tai nạn",
    },
  },
  {
    period: { ko: "3차", en: "3rd", vi: "Lần 3" },
    ageLabel: { ko: "9–12개월", en: "9–12 months", vi: "9–12 tháng" },
    focus: {
      ko: "발달선별검사, 영양·수면 상담",
      en: "Developmental screening test, nutrition & sleep",
      vi: "Test sàng lọc phát triển, tư vấn dinh dưỡng & giấc ngủ",
    },
  },
  {
    period: { ko: "4차", en: "4th", vi: "Lần 4" },
    ageLabel: { ko: "18–24개월", en: "18–24 months", vi: "18–24 tháng" },
    focus: {
      ko: "발달선별검사, 영아 비만·치아 상담",
      en: "Developmental screening, obesity & dental advice",
      vi: "Sàng lọc phát triển, tư vấn béo phì & răng miệng",
    },
  },
  {
    period: { ko: "5차", en: "5th", vi: "Lần 5" },
    ageLabel: { ko: "30–36개월", en: "30–36 months", vi: "30–36 tháng" },
    focus: {
      ko: "발달선별검사, 사회성·언어 평가",
      en: "Developmental screening, social & language",
      vi: "Sàng lọc phát triển, đánh giá xã hội & ngôn ngữ",
    },
  },
];
