import { reflexes } from "@/lib/data";

export default function ReflexSection() {
  return (
    <section
      id="reflexes"
      className="scroll-mt-20 bg-gradient-to-b from-white to-rose-50/40 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700">
            ✨ 타고난 능력
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            아기의 원시 반사
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            원시 반사는 아기가 태어날 때부터 가진 자동 반응이에요. 생존을 돕고,
            때가 되면 자연스럽게 사라지면서 더 정교한 움직임에 자리를 내어줍니다.
            <strong className="text-gray-800">
              {" "}
              제때 나타나고 제때 사라지는지
            </strong>
            가 건강한 발달의 신호예요.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reflexes.map((r) => (
            <article
              key={r.id}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-2xl">
                  {r.emoji}
                </span>
                <div>
                  <h3 className="font-extrabold text-gray-900">{r.name}</h3>
                  <p className="text-xs text-gray-400">{r.englishName}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  나타남 · {r.appears}
                </span>
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
                  사라짐 · {r.disappears}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                {r.whatHappens}
              </p>

              <div className="mt-4 space-y-3 border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs font-bold text-gray-500">
                    👀 이렇게 보여요
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{r.howToSee}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500">
                    🔎 왜 중요할까요
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{r.whyItMatters}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
