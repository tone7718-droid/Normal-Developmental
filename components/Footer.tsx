export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-amber-50 p-6 text-center">
          <p className="text-sm font-semibold text-amber-800">
            ⚠️ 꼭 기억해 주세요
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-amber-700">
            이 웹사이트는 아기의 정상 운동 발달을 부모가 쉽게 이해하도록 돕는
            교육용 자료입니다. 의학적 진단·치료를 대신하지 않으며, 아기의 발달이
            걱정될 때는 반드시 소아청소년과 전문의와 상담하시기 바랍니다.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <span className="text-2xl">🐣</span>
            아기 운동 발달 가이드
          </div>
          <p className="text-xs text-gray-400">
            평균적인 발달 흐름을 정리한 참고 자료입니다. 모든 아기는 저마다의
            속도로 자랍니다. 🌱
          </p>
        </div>
      </div>
    </footer>
  );
}
