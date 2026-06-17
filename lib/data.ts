// 아기 운동 발달 데이터
// 출처 개념: WHO 운동 발달 이정표, 미국소아과학회(AAP), CDC 발달 이정표 등 공개 자료를 바탕으로
// 일반 부모가 이해하기 쉽도록 재구성한 교육용 콘텐츠입니다.

export interface Stage {
  id: string;
  ageRange: string; // 예: "0–1개월"
  shortAge: string; // 타임라인용 짧은 라벨
  emoji: string;
  theme: string; // tailwind 색 키 (아래 stageThemes 참고)
  summary: string;
  grossMotor: string[]; // 대근육 운동 (몸 전체)
  fineMotor: string[]; // 소근육 운동 (손·손가락)
  reflexes: string[]; // 이 시기에 활발한 원시 반사 (id)
  parentTip: string; // 부모를 위한 놀이/도움 팁
  watchOut: string[]; // 전문가 상담을 고려할 신호
}

export const stageThemes: Record<
  string,
  { bg: string; soft: string; text: string; ring: string; dot: string; chip: string }
> = {
  rose: {
    bg: "bg-rose-500",
    soft: "bg-rose-50",
    text: "text-rose-600",
    ring: "ring-rose-200",
    dot: "bg-rose-400",
    chip: "bg-rose-100 text-rose-700",
  },
  amber: {
    bg: "bg-amber-500",
    soft: "bg-amber-50",
    text: "text-amber-600",
    ring: "ring-amber-200",
    dot: "bg-amber-400",
    chip: "bg-amber-100 text-amber-700",
  },
  emerald: {
    bg: "bg-emerald-500",
    soft: "bg-emerald-50",
    text: "text-emerald-600",
    ring: "ring-emerald-200",
    dot: "bg-emerald-400",
    chip: "bg-emerald-100 text-emerald-700",
  },
  sky: {
    bg: "bg-sky-500",
    soft: "bg-sky-50",
    text: "text-sky-600",
    ring: "ring-sky-200",
    dot: "bg-sky-400",
    chip: "bg-sky-100 text-sky-700",
  },
  violet: {
    bg: "bg-violet-500",
    soft: "bg-violet-50",
    text: "text-violet-600",
    ring: "ring-violet-200",
    dot: "bg-violet-400",
    chip: "bg-violet-100 text-violet-700",
  },
  fuchsia: {
    bg: "bg-fuchsia-500",
    soft: "bg-fuchsia-50",
    text: "text-fuchsia-600",
    ring: "ring-fuchsia-200",
    dot: "bg-fuchsia-400",
    chip: "bg-fuchsia-100 text-fuchsia-700",
  },
  teal: {
    bg: "bg-teal-500",
    soft: "bg-teal-50",
    text: "text-teal-600",
    ring: "ring-teal-200",
    dot: "bg-teal-400",
    chip: "bg-teal-100 text-teal-700",
  },
  indigo: {
    bg: "bg-indigo-500",
    soft: "bg-indigo-50",
    text: "text-indigo-600",
    ring: "ring-indigo-200",
    dot: "bg-indigo-400",
    chip: "bg-indigo-100 text-indigo-700",
  },
};

