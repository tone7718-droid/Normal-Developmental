export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-100 blur-3xl opacity-60" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-100">
          🍼 신생아부터 두 돌까지
        </span>

        <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          우리 아기,
          <br />
          <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-sky-500 bg-clip-text text-transparent">
            지금 어디쯤 자라고 있을까요?
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-gray-600 sm:text-lg">
          뒤집고, 앉고, 기고, 마침내 걷기까지.
          <br className="hidden sm:block" />
          개월별 아기의 정상 운동 발달 과정과 타고난 반사를
          <br className="hidden sm:block" />
          부모의 눈높이에서 쉽게 풀어드려요.
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#timeline"
            className="w-full rounded-full bg-gray-900 px-7 py-3.5 text-center font-semibold text-white shadow-lg transition hover:bg-gray-700 sm:w-auto"
          >
            개월별 발달 보기
          </a>
          <a
            href="#reflexes"
            className="w-full rounded-full bg-white px-7 py-3.5 text-center font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50 sm:w-auto"
          >
            원시 반사 알아보기
          </a>
        </div>

        <p className="mt-8 animate-fade-up text-xs text-gray-400">
          아기마다 발달 속도는 다릅니다. 이 가이드는 평균적인 흐름을 보여주는
          교육용 정보예요.
        </p>
      </div>
    </section>
  );
}
