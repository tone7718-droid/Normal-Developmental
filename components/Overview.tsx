const phases = [
  {
    emoji: "👶",
    title: "머리부터",
    desc: "발달은 위에서 아래로. 먼저 목을 가누고 머리를 듭니다.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    emoji: "🔄",
    title: "몸통으로",
    desc: "뒤집고 앉으며 몸통의 중심을 잡아갑니다.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    emoji: "🧎",
    title: "팔다리로",
    desc: "기고 잡고 서며 팔과 다리에 힘이 실립니다.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    emoji: "🏃",
    title: "온몸으로",
    desc: "걷고 뛰며 세상을 온몸으로 탐험합니다.",
    color: "bg-sky-50 text-sky-600",
  },
];

export default function Overview() {
  return (
    <section id="intro" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            발달에는 순서가 있어요
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            아기의 운동 발달은 마구잡이가 아니라 일정한 방향으로 진행돼요.
            <strong className="text-gray-800"> 머리에서 발끝으로</strong>,
            <strong className="text-gray-800"> 몸의 중심에서 바깥으로</strong>{" "}
            힘과 조절 능력이 차례로 자라납니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => (
            <div key={i} className="relative">
              <div className="h-full rounded-3xl bg-cream p-6 text-center ring-1 ring-gray-100">
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${p.color}`}
                >
                  {p.emoji}
                </div>
                <h3 className="mt-4 font-extrabold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {p.desc}
                </p>
              </div>
              {i < phases.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-gray-300 lg:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