export const stages: Stage[] = [
  {
    id: "0-1",
    ageRange: "0–1개월",
    shortAge: "신생아",
    emoji: "👶",
    theme: "rose",
    summary:
      "대부분 누워서 지내요. 아직 스스로 몸을 가누지 못하고, 타고난 '원시 반사'로 세상에 반응합니다.",
    grossMotor: [
      "엎드리면 고개를 잠깐(몇 초) 옆으로 돌릴 수 있어요.",
      "팔다리는 구부린 채로 자주 꿈틀거려요.",
      "안아 올리면 머리가 뒤로 푹 젖혀져 꼭 받쳐줘야 해요.",
    ],
    fineMotor: [
      "손은 대부분 주먹을 꼭 쥐고 있어요.",
      "손바닥에 닿는 것을 반사적으로 꽉 잡아요.",
    ],
    reflexes: ["moro", "rooting", "sucking", "grasp", "stepping"],
    parentTip:
      "깨어 있을 때 하루 몇 분씩 '터미타임(엎드려 놀기)'을 시작해 보세요. 목과 어깨 힘을 기르는 첫걸음이에요.",
    watchOut: [
      "큰 소리에 전혀 놀라지 않아요.",
      "수유 시 빨기가 매우 약하거나 힘들어해요.",
      "몸이 지나치게 축 늘어지거나 반대로 늘 뻣뻣해요.",
    ],
  },
  {
    id: "2",
    ageRange: "2개월",
    shortAge: "2개월",
    emoji: "🙂",
    theme: "amber",
    summary:
      "고개를 드는 힘이 생기기 시작해요. 사람을 보고 방긋 웃는 '사회적 미소'도 나타납니다.",
    grossMotor: [
      "엎드린 자세에서 고개를 45도 정도 들어요.",
      "누워서 팔다리를 더 부드럽게 움직여요.",
    ],
    fineMotor: [
      "주먹을 쥐고 있는 시간이 조금씩 줄어요.",
      "눈앞의 움직이는 물체를 따라봐요.",
    ],
    reflexes: ["moro", "rooting", "grasp", "atnr"],
    parentTip:
      "아기 눈높이에서 천천히 얼굴을 움직이며 눈맞춤을 해주세요. 시각 추적과 목 근육 발달에 좋아요.",
    watchOut: [
      "엎드려도 고개를 전혀 들지 못해요.",
      "사람과 눈을 맞추거나 웃지 않아요.",
    ],
  },
  {
    id: "3-4",
    ageRange: "3–4개월",
    shortAge: "3–4개월",
    emoji: "🤲",
    theme: "emerald",
    summary:
      "목을 제법 가눠요. 손을 모아 입으로 가져가고, 엎드리면 팔로 상체를 받칩니다. 첫 뒤집기가 나오기도 해요.",
    grossMotor: [
      "엎드려서 팔꿈치로 상체를 받치고 고개를 90도까지 들어요.",
      "받쳐 안으면 머리를 안정적으로 가눠요.",
      "엎드림에서 바로 눕기로 뒤집기가 시작될 수 있어요.",
    ],
    fineMotor: [
      "두 손을 가슴 앞에서 모아요.",
      "눈앞의 장난감을 향해 손을 뻗기 시작해요.",
      "쥐여주면 잠시 흔들며 가지고 놀아요.",
    ],
    reflexes: ["grasp", "atnr"],
    parentTip:
      "딸랑이를 손이 닿을 듯한 거리에 두어 손 뻗기를 유도해 보세요. 눈과 손의 협응이 자라납니다.",
    watchOut: [
      "받쳐 안아도 머리를 가누지 못해요.",
      "양손을 모으거나 물건을 향해 손을 뻗지 않아요.",
    ],
  },
  {
    id: "5-6",
    ageRange: "5–6개월",
    shortAge: "5–6개월",
    emoji: "🔄",
    theme: "sky",
    summary:
      "양쪽으로 뒤집고, 받쳐주면 앉아요. 물건을 손바닥 전체로 잡아 입으로 탐색합니다.",
    grossMotor: [
      "양방향(엎드림↔바로 눕기)으로 뒤집어요.",
      "손으로 바닥을 짚고 잠깐 앉아 있거나, 받쳐주면 앉아요.",
      "겨드랑이를 받쳐 세우면 다리로 체중을 디뎌요.",
    ],
    fineMotor: [
      "물건을 손바닥 전체로 움켜쥐어요.",
      "한 손에서 다른 손으로 물건을 옮기기 시작해요.",
      "잡은 것은 무엇이든 입으로 가져가 탐색해요.",
    ],
    reflexes: [],
    parentTip:
      "안전한 바닥에서 자유롭게 구르고 뒤집게 해주세요. 다양한 질감의 장난감 탐색도 좋아요.",
    watchOut: [
      "어느 방향으로도 뒤집지 못해요.",
      "물건에 손을 뻗어 잡지 못해요.",
      "받쳐줘도 머리가 계속 흔들려요.",
    ],
  },
  {
    id: "7-8",
    ageRange: "7–8개월",
    shortAge: "7–8개월",
    emoji: "🧎",
    theme: "violet",
    summary:
      "혼자 앉을 수 있어요. 배를 밀며 이동하고, 잡고 일어서려는 시도가 시작됩니다.",
    grossMotor: [
      "손을 짚지 않고 혼자 안정적으로 앉아요.",
      "배밀이를 하거나 네발 기기 자세를 잡아요.",
      "가구를 잡고 무릎을 펴 일어서려 해요.",
    ],
    fineMotor: [
      "엄지와 다른 손가락으로 물건을 집기 시작해요(초기 집기).",
      "양손에 물건을 하나씩 쥐고 부딪쳐요.",
    ],
    reflexes: [],
    parentTip:
      "아기 앞쪽에 장난감을 두어 기어가도록 유도해 보세요. 안전한 가구 모서리는 미리 보호해 주세요.",
    watchOut: [
      "받쳐줘도 혼자 앉지 못해요.",
      "체중을 다리로 전혀 싣지 않으려 해요.",
      "한쪽 팔다리만 주로 쓰는 비대칭이 뚜렷해요.",
    ],
  },
  {
    id: "9-10",
    ageRange: "9–10개월",
    shortAge: "9–10개월",
    emoji: "🚼",
    theme: "teal",
    summary:
      "잘 기어 다니고, 가구를 붙잡고 옆으로 걷습니다(크루징). 작은 것을 정교하게 집어요.",
    grossMotor: [
      "네발로 능숙하게 기어 다녀요.",
      "가구를 잡고 스스로 일어서요.",
      "가구를 붙잡고 옆으로 발을 옮겨 걸어요(크루징).",
    ],
    fineMotor: [
      "엄지와 검지로 작은 것을 정확히 집어요(집게 잡기).",
      "물건을 일부러 떨어뜨리며 인과관계를 즐겨요.",
    ],
    reflexes: [],
    parentTip:
      "붙잡고 설 수 있는 안정적인 가구를 배치해 주세요. 바닥의 작은 물건은 삼킴 위험이 있으니 치워주세요.",
    watchOut: [
      "어떤 방식으로도 이동(기기·배밀이)하지 못해요.",
      "잡아줘도 서려 하지 않아요.",
      "집게 잡기로 작은 물건을 집지 못해요.",
    ],
  },
  {
    id: "11-12",
    ageRange: "11–12개월",
    shortAge: "돌 무렵",
    emoji: "🧍",
    theme: "fuchsia",
    summary:
      "혼자 잠깐 서고, 첫 걸음을 떼기도 해요. 돌 무렵 걷는 시점은 아기마다 차이가 큽니다.",
    grossMotor: [
      "아무것도 잡지 않고 혼자 잠깐 서 있어요.",
      "손을 잡아주면 걷고, 첫 독립 보행을 시도해요.",
      "앉았다 일어서기를 자유롭게 해요.",
    ],
    fineMotor: [
      "컵을 잡고 마시려 하거나 숟가락을 쥐어요.",
      "블록 2개를 쌓으려 시도하고, 책장을 넘겨요.",
    ],
    reflexes: ["babinski"],
    parentTip:
      "맨발로 안전한 바닥을 걷게 하면 균형 감각에 도움이 돼요. 걷는 시기는 9~16개월까지 정상 범위가 넓어요.",
    watchOut: [
      "잡아줘도 다리로 서지 못해요.",
      "이전에 하던 동작(앉기·기기)을 갑자기 못 하게 돼요.",
    ],
  },
  {
    id: "13-18",
    ageRange: "13–18개월",
    shortAge: "13–18개월",
    emoji: "🚶",
    theme: "indigo",
    summary:
      "혼자 걷는 것이 안정돼요. 기어서 계단을 오르고, 끌거나 미는 장난감을 즐깁니다.",
    grossMotor: [
      "혼자 안정적으로 걷고, 멈췄다 다시 걸어요.",
      "기어서 계단을 오르고, 쪼그려 앉았다 일어서요.",
      "끌거나 미는 장난감을 가지고 걸어요.",
    ],
    fineMotor: [
      "블록을 2~4개 쌓아요.",
      "크레용으로 끄적이고, 숟가락으로 떠먹으려 해요.",
    ],
    reflexes: [],
    parentTip:
      "넘어져도 괜찮은 넓은 공간에서 많이 걷게 해주세요. 계단은 반드시 어른이 곁에서 지켜봐 주세요.",
    watchOut: [
      "18개월이 되어도 혼자 걷지 못해요.",
      "발끝(까치발)으로만 걸어요.",
    ],
  },
  {
    id: "19-24",
    ageRange: "19–24개월",
    shortAge: "두 돌 무렵",
    emoji: "🏃",
    theme: "rose",
    summary:
      "뛰기 시작하고 공을 차요. 손을 잡고 계단을 오르내리며 활동 범위가 부쩍 넓어집니다.",
    grossMotor: [
      "달리기 시작하고, 잘 넘어지지 않아요.",
      "공을 발로 차고, 제자리에서 살짝 뛰어요.",
      "난간이나 손을 잡고 계단을 오르내려요.",
    ],
    fineMotor: [
      "블록을 6개 이상 쌓아요.",
      "수직선·원 같은 단순한 선을 따라 그어요.",
    ],
    reflexes: [],
    parentTip:
      "공놀이, 미끄럼틀 등 대근육을 쓰는 바깥 놀이를 늘려주세요. 균형과 협응이 함께 자라납니다.",
    watchOut: [
      "달리지 못하거나 자주 넘어져요.",
      "두 돌이 지나도 계단을 전혀 오르지 못해요.",
    ],
  },
];

export interface Reflex {
  id: string;
  name: string;
  englishName: string;
  emoji: string;
  appears: string;
  disappears: string;
  whatHappens: string;
  howToSee: string;
  whyItMatters: string;
}

export const reflexes: Reflex[] = [
  {
    id: "moro",
    name: "모로 반사",
    englishName: "Moro (놀람) Reflex",
    emoji: "😲",
    appears: "출생 시",
    disappears: "보통 4–6개월에 사라짐",
    whatHappens:
      "갑작스러운 소리나 머리가 뒤로 젖혀지는 느낌에 양팔을 활짝 벌렸다가 다시 끌어안듯 오므리는 반응이에요.",
    howToSee:
      "큰 소리가 나거나 안고 있다 살짝 내려놓을 때, 팔을 쫙 폈다가 움츠리는 모습을 볼 수 있어요.",
    whyItMatters:
      "양쪽이 대칭으로 나타나는지가 중요해요. 한쪽만 약하면 신경·근육 이상의 단서가 될 수 있어, 의료진이 꼭 확인하는 반사입니다.",
  },
  {
    id: "rooting",
    name: "찾기(포유) 반사",
    englishName: "Rooting Reflex",
    emoji: "🍼",
    appears: "출생 시",
    disappears: "보통 4개월경 사라짐",
    whatHappens:
      "뺨이나 입가를 건드리면 그쪽으로 고개를 돌리고 입을 벌려 젖을 찾는 반응이에요.",
    howToSee:
      "손가락으로 아기 볼을 살짝 쓰다듬으면 그 방향으로 고개를 돌리며 입을 오물거려요.",
    whyItMatters:
      "수유를 가능하게 하는 생존 반사예요. 잘 나타나면 빨기·삼키기 협응이 준비되고 있다는 신호입니다.",
  },
  {
    id: "sucking",
    name: "빨기 반사",
    englishName: "Sucking Reflex",
    emoji: "👄",
    appears: "출생 전(임신 32주경)부터",
    disappears: "점차 의식적인 빨기로 전환",
    whatHappens:
      "입천장에 무언가 닿으면 자동으로 리듬감 있게 빠는 반응이에요.",
    howToSee:
      "젖꼭지나 깨끗한 손가락이 입에 들어오면 규칙적으로 빨기 시작해요.",
    whyItMatters:
      "찾기 반사와 짝을 이뤄 영양 섭취를 책임지는 핵심 반사예요. 약하면 수유량과 체중 증가를 함께 살펴야 합니다.",
  },
  {
    id: "grasp",
    name: "쥐기(파악) 반사",
    englishName: "Palmar Grasp Reflex",
    emoji: "✊",
    appears: "출생 시",
    disappears: "보통 5–6개월에 사라짐",
    whatHappens:
      "손바닥에 무언가 닿으면 손가락을 오므려 꽉 쥐는 반응이에요.",
    howToSee:
      "아기 손바닥에 손가락을 갖다 대면 깜짝 놀랄 만큼 세게 움켜쥐어요.",
    whyItMatters:
      "이 반사가 사라져야 '내가 원할 때 잡고 놓는' 의식적인 손 사용(소근육)이 발달해요. 자연스러운 발달의 디딤돌입니다.",
  },
  {
    id: "stepping",
    name: "걷기(보행) 반사",
    englishName: "Stepping Reflex",
    emoji: "👣",
    appears: "출생 시",
    disappears: "보통 2개월경 사라짐",
    whatHappens:
      "겨드랑이를 받쳐 발바닥을 바닥에 닿게 하면 한 발씩 내딛듯 다리를 움직이는 반응이에요.",
    howToSee:
      "아기를 세워 발을 평평한 곳에 살짝 대면 걷는 것처럼 다리를 번갈아 움직여요.",
    whyItMatters:
      "실제 걷기와는 다른 원시 반사예요. 사라졌다가 돌 무렵 '진짜 걷기'로 새로 발달하니 걱정하지 않아도 됩니다.",
  },
  {
    id: "atnr",
    name: "비대칭 긴장성 경반사",
    englishName: "ATNR · 펜싱 반사",
    emoji: "🤺",
    appears: "출생 시",
    disappears: "보통 4–6개월에 사라짐",
    whatHappens:
      "고개를 한쪽으로 돌리면 그쪽 팔다리는 펴지고 반대쪽은 구부러져, 마치 펜싱 자세 같은 모습이 돼요.",
    howToSee:
      "누운 아기의 고개가 한쪽으로 향할 때, 보는 쪽 팔이 쭉 뻗는 자세를 관찰할 수 있어요.",
    whyItMatters:
      "눈과 손의 협응이 시작되도록 돕는 반사예요. 너무 오래 남으면 뒤집기·기기 같은 다음 발달을 방해할 수 있어 경과를 봅니다.",
  },
  {
    id: "babinski",
    name: "바빈스키 반사",
    englishName: "Babinski Reflex",
    emoji: "🦶",
    appears: "출생 시",
    disappears: "보통 12–24개월에 사라짐",
    whatHappens:
      "발바닥 바깥쪽을 발꿈치에서 발가락 쪽으로 긁으면 엄지발가락이 위로 젖혀지고 발가락이 부채처럼 펴지는 반응이에요.",
    howToSee:
      "발바닥을 부드럽게 한 번 긁으면 엄지발가락이 위로 올라가요.",
    whyItMatters:
      "영유아에게는 정상 반응이에요. 다만 두 돌 이후에도 계속 나타나면 신경계 평가가 필요할 수 있어, 시간에 따라 사라지는지가 중요합니다.",
  },
];

export const reflexById = (id: string) => reflexes.find((r) => r.id === id);
